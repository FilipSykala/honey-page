'use strict';

// Liczymy dane pasiek, a nie aktualnie widoczne znaczniki mapy.
function monitorujLicznikPasiek(pobierzPasieki) {
  function aktualizujLiczniki() {
    const pasieki = pobierzPasieki();
    document.querySelectorAll('.licznikPasiek[data-produkt]').forEach(licznikPasiek => {
      const produkt = licznikPasiek.dataset.produkt;
      // Jedna pasieka liczy się raz, nawet gdy ma kilka ofert tego produktu.
      const liczbaPasiek = new Set(pasieki
        .filter(pasieka => pasieka.products.some(oferta => oferta.type === produkt))
        .map(pasieka => pasieka.id)).size;
      licznikPasiek.textContent = `Pasieki: ${liczbaPasiek}`;
      licznikPasiek.title = 'Liczba pasiek oferujących ten produkt (w tym wpisy przykładowe)';
    });
  }

  document.addEventListener('apiaries-updated', aktualizujLiczniki);
  aktualizujLiczniki();
  // Odświeżamy też liczniki po utworzeniu lub przefiltrowaniu kart katalogu.
  return aktualizujLiczniki;
}
