const { projects, stores, storeCategories, regionMeta, fallbackImage } = window.CAMNANG_DATA;

let selectedCategory = "all";
let storeQuery = "";
let project = null;

document.addEventListener("DOMContentLoaded", () => {
  project = resolveProject();
  renderDirectory();
  bindProjectLink();
  syncIcons();
});

function resolveProject() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("project");
  return projects.find((item) => item.id === id) ?? projects[0];
}

function bindProjectLink() {
  const link = document.querySelector("#projectInfoLink");
  if (link) {
    link.href = `project.html?id=${project.id}`;
  }
}

function renderDirectory() {
  const root = document.querySelector("#storeDirectory");
  const breadcrumb = document.querySelector("#breadcrumbProject");
  const projectStores = stores.filter((store) => store.projectId === project.id);
  const filteredStores = projectStores.filter((store) => matchesStoreFilters(store));

  document.title = `Gian hàng ${project.name} | Cẩm Nang Masterise`;
  breadcrumb.textContent = `Gian hàng ${project.name}`;

  root.innerHTML = `
    <section class="store-hero">
      <figure>
        <img src="${project.image}" alt="${project.name}" />
      </figure>
      <div>
        <p class="eyebrow">Gian hàng dự án</p>
        <h1>${project.name}</h1>
        <p>${regionMeta[project.region].label} / ${project.city} - ${project.location}</p>
        <div class="project-actions wide">
          <a class="primary-action" href="project.html?id=${project.id}">
            <i data-lucide="info" aria-hidden="true"></i>
            Thông tin dự án
          </a>
          <a class="secondary-action" href="index.html#projects">
            <i data-lucide="map" aria-hidden="true"></i>
            Chọn dự án khác
          </a>
        </div>
      </div>
    </section>

    <section class="store-directory">
      <div class="section-heading compact">
        <p class="eyebrow">Tiện ích và gian hàng</p>
      </div>

      <label class="store-search" for="storeSearchInput">
        <i data-lucide="search" aria-hidden="true"></i>
        <input
          id="storeSearchInput"
          type="search"
          value="${escapeAttribute(storeQuery)}"
          placeholder="Tìm gian hàng, danh mục, tầng, giờ mở cửa..."
          autocomplete="off"
        />
      </label>

      <div class="chip-row" id="categoryTabs">
        ${storeCategories
          .map(
            (category) => `
              <button class="${category.id === selectedCategory ? "is-active" : ""}" type="button" data-category="${
              category.id
            }">
                <i data-lucide="${category.icon}" aria-hidden="true"></i>
                ${category.label}
              </button>
            `
          )
          .join("")}
      </div>

      <div class="store-grid">
        ${
          filteredStores.length
            ? filteredStores.map(storeCard).join("")
            : `<div class="no-results">Không tìm thấy gian hàng phù hợp với từ khóa hoặc danh mục hiện tại.</div>`
        }
      </div>
    </section>
  `;

  root.querySelector("#categoryTabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    selectedCategory = button.dataset.category;
    renderDirectory();
    syncIcons();
  });

  const searchInput = root.querySelector("#storeSearchInput");
  searchInput?.addEventListener("input", () => {
    storeQuery = searchInput.value;
    renderDirectory();
    syncIcons();
    const nextInput = document.querySelector("#storeSearchInput");
    nextInput?.focus();
    nextInput?.setSelectionRange(nextInput.value.length, nextInput.value.length);
  });

  hydrateImages();
}

function matchesStoreFilters(store) {
  const category = storeCategories.find((item) => item.id === store.category);
  const inCategory = selectedCategory === "all" || store.category === selectedCategory;
  if (!inCategory) return false;
  const query = normalize(storeQuery);
  if (!query) return true;
  return normalize(
    [store.name, store.note, store.floor, store.hours, store.phone, category?.label].join(" ")
  ).includes(query);
}

function storeCard(store) {
  const category = storeCategories.find((item) => item.id === store.category);
  return `
    <article class="store-card">
      <div class="store-top">
        <span class="store-icon">
          <i data-lucide="${category?.icon ?? "store"}" aria-hidden="true"></i>
        </span>
        <div>
          <span class="store-tag">${category?.label ?? "Dịch vụ"}</span>
          <h3>${store.name}</h3>
        </div>
      </div>
      <p>${store.note}</p>
      <div class="meta-list">
        <span><i data-lucide="map-pin" aria-hidden="true"></i>${store.floor}</span>
        <span><i data-lucide="clock-3" aria-hidden="true"></i>${store.hours}</span>
        <span><i data-lucide="star" aria-hidden="true"></i>${store.rating}/5 đánh giá</span>
        <span><i data-lucide="phone" aria-hidden="true"></i>${store.phone}</span>
      </div>
      <div class="project-actions wide store-card-actions">
        <a class="primary-action" href="store.html?id=${store.id}">
          <i data-lucide="external-link" aria-hidden="true"></i>
          Xem chi tiết
        </a>
      </div>
    </article>
  `;
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

function normalize(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .trim();
}

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function syncIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
