'use strict';

function stworzTestowaPasieke(products) {
  const losuj = lista => lista[Math.floor(Math.random() * lista.length)];
  const miejsca = [
    { city: 'Kraków', region: 'malopolskie', lat: 50.0614, lng: 19.9366 },
    { city: 'Poznań', region: 'wielkopolskie', lat: 52.4064, lng: 16.9252 },
    { city: 'Lublin', region: 'lubelskie', lat: 51.2465, lng: 22.5684 },
    { city: 'Olsztyn', region: 'warminsko-mazurskie', lat: 53.7784, lng: 20.4801 },
    { city: 'Wrocław', region: 'dolnoslaskie', lat: 51.1079, lng: 17.0385 },
    { city: 'Toruń', region: 'kujawsko-pomorskie', lat: 53.0138, lng: 18.5984 }
  ];
  const miejsce = losuj(miejsca);
  const id = 'local-' + (crypto.randomUUID ? crypto.randomUUID() : Date.now() + '-' + Math.random().toString(36).slice(2));
  const pula = [...products];
  const oferta = [];
  const liczbaProduktow = Math.min(pula.length, 1 + Math.floor(Math.random() * 4));
  for (let i = 0; i < liczbaProduktow; i++) {
    const [produkt] = pula.splice(Math.floor(Math.random() * pula.length), 1);
    oferta.push({ type: produkt.id, name: produkt.name });
  }
  return {
    id,
    name: 'TEST — Pasieka ' + losuj(['Złoty Ul', 'Leśna Polana', 'Miodowa Łąka', 'Słoneczny Zakątek']) + ' ' + id.slice(-8),
    beekeeper: 'Test: ' + losuj(['Anna', 'Jan', 'Ewa', 'Piotr']) + ' ' + losuj(['Kowalski', 'Nowak', 'Zieliński']),
    ...miejsce,
    address: 'Adres testowy: ul. ' + losuj(['Miodowa', 'Polna', 'Leśna']) + ' ' + (1 + Math.floor(Math.random() * 100)),
    phone: '000 000 000',
    email: 'test-' + id.slice(-8) + '@example.com',
    wni: '',
    description: 'TEST — fikcyjna pasieka wygenerowana automatycznie w miejscowości ' + miejsce.city + '. Dane służą wyłącznie do testowania strony.',
    shipping: Math.random() < 0.5,
    pickup: true,
    bio: Math.random() < 0.5,
    workshops: Math.random() < 0.5,
    wandering: Math.random() < 0.5,
    photo: losuj(['assets/pasieka.webp', 'assets/krajobraz.webp']),
    demo: false,
    rating: null,
    reviews: [],
    products: oferta
  };
}

function initTestowePasieki(products, zapiszPasieke) {
  const przycisk = document.querySelector('#create-test-apiary');
  const status = document.querySelector('#test-apiary-status');
  let zapisywanie = false;
  przycisk.addEventListener('click', async () => {
    if (zapisywanie) return;
    zapisywanie = true;
    przycisk.disabled = true;
    status.textContent = 'Tworzenie testowej pasieki…';
    try {
      const pasieka = stworzTestowaPasieke(products);
      await zapiszPasieke(pasieka, false);
      status.textContent = 'Utworzono: ' + pasieka.name + ' (' + pasieka.city + '). Znajdziesz ją w „Moje pasieki” i na mapie.';
    } catch (error) {
      status.textContent = 'Nie udało się utworzyć testowej pasieki. ' + error.message;
    } finally {
      zapisywanie = false;
      przycisk.disabled = false;
    }
  });
}
