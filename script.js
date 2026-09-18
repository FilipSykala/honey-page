'use strict';

const PRODUCTS = [{
  "id": "lipowy",
  "name": "Miód lipowy",
  "category": "miod",
  "description": "Wyrazisty, kwiatowy, z lekko miętową nutą.",
  "use": "Do herbaty po przestudzeniu, sosów i marynat."
}, {
  "id": "gryczany",
  "name": "Miód gryczany",
  "category": "miod",
  "description": "Ciemny i intensywny, o charakterystycznym korzennym aromacie.",
  "use": "Do pierników, chleba na zakwasie i wyrazistych sosów."
}, {
  "id": "spadziowy",
  "name": "Miód spadziowy",
  "category": "miod",
  "description": "Głęboki, leśny charakter i żywiczne nuty. Powstaje ze spadzi.",
  "use": "Spróbuj z pieczywem lub jako akcent marynaty."
}, {
  "id": "akacjowy",
  "name": "Miód akacjowy",
  "category": "miod",
  "description": "Jasny, delikatny i łagodny w smaku.",
  "use": "Do jogurtu naturalnego, owsianki i lekkich deserów."
}, {
  "id": "rzepakowy",
  "name": "Miód rzepakowy",
  "category": "miod",
  "description": "Jasny po krystalizacji, łagodny, często kremowy.",
  "use": "Łatwo rozsmarować go na pieczywie."
}, {
  "id": "wielokwiatowy",
  "name": "Miód wielokwiatowy",
  "category": "miod",
  "description": "Smak łąk i ogrodów, który zmienia się wraz z miejscem i porą zbioru.",
  "use": "Uniwersalny dodatek do śniadania."
}, {
  "id": "wrzosowy",
  "name": "Miód wrzosowy",
  "category": "miod",
  "description": "Wyrazisty kwiatowy aromat, czasem z nutą goryczki.",
  "use": "Do degustacji w małych porcjach."
}, {
  "id": "faceliowy",
  "name": "Miód faceliowy",
  "category": "miod",
  "description": "Delikatny, kwiatowy, z subtelną kwaskową nutą.",
  "use": "Do lekkich deserów i twarogu."
}, {
  "id": "mniszkowy",
  "name": "Miód mniszkowy",
  "category": "miod",
  "description": "Złocisty miód o wyraźnym, wiosennym aromacie.",
  "use": "Do pieczywa i prostych śniadań."
}, {
  "id": "nawlociowy",
  "name": "Miód nawłociowy",
  "category": "miod",
  "description": "Późnoletni miód o słodko-kwaskowym charakterze.",
  "use": "Do porównania z miodami z wiosennych zbiorów."
}, {
  "id": "malinowy",
  "name": "Miód z maliny leśnej",
  "category": "miod",
  "description": "Miód z nektaru kwiatów malin, o subtelnym kwiatowym aromacie.",
  "use": "Nie myl go z miodem z dodatkiem owoców maliny."
}, {
  "id": "pylek",
  "name": "Pyłek kwiatowy",
  "category": "pylek",
  "description": "Drobne, różnobarwne obnóża pyłkowe zbierane przez pszczoły.",
  "use": "Sprawdź sposób użycia i przechowywania na etykiecie."
}, {
  "id": "pierzga",
  "name": "Pierzga pszczela",
  "category": "pylek",
  "description": "Pyłek przetworzony i przechowywany przez pszczoły w komórkach plastra.",
  "use": "Zapytaj pszczelarza o postać produktu i sposób przechowywania."
}, {
  "id": "propolis",
  "name": "Propolis",
  "category": "propolis",
  "description": "Kit pszczeli: żywiczny materiał używany przez pszczoły w ulu.",
  "use": "Wybieraj produkt o jasno określonym składzie i przeznaczeniu."
}, {
  "id": "swiece",
  "name": "Wosk i świece",
  "category": "wosk",
  "description": "Naturalny surowiec pszczeli do świec i wyrobów rzemieślniczych.",
  "use": "Świece pal pod nadzorem, zgodnie z instrukcją producenta."
}];
const ARTICLES = [{
  "id": "rok-w-pasiece",
  "category": "pszczelarstwo",
  "title": "Rok w pasiece ma swój rytm",
  "excerpt": "Od zimowego przygotowania sprzętu po letnie miodobranie. Zajrzyj za kulisy pracy przy ulach.",
  "image": "assets/pasieka.webp",
  "content": ["Słoik miodu jest końcem długiej historii. Praca w pasiece trwa przez cały rok, a kalendarz wyznaczają pogoda, kwitnienie roślin i kondycja rodzin pszczelich. Terminy nie są takie same w każdym regionie Polski.", "Zimą jest czas na przygotowanie sprzętu i planowanie kolejnego sezonu. Wiosną przychodzi pora obserwowania rozwoju rodzin i pierwszych pożytków. Latem pszczelarz zajmuje się między innymi pozyskiwaniem miodu i opieką nad rodzinami. Jesień to przygotowanie do zimowli.", "Planując wizytę, skontaktuj się wcześniej z gospodarzem. Miodobranie nie odbywa się według sztywnego terminarza, a nie każda pasieka prowadzi warsztaty. Zapytaj, jakie produkty są aktualnie dostępne i czy można je odebrać osobiście."]
}, {
  "id": "wybierz-swoj-smak",
  "category": "smaki",
  "title": "Łagodny czy wyrazisty? Znajdź swój smak",
  "excerpt": "Nie musisz znać wszystkich odmian. Zacznij od tego, co lubisz jeść na co dzień.",
  "image": "assets/miod.webp",
  "content": ["Na początek zestaw ze sobą dwa różne miody. Łagodny rzepakowy i wyrazisty gryczany pozwolą zauważyć, jak wiele zmieniają aromat, kolor i konsystencja. Spróbuj niewielkiej ilości każdego z nich bez dodatków.", "Potem dobierz towarzystwo. Delikatne miody dobrze odnajdują się w śniadaniach, a intensywne mogą nadać charakter wypiekom i marynatom. Traktuj opisy w katalogu jako wskazówki do własnych porównań.", "Smak tej samej odmiany może różnić się między pasiekami i zbiorami. Zapytaj pszczelarza o pochodzenie miodu. Jeśli to możliwe, wybierz najpierw mały słoik, zanim zdecydujesz się na większy zapas."]
}, {
  "id": "produkty-pszczele-roznice",
  "category": "smaki",
  "title": "Nie tylko miód. Co jeszcze powstaje w ulu?",
  "excerpt": "Pyłek, pierzga, propolis i wosk — różne produkty, różne zastosowania.",
  "image": "assets/produkty.webp",
  "content": ["Miód, pyłek, pierzga, propolis i wosk nie są zamiennikami. Mają inne pochodzenie, postać i przeznaczenie. Wybierając produkt, zacznij od przeczytania etykiety, zamiast kierować się samym określeniem „naturalny”.", "Pyłek to materiał zbierany przez pszczoły z kwiatów. Pierzga powstaje z pyłku przetworzonego i przechowywanego w plastrze. Propolis jest żywicznym materiałem wykorzystywanym w ulu, a wosk służy między innymi do budowy plastrów.", "W ofercie pszczelarza mogą znaleźć się również świece czy produkty z dodatkami. Zapytaj o pełny skład, przeznaczenie i sposób przechowywania. Opisy w naszym katalogu nie przypisują tym produktom działania leczniczego."]
}, {
  "id": "zakup-miodu",
  "category": "poradniki",
  "title": "Pięć pytań przed zakupem miodu",
  "excerpt": "Pochodzenie, odmiana, zbiór, cena i odbiór. Krótka lista do rozmowy z pszczelarzem.",
  "image": "assets/krajobraz.webp",
  "content": ["Gdzie pozyskano miód? Jaka to odmiana? Z którego zbioru pochodzi? Ile kosztuje wybrana masa produktu? Jak można go odebrać? Te pytania porządkują rozmowę i pomagają uniknąć nieporozumień.", "Porównuj ceny dla tej samej masy, ponieważ podobne słoiki mogą mieścić różne ilości produktu. Przy wysyłce ustal także koszt dostawy, sposób pakowania i przewidywany termin.", "Wygląd miodu i proste domowe próby nie zastępują specjalistycznej oceny autentyczności. Nawet profesjonalna analiza jest złożona i wymaga właściwej interpretacji."],
  "source": ["Food Standards Agency — autentyczność miodu", "https://www.food.gov.uk/research/honey-authenticity-introduction-exploring-the-authenticity-challenge?navref=quicklink"]
}, {
  "id": "pierwszy-roj",
  "category": "pszczelarstwo",
  "title": "Zanim postawisz swój pierwszy ul",
  "excerpt": "Zacznij od poznania pracy pszczelarza i przygotowania własnego planu.",
  "image": "assets/pasieka.webp",
  "content": ["Zanim kupisz sprzęt, porozmawiaj z doświadczonym pszczelarzem i zobacz pracę w pasiece. Kurs podstawowy i praktyka pod opieką gospodarza pozwalają lepiej zrozumieć, ile czasu wymaga opieka nad rodzinami.", "Zapisz pytania o lokalizację, dostęp do pożytków, sprzęt, opiekę nad pszczołami i sezonowe obowiązki. Ustal budżet, uwzględniając również koszty, które pojawiają się po postawieniu ula.", "Przed rozpoczęciem sprawdź aktualne wymagania dla swojej sytuacji u właściwych instytucji i lokalnych organizacji pszczelarskich. Ten krótki tekst jest punktem wyjścia do nauki, a nie instrukcją prowadzenia pasieki."]
}, {
  "id": "miod-a-cukier",
  "category": "poradniki",
  "title": "Miód w kuchni: smak i umiar",
  "excerpt": "Traktuj miód jak składnik, który wnosi smak, a nie obietnicę zdrowia.",
  "image": "assets/miod.webp",
  "content": ["Wybieraj miód ze względu na jego charakter i pochodzenie. Odrobina wyrazistego miodu może nadać aromat sosowi lub deserowi, dlatego dodawaj go stopniowo i próbuj potrawy.", "Nie podawaj miodu dzieciom poniżej 12. miesiąca życia. Dotyczy to również dodawania go do jedzenia, napojów czy mleka dla niemowląt.", "Nasze opisy kulinarne nie zastępują indywidualnych zaleceń żywieniowych. Jeśli masz szczególne potrzeby dietetyczne, dobór produktów omów z odpowiednim specjalistą."],
  "source": ["CDC — produkty, których należy unikać u niemowląt", "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/foods-and-drinks-to-avoid-or-limit.html"]
}, {
  "id": "jak-pszczoly-widza-swiat",
  "category": "przyroda",
  "title": "Jak pszczoły widzą kwiaty?",
  "excerpt": "Znany nam ogród wygląda inaczej dla jego skrzydlatych gości.",
  "image": "assets/produkty.webp",
  "content": ["Pszczoły widzą promieniowanie ultrafioletowe, którego człowiek nie dostrzega. Dlatego płatki wyglądające dla nas jednolicie mogą ujawniać dla owada dodatkowe wzory. Kolor kwiatu nie jest więc jedną, uniwersalną cechą — zależy także od obserwatora.", "Sygnały wizualne pomagają owadom odnajdywać kwiaty. Wzory, barwy i inne cechy roślin tworzą świat informacji, którego duża część pozostaje poza zasięgiem naszego wzroku.", "Patrząc na kwitnącą łąkę, warto pamiętać o tej różnicy perspektyw. To samo miejsce może być dla nas krajobrazem, a dla pszczoły przestrzenią poszukiwania pokarmu."],
  "source": ["Badania nad widzeniem UV u zapylaczy", "https://pmc.ncbi.nlm.nih.gov/articles/PMC12477309/"]
}, {
  "id": "taniec-pszczol",
  "category": "przyroda",
  "title": "Taniec pszczół: kierunek zapisany w ruchu",
  "excerpt": "Jak zbieraczka przekazuje innym pszczołom informację o miejscu pożytku?",
  "image": "assets/krajobraz.webp",
  "content": ["Po odnalezieniu źródła pokarmu pszczoła może przekazać innym zbieraczkom informacje za pomocą tańca wywijanego. Kierunek i czas trwania jego charakterystycznej fazy wiążą się z kierunkiem oraz odległością do celu.", "Znaczenie tej komunikacji badał Karl von Frisch. Jego prace nad zachowaniem pszczół należą do najbardziej znanych przykładów poznawania sposobów porozumiewania się zwierząt.", "To fascynujący kontrast: niewielki owad, krótki ruch na plastrze i informacja o świecie poza ulem. Pszczela rodzina korzysta z wiedzy swoich zbieraczek, choć nie posługuje się mapą tak jak my."],
  "source": ["Karl von Frisch — wykład noblowski", "https://www.nobelprize.org/uploads/2018/06/frisch-lecture.pdf"]
}, {
  "id": "miod-w-kosmetyce",
  "category": "zastosowania",
  "title": "Produkty pszczele w kosmetykach: czytaj skład",
  "excerpt": "Miód i wosk pojawiają się także poza kuchnią. Liczy się cały produkt.",
  "image": "assets/miod.webp",
  "content": ["Nazwa składnika na froncie opakowania to dopiero początek informacji o kosmetyku. Sprawdź pełny skład, przeznaczenie i instrukcję stosowania gotowego produktu.", "W tej wersji poradnika rezygnujemy z domowych receptur nakładania miodu i przypraw na skórę. Samo naturalne pochodzenie składnika nie wystarcza, by ocenić, czy gotowa mieszanka będzie odpowiednia dla konkretnej osoby.", "Jeżeli interesują Cię wyroby z pasieki, zapytaj producenta, czy są przeznaczone do jedzenia, pielęgnacji czy zastosowań rzemieślniczych. Tych kategorii nie należy traktować zamiennie."]
}, {
  "id": "wosk-i-propolis-w-domu",
  "category": "zastosowania",
  "title": "Wosk w domu: od świecy do rzemiosła",
  "excerpt": "Poznaj zastosowania wosku i wybieraj wyroby o jasno opisanym przeznaczeniu.",
  "image": "assets/pasieka.webp",
  "content": ["Wosk pszczeli jest surowcem wykorzystywanym w świecach i wyrobach rzemieślniczych. W pasiece możesz spotkać zarówno gotowe produkty, jak i wosk przeznaczony do dalszej pracy.", "Kupując świecę, zapytaj o jej skład i sposób użytkowania. Ustaw ją zgodnie z instrukcją producenta i nigdy nie pozostawiaj palącej się świecy bez nadzoru.", "Przy innych zastosowaniach dobieraj wyrób do konkretnej powierzchni i celu. Wosk do rękodzieła, produkt do konserwacji drewna i gotowy kosmetyk mają różne wymagania; kieruj się oznaczeniem producenta."]
}];
let BASE_APIARIES = [];

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const normalize = s => String(s ?? '').toLocaleLowerCase('pl').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ł/g, 'l');
const REGIONS = ['Dolnośląskie', 'Kujawsko-pomorskie', 'Lubelskie', 'Lubuskie', 'Łódzkie', 'Małopolskie', 'Mazowieckie', 'Opolskie', 'Podkarpackie', 'Podlaskie', 'Pomorskie', 'Śląskie', 'Świętokrzyskie', 'Warmińsko-mazurskie', 'Wielkopolskie', 'Zachodniopomorskie'];
const CATEGORIES = {
  all: 'Wszystkie',
  miod: 'Miody',
  pylek: 'Pyłek i pierzga',
  propolis: 'Propolis',
  wosk: 'Wosk i świece'
};
const BLOG_CATEGORIES = {
  all: 'Wszystkie',
  pszczelarstwo: 'Z życia pasieki',
  smaki: 'Smaki z ula',
  poradniki: 'Poradniki',
  przyroda: 'Pszczoły i przyroda',
  zastosowania: 'W domu'
};
const KEY = 'miodna-mapa-v2-apiaries';
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const photos = [{
  url: 'assets/krajobraz.webp',
  caption: 'Miodowy krajobraz — ilustracja z prototypu'
}, {
  url: 'assets/pasieka.webp',
  caption: 'Pasieka — ilustracja z prototypu'
}, {
  url: 'assets/miod.webp',
  caption: 'Słoik miodu — ilustracja z prototypu'
}, {
  url: 'assets/produkty.webp',
  caption: 'Świat miodu — ilustracja z prototypu'
}];
let customApiaries = [],
  storageProblem = '',
  activePhotos = [],
  photoIndex = 0,
  detailKind = '';
function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === 'class') node.className = value;else if (key.startsWith('on') && typeof value === 'function') node.addEventListener(key.slice(2), value);else if (value !== null && value !== undefined) node.setAttribute(key, String(value));
  }
  for (const child of Array.isArray(children) ? children : [children]) {
    if (child !== null && child !== undefined) node.append(child instanceof Node ? child : document.createTextNode(String(child)));
  }
  return node;
}
// Shared action labels keep icons decorative and preserve text without the icon kit.
function actionContent(text, name) {
  return [el('i', {class: 'fa-solid fa-' + name + ' ui-icon', 'aria-hidden': 'true'}), el('span', {}, text)];
}
function setAction(selector, text, name) {
  $(selector).replaceChildren(...actionContent(text, name));
}
const actionIcons = {'Podgląd': 'eye', 'Edytuj': 'pen', 'Usuń': 'trash-can'};
const btn = (text, click, cls = 'secondary') => el('button', {
  type: 'button',
  class: cls,
  onclick: click
}, actionIcons[text] ? actionContent(text, actionIcons[text]) : text);
const link = (text, href, cls = '') => el('a', {
  href,
  class: cls
}, text);

function validPhoto(src) {
  return typeof src === 'string' && (/^assets\/[a-z-]+\.webp$/.test(src) || /^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(src)) ? src : 'assets/pasieka.webp';
}
function imageNode(src, alt, cls = '') {
  const node = el('img', {
    src: validPhoto(src),
    alt,
    class: cls,
    loading: 'lazy',
    decoding: 'async'
  });
  node.addEventListener('error', () => {
    if (!node.src.endsWith('/assets/pasieka.webp')) {
      node.src = 'assets/pasieka.webp';
      node.alt = 'Ilustracja zastępcza pasieki';
    }
  });
  return node;
}
function validateStored(a) {
  return a && typeof a.id === 'string' && a.id.startsWith('local-') && ['name', 'city', 'beekeeper', 'address', 'region'].every(k => typeof a[k] === 'string') && REGIONS.some(r => normalize(r) === a.region) && typeof a.lat === 'number' && a.lat >= 49 && a.lat <= 55 && typeof a.lng === 'number' && a.lng >= 14 && a.lng <= 24.2 && Array.isArray(a.products) && a.products.every(p => p && PRODUCTS.some(t => t.id === p.type));
}
function readStorage() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || !parsed.every(validateStored)) throw Error('format');
    return parsed.map(a => ({
      ...a,
      demo: false,
      photo: validPhoto(a.photo),
      rating: null,
      reviews: []
    }));
  } catch {
    storageProblem = 'Nie można odczytać zapisanych pasiek. Istniejące dane nie zostały nadpisane. Sprawdź ustawienia pamięci witryny.';
    return [];
  }
}
let ownedIds = [], refreshBusy = false;
const ownedApiaries = () => customApiaries.filter(a => ownedIds.includes(a.id));
function getApiaryKey(create = false) {
  try {
    let key = localStorage.getItem('miodna-mapa-owner-key');
    if (!key && create) {
      key = Array.from(crypto.getRandomValues(new Uint8Array(32)), n => n.toString(16).padStart(2, '0')).join('');
      localStorage.setItem('miodna-mapa-owner-key', key);
    }
    return key || '';
  } catch {
    if (create) throw Error('Włącz pamięć przeglądarki, aby zachować dostęp do edycji swoich pasiek.');
    return '';
  }
}
async function apiRequest(url, method = 'GET', body) {
  if (!/^https?:$/.test(location.protocol)) throw Error('Uruchom stronę przez URUCHOM.cmd lub adres serwera, aby korzystać ze wspólnych danych.');
  const key = getApiaryKey(method !== 'GET');
  const response = await fetch(url, { method, cache: 'no-store', signal: AbortSignal.timeout(15000), headers: {
    ...(key ? {'X-Apiary-Key': key} : {}), ...(body ? {'Content-Type': 'application/json'} : {})
  }, ...(body ? {body: JSON.stringify(body)} : {}) });
  let data;
  try { data = await response.json(); } catch { throw Error('Serwer nie obsługuje zapisu pasiek. Uruchom stronę przez URUCHOM.cmd.'); }
  if (!response.ok) throw Error(data.error || 'Nie udało się pobrać danych pasiek.');
  return data;
}
async function refreshApiaries() {
  if (refreshBusy) return;
  refreshBusy = true;
  try {
    const data = await apiRequest('/api/pasieki');
    if (!Array.isArray(data.apiaries) || !data.apiaries.every(validateStored) || !Array.isArray(data.ownedIds)) throw Error('Niepoprawne dane pasiek na serwerze.');
    const changed = JSON.stringify(customApiaries) !== JSON.stringify(data.apiaries) || JSON.stringify(ownedIds) !== JSON.stringify(data.ownedIds);
    customApiaries = data.apiaries;
    ownedIds = data.ownedIds;
    storageProblem = '';
    if (changed) document.dispatchEvent(new Event('apiaries-updated'));
  } finally { refreshBusy = false; }
}
async function migrateApiaries() {
  const legacy = readStorage();
  for (const a of legacy) {
    if (ownedIds.includes(a.id)) continue;
    const migrated = {phone: '', email: '', wni: '', description: '', ...a};
    if (customApiaries.some(p => p.id === a.id)) migrated.id = 'local-' + crypto.randomUUID();
    await apiRequest('/api/pasieki', 'POST', migrated);
    await refreshApiaries();
  }
  if (legacy.length) {
    localStorage.removeItem(KEY);
    notify('Przeniesiono wcześniejsze pasieki na serwer. Są widoczne dla wszystkich odwiedzających.');
  }
}
async function saveApiary(a, editing, revision) {
  await apiRequest('/api/pasieki' + (editing ? '/' + encodeURIComponent(a.id) : ''), editing ? 'PUT' : 'POST', {...a, revision});
  await refreshApiaries();
}
async function deleteApiary(a) {
  await apiRequest('/api/pasieki/' + encodeURIComponent(a.id), 'DELETE', {revision: a.revision});
  await refreshApiaries();
}
function populateRegions(select) {
  for (const name of REGIONS) select.append(el('option', {
    value: normalize(name)
  }, name));
}
function regionName(key) {
  return REGIONS.find(r => normalize(r) === key) || key;
}
function openDetail(title, content, kind = '') {
  detailKind = kind;
  $('#detail-content').replaceChildren(content);
  if (!$('#dialog-title')) content.prepend(el('h2', {
    id: 'dialog-title'
  }, title));
  const d = $('#detail');
  if (!d.open) d.showModal();
  d.scrollTop = 0;
}
function closeDetail() {
  if ($('#detail').open) $('#detail').close();
}
function initDialogs() {
  for (const dialog of $$('dialog')) {
    $('[data-close]', dialog).addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const r = dialog.getBoundingClientRect();
      if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
    });
  }
  $('#detail').addEventListener('close', () => {
    if (detailKind === 'article') {
      const url = new URL(location.href);
      url.searchParams.delete('artykul');
      history.replaceState(null, '', url);
    }
    detailKind = '';
  });
  $('#photo-prev').addEventListener('click', () => changePhoto(-1));
  $('#photo-next').addEventListener('click', () => changePhoto(1));
  $('#lightbox').addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      changePhoto(-1);
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      changePhoto(1);
    }
  });
}
function openPhoto(list, index = 0) {
  activePhotos = list;
  photoIndex = index;
  renderPhoto();
  $('#lightbox').showModal();
}
function changePhoto(delta) {
  photoIndex = (photoIndex + delta + activePhotos.length) % activePhotos.length;
  renderPhoto();
}
function renderPhoto() {
  const p = activePhotos[photoIndex];
  $('#large-photo').src = validPhoto(p.url);
  $('#large-photo').alt = p.caption;
  $('#photo-caption').textContent = `${photoIndex + 1} / ${activePhotos.length} · ${p.caption}`;
  $('#photo-prev').disabled = $('#photo-next').disabled = activePhotos.length < 2;
}
function empty(title, message, action) {
  const box = el('div', {
    class: 'empty'
  }, [el('h3', {}, title), el('p', {}, message)]);
  if (action) box.append(action);
  return box;
}
function categoryButtons(container, categories, onChange) {
  for (const [id, name] of Object.entries(categories)) {
    const b = btn(name, () => {
      for (const node of $$('button', container)) node.setAttribute('aria-pressed', String(node === b));
      onChange(id);
    }, 'chip');
    b.setAttribute('aria-pressed', String(id === 'all'));
    container.append(b);
  }
}
function productDetail(p) {
  const body = el('div', {
    class: 'dialog-body'
  }, [el('span', {
    class: 'tag'
  }, CATEGORIES[p.category]), el('h2', {
    id: 'dialog-title'
  }, p.name), el('p', {
    class: 'lead'
  }, p.description), el('h3', {}, 'Jak go wykorzystać?'), el('p', {}, p.use), link('Znajdź pasieki z tym produktem ↗', `mapa.html?produkt=${p.id}`, 'button')]);
  openDetail(p.name, body);
}
function productCard(p) {
  const cover = el('div', {
    class: 'product-visual'
  }, [imageNode(p.category === 'miod' ? 'assets/miod.webp' : 'assets/produkty.webp', ''), el('span', {
    class: 'tag'
  }, CATEGORIES[p.category])]);
  const body = el('div', {
    class: 'product-body'
  }, [el('h3', {}, p.name), el('p', {}, p.description), el('div', {
    class: 'product-bottom'
  }, [el('span', {}, 'Poznaj produkt'), el('span', {
    'aria-hidden': 'true'
  }, '↗')])]);
  return el('article', {
    class: 'product-card'
  }, el('button', {
    type: 'button',
    onclick: () => productDetail(p)
  }, [cover, body]));
}
function articleCard(a) {
  return el('article', {
    class: 'article-card'
  }, [link('', `blog.html?artykul=${a.id}`), el('span', {
    class: 'eyebrow'
  }, BLOG_CATEGORIES[a.category]), el('h3', {}, link(a.title, `blog.html?artykul=${a.id}`)), el('p', {}, a.excerpt), link('Czytaj opowieść ↗', `blog.html?artykul=${a.id}`, 'text-link')]);
}
function fillArticles(container, list) {
  container.replaceChildren(...list.map(a => {
    const card = articleCard(a);
    $('a', card).append(imageNode(a.image, a.title));
    return card;
  }));
}
function initHome() {
  let apiaries = [...customApiaries, ...BASE_APIARIES];
  for (const a of apiaries) $('#catalog-apiary').append(el('option', {value: a.id}, a.name + ' · ' + a.city + (a.demo ? ' (przykład)' : ' (pasieka)')));
  document.addEventListener('apiaries-updated', () => {
    apiaries = [...customApiaries, ...BASE_APIARIES];
    const select = $('#catalog-apiary'), selected = select.value;
    while (select.options.length > 1) select.remove(1);
    for (const a of apiaries) select.append(el('option', {value: a.id}, a.name + ' · ' + a.city + (a.demo ? ' (przykład)' : '')));
    select.value = apiaries.some(a => a.id === selected) ? selected : '';
    render();
  });
  let category = 'all',
    expanded = false;
  const more = btn('Pokaż pozostałe produkty', () => {
    expanded = true;
    render();
  });
  more.id = 'catalog-more';
  $('#catalog-grid').after(more);
  const render = () => {
    const q = normalize($('#catalog-search').value).trim();
    const apiary = apiaries.find(a => a.id === $('#catalog-apiary').value);
    const offered = p => !apiary || apiary.products.some(item => item.type === p.id);
    const matches = PRODUCTS.filter(p => offered(p) && (category === 'all' || p.category === category) && normalize(p.name + ' ' + p.description).includes(q));
    for (const button of $('#catalog-categories').children) {
      const count = PRODUCTS.filter(p => offered(p) && (button.dataset.category === 'all' || p.category === button.dataset.category)).length;
      $('small', button).textContent = 'Produktów: ' + count;
    }
    const info = $('#catalog-apiary-info');
    info.hidden = !apiary;
    info.replaceChildren();
    if (apiary) info.append(el('p', {}, apiary.name + ' · ' + apiary.city + (apiary.demo ? ' — oferta przykładowa, dane niezweryfikowane.' : ' — aktualna wizytówka pasieki.')), btn('Zobacz wizytówkę pasieki', () => profile(apiary), 'secondary')); 
    const sort = $('#catalog-sort').value;
    if (sort !== 'default') matches.sort((a, b) => (sort === 'az' ? 1 : -1) * a.name.localeCompare(b.name, 'pl'));
    const visible = category === 'all' && !q && !apiary && !expanded ? matches.slice(0, 6) : matches;
    $('#catalog-selection').textContent = CATEGORIES[category] + (apiary ? ' · ' + apiary.name : '');
    $('#catalog-grid').replaceChildren(...visible.map(productCard));
    $('#catalog-count').textContent = `Produkty: ${visible.length} z ${matches.length}`;
    more.hidden = visible.length === matches.length;
    more.textContent = `Pokaż pozostałe produkty (${matches.length - visible.length})`;
    if (!matches.length) $('#catalog-grid').append(empty('Nie znaleźliśmy takiego produktu', 'Spróbuj krótszej nazwy lub wybierz inną kategorię.', btn('Pokaż cały katalog', () => {
      resetCatalog();
    })));
  };
  function resetCatalog() {
    $('#catalog-search').value = '';
    $('#catalog-sort').value = 'default';
    $('#catalog-apiary').value = '';
    $('#catalog-categories button').click();
  }
  for (const [id, label] of Object.entries(CATEGORIES)) {
    const count = PRODUCTS.filter(p => id === 'all' || p.category === id).length;
    const button = btn('', () => {
      category = id;
      expanded = false;
      for (const item of $('#catalog-categories').children) item.setAttribute('aria-pressed', String(item === button));
      render();
    }, 'catalog-category');
    button.dataset.category = id;
    button.setAttribute('aria-pressed', String(id === 'all'));
    button.append(el('strong', {}, label), el('small', {}, 'Produktów: ' + count));
    $('#catalog-categories').append(button);
  }
  $('#catalog-reset').addEventListener('click', resetCatalog);
  $('#catalog-sort').addEventListener('change', render);
  $('#catalog-apiary').addEventListener('change', () => { expanded = false; render(); });
  $('#catalog-search').addEventListener('input', () => { expanded = false; render(); });
  render();
  fillArticles($('#journal-preview'), ARTICLES.slice(0, 3));
}
function initBlog() {
  let category = 'all';
  const render = () => {
    const q = normalize($('#blog-search').value).trim();
    const list = ARTICLES.filter(a => (category === 'all' || a.category === category) && normalize(a.title + ' ' + a.excerpt).includes(q));
    fillArticles($('#articles'), list);
    $('#blog-count').textContent = `Artykuły: ${list.length}`;
    if (!list.length) $('#articles').append(empty('Brak artykułów', 'Zmień frazę lub kategorię.', btn('Wyczyść wyszukiwanie', () => {
      $('#blog-search').value = '';
      $('#blog-categories button').click();
    })));
  };
  categoryButtons($('#blog-categories'), BLOG_CATEGORIES, id => {
    category = id;
    render();
  });
  $('#blog-search').addEventListener('input', render);
  $('#articles').addEventListener('click', event => {
    const a = event.target.closest('a');
    if (!a || event.ctrlKey || event.metaKey || event.shiftKey) return;
    const id = new URL(a.href).searchParams.get('artykul');
    const article = ARTICLES.find(item => item.id === id);
    if (article) {
      event.preventDefault();
      showArticle(article);
    }
  });
  render();
  const id = new URLSearchParams(location.search).get('artykul');
  if (id) {
    const article = ARTICLES.find(a => a.id === id);
    if (article) showArticle(article);else notify('Nie znaleziono artykułu. Wybierz tekst z dziennika.');
  }
}
function showArticle(a) {
  const body = el('div', {
    class: 'dialog-body'
  }, [el('span', {
    class: 'eyebrow'
  }, BLOG_CATEGORIES[a.category]), el('h2', {
    id: 'dialog-title'
  }, a.title), el('p', {
    class: 'meta'
  }, `Redakcja Miodnej Mapy · ${Math.max(1, Math.ceil(a.content.join(' ').split(' ').length / 180))} min czytania`), ...a.content.map(p => el('p', {}, p))]);
  if (a.source) body.append(el('p', {
    class: 'meta'
  }, ['Źródło: ', el('a', {
    href: a.source[1],
    target: '_blank',
    rel: 'noopener noreferrer'
  }, a.source[0])]));
  openDetail(a.title, body, 'article');
  const url = new URL(location.href);
  url.searchParams.set('artykul', a.id);
  history.replaceState(null, '', url);
}
function profile(a) {
  const gallery = [{ url: a.photo || 'assets/krajobraz.webp', caption: a.demo ? 'Zdjęcie poglądowe pasieki' : 'Zdjęcie pasieki: ' + a.name }];
  const preview = el('figure', { class: 'apiary-preview' }, el('button', {
    type: 'button', class: 'apiary-preview-button',
    onclick: () => openPhoto(gallery),
    'aria-label': 'Powiększ zdjęcie pasieki: ' + a.name
  }, imageNode(gallery[0].url, gallery[0].caption)));
  if (a.demo) preview.append(el('figcaption', {}, 'Zdjęcie poglądowe'));
  const products = el('ul', { class: 'apiary-product-links' }, a.products.map(p => {
    const product = PRODUCTS.find(t => t.id === p.type);
    const name = p.name || product?.name || p.type;
    const item = el('li');
    if (product) {
      const productLink = link(name, 'mapa.html?produkt=' + encodeURIComponent(product.id));
      productLink.addEventListener('click', event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        productDetail(product);
        $('.dialog-body', $('#detail-content')).append(btn('← Wróć do pasieki', () => profile(a), 'secondary'));
      });
      item.append(productLink);
    } else item.append(el('span', {}, name));
    return item;
  }));
  const info = el('div', { class: 'apiary-profile-info' }, [
    el('h3', {}, 'Lokalizacja'),
    el('p', {}, [a.city, a.address, regionName(a.region)].filter(Boolean).join(' · ')),
    el('h3', {}, a.demo ? 'Przykładowe produkty' : 'Produkty'), products
  ]);
  if (!a.products.length) products.after(el('p', { class: 'meta' }, 'Brak dodanych produktów.'));
  const body = el('div', { class: 'dialog-body apiary-profile' }, [
    el('h2', { id: 'dialog-title' }, a.name),
    el('div', { class: 'apiary-profile-layout' }, [preview, info])
  ]);
  const extra = el('details', { class: 'apiary-profile-extra' }, [
    el('summary', {}, 'Więcej o pasiece i kontakt'),
    el('p', { class: 'meta' }, a.demo ? 'Wpis przykładowy · dane niezweryfikowane' : 'Wpis opublikowany'),
    el('p', {}, a.beekeeper),
    el('p', {}, a.description || 'Pszczelarz nie dodał jeszcze opisu.')
  ]);
  if (a.bio) extra.append(el('p', { class: 'meta' }, 'BIO: deklaracja autora wpisu, niezweryfikowana.'));
  if (a.wni) extra.append(el('p', { class: 'meta' }, 'WNI podany przez autora: ' + a.wni));
  body.append(extra);
  extra.append(el('h3', {}, 'Odbiór i kontakt'));
  extra.append(el('p', {}, [a.shipping ? 'Możliwa wysyłka' : 'Wysyłka nie jest zadeklarowana', a.pickup ? 'odbiór osobisty' : 'odbiór osobisty do ustalenia', a.workshops ? 'warsztaty' : ''].filter(Boolean).join(' · ')));
  if (a.demo) {
    extra.append(el('p', {
      class: 'notice'
    }, 'To przykład z prototypu. Dane kontaktowe nie są potwierdzone; nie traktuj tej wizytówki jako rzeczywistej oferty.'));
  } else {
    const actions = el('div', {
      class: 'actions'
    });
    if (typeof a.phone === 'string' && /^\+?[\d\s()-]{7,20}$/.test(a.phone)) actions.append(link('Zadzwoń: ' + a.phone, 'tel:' + a.phone.replace(/[^+\d]/g, ''), 'button'));
    if (typeof a.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email)) actions.append(link('Napisz e-mail', 'mailto:' + encodeURIComponent(a.email), 'secondary'));
    actions.append(el('a', {
      class: 'secondary',
      href: `https://www.google.com/maps/dir/?api=1&destination=${a.lat},${a.lng}`,
      target: '_blank',
      rel: 'noopener noreferrer'
    }, 'Wyznacz trasę ↗'));
    extra.append(actions);
  }
  extra.append(el('h3', {}, 'Opinie'));
  if (!a.demo || !a.reviews?.length) extra.append(el('p', {}, 'Brak opinii. Nie przypisujemy nowym pasiekom automatycznych ocen.'));else {
    extra.append(el('p', {
      class: 'meta'
    }, 'Poniższe opinie są przykładową treścią z prototypu.'));
    for (const r of a.reviews) extra.append(el('blockquote', {
      class: 'review'
    }, [el('p', {}, r.comment), el('p', {
      class: 'meta'
    }, `${r.author} · ${r.rating}/5 (przykład)`)]));
  }
  openDetail(a.name, body);
}
function distance(a, b) {
  const rad = d => d * Math.PI / 180;
  const h = Math.sin(rad(b.lat - a.lat) / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(rad(b.lng - a.lng) / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(Math.max(0, 1 - h)));
}
function initMap() {
  populateRegions($('#region'));
  let position = null,
    geoToken = 0,
    selected = new Set(),
    map = null,
    layer = null,
    userMarker = null,
    tiles = null,
    filtered = [];
  const params = new URLSearchParams(location.search);
  $('#map-search').value = params.get('q') || '';
  if (PRODUCTS.some(p => p.id === params.get('produkt'))) selected.add(params.get('produkt'));
  if (matchMedia('(max-width: 600px)').matches && !selected.size) $('.product-filter-details').open = false;
  for (const p of PRODUCTS) {
    const button = btn(p.name.replace('Miód ', '').replace('Pszczela', ''), () => {
      selected.has(p.id) ? selected.delete(p.id) : selected.add(p.id);
      button.setAttribute('aria-pressed', String(selected.has(p.id)));
      render();
    }, 'chip');
    button.dataset.product = p.id;
    button.setAttribute('aria-pressed', String(selected.has(p.id)));
    $('#honey-filters').append(button);
  }
  function setupMap() {
    if (!window.L) {
      $('#map-status').textContent = 'Mapa jest niedostępna. Wszystkie pasieki możesz przeglądać na liście.';
      return;
    }
    map = L.map('map', {
      scrollWheelZoom: true,
      zoomAnimation: !reduceMotion,
      fadeAnimation: !reduceMotion
    }).setView([52.05, 19.4], 6);
    L.control.scale({
      imperial: false
    }).addTo(map);
    tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    let failed = false;
    tiles.on('loading', () => {
      $('#map-status').textContent = 'Ładowanie mapy…';
    });
    tiles.on('tileerror', () => {
      failed = true;
      $('#map-status').textContent = 'Nie udało się wczytać części mapy. Lista pasiek pozostaje dostępna.';
      $('#map-retry').hidden = false;
    });
    tiles.on('load', () => {
      if (!failed) $('#map-status').textContent = 'Wybierz znacznik lub pasiekę z listy.';
    });
    tiles.addTo(map);
    layer = L.layerGroup().addTo(map);
    map.on('zoomend', drawMarkers);
    $('#map-retry').addEventListener('click', () => {
      failed = false;
      $('#map-retry').hidden = true;
      tiles.redraw();
    });
  }
  function syncUrl() {
    const u = new URL(location.href);
    u.searchParams.delete('produkt');
    u.searchParams.delete('q');
    if ($('#map-search').value.trim()) u.searchParams.set('q', $('#map-search').value.trim());
    if (selected.size === 1) u.searchParams.set('produkt', [...selected][0]);
    history.replaceState(null, '', u);
  }
  function render() {
    const q = normalize($('#map-search').value).trim();
    $('#product-filter-count').hidden = selected.size === 0;
    $('#product-filter-count').textContent = `Wybrano: ${selected.size}`;
    filtered = [...customApiaries, ...BASE_APIARIES].map(a => ({
      ...a,
      distance: position ? distance(position, a) : null
    })).filter(a => {
      const haystack = normalize([a.name, a.city, a.beekeeper, regionName(a.region), ...a.products.map(p => (PRODUCTS.find(t => t.id === p.type)?.name || p.type) + ' ' + p.name)].join(' '));
      return (!q || q.split(/\s+/).every(word => haystack.includes(word))) && (!$('#region').value || a.region === $('#region').value) && (!selected.size || a.products.some(p => selected.has(p.type))) && (!$('#shipping').checked || a.shipping) && (!$('#pickup').checked || a.pickup) && (!$('#bio').checked || a.bio) && (!$('#workshops').checked || a.workshops) && (!Number($('#rating').value) || (a.rating || 0) >= Number($('#rating').value)) && (!position || !Number($('#radius').value) || a.distance <= Number($('#radius').value));
    });
    filtered.sort((a, b) => $('#sort').value === 'distance' ? (a.distance ?? Infinity) - (b.distance ?? Infinity) : $('#sort').value === 'rating' ? (b.rating || 0) - (a.rating || 0) : a.name.localeCompare(b.name, 'pl'));
    $('#result-count').textContent = `Znalezione pasieki: ${filtered.length}`;
    const result = $('#apiary-results');
    result.replaceChildren(...filtered.map(card));
    if (!filtered.length) result.append(empty('Brak pasiek dla tych filtrów', 'Zwiększ promień, wybierz inne produkty lub wyczyść filtry.', btn('Wyczyść filtry', reset)));
    renderMarkers();
    syncUrl();
  }
  function card(a) {
    const types = [...new Set(a.products.map(p => PRODUCTS.find(t => t.id === p.type)?.name || p.type))].slice(0, 3);
    const info = el('div', {}, [el('span', {
      class: 'tag'
    }, a.demo ? 'Przykład' : 'Twój wpis'), el('h2', {}, a.name), el('p', {}, a.city + ' · ' + regionName(a.region)), el('p', {}, types.join(' · '))]);
    if (a.distance !== null) info.append(el('p', {}, a.distance.toLocaleString('pl', {
      maximumFractionDigits: 1
    }) + ' km w linii prostej'));
    if (a.demo && a.rating) info.append(el('p', {}, `★ ${a.rating.toLocaleString('pl')} · ocena przykładowa`));
    const actions = el('div', {
      class: 'actions'
    }, [btn('Profil i oferta', () => profile(a), 'button')]);
    if (map) actions.append(btn('Na mapie', () => {
      $('#map-layout').classList.remove('list-only');
      updateView('split');
      map.invalidateSize();
      map.setView([a.lat, a.lng], 11, {
        animate: !reduceMotion
      });
      $('#map').scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'center'
      });
    }));
    return el('article', {
      class: 'apiary-card'
    }, [imageNode(a.photo, a.demo ? 'Ilustracja pasieki' : a.name), info, actions]);
  }
  function drawMarkers() {
    if (!map) return;
    layer.clearLayers();
    const groups = filtered.map(a => ({
      apiaries: [a],
      point: map.project([a.lat, a.lng], map.getZoom())
    }));
    // Merge overlapping circles, including overlaps created by a new group centre.
    let merged = true;
    while (merged) {
      merged = false;
      outer: for (let i = 0; i < groups.length; i++) {
        for (let j = i + 1; j < groups.length; j++) {
          const first = groups[i], second = groups[j];
          if (first.point.distanceTo(second.point) >= 34) continue;
          const count = first.apiaries.length + second.apiaries.length;
          first.point = first.point.multiplyBy(first.apiaries.length)
            .add(second.point.multiplyBy(second.apiaries.length)).divideBy(count);
          first.apiaries.push(...second.apiaries);
          groups.splice(j, 1);
          merged = true;
          break outer;
        }
      }
    }
    groups.forEach(({ apiaries, point }) => {
      const grouped = apiaries.length > 1;
      const a = apiaries[0];
      const title = grouped ? `Pasieki w tym miejscu: ${apiaries.length}` : a.name;
      const marker = L.marker(map.unproject(point, map.getZoom()), {
        icon: L.divIcon({
          className: 'marker',
          html: grouped ? String(apiaries.length) : '',
          iconSize: [34, 34]
        }),
        title,
        alt: title,
        keyboard: true
      }).addTo(layer);
      if (grouped) {
        marker.on('click', () => {
          const sameLocation = apiaries.every(item => item.lat === a.lat && item.lng === a.lng);
          if (!sameLocation && map.getZoom() < map.getMaxZoom()) {
            map.setView(marker.getLatLng(), map.getZoom() + 1);
          } else {
            marker.bindPopup(el('div', {}, [el('strong', {}, title), ...apiaries.map(item =>
              el('div', {}, [el('p', {}, item.name), btn('Profil i oferta', () => profile(item), 'button')])
            )])).openPopup();
          }
        });
      } else {
        marker.bindPopup(el('div', {}, [el('strong', {}, a.name), el('p', {}, a.city), btn('Profil i oferta', () => profile(a), 'button')]));
      }
    });
  }
  function renderMarkers() {
    if (!map) return;
    if (filtered.length) map.fitBounds(filtered.map(a => [a.lat, a.lng]), {
      padding: [35, 35],
      maxZoom: 11,
      animate: false
    });else map.setView(position ? [position.lat, position.lng] : [52.05, 19.4], 6, {
      animate: false
    });
    drawMarkers();
    if (userMarker) {
      map.removeLayer(userMarker);
      userMarker = null;
    }
    if (position) userMarker = L.circleMarker([position.lat, position.lng], {
      radius: 8,
      color: '#12667b',
      fillOpacity: .8
    }).bindTooltip('Twoja lokalizacja').addTo(map);
  }
  function updateView(view) {
    $$('[data-view]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.view === view)));
    $('#map-layout').classList.toggle('list-only', view === 'list');
    if (view === 'split' && map) requestAnimationFrame(() => map.invalidateSize());
  }
  function reset() {
    geoToken++;
    $('#filters').reset();
    selected.clear();
    position = null;
    $('#radius-wrap').hidden = true;
    $('#radius-value').textContent = '50 km';
    setAction('#locate', 'Blisko mnie', 'location-crosshairs');
    $('#locate').disabled = false;
    $('#geo-status').textContent = '';
    $('#sort').value = 'name';
    $('#sort option[value=distance]').disabled = true;
    $$('#honey-filters button').forEach(b => b.setAttribute('aria-pressed', 'false'));
    render();
  }
  $('#filters').addEventListener('submit', e => e.preventDefault());
  $('#filters').addEventListener('input', e => {
    if (e.target.id === 'radius') $('#radius-value').textContent = Number(e.target.value) ? e.target.value + ' km' : 'bez limitu';
    if (e.target.matches('input,select')) render();
  });
  $('#sort').addEventListener('change', render);
  $('#reset-filters').addEventListener('click', reset);
  $$('[data-view]').forEach(b => b.addEventListener('click', () => updateView(b.dataset.view)));
  registerMapTool(query => {
    reset();
    $('#map-search').value = query;
    render();
    return {
      count: filtered.length,
      apiaries: filtered.map(a => ({
        name: a.name,
        city: a.city,
        example: !!a.demo
      }))
    };
  });
  $('#locate').addEventListener('click', () => {
    if (position) {
      position = null;
      geoToken++;
      $('#radius-wrap').hidden = true;
      setAction('#locate', 'Blisko mnie', 'location-crosshairs');
      $('#geo-status').textContent = 'Lokalizacja wyłączona.';
      $('#sort').value = 'name';
      $('#sort option[value=distance]').disabled = true;
      render();
      return;
    }
    if (!navigator.geolocation) {
      $('#geo-status').textContent = 'Przeglądarka nie obsługuje lokalizacji. Wpisz miejscowość.';
      return;
    }
    const token = ++geoToken;
    $('#locate').disabled = true;
    setAction('#locate', 'Ustalanie lokalizacji…', 'hourglass-half');
    $('#geo-status').textContent = 'Oczekiwanie na zgodę i pozycję urządzenia.';
    navigator.geolocation.getCurrentPosition(p => {
      if (token !== geoToken) return;
      position = {
        lat: p.coords.latitude,
        lng: p.coords.longitude
      };
      $('#radius-wrap').hidden = false;
      $('#sort option[value=distance]').disabled = false;
      $('#sort').value = 'distance';
      $('#locate').disabled = false;
      setAction('#locate', 'Wyłącz lokalizację', 'location-crosshairs');
      $('#geo-status').textContent = 'Pozycja ustalona. Odległości podajemy w linii prostej.';
      render();
    }, e => {
      if (token !== geoToken) return;
      $('#locate').disabled = false;
      setAction('#locate', 'Blisko mnie', 'location-crosshairs');
      $('#geo-status').textContent = e.code === 1 ? 'Brak zgody na lokalizację. Możesz wpisać miejscowość.' : e.code === 3 ? 'Ustalanie pozycji trwało zbyt długo. Spróbuj ponownie lub wpisz miejscowość.' : 'Nie można ustalić pozycji. Wpisz miejscowość.';
    }, {
      timeout: 10000,
      maximumAge: 60000
    });
  });
  document.addEventListener('apiaries-updated', render);
  setupMap();
  render();
}
function initPanel() {
  let editingRevision, saving = false;
  document.addEventListener('apiaries-updated', () => renderOwned());
  const form = $('#apiary-form');
  let editingId = null,
    photo = 'assets/pasieka.webp',
    imageToken = 0,
    processing = false,
    pinMap = null,
    pin = null;
  populateRegions($('#apiary-region'));
  for (const p of PRODUCTS) $('#product-checkboxes').append(el('label', {}, [el('input', {
    type: 'checkbox',
    name: 'product',
    value: p.id
  }), p.name]));
  function message(text, success = false) {
    $('#form-message').textContent = text;
    $('#form-message').classList.toggle('success', success);
  }
  function updatePreview() {
    $('#preview-name').textContent = $('#name').value.trim() || 'Nazwa Twojej pasieki';
    $('#preview-city').textContent = $('#city').value.trim() || 'Miejscowość';
    $('#preview-description').textContent = $('#description').value.trim() || 'Tutaj pojawi się opis Twojej pasieki.';
    $('#preview-photo').src = validPhoto(photo);
    $('#preview-photo').alt = photo.startsWith('data:') ? 'Podgląd wybranego zdjęcia' : 'Ilustracja pasieki — domyślna okładka';
    $('#preview-products').replaceChildren(...$$('input[name=product]:checked', form).map(c => el('span', {
      class: 'tag'
    }, PRODUCTS.find(p => p.id === c.value).name)));
    $('#remove-photo').hidden = !photo.startsWith('data:');
  }
  function clearErrors() {
    $$('[aria-invalid]', form).forEach(n => {
      n.removeAttribute('aria-invalid');
      n.removeAttribute('aria-describedby');
    });
    $$('.field-error', form).forEach(n => n.remove());
  }
  function fieldError(input, text) {
    input.setAttribute('aria-invalid', 'true');
    const id = input.id + '-error';
    input.setAttribute('aria-describedby', id);
    input.after(el('span', {
      id,
      class: 'field-error'
    }, text));
  }
  function validate(scope = form, silent = false) {
    if (!silent) clearErrors();
    let first = null;
    const required = ['name', 'beekeeper', 'city', 'apiary-region', 'address', 'phone', 'lat', 'lng'];
    for (const id of required) {
      const input = $('#' + id);
      if (!scope.contains(input)) continue;
      let error = '';
      if (!input.value.trim()) error = 'Uzupełnij to pole.';else if (['lat', 'lng'].includes(id) && !input.checkValidity()) error = 'Wpisz współrzędną w podanym zakresie.';else if (id === 'phone' && !/^\+?[\d\s()-]{7,20}$/.test(input.value.trim())) error = 'Podaj poprawny numer telefonu.';else if (id === 'phone' && (input.value.replace(/\D/g, '').length < 9 || input.value.replace(/\D/g, '').length > 15)) error = 'Numer powinien mieć od 9 do 15 cyfr.';
      if (error) {
        if (!silent) fieldError(input, error);
        first ??= input;
      }
    }
    if (scope.contains($('#email')) && $('#email').value && !$('#email').checkValidity()) {
      if (!silent) fieldError($('#email'), 'Podaj poprawny adres e-mail.');
      first ??= $('#email');
    }
    if (scope.contains($('#product-checkboxes')) && !form.querySelectorAll('input[name=product]:checked').length) {
      const input = $('input[name=product]', form);
      input.id = 'first-product';
      if (!silent) fieldError(input, 'Wybierz co najmniej jeden produkt.');
      first ??= input;
    }
    if (first) {
      if (silent) return false;
      showStep(steps.indexOf(first.closest('.apiary-step')));
      message('Popraw zaznaczone pola. Wpis nie został zapisany.');
      first.focus();
      return false;
    }
    return true;
  }
  const steps = Array.from(form.querySelectorAll('.apiary-step'));
  let currentStep = 0;
  function updateNavigation() {
    $('#apiary-next').disabled = processing || !validate(steps[currentStep], true);
    $('#save-apiary').disabled = saving || processing || !validate(form, true);
  }
  function showStep(index) {
    currentStep = index;
    steps.forEach((step, i) => step.hidden = i !== index);
    $('#apiary-next').hidden = index === steps.length - 1;
    $('#save-apiary').hidden = index !== steps.length - 1;
    $('#apiary-step-status').textContent = 'Krok ' + (index + 1) + ' z 5 · ' + $('h3', steps[index]).textContent;
    $('#apiary-progress').setAttribute('aria-valuenow', index + 1);
    $('#apiary-progress').setAttribute('aria-valuetext', $('#apiary-step-status').textContent);
    $('#apiary-progress span').style.transform = 'scaleX(' + ((index + 1) / steps.length) + ')';
    updateNavigation();
    if (index === 1) {
      if (!pinMap) initPin();
      if ($("#lat").value && $("#lng").value) setPin(Number($("#lat").value), Number($("#lng").value), true);
      requestAnimationFrame(() => pinMap?.invalidateSize());
    }
    $('h3', steps[index]).focus();
  }
  function openEditor() {
    $('#dodaj').hidden = false;
    $('#start-apiary').hidden = true;
    $('#start-apiary').setAttribute('aria-expanded', 'true');
    showStep(0);
  }
  function closeEditor() {
    $('#dodaj').hidden = true;
    $('#start-apiary').hidden = false;
    $('#start-apiary').setAttribute('aria-expanded', 'false');
    $('#start-apiary').focus();
  }
  $('#start-apiary').addEventListener('click', openEditor);
  $('#apiary-back').addEventListener('click', () => {
    message('');
    if (currentStep === 0) closeEditor();
    else showStep(currentStep - 1);
  });
  $('#apiary-next').addEventListener('click', () => {
    if (!processing && validate(steps[currentStep])) {
      message('');
      showStep(currentStep + 1);
    }
  });
  form.addEventListener('input', updateNavigation);
  form.addEventListener('change', updateNavigation);
  function resetEditor() {
    editingId = null;
    form.reset();
    photo = 'assets/pasieka.webp';
    imageToken++;
    processing = false;
    updateNavigation();
    $('#photo-status').textContent = '';
    $('#cancel-edit').hidden = true;
    $('#editor-title').textContent = 'Dodaj pasiekę';
    setAction('#save-apiary', 'Opublikuj pasiekę', 'floppy-disk');
    clearErrors();
    if (pin && pinMap) {
      pinMap.removeLayer(pin);
      pin = null;
    }
    updatePreview();
  }
  function setPin(lat, lng, center = false) {
    if (!pinMap || !Number.isFinite(lat) || !Number.isFinite(lng) || lat < 49 || lat > 55 || lng < 14 || lng > 24.2) return;
    if (!pin) {
      pin = L.marker([lat, lng], {
        draggable: true,
        icon: L.divIcon({
          className: 'marker',
          html: '●',
          iconSize: [34, 34]
        }),
        title: 'Położenie Twojej pasieki'
      }).addTo(pinMap);
      pin.on('dragend', () => {
        const p = pin.getLatLng();
        $('#lat').value = p.lat.toFixed(6);
        $('#lng').value = p.lng.toFixed(6);
        updateNavigation();
      });
    } else pin.setLatLng([lat, lng]);
    if (center) pinMap.setView([lat, lng], 10, {
      animate: false
    });
  }
  function initPin() {
    if (!window.L) {
      $('#pin-status').textContent = 'Mapa jest niedostępna. Wpisz współrzędne ręcznie.';
      return;
    }
    pinMap = L.map('pin-map', {
      scrollWheelZoom: false,
      zoomAnimation: !reduceMotion
    }).setView([52.05, 19.4], 5);
    const t = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    t.on('tileerror', () => $('#pin-status').textContent = 'Nie udało się wczytać mapy. Możesz wpisać współrzędne ręcznie.');
    t.addTo(pinMap);
    pinMap.on('click', e => {
      const {
        lat,
        lng
      } = e.latlng;
      if (lat < 49 || lat > 55 || lng < 14 || lng > 24.2) {
        $('#pin-status').textContent = 'Wybierz miejsce w zakresie mapy Polski (49–55° N, 14–24,2° E).';
        return;
      }
      $('#lat').value = lat.toFixed(6);
      $('#lng').value = lng.toFixed(6);
      setPin(lat, lng);
      updateNavigation();
      $('#pin-status').textContent = 'Lokalizacja wskazana. Sprawdź również adres.';
    });
  }
  function renderOwned() {
    $('#export').disabled = ownedApiaries().length === 0;
    const list = $('#owned-list');
    list.replaceChildren(...ownedApiaries().map(a => el('article', {
      class: 'owned-card'
    }, [el('span', {
      class: 'tag'
    }, 'Opublikowano na stronie'), el('h3', {}, a.name), el('p', {
      class: 'meta'
    }, a.city), el('div', {
      class: 'actions'
    }, [btn('Podgląd', () => profile(a)), btn('Edytuj', () => edit(a)), btn('Usuń', () => confirmDelete(a), 'secondary danger')])])));
    if (!ownedApiaries().length) list.append(empty('Tu pojawi się Twoja pasieka', 'Wypełnij formularz poniżej, aby przygotować pierwszą wizytówkę.', btn('Dodaj pasiekę', openEditor, 'button')));
  }
  function edit(a) {
    resetEditor();
    editingId = a.id;
    editingRevision = a.revision;
    for (const field of ['name', 'beekeeper', 'city', 'address', 'phone', 'email', 'wni', 'description', 'lat', 'lng']) $('#' + field).value = a[field] ?? '';
    $('#apiary-region').value = a.region;
    for (const k of ['shipping', 'pickup', 'bio', 'workshops', 'wandering']) form.elements[k].checked = !!a[k];
    $$('input[name=product]', form).forEach(c => c.checked = a.products.some(p => p.type === c.value));
    photo = validPhoto(a.photo);
    openEditor();
    $('#cancel-edit').hidden = false;
    $('#editor-title').textContent = 'Edytuj pasiekę';
    setAction('#save-apiary', 'Zapisz zmiany', 'floppy-disk');
    message('');
    updatePreview();
    setPin(a.lat, a.lng, true);
    $('#dodaj').scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth'
    });
    $('#name').focus({
      preventScroll: true
    });
  }
  function confirmDelete(a) {
    const body = el('div', {
      class: 'dialog-body'
    }, [el('h2', {
      id: 'dialog-title'
    }, 'Usunąć opublikowany wpis?'), el('p', {}, a.name), el('p', {}, 'Usuniesz tę wizytówkę i jej zdjęcie ze wspólnej mapy dla wszystkich odwiedzających.'), el('div', {
      class: 'actions'
    }, [btn('Zachowaj wpis', closeDetail), btn('Usuń wpis', async () => {
      try {
        await deleteApiary(a);
        if (editingId === a.id) resetEditor();
        closeDetail();
        renderOwned();
        notify('Wpis został usunięty ze wspólnej mapy.');
        $('#owned-title').setAttribute('tabindex', '-1');
        $('#owned-title').focus();
      } catch (e) {
        notify(e.message);
      }
    }, 'secondary danger')])]);
    openDetail('Usunąć opublikowany wpis?', body);
  }
  form.addEventListener('input', event => {
    updatePreview();
    if (['lat', 'lng'].includes(event.target.id) && $('#lat').value && $('#lng').value) setPin(Number($('#lat').value), Number($('#lng').value));
  });
  $('#photo').addEventListener('change', async event => {
    const token = ++imageToken;
    processing = false;
    updateNavigation();
    const file = event.target.files[0];
    if (!file) return;
    const allowed = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowed.includes(file.type) || file.size > 5 * 1024 * 1024) {
      $('#photo-status').textContent = 'Wybierz JPG, PNG lub WebP o rozmiarze do 5 MB. Poprzednie zdjęcie pozostało bez zmian.';
      event.target.value = '';
      return;
    }
    processing = true;
    updateNavigation();
    $('#photo-status').textContent = 'Przygotowywanie zdjęcia…';
    let objectUrl;
    try {
      objectUrl = URL.createObjectURL(file);
      const img = new Image();
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = () => reject(Error('Nie można odczytać zdjęcia. Wybierz poprawny plik obrazu.'));
        img.src = objectUrl;
      });
      if (token !== imageToken) return;
      const factor = Math.min(1, 900 / Math.max(img.width, img.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(img.width * factor));
      canvas.height = Math.max(1, Math.round(img.height * factor));
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      photo = canvas.toDataURL('image/jpeg', .8);
      $('#photo-status').textContent = 'Zdjęcie gotowe. Zostanie zapisane razem z wizytówką.';
      updatePreview();
    } catch (e) {
      if (token === imageToken) {
        $('#photo-status').textContent = e.message;
        event.target.value = '';
      }
    } finally {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      if (token === imageToken) {
        processing = false;
        updateNavigation();
      }
    }
  });
  $('#remove-photo').addEventListener('click', () => {
    imageToken++;
    processing = false;
    updateNavigation();
    photo = 'assets/pasieka.webp';
    $('#photo').value = '';
    $('#photo-status').textContent = 'Przywrócono domyślną ilustrację.';
    updatePreview();
  });
  $('#cancel-edit').addEventListener('click', () => {
    resetEditor();
    closeEditor();
    notify('Edycja anulowana. Zapisany wpis pozostał bez zmian.');
  });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if ($('#dodaj').hidden || saving) return;
    if (currentStep < steps.length - 1) {
      $('#apiary-next').click();
      return;
    }
    if (processing) {
      message('Poczekaj na przygotowanie zdjęcia.');
      return;
    }
    if (!validate()) return;
    saving = true;
    $('#save-apiary').disabled = true;
    try {
      const fd = new FormData(form);
      const a = {
        id: editingId || 'local-' + (crypto.randomUUID ? crypto.randomUUID() : Date.now() + '-' + Math.random().toString(36).slice(2)),
        demo: false,
        rating: null,
        reviews: [],
        photo,
        products: fd.getAll('product').map(type => ({
          type,
          name: PRODUCTS.find(p => p.id === type).name
        }))
      };
      for (const k of ['name', 'beekeeper', 'city', 'address', 'phone', 'email', 'wni', 'description', 'region']) a[k] = String(fd.get(k) || '').trim();
      for (const k of ['shipping', 'pickup', 'bio', 'workshops', 'wandering']) a[k] = fd.has(k);
      a.lat = Number(fd.get('lat'));
      a.lng = Number(fd.get('lng'));
      await saveApiary(a, !!editingId, editingRevision);
      resetEditor();
      renderOwned();
      message('Pasieka została zapisana na serwerze. Jest widoczna dla wszystkich odwiedzających mapę.', true);
      notify('Opublikowano pasiekę na wspólnej mapie.');
      closeEditor();
    } catch (e) {
      message(e.message);
      $('#form-message').focus();
    } finally {
      saving = false;
      updateNavigation();
    }
  });
  $('#export').addEventListener('click', () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify({
      version: 2,
      apiaries: ownedApiaries()
    }, null, 2)], {
      type: 'application/json'
    }));
    const a = el('a', {
      href: url,
      download: 'moje-pasieki.json'
    });
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    notify('Przygotowano kopię Twoich wpisów do pobrania.');
  });
  renderOwned();
  updatePreview();
  if (storageProblem) message(storageProblem);
}
function initMotion() {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const progress = el('div', {class: 'scroll-progress', 'aria-hidden': 'true'});
  if (document.body.dataset.page !== 'panel') document.body.prepend(progress);
  let frame = 0;
  function updateProgress() {
    frame = 0;
    const root = document.documentElement;
    const range = root.scrollHeight - root.clientHeight;
    const ratio = range > 0 ? Math.max(0, Math.min(1, window.scrollY / range)) : 0;
    progress.style.transform = `scaleX(${ratio})`;
    progress.hidden = range <= 0;
  }
  function scheduleProgress() {
    if (!frame) frame = requestAnimationFrame(updateProgress);
  }
  addEventListener('scroll', scheduleProgress, {passive: true});
  addEventListener('resize', scheduleProgress, {passive: true});
  addEventListener('pageshow', scheduleProgress);
  if ('ResizeObserver' in window) new ResizeObserver(scheduleProgress).observe(document.body);
  updateProgress();

  // Delegation includes buttons created by filtering and editing; keyboard clicks work too.
  const running = new Set();
  const buttonAnimations = new WeakMap();
  function animate(node, frames, options) {
    if (reducedMotion.matches || !node.animate) return;
    const animation = node.animate(frames, options);
    running.add(animation);
    const cleanup = () => running.delete(animation);
    animation.addEventListener('finish', cleanup, {once: true});
    animation.addEventListener('cancel', cleanup, {once: true});
    return animation;
  }
  document.addEventListener('click', event => {
    const button = event.target.closest('button, a.button, a.secondary');
    if (!button || button.disabled || button.closest('.leaflet-container') || reducedMotion.matches) return;
    buttonAnimations.get(button)?.cancel();
    const animation = animate(button, [
      {transform: 'scale(1)'},
      {transform: 'scale(.97)', offset: .35},
      {transform: 'scale(1)'}
    ], {duration: 190, easing: 'ease-out'});
    if (animation) buttonAnimations.set(button, animation);
  });
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) for (const animation of running) animation.cancel();
  });

  // Content is always visible by default, even when observers or animations are unavailable.
  if (!('IntersectionObserver' in window)) return;
  const seen = new WeakSet();
  const selector = '.hero-copy, .hero-art, .section-heading, .page-heading, .journal-heading, .product-card, .article-card, .apiary-card, .owned-list > *, .gallery-grid > *, .guide-grid > article';
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      animate(entry.target, [
        {opacity: .65, transform: 'translateY(8px)'},
        {opacity: 1, transform: 'translateY(0)'}
      ], {duration: 320, easing: 'cubic-bezier(.2,.7,.3,1)'});
    }
  }, {threshold: 0, rootMargin: '0px 0px -16px 0px'});
  function watch(node) {
    if (!(node instanceof Element)) return;
    const elements = [...node.querySelectorAll(selector)];
    if (node.matches(selector)) elements.push(node);
    for (const element of elements) {
      if (seen.has(element)) continue;
      seen.add(element);
      observer.observe(element);
    }
  }
  watch($('#main'));
  new MutationObserver(records => {
    for (const record of records) for (const node of record.addedNodes) watch(node);
    scheduleProgress();
  }).observe($('#main'), {childList: true, subtree: true});
}
async function init() {
  try {
    const response = await fetch('dane-pasiek/przykladowe.json', {cache: 'no-store'});
    if (!response.ok) throw Error('Nie udało się wczytać przykładów.');
    BASE_APIARIES = await response.json();
  } catch { storageProblem = 'Nie udało się pobrać danych. Otwórz stronę przez adres serwera.'; }
  try { await refreshApiaries(); } catch (error) { storageProblem = error.message; }
  initDialogs();
  $('.menu-toggle').addEventListener('click', () => {
    const expanded = $('.menu-toggle').getAttribute('aria-expanded') !== 'true';
    $('.menu-toggle').setAttribute('aria-expanded', String(expanded));
    $('#navigation').classList.toggle('open', expanded);
  });
  $('#navigation').addEventListener('click', e => {
    if (e.target.closest('a')) {
      $('#navigation').classList.remove('open');
      $('.menu-toggle').setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && $('#navigation').classList.contains('open')) {
      $('#navigation').classList.remove('open');
      $('.menu-toggle').setAttribute('aria-expanded', 'false');
      $('.menu-toggle').focus();
    }
  });
  const page = document.body.dataset.page;
  if (page === 'home') initHome();
  if (page === 'map') initMap();
  if (page === 'blog') initBlog();
  if (page === 'panel') initPanel();
  if (page === 'gallery') $('#gallery-grid').replaceChildren(...photos.map((p, i) => el('button', {
    type: 'button',
    onclick: () => openPhoto(photos, i)
  }, [imageNode(p.url, p.caption), el('span', {}, p.caption + ' ↗')])));
  if (storageProblem && page !== 'panel') notify(storageProblem);
  initMotion();
  if (!storageProblem) {
    try { await migrateApiaries(); } catch (error) { notify('Nie przeniesiono wszystkich dawnych wpisów. Kopia w przeglądarce została zachowana. ' + error.message); }
  }
  let refreshFailed = false;
  const update = async () => {
    if (document.hidden) return;
    try { await refreshApiaries(); refreshFailed = false; }
    catch { if (!refreshFailed) notify('Nie można odświeżyć pasiek. Wyświetlane dane mogą być nieaktualne. Ponawiamy połączenie.'); refreshFailed = true; }
  };
  setInterval(update, 15000);
  window.addEventListener('focus', update);
  document.addEventListener('visibilitychange', update);
}
// Optional browser capability; ordinary browsers use the same visible search.
function registerMapTool(search) {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const lifecycle = new AbortController();
  addEventListener('pagehide', () => lifecycle.abort(), {
    once: true
  });
  try {
    Promise.resolve(context.registerTool({
      name: 'filter_apiaries',
      title: 'Wyszukaj pasieki',
      description: 'Resetuje filtry i pokazuje na mapie oraz liście pasieki pasujące do podanej frazy. Nie publikuje ani nie zapisuje danych.',
      inputSchema: {
        type: 'object',
        properties: {
          query: {
            type: 'string',
            maxLength: 160
          }
        },
        required: ['query'],
        additionalProperties: false
      },
      annotations: {
        readOnlyHint: false,
        untrustedContentHint: true
      },
      execute(input) {
        if (!input || typeof input !== 'object' || typeof input.query !== 'string' || input.query.length > 160 || Object.keys(input).some(k => k !== 'query')) throw Error('Podaj wyłącznie query: tekst do 160 znaków.');
        return search(input.query.trim());
      }
    }, {
      signal: lifecycle.signal
    })).catch(() => {});
  } catch {/* Search remains available without the optional registry. */}
}
document.addEventListener('DOMContentLoaded', init);
