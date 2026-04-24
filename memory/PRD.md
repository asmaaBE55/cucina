# PRD — Ristorante La Cucina (Pizza & Pasta, Malvaglia CH)

## Original Problem Statement
Sito web moderno, elegante e dinamico per "Ristorante La Cucina - Pizza & Pasta".
Palette: rosso, crema, verde oliva. Tipografia raffinata italiana. Animazioni smooth,
responsive, SEO-friendly. Sezioni: Hero, Chi Siamo, Menu, Prenotazione, Recensioni,
Contatti, Footer. Floating WhatsApp/Call. Indirizzo: Zona Chiesa, Malvaglia. Tel:
+41 91 870 10 10. Rating 4.7⭐ (24 recensioni). Utente ha chiesto una **DEMO**
(salvataggio Google Sheets menzionato ma non implementato — salvato su MongoDB,
pronto per essere esteso).

## Architecture
- **Frontend**: React 19 + React Router + Tailwind + Lucide icons + sonner
- **Backend**: FastAPI + Motor (MongoDB async)
- **DB**: MongoDB (`reservations` collection, no `_id` leakage)
- **Fonts**: Cormorant Garamond (heading) + Manrope (body), Google Fonts
- **Palette**: Cream `#FDFBF7`, Red `#8A2E2E`, Olive `#4A5D23`, Gold accent `#E6B65A`

## User Personas
- Cliente locale Ticino che vuole prenotare un tavolo
- Turista che scopre il ristorante online
- Utente mobile che vuole chiamare/WhatsApp rapidamente

## Core Requirements (static)
- Design elegante, palette calda italiana
- Modulo prenotazione visibile e funzionante
- Menu strutturato (Pizza, Pasta, Specialità)
- Mappa + orari + telefono cliccabile
- Floating WhatsApp + chiamata rapida
- Animazioni scroll fade-up + hover
- 100% responsive

## What's Been Implemented (2025-12)
- Hero full-screen con immagine gourmet + slow zoom + CTA
- Navbar glassmorphism con scroll state + mobile menu
- Sezione "Chi Siamo" con marquee outline-text di sfondo + stats
- Menu con 3 tab animati (Pizza / Pasta / Specialità) in stile editoriale
- Form prenotazione (nome, persone, data, griglia orari, phone/email, note)
  - Validazione lato client + server
  - Schermata di successo animata "Grazie, {name}!"
  - `POST /api/reservations` + `GET /api/reservations` (MongoDB)
- Slider recensioni animato (auto-rotate 7s + prev/next/dots)
- Sezione Contatti con Google Maps embed + lista orari (Martedì in rosso)
- Footer con link rapidi, social, riassunto orari
- Floating toggle con WhatsApp + Call
- SEO meta tags + Open Graph
- Testing agent iteration 1: **100% backend + 100% frontend PASS**

## Prioritized Backlog
### P1 (valore commerciale)
- Integrazione Google Sheets reale per prenotazioni (service account JSON)
- Notifica email al ristorante su nuova prenotazione (Resend/SendGrid)
- Dashboard admin protetta per vedere prenotazioni

### P2 (nice-to-have)
- Multilingua IT/DE/EN (Svizzera)
- Galleria foto + lightbox
- Pagina menu completo/PDF scaricabile
- Schema.org Restaurant + LocalBusiness JSON-LD per SEO locale
- Conferma email automatica al cliente
- Gift card / buoni regalo

### P3
- Blog/news sezione stagionale
- Integrazione TheFork/Google Reserve
- Ordini d'asporto online

## Tech Notes
- All backend routes prefixed `/api`
- Reservations stored with ISO datetime string
- MongoDB projection `{_id: 0}` always applied
- Data-testid su tutti gli elementi interattivi

## Next Action Items
- Connettere Google Sheets reale (richiede service account)
- Aggiungere notifica email al ristorante
- Dashboard admin per vedere/esportare prenotazioni
