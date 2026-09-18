# Miodna Mapa — analiza i wykonanie wersji 2

Data: 10 września 2026 r.

## 1. Zrozumienie prototypu

Przeanalizowano wszystkie 11 wskazanych plików oraz powiązane foldery `css`, `js` i `zdjecia`. Pliki główne nie były samodzielnym projektem: właściwa aplikacja korzystała z modułów w `js`, danych pasiek, produktów i artykułów oraz kilku warstw stylów. Oryginał pozostawiono bez zmian.

Strona łączy dwa zadania: poznawanie produktów pszczelich i znajdowanie lokalnego pszczelarza. Ścieżka użytkownika prowadzi od odmiany produktu do mapy, profilu, oferty i kontaktu. Druga ścieżka pozwala pszczelarzowi przygotować własną wizytówkę.

Strona główna zawierała wyszukiwarkę katalogu, kategorie produktów, vademecum, poradnik jakości i zajawki bloga. Mapa używała Leaflet i OpenStreetMap, filtrów województwa, produktów i cech pasieki, GPS, galerii oraz formularza lokalnego zapisu. Blog otwierał teksty w oknie modalnym. Logowanie było wyraźnie oznaczoną makietą bez serwera. `galeria.html`, `mapa2.html` i `mapa-google-pszola.html` były przekierowaniami.

Założenia: wynik jest lokalną stroną, bez wdrożenia do internetu i bez zaplecza kont. Prawdziwość przykładowych danych nie została potwierdzona. Dostarczone ilustracje służą oprawie wizualnej, nie dokumentują konkretnych pasiek.

## 2. Elementy warte zachowania

- Wyraźny temat: lokalne pasieki, odmiany miodu i kontakt bez pośredników.
- Mapa Polski, lokalizacja GPS oraz łączenie różnych filtrów.
- Katalog 15 produktów, opisy smaków i zastosowań.
- Profile z ofertą, galerią oraz informacjami o odbiorze.
- Formularz wizytówki z podglądem i własnym zdjęciem.
- Lokalny zapis, który umożliwia demonstrację bez konta i bazy danych.
- Blog, tematy przyrodnicze i pszczelarskie oraz dostarczone ilustracje.
- Użycie czystego HTML, CSS i JavaScriptu; bibliotekę pozostawiono tylko dla mapy.

## 3. Znalezione problemy i braki

| Problem w prototypie | Skutek | Rozwiązanie w wersji 2 |
| --- | --- | --- |
| Rozwijany na hover panel mapy i ikony bez widocznych etykiet na telefonie | Trudne odkrywanie filtrów i nawigacji dotykiem | Jawne pola, tekstowe menu, rozwijane grupy filtrów |
| Brak alternatywnej listy w głównym widoku mapy | Problemy z wyborem pasieki i używaniem strony bez podkładu mapowego | Równoległa lista z profilem i przejściem do znacznika |
| CTA produktu prowadziło do ogólnej mapy | Utrata wyboru użytkownika | Parametr produktu przekazywany do filtra |
| `saveCustomPasieka` zwracało wynik, którego formularz nie sprawdzał | Możliwy komunikat sukcesu po nieudanym zapisie | Potwierdzenie dopiero po udanym zapisie; jawne błędy |
| Nowe pasieki dostawały wymyślone oceny, opinię, ceny, doświadczenie i liczbę uli | Dane wyglądały na potwierdzone | Brak automatycznych ocen, statystyk i cen |
| `zdjecia/IMG_2210.JPG` i `zdjecia/IMG_2145.JPEG` nie występowały w materiałach | Niedziałające okładki i galerie | Sprawdzone lokalne ilustracje z opisem ich roli |
| Powielony wpis z miejscowością i województwem „test” | Duplikat danych i niepoprawny filtr regionu | Usunięty; pozostało 14 przykładów |
| GPS łączył `addEventListener` i zmieniane `onclick` | Ryzyko jednoczesnego ponownego pobrania i wyłączenia lokalizacji | Jeden spójny mechanizm włączania i wyłączania |
| Niestandardowe okna bez pełnej obsługi fokusu, klikalne `div`, ukryty input pliku | Ograniczona dostępność z klawiatury | Natywne `dialog`, przyciski, etykiety, widoczny wybór pliku |
| Uciekanie HTML podczas odczytu pamięci, a następnie renderowanie tekstowe | Wielokrotne kodowanie znaków w nazwach | Surowy tekst w danych, bezpieczne wstawianie do DOM |
| Walidator URL dopuszczał na końcu nierozpoznany adres | Niepełna ochrona deklarowana przez moduł | Ograniczony zestaw źródeł obrazów i jawnie budowane odnośniki |
| Ciężkie obrazy, dodatkowy zestaw ikon, kilka zewnętrznych fontów i nadpisujących się arkuszy | Duże pobieranie i złożona kaskada | Lokalne WebP, fonty systemowe, jeden arkusz własnych stylów |
| Puste odnośniki regulaminu i odzyskiwania hasła w makiecie | Pozorne działania | Panel rzeczywistych lokalnych wpisów i strona informacji |
| Lecznicze obietnice oraz domowe „dowody” autentyczności | Mylące treści edukacyjne | Opisy kulinarne i informacyjne, ostrożniejsze treści i źródła |

## 4. Plan ulepszeń

**Konieczne:** naprawa ścieżki produkt–mapa, poprawny zapis i walidacja, dostępne formularze i okna, brak fałszywego sukcesu oraz wymyślonych danych. Te zmiany zapewniają, że podstawowe zadania mają przewidywalny rezultat.

**Ważne:** spójna miodowo-grafitowa oprawa z leśną zielenią, czytelne nagłówki, prostszy układ mapy, osobna lista, wygodne menu mobilne, puste stany i obsługa niedostępnej sieci. Początkowo katalog pokazuje sześć produktów, a resztę odsłania jednym przyciskiem, ograniczając długość strony na telefonie.

**Opcjonalne, wykonane w ramach istniejącej ścieżki:** edycja i usuwanie własnych wpisów oraz pobieranie kopii JSON, aby lokalna wizytówka nie była jednorazowym formularzem. Osobna galeria udostępnia ilustracje, które wcześniej nie miały własnego działającego widoku.

## 5. Lista wykonanych zmian

- Przygotowano sześć głównych podstron i dwa zgodne wstecz przekierowania.
- Zachowano rozdzielenie HTML, CSS i JavaScriptu; bez skryptów, stylów i obsługi zdarzeń inline w HTML.
- Wyszukiwarka główna prowadzi do pasiek; osobna wyszukiwarka katalogu znajduje produkty również bez polskich znaków.
- Katalog zawiera 15 produktów, kategorie, szczegóły, brak wyników i przywracanie pełnego widoku.
- Mapa ma 14 jednoznacznie oznaczonych przykładów oraz własne wpisy, listę, filtry produktu, województwa, wysyłki, odbioru, BIO, warsztatów i oceny przykładowej.
- GPS działa wyłącznie na żądanie; pokazuje postęp, sukces, odmowę, niedostępność i przekroczenie czasu. Odległość jest opisana jako odległość w linii prostej.
- Profile mają oferty, galerie i przykładowe opinie. Dane kontaktowe niezweryfikowanych przykładów nie udają rzeczywistej oferty; kontakty własnych wpisów otwierają telefon, e-mail i trasę.
- Panel zapisuje nazwę, prowadzącego, miejscowość, region, adres, współrzędne, kontakt, WNI, opis, zdjęcie, produkty i cechy. Sprawdza pola i zakres współrzędnych, pokazuje podgląd oraz umożliwia edycję, usunięcie i eksport.
- Zdjęcia są sprawdzane pod kątem formatu i limitu 5 MB, odczytywane i pomniejszane przed zapisem. Uszkodzony plik nie blokuje formularza.
- Dziennik zawiera 10 krótkich, kompletnych tekstów z kategoriami, wyszukiwaniem i adresami otwierającymi konkretny artykuł. Zachowano tematy o widzeniu i tańcu pszczół, roku w pasiece, rozpoczęciu pszczelarstwa, produktach, miodzie w kuchni, kosmetykach i wosku.
- Makietę kont zastąpiono panelem lokalnych wpisów. Prawdziwe logowanie wymaga serwera i nie zostało pozorowane.
- Zrezygnowano z automatycznego ustalania adresu przez Nominatim. Adres wpisuje użytkownik, a lokalizację wybiera mapą lub współrzędnymi; eliminuje to zależność formularza od dodatkowej usługi i przypadkowe zapisywanie środka województwa.
- Dodano stronę informacji o danych, pamięci przeglądarki i połączeniach mapowych.
- Cztery użyte ilustracje zapisano w WebP: razem około 349 KiB z ikoną strony zamiast około 24 MB ich plików źródłowych.
- Dołączono Leaflet 1.9.4 wraz z licencją i obrazami pomocniczymi. Nie ma zależności od CDN dla kodu strony.
- Dodano opcjonalny, wykrywany przez przeglądarkę interfejs `filter_apiaries` wykorzystujący tę samą wyszukiwarkę. W zwykłych przeglądarkach pozostaje nieaktywny.

## 6. Wyniki końcowej kontroli jakości

Testy wykonano w Chromium przez Playwright, w odizolowanych profilach, na fikcyjnych danych. Pliki wyników dołączono w `kontrola/`.

| Kontrola | Wynik |
| --- | --- |
| 6 podstron × 360, 768, 1024 i 1440 px | 24 poprawne układy, bez poziomego przepełnienia |
| Obrazy wszystkich kontrolowanych stron | Brak niedziałających źródeł; obecne atrybuty alt |
| Nagłówki główne | Jeden h1 na podstronę |
| Pola formularzy | Wszystkie kontrolowane pola mają etykiety |
| Linki i zasoby lokalne | Brak pustych linków i brakujących odwołań w HTML |
| Rozdzielenie kodu | Brak inline CSS/JS i obsługi zdarzeń inline |
| Zwykłe ładowanie podstron | Brak błędów konsoli i odpowiedzi HTTP 4xx/5xx w wykonanej kontroli |
| Interakcje | 27 zaliczonych grup scenariuszy; brak błędów JavaScriptu |
| Okna i klawiatura | Escape, powrót fokusu, blokada fokusu w dialogu, strzałki galerii |
| Puste i niepoprawne dane | Brak wyników, błędny telefon/e-mail, puste pola, uszkodzone i zbyt duże zdjęcia obsłużone |
| Pamięć | Zapis i edycja po odświeżeniu; anulowanie, usuwanie i eksport działają |
| Błędy pamięci | Brak fałszywego sukcesu przy braku miejsca; uszkodzone dane nie są nadpisywane |
| Lokalizacja i sieć | Sukces GPS, odmowa, wyłączenie i promień; przy braku kafelków lub biblioteki działa lista |
| Powiększenie tekstu | 200% na szerokości 1440 px bez poziomego przepełnienia |
| Ograniczenie ruchu | Respektowane prefers-reduced-motion |
| Kontrast podstawowych par kolorów | 5,68:1–13,51:1; tekst przycisku 7,76:1 |
| Otwieranie plików bez serwera | Katalog, dialog i przejście wyszukiwarki do mapy sprawdzone |
| Ostatnia kontrola | Mobilny link do panelu, zwinięte filtry na telefonie i wskazanie współrzędnych kliknięciem działają |
| Opcjonalny interfejs przeglądarkowy | Poprawne i niepoprawne wejście przetestowane w symulowanym rejestrze; brak testu natywnego WebMCP |

Wykonano także wizualny przegląd zrzutów strony głównej, mapy, panelu i dziennika. Dołączono `podglad.png`.

Ostatnia kontrola została początkowo przerwana brakiem zgody; po poleceniu wznowienia prac uruchomiono ponownie lokalny podgląd i test zakończył się bez błędów. Przeglądarka testowa współdzieliła pamięć pomiędzy lokalnymi plikami; zalecany pozostaje jednak wspólny adres lokalnego serwera, ponieważ zachowanie `file://` nie jest przenośną gwarancją.

Ograniczenia kontroli: nie jest to formalny audyt całego WCAG, nie testowano fizycznych urządzeń, czytników ekranu ani Safari/Firefox. Stany awarii sieci i GPS były symulowane. Pomocniczy program uruchamiający serwer sprawdzono składniowo; automatyczne otwarcie systemowej przeglądarki z `URUCHOM.cmd` nie było wykonywane. Główne testy przeprowadzono na działającym lokalnym serwerze.

## 7. Ewentualne dalsze usprawnienia

Przed publicznym uruchomieniem: zweryfikowana baza pasiek, potwierdzone kontakty i prawa do materiałów, a dla wspólnych wpisów — zaplecze kont, przechowywanie zdjęć i moderacja. Następnie warto przetestować stronę na rzeczywistych telefonach oraz z czytnikiem ekranu.

Opcjonalnie: import pobranej kopii JSON, stronicowanie dużej przyszłej bazy i grupowanie znaczników. Obecna wersja ich nie udaje i nie wymaga do obsługi dostarczonego zbioru danych.

## 8. Założenia, materiały i uruchomienie

Nie pozostały pytania blokujące lokalny rezultat. Oryginalne materiały nie zostały zmodyfikowane. Wszystkie pliki wynikowe znajdują się w folderze **str pszczolka v2**.

Otwórz **START-TUTAJ.md**, a następnie **URUCHOM.cmd**. Dla szybkiego obejrzenia można otworzyć **index.html**.

Źródła korekt merytorycznych są również dostępne w treści strony:

- [CDC — Foods and Drinks to Avoid or Limit](https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/foods-and-drinks-to-avoid-or-limit.html): miód nie jest przeznaczony dla dzieci poniżej 12. miesiąca życia.
- [Food Standards Agency — wyzwania oceny autentyczności miodu](https://www.food.gov.uk/research/honey-authenticity-introduction-exploring-the-authenticity-challenge?navref=quicklink): ocena autentyczności wymaga szerszych podstaw niż domowe próby.
- [Karl von Frisch — wykład noblowski](https://www.nobelprize.org/uploads/2018/06/frisch-lecture.pdf): komunikacja tańcem pszczół.
- [Bees, flowers and UV](https://pmc.ncbi.nlm.nih.gov/articles/PMC12477309/): widzenie ultrafioletu i sygnały kwiatowe.
- Ilustracje: pliki dostarczone w folderach `zdjecia/oneStyle` i `zdjecia/style2`; bez generowania nowych grafik i bez pobierania zdjęć z zewnętrznych serwisów.
- Mapa: Leaflet 1.9.4 oraz podkład OpenStreetMap z widoczną atrybucją.
