

const menu = document.querySelectorAll(".menu");

const slides = document.querySelectorAll(".cooperate_slide-items");
const totalSlides = slides.length;
let currentSlideEventNews = 0;
let currentSlideTraining = 0;
let currentSlideCooperate = 0;
let currentSlideSharing = 0;
let currentIndex = 0;

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

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("cooperate_slide-active");
    slide.style.zIndex = 0;
    if (i === index) {
      slide.classList.add("cooperate_slide-active");
      slide.style.zIndex = 10;
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

setInterval(nextSlide, 2500);
showSlide(currentIndex);

function showMenu(open) {
  menu.forEach((item) => {
    if (open === "open") {
      item.classList.add("active-menu");
      document.getElementsByName("body").style.overflow = "hidden";
    } else {
      item.classList.remove("active-menu");
    }
  });
}
