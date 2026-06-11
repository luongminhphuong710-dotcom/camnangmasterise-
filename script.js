const regions = {
  north: "Miền Bắc",
  central: "Miền Trung",
  south: "Miền Nam",
};

const PROJECT_PREVIEW_LIMIT = 4;

const projects = [
  {
    id: "ocean-park-1",
    name: "Masteri Ocean Park 1",
    region: "north",
    city: "Hà Nội",
    status: "Đã bàn giao",
    image:
      "https://masterisehomes.com/masteri-waterfront/wp-content/uploads/2023/10/1920x1080_EN-1-scaled.jpg",
  },
  {
    id: "ocean-park-2",
    name: "Masteri Ocean Park 2",
    region: "north",
    city: "Hà Nội",
    status: "Đang triển khai",
    image:
      "https://masterisehomes.com/_next/image?q=70&url=https%3A%2F%2Frevamp-ldp.masterisehomes.com%2Fuploads%2FMasteri_Grand_Coast_a2c320e2ba.jpg&w=1200",
  },
  {
    id: "ocean-park-3",
    name: "Masteri Ocean Park 3",
    region: "north",
    city: "Hưng Yên",
    status: "Đang triển khai",
    image:
      "https://masterisehomes.com/_next/image?q=70&url=https%3A%2F%2Frevamp-ldp.masterisehomes.com%2Fuploads%2FMasteri_Era_Landmark_66abef1c67.jpg&w=1200",
  },
  {
    id: "smart-city",
    name: "Masteri Smart City",
    region: "north",
    city: "Hà Nội",
    status: "Đã bàn giao",
    image: "https://masterisehomes.com/lumiere-evergreen/wp-content/uploads/2023/12/image-6.jpg",
  },
  {
    id: "west-heights",
    name: "Masteri West Heights",
    region: "north",
    city: "Hà Nội",
    status: "Đã bàn giao",
    image:
      "https://masterisehomes.com/masteri-west-heights/storage/app/uploads/public/60c/177/845/60c1778457718570366514.jpg",
  },
  {
    id: "lumiere-evergreen",
    name: "LUMIÈRE Evergreen",
    region: "north",
    city: "Hà Nội",
    status: "Đang triển khai",
    image: "https://masterisehomes.com/lumiere-evergreen/wp-content/uploads/2023/12/image-6.jpg",
  },
  {
    id: "rivera-danang",
    name: "Masteri Rivera Danang",
    region: "central",
    city: "Đà Nẵng",
    status: "Dự kiến bàn giao Q4/2026",
    image:
      "https://masterisehomes.com/masteri-rivera-danang/wp-content/uploads/2025/05/introduction-img.jpg",
  },
  {
    id: "thao-dien",
    name: "Masteri Thảo Điền",
    region: "south",
    city: "TP.HCM",
    status: "Đã vận hành",
    image: "https://designbuild.vn/wp-content/uploads/2021/11/An-Phu-10-e1637912754563.jpg",
  },
  {
    id: "centre-point",
    name: "Masteri Centre Point",
    region: "south",
    city: "TP.HCM",
    status: "Đã bàn giao từng phần",
    image:
      "https://masterisehomes.com/masteri-centre-point/storage/media/Zk8aNchsAUm2hlrJA42XywyE7nsVrvNclKSeB2qt.jpeg",
  },
];

const stores = [
  {
    projectId: "ocean-park-1",
    name: "Resident Market",
    type: "Mua sắm",
    floor: "Sảnh A",
    hours: "07:00 - 22:00",
    phone: "0988 458 783",
    note: "Nhu yếu phẩm, nước uống, đồ dùng căn hộ.",
  },
  {
    projectId: "ocean-park-1",
    name: "Waterfront Coffee",
    type: "Ẩm thực",
    floor: "Khối đế",
    hours: "06:30 - 21:30",
    phone: "0829 206 666",
    note: "Cafe, bánh ngọt, đồ uống mang đi.",
  },
  {
    projectId: "ocean-park-2",
    name: "Grand Coast Mart",
    type: "Mua sắm",
    floor: "Tầng 1",
    hours: "08:00 - 22:00",
    phone: "0902 158 159",
    note: "Gian hàng tiện ích cho cư dân mới nhận nhà.",
  },
  {
    projectId: "ocean-park-2",
    name: "Kids Aqua Club",
    type: "Gia đình",
    floor: "Khu tiện ích",
    hours: "09:00 - 18:00",
    phone: "0911 920 666",
    note: "Lớp bơi, hoạt động hè, dịch vụ cho trẻ em.",
  },
  {
    projectId: "ocean-park-3",
    name: "Era Food Corner",
    type: "Ẩm thực",
    floor: "Sảnh chính",
    hours: "10:00 - 21:00",
    phone: "0936 888 345",
    note: "Đồ ăn nhanh, cơm văn phòng, đặt món theo nhóm.",
  },
  {
    projectId: "smart-city",
    name: "Smart Laundry",
    type: "Dịch vụ",
    floor: "Tầng 1",
    hours: "08:00 - 20:00",
    phone: "0977 101 202",
    note: "Giặt sấy, vệ sinh rèm, nhận trả tại sảnh.",
  },
  {
    projectId: "smart-city",
    name: "Wellness Studio",
    type: "Sức khỏe",
    floor: "Khu tiện ích",
    hours: "06:00 - 21:00",
    phone: "0901 303 404",
    note: "Yoga, pilates, tư vấn sức khỏe cư dân.",
  },
  {
    projectId: "west-heights",
    name: "West Heights Mini Mart",
    type: "Mua sắm",
    floor: "Sảnh S1",
    hours: "07:00 - 22:00",
    phone: "0966 220 118",
    note: "Đồ dùng hằng ngày, thực phẩm nhanh và dịch vụ giao tận sảnh.",
  },
  {
    projectId: "lumiere-evergreen",
    name: "Evergreen Wellness Desk",
    type: "Sức khỏe",
    floor: "Khu tiện ích",
    hours: "08:00 - 20:00",
    phone: "0904 778 899",
    note: "Tư vấn lịch tiện ích, lớp wellness và dịch vụ cộng đồng cư dân.",
  },
  {
    projectId: "rivera-danang",
    name: "Rivera Concierge",
    type: "Dịch vụ",
    floor: "Khu lễ tân",
    hours: "08:00 - 18:00",
    phone: "0888 456 789",
    note: "Thông tin dự án, đăng ký xem nhà mẫu, hỗ trợ cư dân tương lai.",
  },
  {
    projectId: "thao-dien",
    name: "Thảo Điền Pharmacy",
    type: "Sức khỏe",
    floor: "Khối đế",
    hours: "07:30 - 22:00",
    phone: "028 7300 1122",
    note: "Nhà thuốc, vật tư y tế, tư vấn sức khỏe cơ bản.",
  },
  {
    projectId: "centre-point",
    name: "Centre Point Homecare",
    type: "Gia đình",
    floor: "Tầng 1",
    hours: "08:00 - 19:00",
    phone: "0908 567 111",
    note: "Vệ sinh căn hộ, sửa chữa nhỏ, chăm sóc nhà cửa.",
  },
  {
    projectId: "centre-point",
    name: "Grand Park Dining",
    type: "Ẩm thực",
    floor: "Khối đế",
    hours: "10:00 - 22:00",
    phone: "0933 889 900",
    note: "Đặt bàn, set gia đình, ưu đãi cư dân.",
  },
];

const generalNews = [
  {
    title: "Lịch bảo trì và thông báo vận hành tháng 6",
    summary: "Tổng hợp các mốc bảo trì, vệ sinh cảnh quan và lưu ý vận hành chung cho cư dân.",
    tag: "Vận hành",
    date: "11/06/2026",
    image:
      "https://masterisehomes.com/masteri-waterfront/wp-content/uploads/2023/10/1920x1080_EN-1-scaled.jpg",
  },
  {
    title: "Gợi ý sử dụng tiện ích an toàn trong mùa hè",
    summary: "Các khuyến nghị khi sử dụng hồ bơi, khu vui chơi, phòng sinh hoạt cộng đồng và khu thể thao.",
    tag: "Tiện ích",
    date: "10/06/2026",
    image:
      "https://masterisehomes.com/_next/image?q=70&url=https%3A%2F%2Frevamp-ldp.masterisehomes.com%2Fuploads%2FMasteri_Cosmo_Central_bbf5e3661f.jpg&w=960",
  },
  {
    title: "Cập nhật kênh hỗ trợ cư dân và tiếp nhận phản hồi",
    summary: "Thông tin hotline, email hỗ trợ và các kênh theo dõi nội dung mới của Cẩm nang Masterise.",
    tag: "Cộng đồng",
    date: "08/06/2026",
    image:
      "https://masterisehomes.com/_next/image?q=70&url=https%3A%2F%2Frevamp-ldp.masterisehomes.com%2Fuploads%2FMasteri_Grand_Coast_a2c320e2ba.jpg&w=960",
  },
];

const projectNews = [
  {
    projectId: "ocean-park-2",
    title: "Thông tin giá và chính sách dự án Masteri Grand Coast",
    summary: "Cập nhật nhóm thông tin bán hàng, ưu đãi và chính sách mới.",
    tag: "Chính sách",
    date: "11/06/2026",
    image:
      "https://masterisehomes.com/_next/image?q=70&url=https%3A%2F%2Frevamp-ldp.masterisehomes.com%2Fuploads%2FMasteri_Grand_Coast_a2c320e2ba.jpg&w=640",
  },
  {
    projectId: "west-heights",
    title: "Cư dân nhí Masteri West Heights học kỹ năng sơ cứu",
    summary: "Hoạt động cộng đồng dành cho gia đình và trẻ em trong khu đô thị.",
    tag: "Cộng đồng",
    date: "09/06/2026",
    image:
      "https://masterisehomes.com/masteri-west-heights/storage/app/uploads/public/60c/177/845/60c1778457718570366514.jpg",
  },
  {
    projectId: "smart-city",
    title: "Masteri Smart City cập nhật lịch tiện ích cư dân",
    summary: "Thông tin vận hành sảnh, khu sinh hoạt cộng đồng và dịch vụ tiện ích trong tuần.",
    tag: "Tiện ích",
    date: "09/06/2026",
    image: "https://masterisehomes.com/lumiere-evergreen/wp-content/uploads/2023/12/image-6.jpg",
  },
  {
    projectId: "lumiere-evergreen",
    title: "LUMIÈRE Evergreen gợi ý trải nghiệm wellness",
    summary: "Các hoạt động sống xanh, vận động và kết nối cộng đồng dành cho cư dân tương lai.",
    tag: "Wellness",
    date: "07/06/2026",
    image: "https://masterisehomes.com/lumiere-evergreen/wp-content/uploads/2023/12/image-6.jpg",
  },
  {
    projectId: "ocean-park-1",
    title: "Nghệ thuật sống wellness tại Masteri Waterfront",
    summary: "Gợi ý lịch tiện ích, thể thao và chăm sóc sức khỏe cho cư dân.",
    tag: "Tiện ích",
    date: "08/06/2026",
    image:
      "https://masterisehomes.com/masteri-waterfront/wp-content/uploads/2023/10/1920x1080_EN-1-scaled.jpg",
  },
  {
    projectId: "ocean-park-3",
    title: "Không gian vui chơi mới cho cư dân nhí",
    summary: "Các hoạt động cuối tuần dành cho gia đình tại khu Ocean Park.",
    tag: "Gia đình",
    date: "05/06/2026",
    image:
      "https://masterisehomes.com/_next/image?q=70&url=https%3A%2F%2Frevamp-ldp.masterisehomes.com%2Fuploads%2FMasteri_Era_Landmark_66abef1c67.jpg&w=640",
  },
  {
    projectId: "rivera-danang",
    title: "Masteri Rivera Danang cập nhật nhà mẫu",
    summary: "Tin tức mới cho cư dân tương lai tại Đà Nẵng.",
    tag: "Dự án",
    date: "03/06/2026",
    image:
      "https://masterisehomes.com/masteri-rivera-danang/wp-content/uploads/2025/05/introduction-img.jpg",
  },
  {
    projectId: "centre-point",
    title: "Masteri Centre Point hoàn thiện tiện ích nội khu",
    summary: "Tổng hợp thông tin vận hành, tiện ích và dịch vụ cư dân.",
    tag: "Vận hành",
    date: "01/06/2026",
    image:
      "https://masterisehomes.com/masteri-centre-point/storage/media/Zk8aNchsAUm2hlrJA42XywyE7nsVrvNclKSeB2qt.jpeg",
  },
];

let selectedRegion = "north";
let selectedProjectId = projects[0].id;
let showAllProjects = false;

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  bindEvents();
  render();
});

function cacheElements() {
  els.searchInput = document.querySelector("#siteSearch");
  els.regionTabs = document.querySelector("#regionTabs");
  els.projectGrid = document.querySelector("#projectGrid");
  els.projectMore = document.querySelector("#projectMore");
  els.projectMoreButton = document.querySelector("#projectMoreButton");
  els.storesTitle = document.querySelector("#storesTitle");
  els.storeCount = document.querySelector("#storeCount");
  els.storeGrid = document.querySelector("#storeGrid");
  els.projectNewsTitle = document.querySelector("#projectNewsTitle");
  els.projectNewsCount = document.querySelector("#projectNewsCount");
  els.projectNewsGrid = document.querySelector("#projectNewsGrid");
  els.newsGrid = document.querySelector("#newsGrid");
}

function bindEvents() {
  els.searchInput?.addEventListener("input", render);

  els.regionTabs?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-region]");
    if (!button) return;
    selectedRegion = button.dataset.region;
    showAllProjects = false;
    const visible = filteredProjects();
    selectedProjectId = visible[0]?.id ?? "";
    render();
  });

  els.projectMoreButton?.addEventListener("click", () => {
    showAllProjects = true;
    renderProjects();
    syncIcons();
  });

  els.projectGrid?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project-id]");
    if (!button) return;
    selectedProjectId = button.dataset.projectId;
    renderProjects();
    renderStores();
    renderProjectNews();
    syncIcons();
    document.querySelector("#stores")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function render() {
  syncRegionTabs();
  syncSelectedProject();
  renderProjects();
  renderStores();
  renderProjectNews();
  renderNews();
  syncIcons();
}

function renderProjects() {
  const items = filteredProjects();
  const visibleItems = showAllProjects ? items : items.slice(0, PROJECT_PREVIEW_LIMIT);
  const hasMore = items.length > PROJECT_PREVIEW_LIMIT && !showAllProjects;

  if (!items.length) {
    els.projectGrid.innerHTML = `<div class="no-results">Chưa có dự án phù hợp với bộ lọc hiện tại.</div>`;
    els.projectMore.hidden = true;
    return;
  }

  els.projectGrid.innerHTML = visibleItems
    .map(
      (project) => `
        <button
          class="project-card ${project.id === selectedProjectId ? "is-active" : ""}"
          type="button"
          data-project-id="${project.id}"
        >
          <img src="${project.image}" alt="${project.name}" loading="lazy" />
          <h3>${project.name}</h3>
          <p class="project-meta">${project.city} / ${regions[project.region]} / ${project.status}</p>
          <span class="project-action">
            Xem gian hàng
            <i data-lucide="chevron-right" aria-hidden="true"></i>
          </span>
        </button>
      `
    )
    .join("");

  els.projectMore.hidden = !hasMore;
  els.projectMoreButton.textContent = `Xem thêm ${items.length - PROJECT_PREVIEW_LIMIT} dự án`;
}

function renderStores() {
  const project = projects.find((item) => item.id === selectedProjectId);
  const items = stores.filter((store) => store.projectId === selectedProjectId);

  els.storesTitle.textContent = project
    ? `Gian hàng tại ${project.name}`
    : "Chọn một dự án để xem gian hàng";
  els.storeCount.textContent = `${items.length} gian hàng`;

  if (!items.length) {
    els.storeGrid.innerHTML = `<div class="no-results">Dự án này chưa có gian hàng được cập nhật.</div>`;
    return;
  }

  els.storeGrid.innerHTML = items
    .map(
      (store) => `
        <article class="store-card">
          <span class="store-type">${store.type}</span>
          <h3><a href="store.html?id=${getStoreId(store)}">${store.name}</a></h3>
          <p>${store.note}</p>
          <div class="store-info">
            <span><i data-lucide="map-pin" aria-hidden="true"></i>${store.floor}</span>
            <span><i data-lucide="clock-3" aria-hidden="true"></i>${store.hours}</span>
            <span><i data-lucide="phone" aria-hidden="true"></i>${store.phone}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderProjectNews() {
  const project = projects.find((item) => item.id === selectedProjectId);
  const items = projectNews.filter((item) => item.projectId === selectedProjectId);

  els.projectNewsTitle.textContent = project ? `Tin tức tại ${project.name}` : "Tin tức theo dự án";
  els.projectNewsCount.textContent = `${items.length} tin`;

  if (!items.length) {
    els.projectNewsGrid.innerHTML = `<div class="no-results">Dự án này chưa có tin tức riêng được cập nhật.</div>`;
    return;
  }

  els.projectNewsGrid.innerHTML = items.map(renderNewsCard).join("");
}

function renderNews() {
  const items = filteredGeneralNews();

  if (!items.length) {
    els.newsGrid.innerHTML = `<div class="no-results">Chưa có tin tức chung phù hợp với từ khóa tìm kiếm.</div>`;
    return;
  }

  els.newsGrid.innerHTML = items.map(renderNewsCard).join("");
}

function renderNewsCard(item) {
  const project = projects.find((projectItem) => projectItem.id === item.projectId);
  const source = item.projectId ? project?.name ?? "Masterise" : "Tin chung";

  return `
    <article class="news-card">
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
      <div class="news-card-body">
        <div class="news-meta">
          <span>${item.tag}</span>
          <span>${source}</span>
          <span>${item.date}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
      </div>
    </article>
  `;
}

function filteredProjects() {
  const query = normalizedQuery();
  return projects.filter((project) => {
    const inRegion = project.region === selectedRegion;
    if (!inRegion) return false;
    if (!query) return true;
    return normalize([project.name, project.city, project.status, regions[project.region]].join(" ")).includes(
      query
    );
  });
}

function filteredGeneralNews() {
  const query = normalizedQuery();
  return generalNews.filter((item) => {
    if (!query) return true;
    return normalize([item.title, item.summary, item.tag].join(" ")).includes(query);
  });
}

function syncSelectedProject() {
  const visible = filteredProjects();
  if (!visible.length) {
    selectedProjectId = "";
    return;
  }
  if (!visible.some((project) => project.id === selectedProjectId)) {
    selectedProjectId = visible[0].id;
  }
}

function syncRegionTabs() {
  els.regionTabs
    ?.querySelectorAll("[data-region]")
    .forEach((button) => button.classList.toggle("is-active", button.dataset.region === selectedRegion));
}

function syncIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
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

function getStoreId(store) {
  return `${store.projectId}-${normalize(store.name).replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}
