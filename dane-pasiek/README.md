# Wspólne dane pasiek

- `przykladowe.json` — 14 przykładowych pasiek przeniesionych z `script.js`. Nadal są oznaczone jako przykłady.
- `pasieki.json` — rzeczywiste wpisy, zdjęcia, wersje zmian i skróty kluczy właścicieli. Plik aktualizuje serwer. Nie udostępniaj go bezpośrednio przez hosting statyczny.

Uruchom `URUCHOM.cmd` (wymagany Node.js 20 lub nowszy). Mapa i katalog odczytują wpisy ze wspólnego serwera oraz odświeżają je co 15 sekund i po powrocie do karty. Pozostałe urządzenia w tej samej sieci mogą wejść na `http://ADRES-IP-KOMPUTERA:8765`, jeśli zapora pozwala na połączenie.

Wpisy ze starej pamięci przeglądarki są automatycznie przesyłane przy wejściu na stronę pod tym samym adresem, pod którym zostały zapisane. Po udanym przeniesieniu ich lokalna kopia jest usuwana. Dane z innej przeglądarki, innego adresu lub strony otwieranej przez `file://` nie są dostępne automatycznie. Przed zmianą adresu wyeksportuj stare wpisy.

Do publikacji internetowej uruchom `node serwer.cjs` na hostingu obsługującym Node.js, za HTTPS, z trwałym dyskiem. Wszyscy muszą korzystać z tego samego serwera. Sam hosting plików HTML nie obsłuży zapisu. `PORT` ustawia port, `HOST` adres nasłuchu (domyślnie `0.0.0.0`), `NO_OPEN=1` wyłącza otwieranie przeglądarki. Opcjonalny `APIARY_DATA_DIR` wskazuje inny trwały folder zapisywanych pasiek; przykłady pozostają w folderze strony.

Uruchamiaj jedną instancję serwera na danym folderze danych. Wykonuj kopie `pasieki.json`; podczas kolejnych wdrożeń zachowaj ten plik. Nie zastępuj istniejących danych pustym plikiem z projektu.

Nie ma kont użytkowników. Losowy klucz edycji zostaje w przeglądarce właściciela, a serwer przechowuje tylko jego skrót. Inni odwiedzający mogą czytać wpis, lecz nie mogą go zmieniać. Usunięcie danych przeglądarki powoduje utratę dostępu do edycji. Eksport JSON jest kopią wpisów, nie kopią klucza. Administrator może odzyskać dostęp wyłącznie po niezależnym potwierdzeniu właściciela. Publiczne dodawanie wpisów wymaga nadzoru administratora.

Sprawdzenie zapisu i konfliktów: `node --test test-pasieki.cjs`. Test używa oddzielnego folderu tymczasowego i nie zmienia danych strony.
