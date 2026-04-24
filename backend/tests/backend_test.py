"""Backend tests for Ristorante La Cucina API.

Covers:
- GET /api/ root welcome
- POST /api/reservations creation + validation
- GET /api/reservations listing without _id leakage
"""

import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://pizzapasta-malvaglia.preview.emergentagent.com").rstrip("/")


@pytest.fixture
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Root ----------
class TestRoot:
    def test_root_welcome(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "Ristorante" in data["message"] or "La Cucina" in data["message"]


# ---------- Reservations ----------
class TestReservations:
    def test_create_reservation_with_phone(self, api_client):
        payload = {
            "name": "TEST_Mario Rossi",
            "people": 4,
            "date": "2026-02-15",
            "time": "19:30",
            "phone": "+41791234567",
            "notes": "TEST_notes"
        }
        r = api_client.post(f"{BASE_URL}/api/reservations", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["people"] == 4
        assert data["date"] == payload["date"]
        assert data["time"] == payload["time"]
        assert data["phone"] == payload["phone"]
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "_id" not in data

    def test_create_reservation_with_email_only(self, api_client):
        payload = {
            "name": "TEST_Giulia",
            "people": 2,
            "date": "2026-02-20",
            "time": "20:00",
            "email": "TEST_giulia@example.ch",
        }
        r = api_client.post(f"{BASE_URL}/api/reservations", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["email"] == payload["email"]
        assert data["phone"] is None

    def test_reject_without_phone_and_email(self, api_client):
        payload = {
            "name": "TEST_NoContact",
            "people": 2,
            "date": "2026-02-20",
            "time": "20:00",
        }
        r = api_client.post(f"{BASE_URL}/api/reservations", json=payload)
        assert r.status_code == 400
        data = r.json()
        assert "detail" in data
        assert "telefono" in data["detail"].lower() or "email" in data["detail"].lower()

    def test_reject_invalid_people_low(self, api_client):
        payload = {
            "name": "TEST_ZeroPeople",
            "people": 0,
            "date": "2026-02-20",
            "time": "20:00",
            "phone": "+41000",
        }
        r = api_client.post(f"{BASE_URL}/api/reservations", json=payload)
        assert r.status_code == 400
        assert "persone" in r.json()["detail"].lower() or "non valido" in r.json()["detail"].lower()

    def test_reject_invalid_people_high(self, api_client):
        payload = {
            "name": "TEST_TooMany",
            "people": 51,
            "date": "2026-02-20",
            "time": "20:00",
            "phone": "+41000",
        }
        r = api_client.post(f"{BASE_URL}/api/reservations", json=payload)
        assert r.status_code == 400

    def test_list_reservations_no_mongo_id(self, api_client):
        # create one first to ensure we have data
        api_client.post(f"{BASE_URL}/api/reservations", json={
            "name": "TEST_Listing",
            "people": 3,
            "date": "2026-03-01",
            "time": "19:00",
            "phone": "+41790000000",
        })
        r = api_client.get(f"{BASE_URL}/api/reservations")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        assert len(items) >= 1
        for it in items:
            assert "_id" not in it
            assert "id" in it
            assert "name" in it
            assert "people" in it
        # confirm our TEST_Listing exists
        names = [it["name"] for it in items]
        assert "TEST_Listing" in names
