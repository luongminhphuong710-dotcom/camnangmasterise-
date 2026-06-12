const { projects, stores, newsItems, regionMeta, fallbackImage } = window.CAMNANG_DATA;

document.addEventListener("DOMContentLoaded", () => {
  const project = resolveProject();
  renderProject(project);
  hydrateImages();
  syncIcons();
});

function resolveProject() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return projects.find((item) => item.id === id) ?? projects[0];
}

function renderProject(project) {
  const root = document.querySelector("#projectDetail");
  const breadcrumb = document.querySelector("#breadcrumbProject");
  const projectStores = stores.filter((store) => store.projectId === project.id);
  const projectNews = newsItems.filter((news) => news.projectId === project.id);

  document.title = `${project.name} | Cẩm Nang Masterise`;
  breadcrumb.textContent = project.name;

  root.innerHTML = `
    <article class="project-detail-view">
      <figure class="detail-hero">
        <img src="${project.image}" alt="${project.name}" />
        <figcaption>
          <span>${regionMeta[project.region].label} / ${project.city}</span>
          <h1>${project.name}</h1>
        </figcaption>
      </figure>

      <div class="detail-content">
        <section class="detail-panel">
          <p class="eyebrow">Thông tin dự án</p>
          <h2>Tổng quan</h2>
          <p>${project.summary}</p>
          <div class="info-grid">
            <div><strong>Vị trí</strong><span>${project.location}</span></div>
            <div><strong>Phân khúc</strong><span>${project.segment}</span></div>
            <div><strong>Trạng thái</strong><span>${project.status}</span></div>
            <div><strong>Gian hàng</strong><span>${projectStores.length} mục đang có</span></div>
          </div>
          <div class="project-actions wide">
            <a class="primary-action" href="stores.html?project=${project.id}">
              <i data-lucide="store" aria-hidden="true"></i>
              Xem gian hàng dự án
            </a>
            <a class="secondary-action" href="${project.source}" target="_blank" rel="noreferrer">
              <i data-lucide="external-link" aria-hidden="true"></i>
              Trang Masterise
            </a>
          </div>
        </section>

        <section class="detail-panel">
          <p class="eyebrow">Cẩm nang nhanh</p>
          <h2>Những mục nên theo dõi</h2>
          <ul class="guide-list">
            ${project.highlights
              .map(
                (item) => `
                  <li>
                    <i data-lucide="check-circle-2" aria-hidden="true"></i>
                    <span>${item}</span>
                  </li>
                `
              )
              .join("")}
          </ul>
        </section>

        <section class="detail-panel full">
          <div class="section-heading compact">
            <p class="eyebrow">Tin dự án</p>
            <h2>Tin liên quan</h2>
          </div>
          <div class="news-list compact-list">
            ${
              projectNews.length
                ? projectNews
                    .map(
                      (news) => `
                        <a class="news-item" href="article.html?id=${news.id}">
                          <img src="${news.image}" alt="${news.title}" loading="lazy" />
                          <div>
                            <span>${news.category} / ${news.date}</span>
                            <h3>${news.title}</h3>
                          </div>
                        </a>
                      `
                    )
                    .join("")
                : `<div class="no-results">Chưa có tin riêng cho dự án này.</div>`
            }
          </div>
        </section>
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

function syncIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
