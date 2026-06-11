const grades = ["Lớp 3", "Lớp 4", "Lớp 5"];
const subjects = ["Toán", "Tiếng Việt", "Tiếng Anh"];
const planLabels = {
  day: "Theo ngày",
  week: "Theo tuần",
  month: "Theo tháng",
};

const subjectTopics = {
  Toán: [
    "Số tự nhiên và phép tính",
    "Phân số cơ bản",
    "Hình học và đo lường",
    "Giải toán có lời văn",
  ],
  "Tiếng Việt": [
    "Đọc hiểu đoạn văn",
    "Luyện từ và câu",
    "Chính tả và dấu câu",
    "Viết đoạn văn ngắn",
  ],
  "Tiếng Anh": [
    "Từ vựng chủ đề gia đình",
    "Câu hỏi giao tiếp",
    "Thì hiện tại đơn",
    "Đọc hiểu câu ngắn",
  ],
};

const templates = {
  Toán: [
    "Tính nhanh rồi giải thích cách làm: {a} + {b} - {c}.",
    "Một cửa hàng có {a} quyển vở, bán {c} quyển. Hỏi còn lại bao nhiêu quyển?",
    "So sánh hai số rồi ghi dấu thích hợp: {a} và {b}.",
    "Tìm số còn thiếu trong phép tính: ___ + {c} = {b}.",
    "Một hình chữ nhật có chiều dài {a} cm, chiều rộng {c} cm. Tính chu vi.",
  ],
  "Tiếng Việt": [
    "Đọc một đoạn văn ngắn và gạch dưới 3 từ chỉ sự vật.",
    "Đặt 2 câu với cặp từ gần nghĩa: chăm chỉ, siêng năng.",
    "Viết lại câu sau cho đúng dấu câu: hôm nay em học rất vui",
    "Tìm chủ ngữ và vị ngữ trong câu: Cư dân nhỏ chăm chỉ đọc sách.",
    "Viết một đoạn 4 câu kể về một việc tốt em làm trong ngày.",
  ],
  "Tiếng Anh": [
    "Write 3 words about family and make 1 simple sentence.",
    "Choose the correct form: She ___ to school every day. (go/goes)",
    "Translate into English: Em thích đọc sách.",
    "Make a question with: Where / you / live?",
    "Read: This is my home. It is clean. Answer: Is the home clean?",
  ],
};

const state = {
  grade: "all",
  subject: "all",
  plan: "day",
  query: "",
  completed: new Set(JSON.parse(localStorage.getItem("learningCompleted") || "[]")),
};

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  fillFilters();
  bindEvents();
  render();
});

function cacheElements() {
  els.searchInput = document.querySelector("#learningSearch");
  els.gradeFilter = document.querySelector("#gradeFilter");
  els.subjectFilter = document.querySelector("#subjectFilter");
  els.planTabs = document.querySelector("#planTabs");
  els.totalStars = document.querySelector("#totalStars");
  els.progressText = document.querySelector("#progressText");
  els.learningStats = document.querySelector("#learningStats");
  els.roadmapGrid = document.querySelector("#roadmapGrid");
  els.exerciseGrid = document.querySelector("#exerciseGrid");
  els.certificateGrid = document.querySelector("#certificateGrid");
  els.resetProgress = document.querySelector("#resetProgress");
}

function fillFilters() {
  els.gradeFilter.innerHTML = [
    `<option value="all">Tất cả lớp</option>`,
    ...grades.map((grade) => `<option value="${grade}">${grade}</option>`),
  ].join("");

  els.subjectFilter.innerHTML = [
    `<option value="all">Tất cả môn</option>`,
    ...subjects.map((subject) => `<option value="${subject}">${subject}</option>`),
  ].join("");
}

function bindEvents() {
  els.searchInput?.addEventListener("input", () => {
    state.query = els.searchInput.value;
    render();
  });

  els.gradeFilter?.addEventListener("change", () => {
    state.grade = els.gradeFilter.value;
    render();
  });

  els.subjectFilter?.addEventListener("change", () => {
    state.subject = els.subjectFilter.value;
    render();
  });

  els.planTabs?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-plan]");
    if (!button) return;
    state.plan = button.dataset.plan;
    render();
  });

  els.exerciseGrid?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-exercise-id]");
    if (!button) return;
    toggleExercise(button.dataset.exerciseId);
  });

  els.resetProgress?.addEventListener("click", () => {
    state.completed.clear();
    saveProgress();
    render();
  });
}

function render() {
  const exercises = filteredExercises();
  const allExercises = buildExercises();
  const completedCount = allExercises.filter((item) => state.completed.has(item.id)).length;
  const stars = allExercises.reduce((sum, item) => sum + (state.completed.has(item.id) ? item.stars : 0), 0);

  syncPlanTabs();
  els.totalStars.textContent = stars;
  els.progressText.textContent = `${completedCount}/${allExercises.length} bài đã hoàn thành. ${nextAwardText(stars, completedCount)}`;
  renderStats(exercises, completedCount, stars);
  renderRoadmap(allExercises);
  renderExercises(exercises);
  renderCertificates(stars, completedCount);
  syncIcons();
}

function renderStats(items, completedCount, stars) {
  const activeDays = new Set(items.map((item) => item.day)).size;
  els.learningStats.innerHTML = [
    statCard(items.length, "Bài tập theo bộ lọc"),
    statCard(activeDays, "Ngày học đang hiển thị"),
    statCard(completedCount, "Bài đã hoàn thành"),
    statCard(stars, "Sao đã nhận"),
  ].join("");
}

function statCard(value, label) {
  return `
    <article class="learning-stat">
      <strong>${value}</strong>
      <span>${label}</span>
    </article>
  `;
}

function renderRoadmap(allExercises) {
  const cards = state.plan === "day" ? dailyCards(allExercises) : state.plan === "week" ? weeklyCards(allExercises) : monthlyCards(allExercises);
  els.roadmapGrid.innerHTML = cards.join("");
}

function dailyCards(allExercises) {
  return Array.from({ length: 7 }, (_, index) => {
    const day = index + 1;
    const items = allExercises.filter((item) => item.day === day);
    const done = items.filter((item) => state.completed.has(item.id)).length;
    return roadmapCard(`Ngày ${day}`, subjectTopics[subjects[index % subjects.length]][index % 4], done, items.length);
  });
}

function weeklyCards(allExercises) {
  return Array.from({ length: 4 }, (_, index) => {
    const week = index + 1;
    const items = allExercises.filter((item) => item.week === week);
    const done = items.filter((item) => state.completed.has(item.id)).length;
    return roadmapCard(`Tuần ${week}`, `Hoàn thành mạch kiến thức ${week} và ôn tập cuối tuần`, done, items.length);
  });
}

function monthlyCards(allExercises) {
  const done = allExercises.filter((item) => state.completed.has(item.id)).length;
  return [
    roadmapCard("Tháng 1", "Bám sát các mạch kiến thức chính, luyện đều 28 ngày.", done, allExercises.length),
    roadmapCard("Tháng 2", "Ôn tập nâng cao và kiểm tra năng lực theo tuần.", 0, allExercises.length),
    roadmapCard("Tháng 3", "Củng cố chuyên đề yếu và nhận bằng hoàn thành.", 0, allExercises.length),
  ];
}

function roadmapCard(title, description, done, total) {
  const percent = total ? Math.round((done / total) * 100) : 0;
  return `
    <article class="roadmap-card">
      <div>
        <span>${planLabels[state.plan]}</span>
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
      <strong>${done}/${total}</strong>
      <div class="progress-bar"><i style="width:${percent}%"></i></div>
    </article>
  `;
}

function renderExercises(items) {
  if (!items.length) {
    els.exerciseGrid.innerHTML = `<div class="no-results">Chưa có bài tập phù hợp với bộ lọc hiện tại.</div>`;
    return;
  }

  els.exerciseGrid.innerHTML = items.map(renderExercise).join("");
}

function renderExercise(item) {
  const completed = state.completed.has(item.id);
  return `
    <article class="exercise-card ${completed ? "is-complete" : ""}">
      <div class="exercise-card-top">
        <span>${item.grade}</span>
        <span>${item.subject}</span>
        <span>Ngày ${item.day}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.prompt}</p>
      <div class="exercise-meta">
        <span><i data-lucide="book-open-check" aria-hidden="true"></i>${item.standard}</span>
        <span><i data-lucide="star" aria-hidden="true"></i>${item.stars} sao</span>
      </div>
      <button type="button" data-exercise-id="${item.id}">
        <i data-lucide="${completed ? "check-circle-2" : "circle"}" aria-hidden="true"></i>
        ${completed ? "Đã hoàn thành" : `Hoàn thành +${item.stars} sao`}
      </button>
    </article>
  `;
}

function renderCertificates(stars, completedCount) {
  const awards = [
    {
      title: "Huy hiệu Chăm chỉ",
      condition: stars >= 30,
      note: "Đạt 30 sao từ bài tập theo ngày.",
      icon: "badge-check",
    },
    {
      title: "Bằng Hoàn thành tuần",
      condition: completedCount >= 21,
      note: "Hoàn thành ít nhất 21 bài trong lộ trình.",
      icon: "award",
    },
    {
      title: "Bằng Tự học bám SGK",
      condition: stars >= 90,
      note: "Đạt 90 sao và duy trì luyện tập đều.",
      icon: "graduation-cap",
    },
    {
      title: "Bằng Về đích tháng",
      condition: completedCount >= 56,
      note: "Hoàn thành phần lớn kho bài tập tháng.",
      icon: "trophy",
    },
  ];

  els.certificateGrid.innerHTML = awards
    .map(
      (award) => `
        <article class="certificate-card ${award.condition ? "is-unlocked" : ""}">
          <i data-lucide="${award.icon}" aria-hidden="true"></i>
          <span>${award.condition ? "Đã mở khóa" : "Chưa mở khóa"}</span>
          <h3>${award.title}</h3>
          <p>${award.note}</p>
          <strong>${award.condition ? "Trao bằng" : "Tiếp tục tích sao"}</strong>
        </article>
      `
    )
    .join("");
}

function filteredExercises() {
  const query = normalize(state.query);
  return buildExercises().filter((item) => {
    const inGrade = state.grade === "all" || item.grade === state.grade;
    const inSubject = state.subject === "all" || item.subject === state.subject;
    if (!inGrade || !inSubject) return false;
    if (!query) return true;
    return normalize([item.title, item.prompt, item.standard, item.subject, item.grade].join(" ")).includes(query);
  });
}

function buildExercises() {
  const exercises = [];
  for (let day = 1; day <= 28; day += 1) {
    subjects.forEach((subject, subjectIndex) => {
      const grade = grades[(day + subjectIndex) % grades.length];
      const topic = subjectTopics[subject][(day + subjectIndex) % subjectTopics[subject].length];
      templates[subject].forEach((template, templateIndex) => {
        const number = day * 10 + templateIndex + subjectIndex;
        exercises.push({
          id: `${day}-${subject}-${templateIndex}`.replace(/\s+/g, "-").toLowerCase(),
          day,
          week: Math.ceil(day / 7),
          grade,
          subject,
          title: `${topic} - bài ${templateIndex + 1}`,
          prompt: template
            .replace("{a}", number + 8)
            .replace("{b}", number + 23)
            .replace("{c}", templateIndex + 4),
          standard: `Bám mạch kiến thức SGK ${grade}`,
          stars: 2 + ((day + templateIndex) % 3),
        });
      });
    });
  }
  return exercises;
}

function toggleExercise(id) {
  if (state.completed.has(id)) {
    state.completed.delete(id);
  } else {
    state.completed.add(id);
  }
  saveProgress();
  render();
}

function saveProgress() {
  localStorage.setItem("learningCompleted", JSON.stringify([...state.completed]));
}

function nextAwardText(stars, completedCount) {
  if (completedCount >= 56) return "Bạn đã đủ điều kiện nhận bằng Về đích tháng.";
  if (stars >= 90) return "Bạn đã mở bằng Tự học bám SGK.";
  if (completedCount >= 21) return "Bạn đã mở bằng Hoàn thành tuần.";
  if (stars >= 30) return "Bạn đã mở huy hiệu Chăm chỉ.";
  return `Cần thêm ${Math.max(0, 30 - stars)} sao để mở huy hiệu đầu tiên.`;
}

function syncPlanTabs() {
  els.planTabs
    ?.querySelectorAll("[data-plan]")
    .forEach((button) => button.classList.toggle("is-active", button.dataset.plan === state.plan));
}

function normalize(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .trim();
}

function syncIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
