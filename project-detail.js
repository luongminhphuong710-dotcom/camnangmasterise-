const { regions, segments, projects, stores, projectNews, storeCategories } = window.siteData;

const params = new URLSearchParams(window.location.search);
const projectId = params.get("id") || projects[0].id;
const project = projects.find((item) => item.id === projectId) || projects[0];
const state = {
  storeQuery: "",
  storeCategory: "all",
};

const storeImages = {
  "Ẩm thực":
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
  "Mua sắm":
    "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=900&q=80",
  "Dịch vụ":
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  "Gia đình":
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
  "Sức khỏe":
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
};

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  render();
});

function cacheElements() {
  els.detailHero = document.querySelector("#detailHero");
  els.overviewGrid = document.querySelector("#overviewGrid");
  els.detailStoreGrid = document.querySelector("#detailStoreGrid");
  els.projectStoreSearch = document.querySelector("#projectStoreSearch");
  els.storeCategoryChips = document.querySelector("#storeCategoryChips");
  els.detailNewsGrid = document.querySelector("#detailNewsGrid");
  els.storesTitle = document.querySelector("#storesTitle");
  els.projectNewsTitle = document.querySelector("#projectNewsTitle");
}

function render() {
  document.title = `${project.name} | Cẩm nang Masterise Homes`;
  bindEvents();
  renderHero();
  renderOverview();
  renderStoreCategories();
  renderStores();
  renderNews();
  syncIcons();
}

function bindEvents() {
  els.projectStoreSearch?.addEventListener("input", () => {
    state.storeQuery = els.projectStoreSearch.value;
    renderStores();
    syncIcons();
  });

  els.storeCategoryChips?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-store-category]");
    if (!button) return;
    state.storeCategory = button.dataset.storeCategory;
    renderStoreCategories();
    renderStores();
    syncIcons();
  });
}

function renderHero() {
  els.detailHero.innerHTML = `
    <img src="${project.image}" alt="${project.name}" />
    <div class="detail-hero-copy">
      <a href="projects.html" class="back-link">
        <i data-lucide="arrow-left" aria-hidden="true"></i>
        Danh sách dự án
      </a>
      <p>${regions[project.region]} / ${segments[project.segment]}</p>
      <h1>${project.name}</h1>
      <span>${project.description}</span>
      <div class="detail-hero-actions">
        <a href="#stores"><i data-lucide="store" aria-hidden="true"></i>Gian hàng</a>
        <a href="#projectNews"><i data-lucide="newspaper" aria-hidden="true"></i>Tin tức</a>
      </div>
    </div>
  `;
}

function renderOverview() {
  const storeCount = stores.filter((store) => store.projectId === project.id).length;
  const newsCount = projectNews.filter((news) => news.projectId === project.id).length;

  els.overviewGrid.innerHTML = [
    overviewItem("map-pin", "Khu vực", `${project.city} - ${project.location}`),
    overviewItem("layers-3", "Phân khúc", segments[project.segment]),
    overviewItem("badge-check", "Trạng thái", project.status),
    overviewItem("store", "Gian hàng", `${storeCount} gian hàng đang có dữ liệu`),
    overviewItem("newspaper", "Tin tức", `${newsCount} bản tin liên quan`),
    overviewItem("phone", "Hotline hỗ trợ", "0988458783"),
  ].join("");
}

function overviewItem(icon, label, value) {
  return `
    <article class="overview-item">
      <i data-lucide="${icon}" aria-hidden="true"></i>
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `;
}

function renderStores() {
  const items = filteredStores();
  els.storesTitle.textContent = `Gian hàng tại ${project.name}`;

  if (!items.length) {
    els.detailStoreGrid.innerHTML = `<div class="no-results">Dự án này chưa có gian hàng được cập nhật.</div>`;
    return;
  }

  els.detailStoreGrid.innerHTML = items.map(renderStoreCard).join("");
}

function renderStoreCategories() {
  els.storeCategoryChips.innerHTML = storeCategories
    .map(
      (category) => `
        <button
          class="${category.id === state.storeCategory ? "is-active" : ""}"
          type="button"
          data-store-category="${category.id}"
        >
          ${category.label}
        </button>
      `
    )
    .join("");
}

function renderStoreCard(store) {
  const rating = getStoreRating(store);
  const reviews = getReviewCount(store);

  return `
    <article class="showcase-store-card">
      <a class="showcase-store-media" href="store.html?id=${getStoreId(store)}">
        <img src="${getStoreImage(store)}" alt="${store.name}" loading="lazy" />
        <span>${store.type}</span>
      </a>
      <div class="showcase-store-body">
        <div class="showcase-store-rating">
          <i data-lucide="star" aria-hidden="true"></i>
          <strong>${rating}</strong>
          <span>${reviews} đánh giá</span>
        </div>
        <h3><a href="store.html?id=${getStoreId(store)}">${store.name}</a></h3>
        <p>${store.note}</p>
        <div class="showcase-store-actions">
          <a href="tel:${cleanPhone(store.phone)}">
            <i data-lucide="phone-call" aria-hidden="true"></i>
            Gọi điện
          </a>
          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            `${store.name} ${project.location}`
          )}" target="_blank" rel="noreferrer">
            <i data-lucide="diamond-navigation" aria-hidden="true"></i>
            Chỉ đường
          </a>
        </div>
      </div>
    </article>
  `;
}

function filteredStores() {
  const category = storeCategories.find((item) => item.id === state.storeCategory);
  const query = normalize(state.storeQuery);

  return stores.filter((store) => {
    const inProject = store.projectId === project.id;
    const inCategory = !category || !category.types.length || category.types.includes(store.type);
    if (!inProject || !inCategory) return false;
    if (!query) return true;
    return normalize([store.name, store.type, store.floor, store.note].join(" ")).includes(query);
  });
}

function renderNews() {
  const items = projectNews.filter((news) => news.projectId === project.id);
  els.projectNewsTitle.textContent = `Tin tức tại ${project.name}`;

  if (!items.length) {
    els.detailNewsGrid.innerHTML = `<div class="no-results">Dự án này chưa có tin tức riêng được cập nhật.</div>`;
    return;
  }

  els.detailNewsGrid.innerHTML = items
    .map(
      (item) => `
        <article class="news-card">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
          <div class="news-card-body">
            <div class="news-meta">
              <span>${item.tag}</span>
              <span>${project.name}</span>
              <span>${item.date}</span>
            </div>
            <h3>${item.title}</h3>
            <p>${item.summary}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function syncIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function getStoreId(store) {
  return `${store.projectId}-${slugify(store.name)}`;
}

function getStoreImage(store) {
  return store.image || storeImages[store.type] || project.image;
}

function getStoreRating(store) {
  const score = 4.4 + (store.name.length % 5) / 10;
  return score.toFixed(1);
}

function getReviewCount(store) {
  return 18 + ((store.name.length + store.projectId.length) % 27);
}

function cleanPhone(phone) {
  return phone.replace(/[^\d+]/g, "");
}

function slugify(value) {
  return normalize(value).replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function normalize(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .trim();
}
