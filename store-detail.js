const { projects, stores } = window.siteData;

const storeImages = {
  "Ẩm thực":
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
  "Mua sắm":
    "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80",
  "Dịch vụ":
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  "Gia đình":
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
  "Sức khỏe":
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
};

const params = new URLSearchParams(window.location.search);
const storeParam = params.get("id");
const store = stores.find((item) => getStoreId(item) === storeParam) || stores[0];
const project = projects.find((item) => item.id === store.projectId) || projects[0];

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  render();
});

function cacheElements() {
  els.storeHero = document.querySelector("#storeHero");
  els.storeProfileGrid = document.querySelector("#storeProfileGrid");
  els.reviewSummary = document.querySelector("#reviewSummary");
  els.reviewList = document.querySelector("#reviewList");
}

function render() {
  document.title = `${store.name} | Cẩm nang Masterise Homes`;
  renderHero();
  renderProfile();
  renderReviews();
  syncIcons();
}

function renderHero() {
  const rating = getStoreRating(store);
  const reviewCount = getReviewCount(store);

  els.storeHero.innerHTML = `
    <img src="${getStoreImage(store)}" alt="${store.name}" />
    <div class="store-detail-hero-copy">
      <a href="project.html?id=${project.id}#stores" class="back-link">
        <i data-lucide="arrow-left" aria-hidden="true"></i>
        ${project.name}
      </a>
      <span>${store.type} / ${project.name}</span>
      <h1>${store.name}</h1>
      <p>${store.note}</p>
      <div class="store-rating-large">
        <i data-lucide="star" aria-hidden="true"></i>
        <strong>${rating}</strong>
        <span>${reviewCount} đánh giá cư dân</span>
      </div>
      <div class="detail-hero-actions">
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
  `;
}

function renderProfile() {
  els.storeProfileGrid.innerHTML = [
    profileItem("map-pin", "Vị trí", `${store.floor} - ${project.location}`),
    profileItem("clock-3", "Giờ mở cửa", store.hours),
    profileItem("phone", "Số điện thoại", store.phone),
    profileItem("tag", "Nhóm dịch vụ", store.type),
    profileItem("building-2", "Dự án", project.name),
    profileItem("mail", "Góp ý hỗ trợ", "luongminhphuong710@gmail.com"),
  ].join("");
}

function profileItem(icon, label, value) {
  return `
    <article class="overview-item">
      <i data-lucide="${icon}" aria-hidden="true"></i>
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `;
}

function renderReviews() {
  const rating = getStoreRating(store);
  const reviews = getReviews(store);

  els.reviewSummary.innerHTML = `
    <div>
      <strong>${rating}</strong>
      <span>${getStars(Number(rating))}</span>
      <p>Dựa trên ${getReviewCount(store)} lượt đánh giá cư dân</p>
    </div>
    <a href="mailto:luongminhphuong710@gmail.com?subject=${encodeURIComponent(`Đánh giá gian hàng ${store.name}`)}">
      <i data-lucide="star" aria-hidden="true"></i>
      Gửi đánh giá
    </a>
  `;

  els.reviewList.innerHTML = reviews
    .map(
      (review) => `
        <article class="review-card">
          <div>
            <strong>${review.name}</strong>
            <span>${getStars(review.rating)}</span>
          </div>
          <p>${review.content}</p>
          <small>${review.date}</small>
        </article>
      `
    )
    .join("");
}

function getReviews(item) {
  return [
    {
      name: "Minh Anh",
      rating: 5,
      date: "11/06/2026",
      content: `${item.name} phản hồi nhanh, thông tin rõ ràng và thuận tiện cho cư dân trong dự án.`,
    },
    {
      name: "Hoàng Nam",
      rating: 4,
      date: "09/06/2026",
      content: "Vị trí dễ tìm, giờ mở cửa phù hợp. Mình mong gian hàng cập nhật thêm ưu đãi cư dân mỗi tuần.",
    },
    {
      name: "Thanh Phương",
      rating: 5,
      date: "05/06/2026",
      content: "Trải nghiệm ổn, nhân viên hỗ trợ nhiệt tình. Đây là một điểm nên lưu lại trong cẩm nang cư dân.",
    },
  ];
}

function getStars(value) {
  const full = Math.round(value);
  return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(0, 5 - full);
}

function getStoreId(item) {
  return `${item.projectId}-${slugify(item.name)}`;
}

function getStoreImage(item) {
  return item.image || storeImages[item.type] || project.image;
}

function getStoreRating(item) {
  const score = 4.4 + (item.name.length % 5) / 10;
  return score.toFixed(1);
}

function getReviewCount(item) {
  return 18 + ((item.name.length + item.projectId.length) % 27);
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

function syncIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
