const { newsItems, projects, regionMeta, fallbackImage } = window.CAMNANG_DATA;

document.addEventListener("DOMContentLoaded", () => {
  const article = resolveArticle();
  renderArticle(article);
  hydrateImages();
  syncIcons();
});

function resolveArticle() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return newsItems.find((item) => item.id === id) ?? newsItems[0];
}

function renderArticle(article) {
  const root = document.querySelector("#articleDetail");
  const breadcrumb = document.querySelector("#breadcrumbArticle");
  const project = getProject(article.projectId);
  const related = newsItems
    .filter((item) => item.id !== article.id && item.region === article.region)
    .slice(0, 3);

  document.title = `${article.title} | Cẩm Nang Masterise`;
  breadcrumb.textContent = article.title;

  root.innerHTML = `
    <header class="article-hero">
      <div>
        <p class="eyebrow">${article.category} / ${regionMeta[article.region].label}</p>
        <h1>${article.title}</h1>
        <p>${article.excerpt}</p>
        <div class="news-tags">
          <small>${article.date}</small>
          ${project ? `<small>${project.name}</small>` : ""}
          ${article.hashtags.map((tag) => `<small>${tag}</small>`).join("")}
        </div>
        ${
          project
            ? `
              <div class="article-actions">
                <a class="primary-action" href="project.html?id=${project.id}">
                  <i data-lucide="info" aria-hidden="true"></i>
                  Thông tin dự án
                </a>
                <a class="secondary-action" href="stores.html?project=${project.id}">
                  <i data-lucide="store" aria-hidden="true"></i>
                  Gian hàng dự án
                </a>
              </div>
            `
            : ""
        }
      </div>
      <figure>
        <img src="${article.image}" alt="${article.title}" />
      </figure>
    </header>

    <div class="article-layout">
      <section class="article-body">
        ${article.content.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </section>

      <aside class="related-news">
        <p class="eyebrow">${regionMeta[article.region].label}</p>
        <h2>Tin liên quan</h2>
        ${
          related.length
            ? related
                .map(
                  (item) => `
                    <a class="related-item" href="article.html?id=${item.id}">
                      <span>${item.category}</span>
                      <strong>${item.title}</strong>
                    </a>
                  `
                )
                .join("")
            : `<p>Chưa có tin liên quan cùng miền.</p>`
        }
      </aside>
    </div>
  `;
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
