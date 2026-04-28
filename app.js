const initialSheepData = [
  // ذكور كبار
  { ID: "أ001", Group: "ram", Gender: "ذكر", Tag: "♂", BirthDate: "2023-12-28", Status: "normal" },
  { ID: "أ002", Group: "ram", Gender: "ذكر", Tag: "♂", BirthDate: "2022-07-28", Status: "normal" },
  { ID: "أ003", Group: "ram", Gender: "ذكر", Tag: "♂", BirthDate: "2021-10-28", Status: "normal" },

  // إناث كبار
  { ID: "ب001", Group: "ewe", Gender: "أنثى", Tag: "♀", BirthDate: "2024-09-28", Status: "normal" },
  { ID: "ب002", Group: "ewe", Gender: "أنثى", Tag: "♀", BirthDate: "2024-03-28", Status: "normal" },
  { ID: "ب003", Group: "ewe", Gender: "أنثى", Tag: "♀", BirthDate: "2023-07-28", Status: "normal" },
  { ID: "ب004", Group: "ewe", Gender: "أنثى", Tag: "♀", BirthDate: "2022-11-28", Status: "normal" },
  { ID: "ب005", Group: "ewe", Gender: "أنثى", Tag: "♀", BirthDate: "2024-06-28", Status: "normal" },
  { ID: "ب006", Group: "ewe", Gender: "أنثى", Tag: "♀", BirthDate: "2023-03-28", Status: "normal" },
  { ID: "ب007", Group: "ewe", Gender: "أنثى", Tag: "♀", BirthDate: "2023-10-28", Status: "normal" },
  { ID: "ب008", Group: "ewe", Gender: "أنثى", Tag: "♀", BirthDate: "2024-08-28", Status: "normal" },
  { ID: "ب009", Group: "ewe", Gender: "أنثى", Tag: "♀", BirthDate: "2022-05-28", Status: "normal" },
  { ID: "ب010", Group: "ewe", Gender: "أنثى", Tag: "♀", BirthDate: "2023-12-28", Status: "normal" },
  { ID: "ب011", Group: "ewe", Gender: "أنثى", Tag: "♀", BirthDate: "2024-10-28", Status: "normal" },
  { ID: "ب012", Group: "ewe", Gender: "أنثى", Tag: "♀", BirthDate: "2023-04-28", Status: "normal" },
  { ID: "ب013", Group: "ewe", Gender: "أنثى", Tag: "♀", BirthDate: "2023-08-28", Status: "normal" },

  // صغار غير محدد الجنس
  { ID: "ص001", Group: "lamb", Gender: "غير محدد", Tag: "ص", BirthDate: "2026-03-28", Status: "normal" },
  { ID: "ص002", Group: "lamb", Gender: "غير محدد", Tag: "ص", BirthDate: "2026-02-28", Status: "normal" },
  { ID: "ص003", Group: "lamb", Gender: "غير محدد", Tag: "ص", BirthDate: "2026-01-28", Status: "normal" },
  { ID: "ص004", Group: "lamb", Gender: "غير محدد", Tag: "ص", BirthDate: "2025-12-28", Status: "normal" },
  { ID: "ص005", Group: "lamb", Gender: "غير محدد", Tag: "ص", BirthDate: "2025-11-28", Status: "normal" },
  { ID: "ص006", Group: "lamb", Gender: "غير محدد", Tag: "ص", BirthDate: "2025-10-28", Status: "normal" },
  { ID: "ص007", Group: "lamb", Gender: "غير محدد", Tag: "ص", BirthDate: "2025-09-28", Status: "normal" },
  { ID: "ص008", Group: "lamb", Gender: "غير محدد", Tag: "ص", BirthDate: "2025-08-28", Status: "normal" },
  { ID: "ص009", Group: "lamb", Gender: "غير محدد", Tag: "ص", BirthDate: "2025-07-28", Status: "normal" },
  { ID: "ص010", Group: "lamb", Gender: "غير محدد", Tag: "ص", BirthDate: "2025-06-28", Status: "normal" },
  { ID: "ص011", Group: "lamb", Gender: "غير محدد", Tag: "ص", BirthDate: "2025-05-28", Status: "normal" },
  { ID: "ص012", Group: "lamb", Gender: "غير محدد", Tag: "ص", BirthDate: "2026-02-28", Status: "normal" },
  { ID: "ص013", Group: "lamb", Gender: "غير محدد", Tag: "ص", BirthDate: "2026-01-28", Status: "normal" },
  { ID: "ص014", Group: "lamb", Gender: "غير محدد", Tag: "ص", BirthDate: "2025-12-28", Status: "normal" },
  { ID: "ص015", Group: "lamb", Gender: "غير محدد", Tag: "ص", BirthDate: "2025-11-28", Status: "normal" },
  { ID: "ص016", Group: "lamb", Gender: "غير محدد", Tag: "ص", BirthDate: "2025-10-28", Status: "normal" },
  { ID: "ص017", Group: "lamb", Gender: "غير محدد", Tag: "ص", BirthDate: "2025-09-28", Status: "normal" },
  { ID: "ص018", Group: "lamb", Gender: "غير محدد", Tag: "ص", BirthDate: "2025-08-28", Status: "normal" },
  { ID: "ص019", Group: "lamb", Gender: "غير محدد", Tag: "ص", BirthDate: "2025-07-28", Status: "normal" }
];

const groupNames = {
  ram: "الكباش",
  ewe: "النعاج",
  lamb: "الحملان",
  unspecified: "غير محدد"
};

const statusNames = {
  normal: "طبيعي",
  rest: "راحة ما بعد الولادة",
  ready: "جاهز",
  pregnant: "حامل"
};

const elements = {
  statTotal: document.getElementById("statTotal"),
  statRams: document.getElementById("statRams"),
  statEwes: document.getElementById("statEwes"),
  statLambs: document.getElementById("statLambs"),
  statAlerts: document.getElementById("statAlerts"),
  statReady: document.getElementById("statReady"),
  alertsList: document.getElementById("alertsList"),
  animalGrid: document.getElementById("animalGrid"),
  animalCardTemplate: document.getElementById("animalCardTemplate"),
  searchInput: document.getElementById("searchInput"),
  groupFilter: document.getElementById("groupFilter"),
  statusFilter: document.getElementById("statusFilter"),
  seedDemoBtn: document.getElementById("seedDemoBtn"),
  exportBtn: document.getElementById("exportBtn"),
  importFile: document.getElementById("importFile")
};

let currentAnimals = [...initialSheepData];

function getAgeString(birthDateString) {
  const birth = new Date(birthDateString);
  const now = new Date();
  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  const days = now.getDate() - birth.getDate();

  if (days < 0) {
    months -= 1;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years <= 0) {
    const totalMonths = Math.max(1, months + (years * 12));
    if (totalMonths === 1) return "شهر واحد";
    return `${totalMonths} أشهر`;
  }

  if (months === 0) {
    return `${years} ${years === 1 ? "سنة" : "سنوات"}`;
  }

  return `${years} سنوات و ${months} أشهر`;
}

function getAgeMonths(birthDateString) {
  const birth = new Date(birthDateString);
  const now = new Date();
  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  const days = now.getDate() - birth.getDate();

  if (days < 0) {
    months -= 1;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return Math.max(0, years * 12 + months);
}

function buildAnimalCard(animal) {
  const template = elements.animalCardTemplate.content.cloneNode(true);
  template.querySelector(".animal-name").textContent = animal.ID;
  template.querySelector(
    ".animal-meta"
  ).textContent = `${animal.Gender} • ${groupNames[animal.Group] || "غير محدد"}`;

  const tagsContainer = template.querySelector(".animal-tags");
  tagsContainer.innerHTML = `
    <span class="tag">${animal.Tag}</span>
    <span class="tag">${getAgeString(animal.BirthDate)}</span>
    <span class="tag">${statusNames[animal.Status] || "طبيعي"}</span>
  `;

  const datesContainer = template.querySelector(".animal-dates");
  datesContainer.innerHTML = `
    <div>تاريخ الميلاد: ${animal.BirthDate}</div>
  `;

  return template;
}

function getFilteredAnimals() {
  const searchValue = elements.searchInput.value.trim().toLowerCase();
  const groupValue = elements.groupFilter.value;
  const statusValue = elements.statusFilter.value;

  return currentAnimals.filter((animal) => {
    const matchesSearch =
      searchValue === "" ||
      animal.ID.toLowerCase().includes(searchValue) ||
      animal.Gender.includes(searchValue) ||
      (groupNames[animal.Group] || "").includes(searchValue);

    const matchesGroup = groupValue === "all" || animal.Group === groupValue;
    const matchesStatus = statusValue === "all" || animal.Status === statusValue;

    return matchesSearch && matchesGroup && matchesStatus;
  });
}

function renderStats() {
  const total = currentAnimals.length;
  const rams = currentAnimals.filter((animal) => animal.Group === "ram").length;
  const ewes = currentAnimals.filter((animal) => animal.Group === "ewe").length;
  const lambs = currentAnimals.filter((animal) => animal.Group === "lamb").length;
  const ready = currentAnimals.filter(
    (animal) => animal.Group === "ewe" && getAgeMonths(animal.BirthDate) >= 24
  ).length;
  const alerts = 0;

  elements.statTotal.textContent = total;
  elements.statRams.textContent = rams;
  elements.statEwes.textContent = ewes;
  elements.statLambs.textContent = lambs;
  elements.statReady.textContent = ready;
  elements.statAlerts.textContent = alerts;
  elements.alertsList.textContent = alerts === 0 ? "لا توجد تنبيهات" : `هناك ${alerts} تنبيه`;
}

function renderAnimalGrid() {
  elements.animalGrid.innerHTML = "";
  const animals = getFilteredAnimals();

  if (animals.length === 0) {
    elements.animalGrid.innerHTML = "<div class=\"empty-state\">لا توجد رؤوس في العرض</div>";
    return;
  }

  animals.forEach((animal) => {
    const card = buildAnimalCard(animal);
    elements.animalGrid.appendChild(card);
  });
}

function downloadJSON(data, fileName) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function handleImportFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const importedData = JSON.parse(reader.result);
      if (Array.isArray(importedData)) {
        currentAnimals = importedData.map((item) => ({
          ...item,
          Group: item.Group || item.group || "unspecified",
          Status: item.Status || item.status || "normal"
        }));
        render();
      }
    } catch (error) {
      console.error("فشل استيراد JSON:", error);
    }
  };
  reader.readAsText(file, "UTF-8");
}

function render() {
  renderStats();
  renderAnimalGrid();
}

function setupEventListeners() {
  elements.searchInput.addEventListener("input", renderAnimalGrid);
  elements.groupFilter.addEventListener("change", renderAnimalGrid);
  elements.statusFilter.addEventListener("change", renderAnimalGrid);
  elements.seedDemoBtn.addEventListener("click", () => {
    currentAnimals = [...initialSheepData];
    render();
  });
  elements.exportBtn.addEventListener("click", () => {
    downloadJSON(currentAnimals, "sheep-data.json");
  });
  elements.importFile.addEventListener("change", handleImportFile);
}

window.initialSheepData = initialSheepData;

setupEventListeners();
render();

console.log("Initial sheep data loaded:", initialSheepData);
