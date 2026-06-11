const { regions, segments, projects, stores, projectNews } = window.siteData;

const state = {
  region: "all",
  segment: "all",
  query: "",
};

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  fillFilters();
  bindEvents();
  render();
});

function cacheElements() {
  els.searchInput = document.querySelector("#siteSearch");
  els.regionFilter = document.querySelector("#regionFilter");
  els.segmentFilter = document.querySelector("#segmentFilter");
  els.directoryStats = document.querySelector("#directoryStats");
  els.projectList = document.querySelector("#projectList");
}

function fillFilters() {
  els.regionFilter.innerHTML = Object.entries(regions)
    .map(([value, label]) => `<option value="${value}">${label}</option>`)
    .join("");

  els.segmentFilter.innerHTML = Object.entries(segments)
    .map(([value, label]) => `<option value="${value}">${label}</option>`)
    .join("");
}

function bindEvents() {
  els.searchInput?.addEventListener("input", () => {
    state.query = els.searchInput.value;
    render();
  });

  els.regionFilter?.addEventListener("change", () => {
    state.region = els.regionFilter.value;
    render();
  });

  els.segmentFilter?.addEventListener("change", () => {
    state.segment = els.segmentFilter.value;
    render();
  });
}

function render() {
  const items = filteredProjects();
  renderStats(items);
  renderProjectList(items);
  syncIcons();
}

function renderStats(items) {
  const storeCount = stores.filter((store) => items.some((project) => project.id === store.projectId)).length;
  const newsCount = projectNews.filter((news) => items.some((project) => project.id === news.projectId)).length;
  const activeRegion = regions[state.region];
  const activeSegment = segments[state.segment];

  els.directoryStats.innerHTML = [
    statCard(items.length, `Dự án hiển thị - ${activeRegion}`),
    statCard(projects.length, "Mục dữ liệu dự án"),
    statCard(storeCount, "Gian hàng theo bộ lọc"),
    statCard(newsCount, `Bản tin - ${activeSegment}`),
  ].join("");
}

function statCard(value, label) {
  return `
    <article class="stat-card">
      <strong>${value}</strong>
      <span>${label}</span>
    </article>
  `;
}

function renderProjectList(items) {
  if (!items.length) {
    els.projectList.innerHTML = `<div class="no-results">Chưa có dự án phù hợp với bộ lọc hiện tại.</div>`;
    return;
  }

  els.projectList.innerHTML = items.map(renderProjectCard).join("");
}

function renderProjectCard(project) {
  const storeCount = stores.filter((store) => store.projectId === project.id).length;
  const newsCount = projectNews.filter((news) => news.projectId === project.id).length;

  return `
    <article class="directory-project">
      <a class="directory-project-media" href="project.html?id=${project.id}" aria-label="Xem ${project.name}">
        <img src="${project.image}" alt="${project.name}" loading="lazy" />
        <span>${project.status}</span>
      </a>
      <div class="directory-project-body">
        <div class="directory-project-region">${regions[project.region]}</div>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="directory-project-meta">
          <span><i data-lucide="map-pin" aria-hidden="true"></i>${project.location}</span>
          <span><i data-lucide="tag" aria-hidden="true"></i>${segments[project.segment]}</span>
          <span><i data-lucide="store" aria-hidden="true"></i>${storeCount} gian hàng</span>
          <span><i data-lucide="newspaper" aria-hidden="true"></i>${newsCount} bản tin</span>
        </div>
        <a class="text-action" href="project.html?id=${project.id}">
          Xem trang dự án
          <i data-lucide="arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </article>
  `;
}

function filteredProjects() {
  const query = normalize(state.query);

  return projects.filter((project) => {
    const inRegion = state.region === "all" || project.region === state.region;
    const inSegment = state.segment === "all" || project.segment === state.segment;
    if (!inRegion || !inSegment) return false;
    if (!query) return true;

    return normalize(
      [
        project.name,
        project.city,
        project.location,
        project.status,
        project.description,
        regions[project.region],
        segments[project.segment],
      ].join(" ")
    ).includes(query);
  });
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
