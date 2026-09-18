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

const challenges = [
  "Find turens sprødeste bid — og forsvar jeres valg med tre ord.",
  "Bestil næste fælles bid på tysk. Bonuspoint for selvtillid.",
  "Tag et gruppefoto, hvor alle efterligner deres seneste ret.",
  "Vælg én sauce, hele bordet skal smage. Flertallet bestemmer.",
  "Kår et stop på duft, tekstur og smag — ikke på portionsstørrelse.",
  "Find den mest Berlin-agtige detalje på vejen til næste stop.",
  "Byt den første bid med personen overfor dig og giv en ærlig anmeldelse.",
  "Beskriv dagens vildeste smag uden at bruge ordene god eller lækker.",
];

const state = {
  stops: new Set(JSON.parse(localStorage.getItem("berlinStops") || "[]")),
  dishes: new Set(JSON.parse(localStorage.getItem("berlinDishes") || "[]")),
};

const timeline = document.querySelector("#timeline");
const dishGrid = document.querySelector("#dishGrid");
const progressCount = document.querySelector("#progressCount");
const progressBar = document.querySelector("#progressBar");
const toast = document.querySelector("#toast");
let toastTimer;
let deferredInstallPrompt;

function saveState() {
  localStorage.setItem("berlinStops", JSON.stringify([...state.stops]));
  localStorage.setItem("berlinDishes", JSON.stringify([...state.dishes]));
}

function updateProgress() {
  const count = state.stops.size;
  progressCount.textContent = `${count}/5`;
  progressBar.style.width = `${count * 20}%`;
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
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

document.querySelector("#drawChallenge").addEventListener("click", () => {
  const card = document.querySelector("#challengeCard");
  const number = card.querySelector(".challenge-number");
  const text = document.querySelector("#challengeText");
  const previous = text.textContent;
  const choices = challenges.filter((challenge) => challenge !== previous);
  const picked = choices[Math.floor(Math.random() * choices.length)];
  card.classList.add("shuffling");
  setTimeout(() => {
    text.textContent = picked;
    number.textContent = `#${String(challenges.indexOf(picked) + 1).padStart(2, "0")}`;
    card.classList.remove("shuffling");
  }, 180);
});

document.querySelector("#shareButton").addEventListener("click", async () => {
  const shareData = { title: document.title, text: "Klar til Freddy Fresh Food Tour i Berlin?", url: location.href };
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
  if (!confirm("Vil du nulstille alle stop og smagskrydser?")) return;
  state.stops.clear();
  state.dishes.clear();
  saveState();
  document.querySelectorAll(".stop-card").forEach((card) => {
    card.classList.remove("completed");
    card.querySelector(".stop-check").setAttribute("aria-pressed", "false");
  });
  renderDishes();
  updateProgress();
  showToast("Guiden er nulstillet");
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
updateProgress();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}
