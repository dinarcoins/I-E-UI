const NAV_ITEMS = [
  { name: "giới thiệu", href: "#" },
  { name: "tin túc - sự kiện", href: "#" },
  { name: "đào tạo", href: "#" },
  { name: "nghiên cứu khoa học", href: "#" },
  { name: "hợp tác", href: "#" },
  { name: "chia sẻ - trải nghiệm", href: "#" },
  { name: "thư viện ảnh", href: "#" },
];

const INTRODUCE_ITEMS = [
  {
    id: 1,
    text: "năm đào tạo",
    number: "20",
    image: "./img/pizza_icon.png",
    altImage: "pizza-icon",
  },
  {
    text: "sv được đào tạo",
    number: "1000+",
    altImage: "iceCream-icon",
    svg: "fa-solid fa-ice-cream",
    colorSvg: "#e3b67f",
  },
  {
    id: 1,
    text: "đối tác quốc tế",
    number: "100+",
    image: "./img/cheese.png",
    altImage: "cheese-icon",
  },
  {
    text: "chương trình trao đổi",
    number: "250+",
    image: "./img/grape.png",
    altImage: "grape-icon",
  },
];

const SCIENCE = [
  {
    id: 1,
    text: "Nghiên cứu khoa học Giảng viên",
    image: "./img/image.png",
    href: "#",
    alt: "science-1",
  },
  {
    id: 2,
    text: "Nghiên cứu khoa học Giảng viên",
    image: "./img/image.png",
    href: "#",
    alt: "science-2",
  },
];

const FOOTER_CONTENT_LEFT = [
  {
    name: "Địa chỉ",
    textContent: "Km 9 Đường Nguyễn Trãi - Thanh Xuân - Hà Nội - Việt Nam",
    href: "#",
  },
  {
    name: "Điện thoại",
    textContent: "(84.4) 35 54 17 95",
    href: "tel:+8435541795",
  },
  { name: "Fax", textContent: "(84-4) 38 54 45 50", href: "fax:+8438544550" },
  {
    name: "Email",
    textContent: "ita@hanu.edu.vn",
    href: "mailto:ita@hanu.edu.vn",
  },
];

const FOOTER_CONTENT_RIGHT_1 = [
  { text: "Giới thiệu", href: "#" },
  { text: "Tin tức - Sự kiện - Thông báo", href: "#" },
  { text: "Đào tạo", href: "#" },
  { text: "Nghiên cứu khoa học", href: "#" },
  { text: "Hợp", href: "#" },
  { text: "Hoạt động ngoại khóa", href: "#" },
  { text: "Trải nghiệm Italia", href: "#" },
  { text: "Liên hệ", href: "#" },
];

const library_image = [
  {
    src: "./img/library-1.jpg",
    altImage: "library-1",
  },
  {
    src: "./img/library-2.jpg",
    altImage: "library-2",
  },
  {
    src: "./img/library-3.jpg",
    altImage: "library-3",
  },
  {
    src: "./img/library-4.jpg",
    altImage: "library-4",
  },
  {
    src: "./img/library-5.jpg",
    altImage: "library-5",
  },
];

const navbar = document.getElementById("navbar-list_menu");
const introduce = document.getElementById("introduce");
const science = document.getElementById("science-content");
const footerLeftContent = document.getElementById("footer-left_content");
const footerRightContent = document.getElementById("footer-right_content");
const library_box = document.getElementById("library-box");
const library_box2 = document.getElementById("library-box-2");

let currentSlideEventNews = 0;
let currentSlideTraining = 0;
let currentSlideCooperate = 0;
let currentSlideSharing = 0;

library_box.innerHTML = library_image
  .map((item) => {
    return `
     <img src="${item.src}" alt="${item.altImage}" class="${item.altImage}">
  `;
  })
  .join("");

library_box2.innerHTML = library_image
  .map((item) => {
    return `
     <img src="${item.src}" alt="${item.altImage}" class="${item.altImage}">
  `;
  })
  .join("");

NAV_ITEMS.map((item) => {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.href = item.href;
  a.textContent = item.name;

  li.appendChild(a);
  navbar.appendChild(li);

  li.className = "m-8 md:m-5";
});

introduce.innerHTML = INTRODUCE_ITEMS.map((item) => {
  return `
  <div class='introduce_items bg-white ${item.id && "mt-8"}'>
    <div class='introduce_image'>
        ${
          item.image
            ? `<img src="${item.image}" alt="${item.altImage}">`
            : `<i class='${item.svg} text-6xl' style='color: ${item.colorSvg}'></i>`
        } 
    </div>
    <span class='introduce_number text-6xl font-bold my-8'>${item.number}</span>
    <p class='introduce_text capitalize text-2xl font-bold lg:text-xl'>${
      item.text
    }</p>
</div>`;
}).join("");

science.innerHTML = SCIENCE.map((item) => {
  return `
  <div class='science-items flex text-center flex-col bg-white p-4 ${
    item.id === 2 ? "lg:mt-10 mt-5" : "lg:mb-10 mb-5"
  }'>
    <img src="${item.image}" alt="${item.altImage}" class="science-image">
    <p class='capitalize text-2xl font-bold md:text-base lg:text-xl mt-5'>${
      item.text
    }</p>
    <a href="${
      item.href
    }" class="red-color font-bold md:my-3 lg:my-5 text-base md:text-xl">Xem Them</a>
</div>`;
}).join("");

footerLeftContent.innerHTML = FOOTER_CONTENT_LEFT.map((item) => {
  return `
  <li class="text-sm lg:text-base font-thin lg:mb-5 mb-1 xl:text-xl">${item.name} : <a href="${item.href}" >${item.textContent}</a></li>
  `;
}).join("");

footerRightContent.innerHTML = FOOTER_CONTENT_RIGHT_1.map((item) => {
  return `
    <li class="lg:mb-5 mb-1 text-sm lg:text-base xl:text-xl">
      <a href="${item.href}" class="font-thin">
          <p>${item.text}</p>
      </a>
    </li>
  `;
}).join("");

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function moveSlide(step, slideName) {
  const slide_box = document.querySelector(`.${slideName}-slide_box`);

  const totalSlideNews = document.querySelectorAll(
    ".eventNews-slide_items"
  ).length;
  const totalSlideTrain = document.querySelectorAll(
    ".training-slide_items"
  ).length;

  const totalSlideCooperate = document.querySelectorAll(
    ".cooperate-slide_items"
  ).length;

  const totalSlideSharing = document.querySelectorAll(".sharing_items").length;

  switch (slideName) {
    case "eventNews":
      currentSlideEventNews =
        (currentSlideEventNews + step + totalSlideNews) % totalSlideNews;
      slide_box.style.transform = `translateX(-${
        currentSlideEventNews * 100
      }%)`;
      break;
    case "training":
      currentSlideTraining =
        (currentSlideTraining + step + totalSlideTrain) % totalSlideTrain;
      slide_box.style.transform = `translateX(-${currentSlideTraining * 100}%)`;
      break;
    case "cooperate":
      currentSlideCooperate =
        (currentSlideCooperate + step + totalSlideCooperate) %
        totalSlideCooperate;
      slide_box.style.transform = `translateX(-${
        currentSlideCooperate * 100
      }%)`;
      break;
    case "sharing":
      currentSlideSharing =
        (currentSlideSharing + step + totalSlideSharing) % totalSlideSharing;
      slide_box.style.transform = `translateX(-${currentSlideSharing * 210}px)`;
      break;
    default:
      break;
  }
}
