# Miodna Mapa — str pszczolka v2

## Uruchomienie

1. Otwórz **URUCHOM.cmd**. Wymaga Node.js, który jest już dostępny na komputerze użytym do przygotowania strony. Nie instaluje żadnych pakietów.
2. Strona otworzy się w przeglądarce pod adresem **http://127.0.0.1:8765**.
3. Pozostaw okno uruchomienia otwarte podczas korzystania ze strony. Zakończ przez Ctrl+C lub zamknięcie okna.

Jeśli port 8765 jest zajęty, zamknij wcześniejszy podgląd i uruchom stronę ponownie.

Możesz też otworzyć **index.html** bezpośrednio. Katalog, poradnik, galerie, artykuły i wyszukiwanie działają bez instalacji. Do dodawania pasiek używaj sposobu powyżej: pamięć dla plików otwieranych bez serwera różni się między przeglądarkami i podstronami. Geolokalizacja również zależy od uprawnień przeglądarki.

## Co jest w folderze

- **index.html** — strona główna, katalog 15 produktów, vademecum i poradnik.
- **mapa.html** — mapa, lista i filtry 14 przykładów oraz własnych wpisów.
- **blog.html** — 10 krótkich artykułów, kategorie i wyszukiwanie.
- **logowanie.html** — panel lokalnych pasiek: dodawanie, zdjęcie, edycja, usuwanie, eksport.
- **galeria.html** — galeria dostarczonych ilustracji.
- **informacje.html** — zasady działania, prywatność i ograniczenia danych.
- **style.css**, **script.js** — uporządkowane style i logika bez frameworków.
- **assets/** — zoptymalizowane ilustracje z prototypu i ikona strony.
- **vendor/** — lokalna kopia Leaflet 1.9.4, jego ikony i licencja.
- **mapa2.html**, **mapa-google-pszola.html** — zachowane przekierowania do mapy.
- **RAPORT.md** — analiza prototypu, zmiany i rzeczywiste wyniki kontroli.
- **kontrola/** — zapis wyników testów wykonanych podczas przygotowania.
- **serwer.cjs**, **URUCHOM.cmd** — opcjonalny lokalny podgląd; bez bazy danych i kont.

## Zapisywanie pasiek

Własne wpisy są przechowywane wyłącznie w pamięci tej przeglądarki, dla tego adresu strony. Nie są publikowane ani wysyłane na serwer. Używaj tej samej przeglądarki i adresu. Czyszczenie danych witryny usuwa lokalne wpisy.

Przycisk **Pobierz kopię wpisów** zapisuje plik JSON. To kopia danych do zachowania lub późniejszego przeniesienia; ta wersja nie ma automatycznego importu.

Wpisy z prototypu są oznaczone jako przykłady. Ich ofert, ocen, danych i certyfikatów nie należy traktować jako potwierdzonych. Nowe wpisy nie otrzymują wymyślonych ocen, cen ani statystyk.

## Dostęp do internetu

Internet jest potrzebny do pobierania podkładu mapy OpenStreetMap i otwierania zewnętrznych źródeł lub tras. Przy niedostępnej mapie lista pasiek pozostaje czynna. Kod Leaflet oraz wszystkie ilustracje są dołączone do folderu.

## Edycja

Treści produktów (`PRODUCTS`), artykuły (`ARTICLES`) oraz przykładowe pasieki (`BASE_APIARIES`) znajdują się na początku **script.js**. Kolory, typografia i odstępy są zdefiniowane na początku **style.css**.

Przed publikacją w internecie trzeba przygotować zweryfikowane dane i potwierdzić prawa do grafik dostarczonych z prototypem. Konta, wspólna baza wpisów i moderacja wymagają osobnego zaplecza serwerowego — nie są pozorowane w tej wersji.
