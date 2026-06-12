const { newsItems, projects, regionMeta, fallbackImage } = window.CAMNANG_DATA;

let selectedNewsRegion = "all";

document.addEventListener("DOMContentLoaded", () => {
  bindEvents();
  renderNewsDirectory();
  syncIcons();
});

function bindEvents() {
  const tabs = document.querySelector("#newsRegionTabs");
  tabs?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-region]");
    if (!button) return;
    selectedNewsRegion = button.dataset.region;
    tabs
      .querySelectorAll("[data-region]")
      .forEach((item) => item.classList.toggle("is-active", item === button));
    renderNewsDirectory();
    syncIcons();
  });
}

function renderNewsDirectory() {
  const grid = document.querySelector("#newsCardGrid");
  const items = filteredNews();

  if (!items.length) {
    grid.innerHTML = `<div class="no-results">Chưa có bài viết thuộc miền đã chọn.</div>`;
    return;
  }

  grid.innerHTML = items
    .map((news) => {
      const project = getProject(news.projectId);
      const region = regionMeta[news.region]?.label ?? "Toàn quốc";
      return `
        <a class="news-card-large" href="article.html?id=${news.id}">
          <figure>
            <img src="${news.image}" alt="${news.title}" loading="lazy" />
          </figure>
          <div>
            <span>${news.category} / ${region}</span>
            <h3>${news.title}</h3>
            <p>${news.excerpt}</p>
            <div class="news-tags">
              <small>${news.date}</small>
              ${project ? `<small>${project.name}</small>` : ""}
            </div>
          </div>
        </a>
      `;
    })
    .join("");

  hydrateImages();
}

function filteredNews() {
  return newsItems.filter(
    (news) => selectedNewsRegion === "all" || news.region === selectedNewsRegion
  );
}

function getProject(projectId) {
  return projects.find((project) => project.id === projectId);
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
