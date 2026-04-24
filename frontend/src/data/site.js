export const SITE = {
  name: "Ristorante La Cucina",
  tagline: "Pizza & Pasta",
  address: "Zona Chiesa, 6713 Malvaglia, Svizzera",
  phone: "+41 91 870 10 10",
  phoneHref: "tel:+41918701010",
  whatsappHref: "https://wa.me/41918701010",
  website: "www.ristorantestazionemalvaglia.ch",
  rating: 4.7,
  reviewsCount: 24,
  hours: [
    { day: "Lunedì", value: "07:00 – 24:00" },
    { day: "Martedì", value: "Chiuso", closed: true },
    { day: "Mercoledì", value: "07:00 – 24:00" },
    { day: "Giovedì", value: "07:00 – 24:00" },
    { day: "Venerdì", value: "07:00 – 24:00" },
    { day: "Sabato", value: "07:00 – 24:00" },
    { day: "Domenica", value: "07:00 – 23:30" },
  ],
  images: {
    hero: "https://images.unsplash.com/photo-1677175201981-cb9bf0ccf851?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwyfHxnb3VybWV0JTIwbmVhcG9saXRhbiUyMHBpenphJTIwZGFyayUyMG1vb2R5fGVufDB8fHx8MTc3NzA1MDk1N3ww&ixlib=rb-4.1.0&q=85",
    about: "https://images.pexels.com/photos/111134/olive-oil-tomatoes-basil-eat-111134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    interior: "https://images.pexels.com/photos/19965093/pexels-photo-19965093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    pasta: "https://images.unsplash.com/photo-1771508558268-cd2785b12c97?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwyfHxnb3VybWV0JTIwYXV0aGVudGljJTIwaXRhbGlhbiUyMHBhc3RhfGVufDB8fHx8MTc3NzA1MDkzMnww&ixlib=rb-4.1.0&q=85",
  },
};

export const MENU = {
  pizza: [
    { name: "Margherita D.O.C.", desc: "San Marzano, mozzarella di bufala campana, basilico, olio EVO.", price: "18" },
    { name: "Diavola", desc: "Pomodoro, mozzarella fiordilatte, salame piccante calabrese.", price: "21" },
    { name: "Tartufo & Porcini", desc: "Crema di porcini, fiordilatte, scaglie di tartufo nero, prezzemolo.", price: "28" },
    { name: "Quattro Formaggi", desc: "Gorgonzola DOP, taleggio, fontina, parmigiano 24 mesi.", price: "23" },
    { name: "Prosciutto & Rucola", desc: "Fiordilatte, prosciutto crudo di Parma 18 mesi, rucola, grana.", price: "24" },
    { name: "Capricciosa", desc: "Pomodoro, mozzarella, prosciutto cotto, carciofi, funghi, olive.", price: "22" },
  ],
  pasta: [
    { name: "Tagliatelle al Ragù Bolognese", desc: "Sfoglia fresca tirata a mano, ragù di manzo cotto 6 ore.", price: "24" },
    { name: "Spaghetti Carbonara", desc: "Guanciale croccante, tuorlo d'uovo, pecorino romano, pepe nero.", price: "22" },
    { name: "Gnocchi al Pesto di Liguria", desc: "Gnocchi di patate, pesto al mortaio, pinoli tostati.", price: "21" },
    { name: "Linguine alle Vongole", desc: "Vongole veraci, aglio, prezzemolo, vino bianco.", price: "26" },
    { name: "Pappardelle al Cinghiale", desc: "Ragù di cinghiale della Valle, rosmarino, pecorino.", price: "25" },
    { name: "Ravioli di Ricotta & Spinaci", desc: "Fatti in casa, burro nocciola e salvia fresca.", price: "23" },
  ],
  specialita: [
    { name: "Ossobuco alla Milanese", desc: "Ossobuco di vitello, risotto giallo allo zafferano, gremolata.", price: "34" },
    { name: "Tagliata di Manzo", desc: "Scottona svizzera, rucola, scaglie di grana, aceto balsamico.", price: "36" },
    { name: "Branzino al Sale", desc: "Cotto in crosta di sale, servito al tavolo, limone e olio EVO.", price: "38" },
    { name: "Tiramisù della Casa", desc: "Ricetta di famiglia, mascarpone, savoiardi al caffè.", price: "11" },
  ],
};

export const TESTIMONIALS = [
  {
    name: "Marco B.",
    city: "Bellinzona",
    rating: 5,
    text: "La pizza migliore del Ticino. Impasto leggero, ingredienti freschissimi e un'accoglienza davvero calorosa. Torneremo presto.",
  },
  {
    name: "Sofia R.",
    city: "Biasca",
    rating: 5,
    text: "Atmosfera autentica e piatti che raccontano l'Italia. Le tagliatelle al ragù sono le migliori che abbia mai assaggiato.",
  },
  {
    name: "Luca M.",
    city: "Lugano",
    rating: 5,
    text: "Servizio impeccabile, carta dei vini eccellente e una cucina che non delude mai. Consigliatissimo!",
  },
  {
    name: "Anna F.",
    city: "Acquarossa",
    rating: 4,
    text: "Posto accogliente, pizza eccellente e personale molto gentile. Perfetto per una cena in famiglia.",
  },
  {
    name: "Giulia P.",
    city: "Malvaglia",
    rating: 5,
    text: "Una vera gemma della Valle di Blenio. Il tiramisù della casa è una poesia. Grazie per l'ospitalità.",
  },
];
