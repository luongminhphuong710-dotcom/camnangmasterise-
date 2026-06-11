const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80";

const regionMeta = {
  all: {
    label: "Tất cả miền",
    description: "Toàn bộ dự án, gian hàng và tin tức trong cổng cư dân.",
  },
  north: {
    label: "Miền Bắc",
    description: "Các dự án tại Hà Nội, Hưng Yên và vùng đô thị phía Bắc.",
  },
  central: {
    label: "Miền Trung",
    description:
      "Dữ liệu miền Trung có dự án Đà Nẵng và các ô chờ để cập nhật thêm.",
  },
  south: {
    label: "Miền Nam",
    description: "Các dự án tại TP.HCM, TP.Thủ Đức và khu vực lân cận.",
  },
};

const projects = [
  {
    id: "masteri-grand-coast",
    name: "Masteri Grand Coast",
    region: "north",
    city: "Hà Nội",
    location: "Ocean Park 2, Ocean City",
    type: "Masteri Collection",
    status: "Đang triển khai",
    image:
      "https://masterisehomes.com/_next/image?q=70&url=https%3A%2F%2Frevamp-ldp.masterisehomes.com%2Fuploads%2FMasteri_Grand_Coast_a2c320e2ba.jpg&w=1920",
    source: "https://masterisehomes.com/masteri-grand-coast",
    summary:
      "Cụm căn hộ Masteri Collection tại Ocean City, phù hợp để tổ chức cẩm nang cư dân theo tòa, tiện ích và gian hàng nội khu.",
    guide: [
      "Cập nhật quy trình nhận bàn giao và hồ sơ cư dân theo từng tòa.",
      "Kết nối danh sách gian hàng thiết yếu quanh Ocean Park 2.",
      "Ghim tin về tiện ích nội khu, công viên và chính sách vận hành.",
    ],
  },
  {
    id: "masteri-era-landmark",
    name: "Masteri Era Landmark",
    region: "north",
    city: "Hưng Yên",
    location: "Ocean Park 3, Ocean City",
    type: "Masteri Collection",
    status: "Đang triển khai",
    image:
      "https://masterisehomes.com/_next/image?q=70&url=https%3A%2F%2Frevamp-ldp.masterisehomes.com%2Fuploads%2FMasteri_Era_Landmark_66abef1c67.jpg&w=1920",
    source: "https://masterisehomes.com/masteri-era-landmark/vi",
    summary:
      "Dự án thuộc Ocean Park 3, cần cẩm nang tập trung vào kết nối tiện ích, hướng dẫn cư dân mới và nhịp sống cộng đồng.",
    guide: [
      "Tạo nhóm tin dành cho cư dân mới, gia đình trẻ và tiện ích xanh.",
      "Theo dõi thông báo tòa nhà, an ninh và giao nhận bưu kiện.",
      "Bổ sung gian hàng dịch vụ gia đình khi dự án đi vào vận hành.",
    ],
  },
  {
    id: "masteri-waterfront",
    name: "Masteri Waterfront",
    region: "north",
    city: "Hà Nội",
    location: "Ocean Park, Gia Lâm",
    type: "Căn hộ cao cấp",
    status: "Đã bàn giao từng phần",
    image:
      "https://masterisehomes.com/masteri-waterfront/wp-content/uploads/2023/10/1920x1080_EN-1-scaled.jpg",
    source: "https://masterisehomes.com/masteri-waterfront/?lang=en",
    summary:
      "Cộng đồng cư dân tại Ocean Park với nhu cầu tra cứu tin bàn giao, hướng dẫn sử dụng tiện ích và danh sách dịch vụ hằng ngày.",
    guide: [
      "Ưu tiên tin bảo trì, lịch sử dụng tiện ích và thông báo ban quản lý.",
      "Tạo danh mục gian hàng quanh sảnh căn hộ, hồ cảnh quan và khu mua sắm.",
      "Đưa tài liệu nội quy cư dân vào khu vực cẩm nang nhanh.",
    ],
  },
  {
    id: "masteri-west-heights",
    name: "Masteri West Heights",
    region: "north",
    city: "Hà Nội",
    location: "Smart City, Tây Mỗ - Đại Mỗ",
    type: "Căn hộ cao cấp",
    status: "Đã bàn giao",
    image:
      "https://masterisehomes.com/masteri-west-heights/storage/app/uploads/public/60c/177/845/60c1778457718570366514.jpg",
    source: "https://masterisehomes.com/masteri-west-heights/",
    summary:
      "Dự án tại lõi Smart City, phù hợp cho cẩm nang về tiện ích đa tầng, sảnh cư dân, hồ trung tâm và dịch vụ khu Tây Hà Nội.",
    guide: [
      "Ghim đường dây nóng ban quản lý và lịch làm việc quầy lễ tân.",
      "Tách gian hàng theo nhóm: mua sắm, sức khỏe, giặt là, cafe.",
      "Tổng hợp tin cộng đồng và ảnh hoạt động cư dân theo từng tháng.",
    ],
  },
  {
    id: "lumiere-evergreen",
    name: "LUMIÈRE Evergreen",
    region: "north",
    city: "Hà Nội",
    location: "Smart City",
    type: "LUMIÈRE Series",
    status: "Đang triển khai",
    image:
      "https://masterisehomes.com/lumiere-evergreen/wp-content/uploads/2023/12/image-6.jpg",
    source: "https://masterisehomes.com/lumiere-evergreen/",
    summary:
      "Dự án LUMIÈRE tại Smart City, nên có trang tin về tiện ích wellness, thương mại dịch vụ và các mốc thông báo cư dân.",
    guide: [
      "Đưa nhóm tiện ích wellness vào cẩm nang: gym, yoga, lounge, thư viện.",
      "Tạo chuyên mục tin tiến độ, bàn giao và hướng dẫn cư dân tương lai.",
      "Liên kết hotline tư vấn và kênh cập nhật từ dự án.",
    ],
  },
  {
    id: "masteri-rivera-danang",
    name: "Masteri Rivera Danang",
    region: "central",
    city: "Đà Nẵng",
    location: "Đường Quy Mỹ, Hòa Cường Nam, Hải Châu",
    type: "Masteri Collection",
    status: "Dự kiến bàn giao Q4/2026",
    image:
      "https://masterisehomes.com/masteri-rivera-danang/wp-content/uploads/2025/05/introduction-img.jpg",
    source: "https://masterisehomes.com/masteri-rivera-danang/",
    summary:
      "Dự án đầu tiên của Masterise Homes tại thị trường Đà Nẵng, phù hợp để mở cẩm nang miền Trung với tin giới thiệu, nhà mẫu và tiện ích ven sông.",
    guide: [
      "Tạo mục tin riêng cho căn hộ mẫu, sa bàn và văn phòng bán hàng Đà Nẵng.",
      "Chuẩn bị danh sách gian hàng quanh Hải Châu trước giai đoạn bàn giao.",
      "Đưa lịch sự kiện, tài liệu dự án và thông tin kết nối trung tâm vào cẩm nang.",
    ],
  },
  {
    id: "central-updating-coast",
    name: "Dự án miền Trung đang cập nhật 02",
    region: "central",
    city: "Miền Trung",
    location: "Chờ bổ sung vị trí chính thức",
    type: "Ô dữ liệu mở rộng",
    status: "Đang cập nhật",
    image:
      "https://masterisehomes.com/masteri-rivera-danang/wp-content/smush-webp/2025/05/banner-1-scaled.jpg.webp",
    source: "",
    isPlaceholder: true,
    summary:
      "Ô chờ để đội vận hành thêm dự án miền Trung khi có thông tin chính thức.",
    guide: [
      "Thay tên dự án, vị trí, ảnh và đường dẫn trong file script.js.",
      "Bổ sung gian hàng theo khu vực dự án sau khi có danh sách đối tác.",
      "Gắn tin tức dự án chính thức để cư dân dễ theo dõi.",
    ],
  },
  {
    id: "central-updating-heritage",
    name: "Dự án miền Trung đang cập nhật 03",
    region: "central",
    city: "Miền Trung",
    location: "Chờ bổ sung vị trí chính thức",
    type: "Ô dữ liệu mở rộng",
    status: "Đang cập nhật",
    image:
      "https://masterisehomes.com/masteri-rivera-danang/wp-content/uploads/2025/05/introduction-img-1024x704.jpg",
    source: "",
    isPlaceholder: true,
    summary:
      "Ô chờ thứ hai cho cụm dự án miền Trung, dùng khi cần chia thêm khu vực hoặc dòng sản phẩm.",
    guide: [
      "Giữ cấu trúc dữ liệu giống các dự án khác để bộ lọc hoạt động ngay.",
      "Thêm hotline, trạng thái vận hành và tài liệu cư dân khi có dữ liệu.",
      "Có thể ẩn ô này bằng cách xóa khỏi mảng projects.",
    ],
  },
  {
    id: "masteri-cosmo-central",
    name: "Masteri Cosmo Central",
    region: "south",
    city: "TP.HCM",
    location: "The Global City",
    type: "Masteri Collection",
    status: "Dự án mới nhất",
    image:
      "https://masterisehomes.com/_next/image?q=70&url=https%3A%2F%2Frevamp-ldp.masterisehomes.com%2Fuploads%2FMasteri_Cosmo_Central_bbf5e3661f.jpg&w=1920",
    source: "https://masterisehomes.com/du-an",
    summary:
      "Dự án thuộc nhóm mới nhất trên trang Masterise Homes, gắn với hệ sinh thái The Global City tại TP.HCM.",
    guide: [
      "Tách riêng tin dự án, tiện ích thương mại và lịch sự kiện The Global City.",
      "Đưa nhóm gian hàng ẩm thực, mua sắm, lifestyle vào khu vực nổi bật.",
      "Chuẩn bị cẩm nang cư dân theo block khi có thông tin bàn giao.",
    ],
  },
  {
    id: "the-global-city",
    name: "The Global City",
    region: "south",
    city: "TP.HCM",
    location: "An Phú, TP. Thủ Đức",
    type: "Khu đô thị phức hợp",
    status: "Đang vận hành tiện ích",
    image:
      "https://masterisehomes.com/the-global-city/sites/default/files/2022-10/townshipIntro-bg-1.jpg",
    source: "https://masterisehomes.com/the-global-city/vi",
    summary:
      "Khu đô thị phức hợp quy mô lớn, phù hợp cho cổng cư dân tích hợp tin sự kiện, thương mại, tiện ích công cộng và phân khu nhà ở.",
    guide: [
      "Tổ chức tin tức theo nhóm: sự kiện, thương mại, cư dân, giao thông.",
      "Gắn bản đồ tiện ích nội khu và danh sách điểm đến thường dùng.",
      "Liên kết các phân khu như LUMIÈRE Midtown, Masteri Cosmo Central.",
    ],
  },
  {
    id: "lumiere-midtown",
    name: "LUMIÈRE Midtown",
    region: "south",
    city: "TP.HCM",
    location: "Đường Liên Phường, The Global City",
    type: "LUMIÈRE Series",
    status: "Dự kiến bàn giao 2027",
    image:
      "https://masterisehomes.com/the-global-city/sites/default/files/2025-06/Lumiere%20Midtown.jpg",
    source: "https://masterisehomes.com/the-global-city/vi/lumiere-midtown",
    summary:
      "Dự án cao tầng thuộc The Global City, cần cẩm nang về tiện ích riêng, khối đế thương mại và thông báo cư dân tương lai.",
    guide: [
      "Cập nhật lộ trình bàn giao, quyền sở hữu và tài liệu dự án.",
      "Tạo danh mục tiện ích riêng: hồ bơi, gym, yoga, phòng trẻ em.",
      "Kết nối tin tức chung của The Global City để cư dân theo dõi nhanh.",
    ],
  },
  {
    id: "grand-marina-saigon",
    name: "Grand Marina, Saigon",
    region: "south",
    city: "TP.HCM",
    location: "Số 2 Tôn Đức Thắng, Quận 1",
    type: "Branded Residences",
    status: "Đang vận hành từng phần",
    image:
      "https://masterisehomes.com/grand-marina-saigon/sea-tower/wp-content/smush-webp/2025/07/POOL-1-1-scaled.jpg.webp",
    source: "https://masterisehomes.com/grand-marina-saigon/sea-tower/en/",
    summary:
      "Dự án bất động sản hàng hiệu tại trung tâm TP.HCM, phù hợp với cẩm nang dịch vụ cao cấp, tiện ích tòa tháp và trải nghiệm cư dân.",
    guide: [
      "Đưa quy trình dịch vụ cư dân, lễ tân và tiện ích tòa tháp vào trang chi tiết.",
      "Tách tin theo từng tháp và mốc vận hành để cư dân không bị rối.",
      "Ưu tiên nhóm gian hàng concierge, dining, chăm sóc sức khỏe.",
    ],
  },
  {
    id: "lumiere-riverside",
    name: "LUMIÈRE riverside",
    region: "south",
    city: "TP.HCM",
    location: "Thảo Điền, TP. Thủ Đức",
    type: "LUMIÈRE Series",
    status: "Đã hình thành cộng đồng cư dân",
    image:
      "https://masterisehomes.com/lumiere-riverside/storage/app/media/banner/banner-22122020-1.jpg",
    source: "https://masterisehomes.com/lumiere-riverside/",
    summary:
      "Dự án LUMIÈRE tại Thảo Điền, phù hợp để làm cẩm nang cộng đồng cư dân, tiện ích sống và gian hàng khối đế thương mại.",
    guide: [
      "Ghim thông tin quầy lễ tân, bãi xe, giao nhận và tiện ích chung.",
      "Tạo nhóm tin về cộng đồng cư dân, sự kiện và thông báo quản lý.",
      "Danh mục gian hàng nên ưu tiên ẩm thực, cafe, nhà thuốc, giặt là.",
    ],
  },
  {
    id: "masteri-an-phu",
    name: "Masteri An Phú",
    region: "south",
    city: "TP.HCM",
    location: "179 Xa lộ Hà Nội, Thảo Điền",
    type: "Căn hộ cao cấp",
    status: "Đã vận hành",
    image: "https://designbuild.vn/wp-content/uploads/2021/11/An-Phu-10-e1637912754563.jpg",
    source: "https://masterisehomes.com/masteri-an-phu",
    summary:
      "Cộng đồng cư dân tại Thảo Điền, cần cẩm nang tập trung vào dịch vụ đời sống, thông báo tòa nhà và tiện ích quanh khu vực.",
    guide: [
      "Tổ chức danh mục thông báo tòa nhà theo nhóm cư dân đang ở.",
      "Gắn các gian hàng thiết yếu quanh Thảo Điền và trục Xa lộ Hà Nội.",
      "Bổ sung hướng dẫn thanh toán, đăng ký thẻ và phản ánh sự cố.",
    ],
  },
  {
    id: "masteri-centre-point",
    name: "Masteri Centre Point",
    region: "south",
    city: "TP.HCM",
    location: "Vinhomes Grand Park, TP. Thủ Đức",
    type: "Căn hộ cao cấp",
    status: "Đã bàn giao từng phần",
    image:
      "https://masterisehomes.com/masteri-centre-point/themes/storefront/public/assets/images/bg-l-m.jpg",
    source:
      "https://masterisehomes.com/masteri-centre-point/en/news/tung-bung-le-khai-truong-nha-mau-masteri-centre-point",
    summary:
      "Dự án phía Đông TP.HCM, phù hợp với cẩm nang tiện ích khu đại đô thị, giao thông, mua sắm và dịch vụ gia đình.",
    guide: [
      "Tạo nhóm gian hàng theo nhu cầu gia đình: giáo dục, chăm sóc sức khỏe, mua sắm.",
      "Tổng hợp tin liên quan đến cộng đồng cư dân và tiện ích Grand Park.",
      "Gắn nhanh hotline, nội quy và quy trình gửi phản ánh.",
    ],
  },
];

const storeCategories = [
  { id: "all", label: "Tất cả", icon: "layout-grid" },
  { id: "shopping", label: "Mua sắm", icon: "shopping-bag" },
  { id: "food", label: "Ăn uống", icon: "utensils" },
  { id: "health", label: "Sức khỏe", icon: "heart-pulse" },
  { id: "service", label: "Dịch vụ", icon: "concierge-bell" },
  { id: "home", label: "Gia đình", icon: "home" },
];

const stores = [
  {
    name: "Siêu thị mini cư dân",
    category: "shopping",
    projectId: "masteri-west-heights",
    floor: "Sảnh thương mại",
    hours: "07:00 - 22:00",
    note: "Thực phẩm, đồ dùng căn hộ, hàng thiết yếu.",
  },
  {
    name: "Cafe sảnh cư dân",
    category: "food",
    projectId: "masteri-waterfront",
    floor: "Tầng 1",
    hours: "06:30 - 21:30",
    note: "Điểm hẹn nhanh cho cư dân và khách thăm.",
  },
  {
    name: "Nhà thuốc & sức khỏe",
    category: "health",
    projectId: "lumiere-evergreen",
    floor: "Khối đế thương mại",
    hours: "08:00 - 22:00",
    note: "Dược phẩm, tư vấn sức khỏe, sản phẩm chăm sóc cá nhân.",
  },
  {
    name: "Giặt là nhanh",
    category: "service",
    projectId: "masteri-grand-coast",
    floor: "Khu dịch vụ",
    hours: "08:00 - 20:00",
    note: "Nhận đồ tại quầy, trả theo lịch hẹn cư dân.",
  },
  {
    name: "Nội thất & bảo trì căn hộ",
    category: "home",
    projectId: "masteri-era-landmark",
    floor: "Quầy tư vấn",
    hours: "09:00 - 18:00",
    note: "Gợi ý sửa chữa nhỏ, rèm, khóa, thiết bị bếp.",
  },
  {
    name: "Giao nhận bưu kiện",
    category: "service",
    projectId: "masteri-rivera-danang",
    floor: "Sảnh lễ tân",
    hours: "08:00 - 21:00",
    note: "Mẫu dữ liệu cho quy trình nhận hàng cư dân miền Trung.",
  },
  {
    name: "Bistro nội khu",
    category: "food",
    projectId: "the-global-city",
    floor: "Khu phố thương mại",
    hours: "10:00 - 22:30",
    note: "Ẩm thực nhanh cho cư dân, khách tham quan và sự kiện.",
  },
  {
    name: "Gian hàng lifestyle",
    category: "shopping",
    projectId: "masteri-cosmo-central",
    floor: "Retail podium",
    hours: "09:00 - 22:00",
    note: "Thời trang, quà tặng, đồ gia dụng cao cấp.",
  },
  {
    name: "Wellness studio",
    category: "health",
    projectId: "lumiere-midtown",
    floor: "Tầng tiện ích",
    hours: "06:00 - 21:00",
    note: "Yoga, phục hồi năng lượng, lớp nhóm cư dân.",
  },
  {
    name: "Concierge dining",
    category: "food",
    projectId: "grand-marina-saigon",
    floor: "Khu dịch vụ cư dân",
    hours: "11:00 - 23:00",
    note: "Dữ liệu mẫu cho dịch vụ đặt bàn và trải nghiệm cao cấp.",
  },
  {
    name: "Nhà thuốc Thảo Điền",
    category: "health",
    projectId: "lumiere-riverside",
    floor: "Khối đế",
    hours: "07:30 - 22:00",
    note: "Sản phẩm chăm sóc sức khỏe, mẹ và bé, y tế cơ bản.",
  },
  {
    name: "Dịch vụ gia đình",
    category: "home",
    projectId: "masteri-an-phu",
    floor: "Khu thương mại",
    hours: "08:30 - 19:30",
    note: "Vệ sinh căn hộ, chăm sóc cây, sửa chữa nhẹ.",
  },
  {
    name: "Cửa hàng tiện ích phía Đông",
    category: "shopping",
    projectId: "masteri-centre-point",
    floor: "Podium",
    hours: "07:00 - 23:00",
    note: "Hàng tiêu dùng nhanh cho cư dân khu đại đô thị.",
  },
];

const newsItems = [
  {
    title: "The Global City: Trung tâm mới sôi động của TP HCM chính thức hoạt động",
    region: "south",
    projectId: "the-global-city",
    date: "Tin dự án",
    image:
      "https://masterisehomes.com/the-global-city/sites/default/files/2022-10/townshipIntro-bg-1.jpg",
    url: "https://masterisehomes.com/truyen-thong/tin-tuc-du-an/khu-nha-pho-thuong-mai-soho-ngay-cang-nhon-nhip",
    summary:
      "Cập nhật hoạt động, tiện ích và nhịp sống tại The Global City.",
  },
  {
    title:
      "Masterise Homes chính thức khai trương căn hộ mẫu và sa bàn dự án Masteri Rivera Danang",
    region: "central",
    projectId: "masteri-rivera-danang",
    date: "07/07/2025",
    image:
      "https://masterisehomes.com/masteri-rivera-danang/wp-content/uploads/2025/05/introduction-img.jpg",
    url: "https://masterisehomes.com/masteri-rivera-danang/masterise-homes-chinh-thuc-khai-truong-can-ho-mau-va-sa-ban-du-an-masteri-rivera-danang/",
    summary:
      "Tin phù hợp để đưa vào mục cập nhật dự án miền Trung và nhà mẫu.",
  },
  {
    title: "Masteri Rivera Danang: Khai mở nhịp sống mới giữa lòng thành phố đáng sống",
    region: "central",
    projectId: "masteri-rivera-danang",
    date: "23/06/2025",
    image:
      "https://masterisehomes.com/masteri-rivera-danang/wp-content/smush-webp/2025/05/banner-1-scaled.jpg.webp",
    url: "https://masterisehomes.com/masteri-rivera-danang/masteri-rivera-danang-khai-mo-nhip-song-moi-giua-long-thanh-pho-dang-song/",
    summary:
      "Bài viết giới thiệu vị trí, nhịp sống và giá trị an cư tại Đà Nẵng.",
  },
  {
    title: "Masteri West Heights bàn giao, cư dân sẵn sàng an cư",
    region: "north",
    projectId: "masteri-west-heights",
    date: "Tin dự án",
    image:
      "https://masterisehomes.com/masteri-west-heights/storage/app/uploads/public/60c/179/40b/60c17940b427b101706575.jpeg",
    url: "https://masterisehomes.com/en/truyen-thong/project-news/masteri-west-heights-bustles-with-handover-activity-residents-ready-to-settle-in",
    summary:
      "Tin nên ghim trong cẩm nang cư dân phía Tây Hà Nội sau bàn giao.",
  },
  {
    title: "Masterise Homes bàn giao căn hộ đầu tiên tại Masteri Waterfront",
    region: "north",
    projectId: "masteri-waterfront",
    date: "Tin dự án",
    image:
      "https://masterisehomes.com/masteri-waterfront/wp-content/uploads/2023/09/PC01-1-1.jpg",
    url: "https://masterisehomes.com/en/truyen-thong/project-news/masterise-homes-hands-over-first-apartments-at-miami-subdivision-masteri-waterfront-in-hanoi",
    summary:
      "Tin liên quan đến hoạt động bàn giao và cộng đồng cư dân Ocean Park.",
  },
  {
    title: "Grand Marina, Saigon - Dấu ấn bất động sản hàng hiệu",
    region: "south",
    projectId: "grand-marina-saigon",
    date: "Tin dự án",
    image:
      "https://masterisehomes.com/grand-marina-saigon/sea-tower/wp-content/uploads/2025/05/Rectangle-1-scaled.png",
    url: "https://masterisehomes.com/en/truyen-thong/project-news/grand-marina-saigon-defines-ultra-luxury-living",
    summary:
      "Gợi ý đưa vào chuyên mục branded residences và dịch vụ cư dân cao cấp.",
  },
  {
    title:
      "Masterise Homes nối dài chuỗi công nhận quốc tế với Developer Of The Year",
    region: "all",
    projectId: "",
    date: "2026",
    image:
      "https://masterisehomes.com/_next/image?q=70&url=https%3A%2F%2Frevamp-ldp.masterisehomes.com%2Fuploads%2FMasteri_Grand_Coast_a2c320e2ba.jpg&w=1920",
    url: "https://masterisehomes.com/truyen-thong",
    summary:
      "Tin thương hiệu có thể hiển thị toàn quốc trong cổng cẩm nang.",
  },
];

let selectedRegion = "all";
let selectedProjectId = projects[0].id;
let selectedStoreCategory = "all";

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  bindEvents();
  renderStoreCategories();
  render();
});

function cacheElements() {
  els.searchInput = document.querySelector("#searchInput");
  els.regionTabs = document.querySelector("#regionTabs");
  els.regionSummary = document.querySelector("#regionSummary");
  els.projectGrid = document.querySelector("#projectGrid");
  els.projectDetail = document.querySelector("#projectDetail");
  els.storeCategories = document.querySelector("#storeCategories");
  els.storeGrid = document.querySelector("#storeGrid");
  els.newsGrid = document.querySelector("#newsGrid");
  els.heroProjectCount = document.querySelector("#heroProjectCount");
}

function bindEvents() {
  els.searchInput.addEventListener("input", () => render());

  els.regionTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-region]");
    if (!button) return;
    selectedRegion = button.dataset.region;
    document
      .querySelectorAll("[data-region]")
      .forEach((item) => item.classList.toggle("is-active", item === button));
    syncSelectedProject();
    render();
  });

  document.querySelectorAll("[data-scroll-to]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.scrollTo);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function render() {
  syncSelectedProject();
  els.heroProjectCount.textContent = `${officialProjects().length} dự án chính thức`;
  renderRegionSummary();
  renderProjects();
  renderProjectDetail();
  renderStores();
  renderNews();
  hydrateImages();
  syncIcons();
}

function renderStoreCategories() {
  els.storeCategories.innerHTML = storeCategories
    .map(
      (category) => `
        <button
          class="${category.id === selectedStoreCategory ? "is-active" : ""}"
          type="button"
          data-category="${category.id}"
        >
          <i data-lucide="${category.icon}" aria-hidden="true"></i>
          ${category.label}
        </button>
      `
    )
    .join("");

  els.storeCategories.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    selectedStoreCategory = button.dataset.category;
    renderStoreCategories();
    renderStores();
    syncIcons();
  });
}

function renderRegionSummary() {
  const filtered = filteredProjects();
  const visibleStores = filteredStores();
  const visibleNews = filteredNews();
  const placeholderCount = filtered.filter((project) => project.isPlaceholder).length;
  const region = regionMeta[selectedRegion];

  els.regionSummary.innerHTML = `
    <article class="summary-tile">
      <strong>${filtered.length}</strong>
      <span>Dự án hiển thị - ${region.label}</span>
    </article>
    <article class="summary-tile">
      <strong>${filtered.length - placeholderCount}</strong>
      <span>Mục có dữ liệu chính thức</span>
    </article>
    <article class="summary-tile">
      <strong>${visibleStores.length}</strong>
      <span>Gian hàng mẫu phù hợp</span>
    </article>
    <article class="summary-tile">
      <strong>${visibleNews.length}</strong>
      <span>Bản tin liên quan</span>
    </article>
  `;
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
    .map(
      (project) => `
        <button
          class="project-card ${project.id === selectedProjectId ? "is-selected" : ""} ${
        project.isPlaceholder ? "placeholder-project" : ""
      }"
          type="button"
          data-project-id="${project.id}"
          aria-pressed="${project.id === selectedProjectId}"
        >
          <figure>
            <img src="${project.image}" alt="${project.name}" loading="lazy" />
            <span class="badge">${project.status}</span>
          </figure>
          <div class="project-body">
            <div>
              <p class="eyebrow">${regionMeta[project.region].label}</p>
              <h3>${project.name}</h3>
            </div>
            <p>${project.summary}</p>
            <div class="meta-list">
              <span>
                <i data-lucide="map-pin" aria-hidden="true"></i>
                ${project.city} - ${project.location}
              </span>
              <span>
                <i data-lucide="tag" aria-hidden="true"></i>
                ${project.type}
              </span>
            </div>
          </div>
        </button>
      `
    )
    .join("");

  els.projectGrid.querySelectorAll("[data-project-id]").forEach((card) => {
    card.addEventListener("click", () => {
      selectedProjectId = card.dataset.projectId;
      render();
      document
        .querySelector("#projectDetail")
        ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });
}

function renderProjectDetail() {
  const project = projects.find((item) => item.id === selectedProjectId);

  if (!project || !filteredProjects().some((item) => item.id === project.id)) {
    els.projectDetail.innerHTML = `
      <div class="empty-state">
        <i data-lucide="mouse-pointer-click" aria-hidden="true"></i>
        <h2>Chọn một dự án</h2>
        <p>Thông tin vận hành và cẩm nang cư dân sẽ hiển thị tại đây.</p>
      </div>
    `;
    return;
  }

  const projectStores = stores.filter((store) => store.projectId === project.id);
  const projectNews = newsItems.filter((news) => news.projectId === project.id);
  const sourceLink = project.source
    ? `
      <a class="secondary-action" href="${project.source}" target="_blank" rel="noreferrer">
        <i data-lucide="external-link" aria-hidden="true"></i>
        Trang dự án
      </a>
    `
    : "";

  els.projectDetail.innerHTML = `
    <div class="detail-layout">
      <figure class="detail-visual">
        <img src="${project.image}" alt="${project.name}" loading="lazy" />
        <span class="badge">${project.status}</span>
      </figure>
      <div class="detail-copy">
        <div>
          <p class="eyebrow">${regionMeta[project.region].label} / ${project.city}</p>
          <h2>${project.name}</h2>
          <p>${project.summary}</p>
        </div>

        <div class="detail-kpis" aria-label="Chỉ số dự án">
          <div class="kpi">
            <strong>${projectStores.length}</strong>
            <span>Gian hàng mẫu</span>
          </div>
          <div class="kpi">
            <strong>${projectNews.length}</strong>
            <span>Tin liên quan</span>
          </div>
          <div class="kpi">
            <strong>${project.isPlaceholder ? "Mở" : "OK"}</strong>
            <span>Trạng thái dữ liệu</span>
          </div>
        </div>

        <ul class="guide-list">
          ${project.guide
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

        <div class="control-row">
          <a class="primary-action" href="#stores">
            <i data-lucide="store" aria-hidden="true"></i>
            Xem gian hàng
          </a>
          ${sourceLink}
        </div>
      </div>
    </div>
  `;
}

function renderStores() {
  const items = filteredStores();

  if (!items.length) {
    els.storeGrid.innerHTML = `
      <div class="no-results">
        Chưa có gian hàng phù hợp với bộ lọc hiện tại.
      </div>
    `;
    return;
  }

  els.storeGrid.innerHTML = items
    .map((store) => {
      const project = getProject(store.projectId);
      const category = storeCategories.find((item) => item.id === store.category);
      return `
        <article class="store-card">
          <div class="store-top">
            <div>
              <span class="store-tag">${category?.label ?? "Dịch vụ"}</span>
              <h3>${store.name}</h3>
            </div>
            <span class="store-icon">
              <i data-lucide="${category?.icon ?? "store"}" aria-hidden="true"></i>
            </span>
          </div>
          <p>${store.note}</p>
          <div class="meta-list">
            <span>
              <i data-lucide="building-2" aria-hidden="true"></i>
              ${project?.name ?? "Đang cập nhật"}
            </span>
            <span>
              <i data-lucide="map" aria-hidden="true"></i>
              ${store.floor}
            </span>
            <span>
              <i data-lucide="clock-3" aria-hidden="true"></i>
              ${store.hours}
            </span>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderNews() {
  const items = filteredNews();

  if (!items.length) {
    els.newsGrid.innerHTML = `
      <div class="no-results">
        Chưa có tin tức phù hợp với bộ lọc hiện tại.
      </div>
    `;
    return;
  }

  els.newsGrid.innerHTML = items
    .map((news) => {
      const project = getProject(news.projectId);
      const regionLabel = news.region === "all" ? "Toàn quốc" : regionMeta[news.region].label;
      return `
        <article class="news-card">
          <figure>
            <img src="${news.image}" alt="${news.title}" loading="lazy" />
          </figure>
          <div class="news-body">
            <div class="news-meta">
              <span>${regionLabel}</span>
              <time>${news.date}</time>
            </div>
            <h3>${news.title}</h3>
            <p>${project ? project.name : "Tin thương hiệu"} - ${news.summary}</p>
            <a href="${news.url}" target="_blank" rel="noreferrer">
              Đọc nguồn
              <i data-lucide="arrow-up-right" aria-hidden="true"></i>
            </a>
          </div>
        </article>
      `;
    })
    .join("");
}

function filteredProjects() {
  const query = normalizedQuery();
  return projects.filter((project) => {
    const inRegion = selectedRegion === "all" || project.region === selectedRegion;
    if (!inRegion) return false;
    if (!query) return true;
    return normalize(
      [
        project.name,
        project.city,
        project.location,
        project.type,
        project.status,
        project.summary,
        regionMeta[project.region].label,
      ].join(" ")
    ).includes(query);
  });
}

function filteredStores() {
  const query = normalizedQuery();
  return stores.filter((store) => {
    const project = getProject(store.projectId);
    const inRegion = selectedRegion === "all" || project?.region === selectedRegion;
    const inCategory =
      selectedStoreCategory === "all" || store.category === selectedStoreCategory;
    if (!inRegion || !inCategory) return false;
    if (!query) return true;
    return normalize(
      [store.name, store.note, store.floor, project?.name, project?.city, project?.location].join(
        " "
      )
    ).includes(query);
  });
}

function filteredNews() {
  const query = normalizedQuery();
  return newsItems.filter((news) => {
    const project = getProject(news.projectId);
    const inRegion =
      selectedRegion === "all" || news.region === "all" || news.region === selectedRegion;
    if (!inRegion) return false;
    if (!query) return true;
    return normalize(
      [news.title, news.summary, news.date, project?.name, project?.city].join(" ")
    ).includes(query);
  });
}

function syncSelectedProject() {
  const items = filteredProjects();
  if (!items.length) {
    selectedProjectId = "";
    return;
  }

  if (!items.some((project) => project.id === selectedProjectId)) {
    selectedProjectId = items[0].id;
  }
}

function getProject(projectId) {
  return projects.find((project) => project.id === projectId);
}

function officialProjects() {
  return projects.filter((project) => !project.isPlaceholder);
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
        if (image.src !== FALLBACK_IMAGE) {
          image.src = FALLBACK_IMAGE;
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
