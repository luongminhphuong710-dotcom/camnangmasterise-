const { projects, stores, newsItems, regionMeta, fallbackImage } = window.CAMNANG_DATA;

let selectedRegion = "all";

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  bindEvents();
  render();
  syncIcons();
});

function cacheElements() {
  els.searchInput = document.querySelector("#searchInput");
  els.regionTabs = document.querySelector("#regionTabs");
  els.projectGrid = document.querySelector("#projectGrid");
  els.newsGrid = document.querySelector("#newsGrid");
}

function bindEvents() {
  els.searchInput?.addEventListener("input", render);

  els.regionTabs?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-region]");
    if (!button) return;
    selectedRegion = button.dataset.region;
    els.regionTabs
      .querySelectorAll("[data-region]")
      .forEach((item) => item.classList.toggle("is-active", item === button));
    render();
  });
}

function render() {
  renderProjects();
  renderNews();
  hydrateImages();
  syncIcons();
}

function renderProjects() {
  const items = filteredProjects();

  if (!items.length) {
    els.projectGrid.innerHTML = `
      <div class="no-results">
        Không tìm thấy dự án phù hợp. Hãy thử từ khóa khác hoặc chọn lại miền.
      </div>
    `;
    return;
  }

  els.projectGrid.innerHTML = items
    .map((project) => {
      const projectStores = stores.filter((store) => store.projectId === project.id);
      return `
        <article class="project-card">
          <figure>
            <img src="${project.image}" alt="${project.name}" loading="lazy" />
          </figure>
          <div class="project-body">
            <div class="project-heading">
              <span>${regionMeta[project.region].label} / ${project.city}</span>
              <h3>${project.name}</h3>
            </div>
            <p>${project.location}</p>
            <div class="project-meta">
              <span>${project.segment}</span>
              <span>${project.status}</span>
              <span>${projectStores.length} gian hàng</span>
            </div>
            <div class="project-actions">
              <a class="primary-action" href="project.html?id=${project.id}">
                <i data-lucide="info" aria-hidden="true"></i>
                Thông tin
              </a>
              <a class="secondary-action" href="stores.html?project=${project.id}">
                <i data-lucide="store" aria-hidden="true"></i>
                Gian hàng
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderNews() {
  const query = normalizedQuery();
  const items = latestNews(query).slice(0, 6);

  if (!items.length) {
    els.newsGrid.innerHTML = `
      <div class="no-results">Chưa có tin tức phù hợp với bộ lọc hiện tại.</div>
    `;
    return;
  }

  els.newsGrid.innerHTML = items
    .map((news) => {
      const project = getProject(news.projectId);
      return `
        <a class="news-item" href="article.html?id=${news.id}">
          <img src="${news.image}" alt="${news.title}" loading="lazy" />
          <div>
            <span>${news.category} / ${project ? project.name : regionMeta[news.region].label}</span>
            <h3>${news.title}</h3>
          </div>
        </a>
      `;
    })
    .join("");
}

function filteredProjects() {
  const query = normalizedQuery();
  return projects.filter((project) => {
    const matchesRegion = selectedRegion === "all" || project.region === selectedRegion;
    if (!matchesRegion) return false;
    if (!query) return true;
    return normalize(
      [
        project.name,
        project.city,
        project.location,
        project.segment,
        project.status,
        project.summary,
        regionMeta[project.region].label,
      ].join(" ")
    ).includes(query);
  });
}

function latestNews(query) {
  if (!query) return newsItems;
  return newsItems.filter((news) => {
    const project = getProject(news.projectId);
    return normalize(
      [news.title, news.category, news.date, news.excerpt, project?.name, project?.city].join(" ")
    ).includes(query);
  });
}

function getProject(projectId) {
  return projects.find((project) => project.id === projectId);
}

function normalizedQuery() {
  return normalize(els.searchInput?.value ?? "");
}

function normalize(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .trim();
}

function hydrateImages() {
  document.querySelectorAll("img").forEach((image) => {
    image.addEventListener(
      "error",
      () => {
        if (image.src !== fallbackImage) {
          image.src = fallbackImage;
        }
      },
      { once: true }
    );
  });
}

function syncIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
