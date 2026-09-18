const dishes = [
  { name: "Currywurst", emoji: "🌭", short: "Pølse, krydret tomatsauce og karrypulver — en Berlin-signatur." },
  { name: "Bratwurst", emoji: "🔥", short: "Grillet tysk pølse med sprødt skind; enkel, salt og saftig." },
  { name: "Schnitzel", emoji: "🍋", short: "Tyndt, paneret og sprødstegt kød, ofte serveret med citron." },
  { name: "Döner kebab", emoji: "🥙", short: "Brød fyldt med kød, salat, kål og sauce — udviklet til Berlin-tempo." },
  { name: "Käsespätzle", emoji: "🧀", short: "Bløde ægnudler med smeltet ost og ristede løg. Alpin comfort food." },
  { name: "Fischbrötchen", emoji: "🐟", short: "Fisk i bolle med løg, sylt og frisk syre; en nordtysk klassiker." },
  { name: "Mettbrötchen", emoji: "🧅", short: "Råt, krydret svinekød på brød med løg. Spørg altid til friskhed og allergener." },
  { name: "Pretzel", emoji: "🥨", short: "Blød kringle med mørk skorpe, groft salt og et karakteristisk knæk." },
  { name: "Quarkbällchen", emoji: "🍩", short: "Små, luftige kvarkkugler vendt i sukker — perfekt som finale." },
];

const mapPlaces = [
  { id: "brandenburg", name: "Brandenburger Tor", type: "sight", icon: "★", points: 4, lat: 52.51628, lng: 13.37770, text: "Berlins klassiske port og et sikkert gruppefoto.", challenge: "Tag et pull-request-billede foran gatewayen. Godkendelse er implicit." },
  { id: "tv-tower", name: "Fernsehturm", type: "sight", icon: "★", points: 3, lat: 52.52082, lng: 13.40942, text: "Byens letteste pejlemærke — kig op, når I farer vild.", challenge: "Få tårnet til at ligne verdens dyreste Wi-Fi-antenne." },
  { id: "museum-island", name: "Museumsinsel", type: "sight", icon: "★", points: 4, lat: 52.51693, lng: 13.40100, text: "Monumental arkitektur, Spree og fem store museer.", challenge: "Dokumentér fem museer deployet på samme monolit." },
  { id: "east-side", name: "East Side Gallery", type: "sight", icon: "★", points: 4, lat: 52.50502, lng: 13.43969, text: "Den længste bevarede del af Berlinmuren, dækket af kunst.", challenge: "Find jeres favoritmural. Resistér trangen til at refaktorere den." },
  { id: "victory-column", name: "Siegessäule", type: "sight", icon: "★", points: 4, lat: 52.51453, lng: 13.35012, text: "Den gyldne engel midt i Tiergarten — flot både nedefra og oppefra.", challenge: "Tag et sejrsfoto. Premature celebration accepteres i staging." },
  { id: "reichstag", name: "Reichstag", type: "sight", icon: "★", points: 4, lat: 52.51862, lng: 13.37620, text: "Historisk parlament med en moderne glaskuppel.", challenge: "Dokumentér et legacy-system, der stadig er i aktiv maintenance." },
  { id: "memorial", name: "Mindesmærket for Europas myrdede jøder", type: "sight", icon: "★", points: 3, lat: 52.51392, lng: 13.37869, text: "Et sted for erindring og eftertanke tæt ved Brandenburger Tor.", challenge: "Ingen joke her. Tag et respektfuldt oversigtsbillede — stå ikke på stelerne." },
  { id: "berlin-cathedral", name: "Berliner Dom", type: "sight", icon: "★", points: 3, lat: 52.51906, lng: 13.40103, text: "Stor kuppel, grønt kobber og maksimal arkitektonisk overengineering.", challenge: "Få hele kuplen med uden at introducere en panorama-bug." },
  { id: "checkpoint-charlie", name: "Checkpoint Charlie", type: "sight", icon: "★", points: 2, lat: 52.50759, lng: 13.39039, text: "Det tidligere grænsepunkt mellem øst og vest.", challenge: "Fotografér den pensionerede firewall. HTTP 403 er nu deprecated." },
  { id: "oberbaum", name: "Oberbaumbrücke", type: "sight", icon: "★", points: 3, lat: 52.50194, lng: 13.44502, text: "Rød murstensbro, U-Bahn og et af byens bedste Spree-kig.", challenge: "Find en bro mellem to systemer, der faktisk virker." },
  { id: "tempelhof", name: "Tempelhofer Feld", type: "gem", icon: "✦", points: 5, lat: 52.47332, lng: 13.40338, text: "En tidligere lufthavn, nu enorm offentlig park.", challenge: "Airport process terminated successfully. Tag et billede på runwayen." },
  { id: "hackesche", name: "Hackesche Höfe", type: "gem", icon: "✦", points: 5, lat: 52.52482, lng: 13.40286, text: "Otte sammenhængende gårdrum med jugendstil, butikker og caféer.", challenge: "Find den smukkeste nested courtyard. O(n²), men værd at køre." },
  { id: "schwarzenberg", name: "Haus Schwarzenberg", type: "gem", icon: "✦", points: 6, lat: 52.52513, lng: 13.40223, text: "Street art, små kultursteder og kontrolleret visuel kaos.", challenge: "Find gården som en manglende semikolon: langsomt og med stigende panik." },
  { id: "soviet-memorial", name: "Sowjetisches Ehrenmal Treptow", type: "gem", icon: "✦", points: 6, lat: 52.48611, lng: 13.46902, text: "Monumentalt mindesmærke i Treptower Park.", challenge: "Tag et respektfuldt billede af skalaen. Dette er dokumentation, ikke en meme." },
  { id: "markthalle", name: "Markthalle Neun", type: "food", icon: "●", lat: 52.50213, lng: 13.43185, text: "Historisk markedshal med skiftende madboder og lokale producenter." },
  { id: "curry36", name: "Curry 36", type: "food", icon: "●", lat: 52.49331, lng: 13.38713, text: "Et kendt stop til en hurtig currywurst ved Mehringdamm." },
  { id: "mustafas", name: "Mustafa’s Gemüse Kebap", type: "food", icon: "●", lat: 52.49387, lng: 13.38817, text: "Populær grøntsagsdöner — køen er en del af oplevelsen." },
  { id: "konnopke", name: "Konnopke’s Imbiss", type: "food", icon: "●", lat: 52.54085, lng: 13.41242, text: "Klassisk currywurst under U-Bahn-sporene i Prenzlauer Berg." },
  { id: "burgermeister", name: "Burgermeister Schlesisches Tor", type: "food", icon: "●", lat: 52.50038, lng: 13.44134, text: "Burgersted i en tidligere offentlig toiletbygning — meget Berlin." },
  { id: "viktoriapark", name: "Viktoriapark", type: "gem", icon: "✦", points: 5, lat: 52.48835, lng: 13.38006, text: "Vandfald, monument og et overraskende kig ud over byen.", challenge: "Find vandfaldet. Nature API kan være deaktiveret i tørvejr." },
  { id: "kornerpark", name: "Körnerpark", type: "gem", icon: "✦", points: 6, lat: 52.47020, lng: 13.43854, text: "Formel nybarok park gemt flere meter under gadens niveau.", challenge: "Bevis at Berlin pludselig loadede et aristokratisk CSS-theme." },
  { id: "klunkerkranich", name: "Klunkerkranich", type: "gem", icon: "✦", points: 5, lat: 52.48243, lng: 13.43162, text: "Taghave over Neukölln med udsigt og afslappet stemning.", challenge: "Tag skyline-proof fra et parkeringshus med overraskende god frontend." },
  { id: "teufelsberg", name: "Teufelsberg", type: "gem", icon: "✦", points: 8, lat: 52.49738, lng: 13.24116, text: "Forladt aflytningsstation, street art og et stort Berlin-panorama.", challenge: "Besøg den oprindelige observability stack. Sovjetunionen har left the channel." },
];

const questPlaces = mapPlaces.filter((place) => place.points);

// Exact tour stops are added here once confirmed. They stay invisible in the UI
// until GPS proximity unlocks each clue and, finally, the name.
const mysteryStops = [
  // { name: "Stopnavn", lat: 52.52, lng: 13.40, district: "Kreuzberg", clueFar: "Søg mod kanalen", clueNear: "Lyt efter U-Bahn" },
];

const challenges = [
  { category: "FOTO · ALLE HOLD", icon: "📸", points: 3, title: "Det uofficielle albumcover", text: "Tag et dramatisk bandfoto med dagens mad som hovedperson. Mere attitude giver ikke nødvendigvis flere point — men det hjælper." },
  { category: "SCENE · 30 SEKUNDER", icon: "🎭", points: 3, title: "Michelin-dommeren fra helvede", text: "Giv en 15-sekunders, alt for alvorlig anmeldelse af den seneste bid. Brug mindst ét ord, ingen helt forstår." },
  { category: "FOTO · BERLIN", icon: "🐻", points: 2, title: "Menneskelig bjørn", text: "Genskab Berlins bjørn med hele holdet. Ét menneske er bjørnen; resten er byvåbnet. Logik er valgfrit." },
  { category: "MAD · BLIND TEST", icon: "🕵️", points: 3, title: "Hvad i saucen?", text: "Én fra holdet lukker øjnene og gætter en sikker ingrediens eller sauce. Tjek allergier først — heltemod giver nul point." },
  { category: "FOTO · MODE", icon: "💅", points: 2, title: "Serviet couture", text: "Design et stykke haute couture af én serviet. Tag et catwalk-billede, før moden falder fra hinanden." },
  { category: "REKLAME · ONE TAKE", icon: "📺", points: 3, title: "Sælg den bid", text: "Lav en 10-sekunders reklame for retten foran jer. Den skal indeholde et slogan og en helt urimelig sundhedspåstand." },
  { category: "LYD · HOLDKOR", icon: "🎤", points: 2, title: "Dagens food-jingle", text: "Opfind en jingle på fem ord om dagens bedste bid. Hele holdet skal levere den med pinlig overbevisning." },
  { category: "FOTO · OPTISK FUP", icon: "🤏", points: 3, title: "Kæmpebid eller minimenneske", text: "Brug perspektiv til at få én snack til at se enorm ud — eller et holdmedlem meget lille. Ingen forklaring bagefter." },
  { category: "TYSK · MOD", icon: "🇩🇪", points: 2, title: "Bestil med pondus", text: "Bestil eller spørg om en anbefaling på tysk. Venligt, kort og uden at holde køen som gidsel." },
  { category: "SMAG · POESI", icon: "📝", points: 2, title: "Forbudt: god og lækker", text: "Beskriv den seneste ret med tre ord — uden at bruge ‘god’, ‘lækker’ eller ‘smager’. Dommeren belønner kreativt vrøvl." },
  { category: "FOTO · FILMPLAKAT", icon: "🎬", points: 3, title: "Döner: The Movie", text: "Lav en filmplakat med mad, helt, skurk og et blik mod horisonten. Bonusrespekt for en tåbelig titel." },
  { category: "BERLIN · DETEKTIV", icon: "🔎", points: 2, title: "Find den mærkeligste detalje", text: "I har 90 sekunder til at fotografere den mest Berlin-agtige detalje i nærheden. Forklar jeres fund som museumsinspektører." },
  { category: "KORT · OPDAGELSE", icon: "🗺️", points: 3, title: "Jagt et grønt gem", text: "Find den nærmeste grønne gem-markør på turistkortet. Tag et billede af den mest oversete detalje på stedet." },
  { category: "GPS · FOTOJAGT", icon: "📍", points: 2, title: "Jer er her", text: "Åbn kortet, find jeres blå prik og tag et holdbillede med et tydeligt Berlin-kendetegn i baggrunden." },
  { category: "ØL · KAN VÆRE VAND", icon: "🍻", points: 2, alcohol: true, title: "Skål i slowmotion", text: "Lav turens mest filmiske skål. Øl, vand og sodavand tæller lige meget; point for ansigtsudtryk, ikke promille." },
  { category: "ØL · KAN VÆRE VAND", icon: "🧐", points: 3, alcohol: true, title: "Øl-sommelieren", text: "Beskriv en valgfri drik som en urimeligt dyr vin: noter, eftersmag og barndomsminde. En slurk er nok — skuespillet tæller." },
  { category: "ØL · HOLDSPORT", icon: "💧", points: 2, alcohol: true, title: "Hydreringsministeren", text: "Udnævn en minister, som skaffer vand til hele holdet og holder en 10-sekunders tale om national væskebalance." },
];

const secretMissions = [
  "Få et andet hold til frivilligt at sige ‘det tæller ikke’. Afslør først missionen bagefter.",
  "Få hele gruppen til at skåle uden selv at bruge ordet ‘skål’.",
  "Snig ordet ‘kartoffelminister’ naturligt ind i en samtale, uden at nogen spørger hvorfor.",
  "Få et andet hold til at tage et billede af jer — uden at fortælle, at det giver bonuspoint.",
  "Overbevis nogen om, at jeres hold har en officiel maskot. Bonusrespekt hvis maskotten får et navn.",
  "Start en spontan afstemning om noget ligegyldigt og få mindst seks mennesker til at stemme.",
  "Få nogen fra et andet hold til at nynne en melodi, I vælger.",
  "Få turlederen til at bruge ordet ‘legendarisk’ i en sætning.",
];

const forbiddenWords = ["lækkert", "Berlin", "skål", "øl", "mad", "point", "curry"];
const defaultTeams = ["Team Curry", "Team Döner", "Team Pretzel"];

function safeParse(value, fallback) {
  try { return JSON.parse(value) ?? fallback; } catch { return fallback; }
}

function freshGame() {
  return {
    teams: defaultTeams.map((name, index) => ({ name, score: 0, mission: index, revealed: false, completed: false })),
    prize: "Vinderne vælger sidste stop og får en valgfri drik af taberne",
    beerMode: true,
    forbiddenWord: "lækkert",
    round: 1,
    challenge: 0,
  };
}

function freshCityGame() {
  return { name: "", team: "", visits: {}, photos: {} };
}

const storedGame = safeParse(localStorage.getItem("berlinGame"), null);
const storedCityGame = safeParse(localStorage.getItem("berlinCityGame"), null);
const state = {
  stops: new Set(safeParse(localStorage.getItem("berlinStops"), [])),
  dishes: new Set(safeParse(localStorage.getItem("berlinDishes"), [])),
  game: storedGame?.teams?.length === 3 ? storedGame : freshGame(),
  city: storedCityGame?.visits && storedCityGame?.photos ? storedCityGame : freshCityGame(),
};

const timeline = document.querySelector("#timeline");
const dishGrid = document.querySelector("#dishGrid");
const progressCount = document.querySelector("#progressCount");
const progressBar = document.querySelector("#progressBar");
const toast = document.querySelector("#toast");
const setupDialog = document.querySelector("#gameSetup");
const winnerDialog = document.querySelector("#winnerDialog");
const setupForm = document.querySelector("#setupForm");
let toastTimer;
let deferredInstallPrompt;
let evidenceUrl;
let berlinMap;
let placeMarkers = [];
let userMarker;
let accuracyCircle;
let mysteryArea;
let mysteryMarker;
let locationWatch;
let hasCenteredOnUser = false;
let currentMysteryStop = Math.max(0, Number(localStorage.getItem("berlinMysteryStop") || 0));
let lastKnownPosition;
let activeQuestId;
let currentMapFilter = "all";

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function saveState() {
  localStorage.setItem("berlinStops", JSON.stringify([...state.stops]));
  localStorage.setItem("berlinDishes", JSON.stringify([...state.dishes]));
  localStorage.setItem("berlinGame", JSON.stringify(state.game));
  localStorage.setItem("berlinCityGame", JSON.stringify(state.city));
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}

function cityScore() {
  return questPlaces.reduce((total, place) => total + (state.city.visits[place.id] ? place.points : 0), 0);
}

function compressPhoto(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    const image = new Image();
    reader.onerror = reject;
    image.onerror = reject;
    reader.onload = () => { image.src = reader.result; };
    image.onload = () => {
      const maxSide = 560;
      const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));
      canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", .68));
    };
    reader.readAsDataURL(file);
  });
}

function renderCityGame() {
  const visitedCount = Object.keys(state.city.visits).filter((id) => questPlaces.some((place) => place.id === id)).length;
  document.querySelector("#hunterName").value = state.city.name;
  document.querySelector("#hunterTeam").value = state.city.team;
  document.querySelector("#hunterStatus").textContent = state.city.name ? `${state.city.name}${state.city.team ? ` · ${state.city.team}` : ""}` : "ANONYMOUS PROCESS";
  document.querySelector("#cityPoints").textContent = cityScore();
  document.querySelector("#cityVisited").textContent = visitedCount;
  document.querySelector("#cityProgressBar").style.width = `${(visitedCount / questPlaces.length) * 100}%`;
  document.querySelector("#questGrid").innerHTML = questPlaces.map((place, index) => {
    const visit = state.city.visits[place.id];
    const photo = state.city.photos[place.id];
    const kind = place.type === "gem" ? "HIDDEN GEM" : "SEVÆRDIGHED";
    return `<article class="quest-card${visit ? " is-complete" : ""}">
      <div class="quest-proof">${photo ? `<img src="${photo}" alt="Fotobevis fra ${escapeHTML(place.name)}" />` : `<span>${place.type === "gem" ? "✦" : "★"}</span><small>NO PROOF<br />NO POINTS</small>`}</div>
      <div class="quest-body">
        <div class="quest-topline"><span>#${String(index + 1).padStart(2, "0")} · ${kind}</span><strong>${place.points} PT</strong></div>
        <h4>${escapeHTML(place.name)}</h4>
        <p>${escapeHTML(place.challenge)}</p>
        <div class="quest-state">${visit ? `<strong>${visit.verified ? "✓ GPS VERIFIED" : "✓ PHOTO COMMITTED"}</strong><small>${new Date(visit.capturedAt).toLocaleDateString("da-DK")}</small>` : `<strong>OPEN ISSUE</strong><small>Afventer fysisk fremmøde</small>`}</div>
        <div class="quest-actions">
          <button type="button" data-show-place="${place.id}">Vis på kort</button>
          <button class="capture-proof" type="button" data-capture-place="${place.id}">${visit ? "Erstat foto" : "Tag fotobevis"}</button>
        </div>
      </div>
    </article>`;
  }).join("");
}

function loadCanvasImage(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = source;
  });
}

function drawCoverImage(context, image, x, y, width, height) {
  const scale = Math.max(width / image.width, height / image.height);
  const sourceWidth = width / scale;
  const sourceHeight = height / scale;
  context.drawImage(image, (image.width - sourceWidth) / 2, (image.height - sourceHeight) / 2, sourceWidth, sourceHeight, x, y, width, height);
}

async function buildScorecard() {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1350;
  const context = canvas.getContext("2d");
  const completed = questPlaces.filter((place) => state.city.visits[place.id]);
  context.fillStyle = "#ffce36";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#ff4f2e";
  context.fillRect(0, 0, canvas.width, 300);
  context.fillStyle = "#171713";
  context.font = "900 34px sans-serif";
  context.fillText("BERLIN EXCEPTION HUNT", 64, 72);
  context.font = "900 72px sans-serif";
  context.fillText((state.city.name || "ANONYMOUS PROCESS").slice(0, 24), 64, 160);
  context.font = "700 30px sans-serif";
  context.fillText((state.city.team || "NO SQUAD ASSIGNED").slice(0, 32), 66, 215);
  context.fillStyle = "#fffaf0";
  context.font = "900 34px sans-serif";
  context.fillText(`${cityScore()} POINT · ${completed.length}/${questPlaces.length} CAPTURED`, 64, 272);

  const photos = completed.filter((place) => state.city.photos[place.id]).slice(0, 6);
  for (let index = 0; index < 6; index += 1) {
    const x = 64 + (index % 3) * 322;
    const y = 350 + Math.floor(index / 3) * 242;
    context.fillStyle = "#171713";
    context.fillRect(x, y, 300, 210);
    const place = photos[index];
    if (place) {
      try {
        const image = await loadCanvasImage(state.city.photos[place.id]);
        drawCoverImage(context, image, x + 4, y + 4, 292, 166);
        context.fillStyle = "#fffaf0";
        context.font = "800 20px sans-serif";
        context.fillText(place.name.slice(0, 25), x + 12, y + 197);
      } catch { /* Keep the empty proof slot if a local image cannot decode. */ }
    } else {
      context.fillStyle = "#4f4c43";
      context.font = "700 18px sans-serif";
      context.fillText("AWAITING PROOF", x + 65, y + 112);
    }
  }

  context.fillStyle = "#171713";
  context.font = "900 25px sans-serif";
  context.fillText("MERGED ISSUES", 64, 890);
  context.font = "700 22px sans-serif";
  completed.slice(0, 16).forEach((place, index) => {
    const column = index < 8 ? 0 : 1;
    const row = index % 8;
    const visit = state.city.visits[place.id];
    context.fillText(`${visit.verified ? "✓" : "•"} ${place.name}`.slice(0, 31), 64 + column * 500, 935 + row * 40);
  });
  context.font = "700 20px sans-serif";
  context.fillText("Generated locally. No server knew enough to stop us.", 64, 1300);
  return new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
}

async function shareCityScorecard() {
  if (!state.city.name) {
    document.querySelector("#hunterName").focus();
    showToast("Giv processen et alias før den deployes");
    return;
  }
  const button = document.querySelector("#shareScorecard");
  button.disabled = true;
  button.textContent = "Compiler scorecard…";
  try {
    const blob = await buildScorecard();
    const file = new File([blob], "berlin-exception-scorecard.png", { type: "image/png" });
    const text = `${state.city.name} har ${cityScore()} point i Berlin Exception Hunt (${Object.keys(state.city.visits).length}/${questPlaces.length} steder).`;
    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      await navigator.share({ title: "Berlin Exception Hunt", text, files: [file] });
    } else {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "berlin-exception-scorecard.png";
      link.click();
      setTimeout(() => URL.revokeObjectURL(link.href), 1000);
      showToast("Scorekort downloadet — ship det i gruppechatten");
    }
  } catch (error) {
    if (error.name !== "AbortError") showToast("Scorekortet crashede elegant. Prøv igen.");
  } finally {
    button.disabled = false;
    button.innerHTML = "Share scorecard <span>↗</span>";
  }
}

function markerIcon(type, label) {
  return L.divIcon({
    className: `tourist-marker ${type}`,
    html: `<span><b>${escapeHTML(label)}</b></span>`,
    iconSize: [44, 48],
    iconAnchor: [22, 45],
    popupAnchor: [0, -44],
  });
}

function placePopup(place) {
  const query = encodeURIComponent(`${place.name}, Berlin`);
  const labels = { sight: "Seværdighed", food: "Madspor", gem: "Hidden gem" };
  const visit = place.id ? state.city.visits[place.id] : null;
  const quest = place.points ? `<div class="popup-quest"><strong>${place.points} POINT · ${visit ? (visit.verified ? "GPS VERIFIED" : "PHOTO COMMITTED") : "OPEN ISSUE"}</strong><p>${escapeHTML(place.challenge)}</p><button type="button" data-capture-place="${place.id}">${visit ? "Erstat fotobevis" : "Tag fotobevis"}</button></div>` : "";
  return `<div class="map-popup"><small>${labels[place.type]}</small><h3>${escapeHTML(place.name)}</h3><p>${escapeHTML(place.text)}</p>${quest}<a href="https://www.google.com/maps/search/?api=1&query=${query}" target="_blank" rel="noreferrer">Åbn vejvisning ↗</a></div>`;
}

function renderMapPlaces(filter = "all") {
  if (!berlinMap) return;
  currentMapFilter = filter;
  placeMarkers.forEach(({ marker }) => marker.remove());
  placeMarkers = mapPlaces
    .filter((place) => filter === "all" || place.type === filter)
    .map((place) => {
      const marker = L.marker([place.lat, place.lng], { icon: markerIcon(place.type, place.icon), title: place.name })
        .addTo(berlinMap)
        .bindPopup(placePopup(place));
      return { place, marker };
    });
}

function initMap() {
  const loading = document.querySelector("#mapLoading");
  if (!window.L) {
    loading.textContent = "Kortet kunne ikke hentes — prøv igen med internet.";
    document.querySelector("#locateButton").disabled = true;
    return;
  }
  berlinMap = L.map("berlinMap", { zoomControl: false, minZoom: 10, maxZoom: 19 }).setView([52.515, 13.405], 12);
  L.control.zoom({ position: "topright" }).addTo(berlinMap);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
  }).addTo(berlinMap);
  loading.hidden = true;
  renderMapPlaces();
  if (mysteryStops.length && currentMysteryStop >= mysteryStops.length) showMysteryComplete();
}

function distanceInMeters(from, to) {
  const earthRadius = 6371000;
  const radians = (degrees) => degrees * Math.PI / 180;
  const dLat = radians(to.lat - from.lat);
  const dLng = radians(to.lng - from.lng);
  const lat1 = radians(from.lat);
  const lat2 = radians(to.lat);
  const value = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return earthRadius * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}

function compassDirection(from, to) {
  const radians = (degrees) => degrees * Math.PI / 180;
  const degrees = (value) => value * 180 / Math.PI;
  const dLng = radians(to.lng - from.lng);
  const lat1 = radians(from.lat);
  const lat2 = radians(to.lat);
  const y = Math.sin(dLng) * Math.cos(lat2);
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
  const bearing = (degrees(Math.atan2(y, x)) + 360) % 360;
  const arrows = ["↑ N", "↗ NØ", "→ Ø", "↘ SØ", "↓ S", "↙ SV", "← V", "↖ NV"];
  return arrows[Math.round(bearing / 45) % 8];
}

function fuzzyPoint(stop, offset, index) {
  const angle = ((index * 137) + 48) * Math.PI / 180;
  return {
    lat: stop.lat + (Math.cos(angle) * offset) / 111320,
    lng: stop.lng + (Math.sin(angle) * offset) / (111320 * Math.cos(stop.lat * Math.PI / 180)),
  };
}

function clearMysteryMap() {
  if (mysteryArea) mysteryArea.remove();
  if (mysteryMarker) mysteryMarker.remove();
  mysteryArea = null;
  mysteryMarker = null;
}

function updateMysteryJourney(position) {
  const stop = mysteryStops[currentMysteryStop];
  if (!stop || !berlinMap) return;
  const distance = distanceInMeters(position, stop);
  const title = document.querySelector("#mysteryTitle");
  const clue = document.querySelector("#mysteryClue");
  const distanceLabel = document.querySelector("#mysteryDistance");
  const direction = document.querySelector("#mysteryDirection");
  const arrival = document.querySelector("#arrivalActions");
  const progress = Math.max(4, Math.min(100, 100 - (distance / 30)));
  document.querySelector("#mysteryProgress").style.width = `${progress}%`;
  direction.textContent = compassDirection(position, stop);
  arrival.hidden = true;
  clearMysteryMap();

  if (distance > 1200) {
    const fuzzy = fuzzyPoint(stop, 650, currentMysteryStop);
    mysteryArea = L.circle(fuzzy, { radius: 850, color: "#ff4f2e", weight: 2, fillColor: "#ffce36", fillOpacity: .18, dashArray: "8 9" }).addTo(berlinMap);
    title.textContent = `Noget venter i ${stop.district}`;
    clue.textContent = stop.clueFar;
    distanceLabel.textContent = distance > 3000 ? `Ca. ${Math.round(distance / 1000)} km væk` : `Ca. ${Math.round(distance / 500) * 500} m væk`;
  } else if (distance > 350) {
    const fuzzy = fuzzyPoint(stop, 180, currentMysteryStop);
    mysteryArea = L.circle(fuzzy, { radius: 320, color: "#ff4f2e", weight: 2, fillColor: "#ffce36", fillOpacity: .22, dashArray: "6 7" }).addTo(berlinMap);
    title.textContent = "Varmere. Meget varmere.";
    clue.textContent = stop.clueNear;
    distanceLabel.textContent = `Ca. ${Math.round(distance / 100) * 100} m væk`;
  } else if (distance > 60) {
    title.textContent = "Nu kan I næsten lugte det";
    clue.textContent = `${stop.clueNear} Fortsæt i pilens retning — navnet låses op ved ankomst.`;
    distanceLabel.textContent = `${Math.round(distance / 25) * 25} m væk`;
  } else {
    title.textContent = stop.name;
    clue.textContent = "Fundet! Stop gemt, hype bevaret. Tag ankomstbilledet, før nogen bestiller uden holdet.";
    distanceLabel.textContent = distance < 15 ? "I er her" : `${Math.round(distance)} m væk`;
    direction.textContent = "★ UNLOCKED";
    document.querySelector("#mysteryProgress").style.width = "100%";
    arrival.hidden = false;
    mysteryMarker = L.marker([stop.lat, stop.lng], { icon: markerIcon("food", "★"), title: stop.name }).addTo(berlinMap).bindPopup(`<div class="map-popup"><small>Tourstop fundet</small><h3>${escapeHTML(stop.name)}</h3></div>`);
  }
}

function showMysteryComplete() {
  clearMysteryMap();
  document.querySelector("#mysteryTitle").textContent = "Alle mysterier er fundet";
  document.querySelector("#mysteryClue").textContent = "I fandt hele ruten uden spoilers. Nu mangler kun vinderpodiet — og muligvis en serviet.";
  document.querySelector("#mysteryDistance").textContent = "RUTE GENNEMFØRT";
  document.querySelector("#mysteryDirection").textContent = "★ ★ ★";
  document.querySelector("#mysteryProgress").style.width = "100%";
  document.querySelector("#arrivalActions").hidden = true;
}

function onLocationFound(geolocationPosition) {
  const position = { lat: geolocationPosition.coords.latitude, lng: geolocationPosition.coords.longitude };
  lastKnownPosition = position;
  const accuracy = geolocationPosition.coords.accuracy;
  if (!userMarker) {
    userMarker = L.marker([position.lat, position.lng], { icon: markerIcon("user", ""), zIndexOffset: 1000, title: "Din position" }).addTo(berlinMap).bindPopup("Du er her");
    accuracyCircle = L.circle([position.lat, position.lng], { radius: accuracy, color: "#2878ff", weight: 1, fillOpacity: .08 }).addTo(berlinMap);
  } else {
    userMarker.setLatLng([position.lat, position.lng]);
    accuracyCircle.setLatLng([position.lat, position.lng]).setRadius(accuracy);
  }
  if (!hasCenteredOnUser) {
    berlinMap.setView([position.lat, position.lng], 15);
    hasCenteredOnUser = true;
  }
  const status = document.querySelector("#locationStatus");
  status.className = "map-status is-live";
  status.querySelector("strong").textContent = "GPS følger jer";
  status.querySelector("small").textContent = `Position fundet med cirka ${Math.round(accuracy)} meters præcision.`;
  document.querySelector("#locateButton").classList.add("is-tracking");
  document.querySelector("#locateButton strong").textContent = "Følger jer";
  updateMysteryJourney(position);
}

function onLocationError(error) {
  const messages = {
    1: "Tillad placering i browserens indstillinger for at bruge GPS-jagten.",
    2: "Telefonen kunne ikke finde en position. Gå gerne udenfor og prøv igen.",
    3: "GPS'en var for længe om at svare. Tryk Find mig og prøv igen.",
  };
  const status = document.querySelector("#locationStatus");
  status.className = "map-status is-error";
  status.querySelector("strong").textContent = "Ingen GPS-position";
  status.querySelector("small").textContent = messages[error.code] || "Positionen kunne ikke hentes.";
  document.querySelector("#locateButton").disabled = false;
  document.querySelector("#locateButton strong").textContent = "Prøv igen";
  if (locationWatch !== undefined) navigator.geolocation.clearWatch(locationWatch);
  locationWatch = undefined;
}

function startLocationTracking() {
  if (!berlinMap) return;
  if (!navigator.geolocation) {
    onLocationError({ code: 2 });
    return;
  }
  if (locationWatch !== undefined) {
    if (userMarker) berlinMap.setView(userMarker.getLatLng(), 16);
    return;
  }
  document.querySelector("#locateButton strong").textContent = "Finder…";
  locationWatch = navigator.geolocation.watchPosition(onLocationFound, onLocationError, {
    enableHighAccuracy: true,
    maximumAge: 8000,
    timeout: 15000,
  });
}

function updateProgress() {
  const count = state.stops.size;
  progressCount.textContent = `${count}/5`;
  progressBar.style.width = `${count * 20}%`;
}

function renderDishes() {
  dishGrid.innerHTML = dishes.map((dish, index) => {
    const tasted = state.dishes.has(index);
    return `
      <button class="dish-card${tasted ? " tasted" : ""}" type="button" data-dish="${index}" aria-pressed="${tasted}">
        <span class="dish-index">${String(index + 1).padStart(2, "0")}/09</span>
        <div class="dish-body">
          <span class="dish-emoji" aria-hidden="true">${dish.emoji}</span>
          <h3>${dish.name}</h3>
          <p class="dish-short">${dish.short}</p>
        </div>
        <span class="tasted-label">Smagt ✓</span>
      </button>`;
  }).join("");
}

function renderScoreboard() {
  const best = Math.max(...state.game.teams.map((team) => team.score));
  document.querySelector("#scoreboard").innerHTML = state.game.teams.map((team, index) => `
    <article class="team-score${team.score === best && best > 0 ? " is-leading" : ""}">
      <span class="team-name">${escapeHTML(team.name)}</span>
      <strong class="team-points">${team.score}</strong>
      <div class="score-controls">
        <button type="button" data-score-team="${index}" data-score-delta="-1" aria-label="Træk ét point fra ${escapeHTML(team.name)}">−</button>
        <button type="button" data-score-team="${index}" data-score-delta="1" aria-label="Giv ét point til ${escapeHTML(team.name)}">+1</button>
      </div>
    </article>`).join("");
}

function currentChallenge() {
  const challenge = challenges[state.game.challenge] || challenges[0];
  if (!state.game.beerMode && challenge.alcohol) return challenges[0];
  return challenge;
}

function renderChallenge() {
  const challenge = currentChallenge();
  document.querySelector("#challengeCategory").textContent = challenge.category;
  document.querySelector("#challengePoints").textContent = `${challenge.points} POINT`;
  document.querySelector("#challengeIcon").textContent = challenge.icon;
  document.querySelector("#roundNumber").textContent = `RUNDE ${String(state.game.round).padStart(2, "0")}`;
  document.querySelector("#challengeTitle").textContent = challenge.title;
  document.querySelector("#challengeText").textContent = challenge.text;
  document.querySelector("#awardButtons").innerHTML = state.game.teams.map((team, index) => `
    <button class="award-button" type="button" data-award-team="${index}">${escapeHTML(team.name)} <span>+${challenge.points}</span></button>`).join("");
  document.querySelector("#evidencePreview").hidden = true;
}

function renderMissions() {
  document.querySelector("#missionGrid").innerHTML = state.game.teams.map((team, index) => `
    <article class="mission-card${team.revealed ? "" : " is-sealed"}${team.completed ? " completed" : ""}">
      <h4>${escapeHTML(team.name)}</h4>
      <p>${escapeHTML(secretMissions[team.mission % secretMissions.length])}</p>
      <div class="mission-actions">
        <button type="button" data-reveal-mission="${index}">${team.revealed ? "Skjul" : "Afslør"}</button>
        <button class="complete-mission" type="button" data-complete-mission="${index}" ${team.completed ? "disabled" : ""}>${team.completed ? "+2 givet" : "Løst +2"}</button>
      </div>
    </article>`).join("");
}

function renderGame() {
  renderScoreboard();
  renderChallenge();
  renderMissions();
  const word = `“${state.game.forbiddenWord}”`;
  document.querySelector("#forbiddenWord").textContent = word;
  document.querySelector("#forbiddenWordInline").textContent = word;
  document.querySelector("#prizeSummary").textContent = state.game.prize;
}

function changeScore(teamIndex, delta) {
  const team = state.game.teams[teamIndex];
  if (!team) return;
  team.score = Math.max(0, team.score + delta);
  saveState();
  renderScoreboard();
}

timeline.addEventListener("click", (event) => {
  const button = event.target.closest(".stop-check");
  if (!button) return;
  const card = button.closest(".stop-card");
  const key = card.dataset.stop;
  state.stops.has(key) ? state.stops.delete(key) : state.stops.add(key);
  card.classList.toggle("completed", state.stops.has(key));
  button.setAttribute("aria-pressed", String(state.stops.has(key)));
  saveState();
  updateProgress();
  showToast(state.stops.has(key) ? "Stop klaret — videre til næste bid!" : "Stop åbnet igen");
});

dishGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".dish-card");
  if (!card) return;
  const index = Number(card.dataset.dish);
  state.dishes.has(index) ? state.dishes.delete(index) : state.dishes.add(index);
  saveState();
  renderDishes();
  showToast(state.dishes.has(index) ? `${dishes[index].name} er smagt!` : `${dishes[index].name} er fjernet`);
});

document.querySelector("#scoreboard").addEventListener("click", (event) => {
  const button = event.target.closest("[data-score-team]");
  if (!button) return;
  changeScore(Number(button.dataset.scoreTeam), Number(button.dataset.scoreDelta));
});

document.querySelector("#awardButtons").addEventListener("click", (event) => {
  const button = event.target.closest("[data-award-team]");
  if (!button) return;
  const teamIndex = Number(button.dataset.awardTeam);
  const points = currentChallenge().points;
  changeScore(teamIndex, points);
  showToast(`${state.game.teams[teamIndex].name} snupper ${points} point!`);
});

document.querySelector("#drawChallenge").addEventListener("click", () => {
  const available = challenges.map((challenge, index) => ({ challenge, index }))
    .filter(({ challenge, index }) => (state.game.beerMode || !challenge.alcohol) && index !== state.game.challenge);
  const picked = available[Math.floor(Math.random() * available.length)];
  state.game.challenge = picked.index;
  state.game.round += 1;
  saveState();
  const card = document.querySelector("#roundCard");
  card.classList.add("shuffling");
  setTimeout(() => { renderChallenge(); card.classList.remove("shuffling"); }, 180);
});

document.querySelector("#missionGrid").addEventListener("click", (event) => {
  const reveal = event.target.closest("[data-reveal-mission]");
  const complete = event.target.closest("[data-complete-mission]");
  if (reveal) {
    const index = Number(reveal.dataset.revealMission);
    state.game.teams[index].revealed = !state.game.teams[index].revealed;
    saveState();
    renderMissions();
  }
  if (complete) {
    const index = Number(complete.dataset.completeMission);
    if (state.game.teams[index].completed) return;
    state.game.teams[index].completed = true;
    state.game.teams[index].revealed = true;
    changeScore(index, 2);
    renderMissions();
    showToast(`${state.game.teams[index].name}: hemmelig mission +2!`);
  }
});

document.querySelector("#evidenceInput").addEventListener("change", (event) => {
  const [file] = event.target.files;
  if (!file) return;
  if (evidenceUrl) URL.revokeObjectURL(evidenceUrl);
  evidenceUrl = URL.createObjectURL(file);
  document.querySelector("#evidenceImage").src = evidenceUrl;
  document.querySelector("#evidencePreview").hidden = false;
  showToast("Billedbevis klar — dommeren må dømme");
});

document.querySelector("#setupGameButton").addEventListener("click", () => {
  state.game.teams.forEach((team, index) => { setupForm.elements[`team${index + 1}`].value = team.name; });
  setupForm.elements.prize.value = state.game.prize;
  setupForm.elements.beerMode.checked = state.game.beerMode;
  setupDialog.showModal();
});

document.querySelector("[data-close-dialog]").addEventListener("click", () => setupDialog.close());

setupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(setupForm);
  state.game.teams = state.game.teams.map((team, index) => ({
    ...team,
    name: String(formData.get(`team${index + 1}`) || defaultTeams[index]).trim() || defaultTeams[index],
  }));
  state.game.prize = String(formData.get("prize") || "Evig hæder").trim() || "Evig hæder";
  state.game.beerMode = formData.has("beerMode");
  state.game.forbiddenWord = forbiddenWords[Math.floor(Math.random() * forbiddenWords.length)];
  const shuffled = [...secretMissions.keys()].sort(() => Math.random() - .5);
  state.game.teams.forEach((team, index) => {
    if (team.score === 0 && !team.completed) team.mission = shuffled[index];
  });
  if (!state.game.beerMode && currentChallenge().alcohol) state.game.challenge = 0;
  saveState();
  renderGame();
  setupDialog.close();
  showToast("Holdene er klar. Lad kampen begynde!");
});

document.querySelector("#finishGameButton").addEventListener("click", () => {
  const best = Math.max(...state.game.teams.map((team) => team.score));
  const winners = state.game.teams.filter((team) => team.score === best);
  document.querySelector("#winnerTitle").textContent = winners.map((team) => team.name).join(" + ");
  document.querySelector("#winnerScore").textContent = best === 1 ? "1 point" : `${best} point`;
  document.querySelector("#winnerPrize").textContent = winners.length > 1 ? `Dødt løb! Del præmien eller tag én sidste udfordring: ${state.game.prize}.` : state.game.prize;
  winnerDialog.showModal();
});

document.querySelector("[data-close-winner]").addEventListener("click", () => winnerDialog.close());

document.querySelector("#hunterProfile").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  state.city.name = String(formData.get("hunterName") || "").trim();
  state.city.team = String(formData.get("hunterTeam") || "").trim();
  saveState();
  renderCityGame();
  showToast(state.city.name ? `Process ${state.city.name} kører` : "Processen er stadig anonym");
});

function openQuestCamera(placeId) {
  activeQuestId = placeId;
  document.querySelector("#questPhotoInput").click();
}

function showPlaceOnMap(placeId) {
  const place = mapPlaces.find((item) => item.id === placeId);
  if (!place || !berlinMap) return;
  document.querySelectorAll(".map-filter").forEach((filterButton) => {
    const active = filterButton.dataset.mapFilter === "all";
    filterButton.classList.toggle("is-active", active);
    filterButton.setAttribute("aria-pressed", String(active));
  });
  renderMapPlaces("all");
  document.querySelector("#mapSection").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    berlinMap.setView([place.lat, place.lng], 16);
    placeMarkers.find((entry) => entry.place.id === placeId)?.marker.openPopup();
  }, 450);
}

document.querySelector("#questGrid").addEventListener("click", (event) => {
  const capture = event.target.closest("[data-capture-place]");
  const mapButton = event.target.closest("[data-show-place]");
  if (capture) openQuestCamera(capture.dataset.capturePlace);
  if (mapButton) showPlaceOnMap(mapButton.dataset.showPlace);
});

document.querySelector("#berlinMap").addEventListener("click", (event) => {
  const capture = event.target.closest("[data-capture-place]");
  if (capture) openQuestCamera(capture.dataset.capturePlace);
});

document.querySelector("#questPhotoInput").addEventListener("change", async (event) => {
  const [file] = event.target.files;
  const place = questPlaces.find((item) => item.id === activeQuestId);
  if (!file || !place) return;
  showToast("Komprimerer bevis uden blockchain…");
  const previousPhoto = state.city.photos[place.id];
  const previousVisit = state.city.visits[place.id];
  try {
    const photo = await compressPhoto(file);
    const verified = Boolean(lastKnownPosition && distanceInMeters(lastKnownPosition, place) <= 350);
    state.city.photos[place.id] = photo;
    state.city.visits[place.id] = { capturedAt: new Date().toISOString(), verified };
    saveState();
    renderCityGame();
    renderMapPlaces(currentMapFilter);
    showToast(`${place.points} point committed${verified ? " · GPS verified" : ""}`);
  } catch {
    if (previousPhoto) state.city.photos[place.id] = previousPhoto;
    else delete state.city.photos[place.id];
    if (previousVisit) state.city.visits[place.id] = previousVisit;
    else delete state.city.visits[place.id];
    showToast("Billedet nægtede at compile. Prøv et nyt foto.");
  } finally {
    event.target.value = "";
    activeQuestId = undefined;
  }
});

document.querySelector("#shareScorecard").addEventListener("click", shareCityScorecard);
document.querySelector("#jumpToMap").addEventListener("click", () => document.querySelector("#mapSection").scrollIntoView({ behavior: "smooth" }));

document.querySelector(".map-toolbar").addEventListener("click", (event) => {
  const button = event.target.closest("[data-map-filter]");
  if (!button) return;
  document.querySelectorAll(".map-filter").forEach((filterButton) => {
    const active = filterButton === button;
    filterButton.classList.toggle("is-active", active);
    filterButton.setAttribute("aria-pressed", String(active));
  });
  renderMapPlaces(button.dataset.mapFilter);
});

document.querySelector("#locateButton").addEventListener("click", startLocationTracking);

document.querySelector("#arrivalPhoto").addEventListener("change", (event) => {
  if (!event.target.files.length) return;
  showToast("Ankomstbillede sikret — næste mysterium låses op!");
  currentMysteryStop += 1;
  localStorage.setItem("berlinMysteryStop", String(currentMysteryStop));
  event.target.value = "";
  if (currentMysteryStop >= mysteryStops.length) showMysteryComplete();
  else if (lastKnownPosition) updateMysteryJourney(lastKnownPosition);
});

document.querySelector("#shareButton").addEventListener("click", async () => {
  const shareData = { title: document.title, text: "Klar til Freddy Fresh Food Fight i Berlin?", url: location.href };
  try {
    if (navigator.share) await navigator.share(shareData);
    else {
      await navigator.clipboard.writeText(location.href);
      showToast("Link kopieret");
    }
  } catch (error) {
    if (error.name !== "AbortError") showToast("Linket kunne ikke deles");
  }
});

document.querySelector("#resetButton").addEventListener("click", () => {
  if (!confirm("DROP DATABASE berlin_trip? Det nulstiller hunt, fotos, food tour og alle point på denne telefon.")) return;
  state.stops.clear();
  state.dishes.clear();
  state.game = freshGame();
  state.city = freshCityGame();
  currentMysteryStop = 0;
  localStorage.removeItem("berlinMysteryStop");
  saveState();
  document.querySelectorAll(".stop-card").forEach((card) => {
    card.classList.remove("completed");
    card.querySelector(".stop-check").setAttribute("aria-pressed", "false");
  });
  renderDishes();
  renderGame();
  renderCityGame();
  updateProgress();
  showToast("Hele dagen er nulstillet");
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  document.querySelector("#installButton").hidden = false;
});

document.querySelector("#installButton").addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  document.querySelector("#installButton").hidden = true;
});

document.querySelectorAll(".stop-card").forEach((card) => {
  const completed = state.stops.has(card.dataset.stop);
  card.classList.toggle("completed", completed);
  card.querySelector(".stop-check").setAttribute("aria-pressed", String(completed));
});

renderDishes();
renderGame();
renderCityGame();
updateProgress();
initMap();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}
