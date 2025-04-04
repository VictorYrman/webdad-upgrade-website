const burgerMenuButton = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");

burgerMenuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("mobile-menu-disappear");
  mobileMenu.classList.add("mobile-menu-appear");

  document.addEventListener("click", (event) => {
    if (
      mobileMenu.contains(event.target) ||
      burgerMenuButton.contains(event.target)
    ) {
      return;
    }

    mobileMenu.classList.remove("mobile-menu-appear");
    mobileMenu.classList.add("mobile-menu-disappear");
  });
});

const slider = document.querySelector(".read-more__list");
const dotsContainer = document.querySelector(".dots");

document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;

  function isSliderActive() {
    return window.innerWidth < 1024;
  }

  function getVisibleItems() {
    if (window.innerWidth <= 1024 && window.innerWidth >= 500) return 2;
    else if (window.innerWidth < 500) return 1;
  }

  function updateSlider() {
    if (!isSliderActive()) {
      slider.style.transform = "none";
      dotsContainer.style.display = "none";
      return;
    }

    dotsContainer.style.display = "flex";
    const itemWidth = slider.children[0].offsetWidth + 20;
    slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    updateDots();
  }

  function updateDots() {
    document.querySelectorAll(".dot").forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  function createDots() {
    dotsContainer.innerHTML = "";
    if (!isSliderActive()) return;

    const totalDots = Math.ceil(slider.children.length / getVisibleItems());

    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        currentIndex = i;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    }
  }

  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener("touchstart", function (event) {
    if (!isSliderActive()) return;
    touchStartX = event.touches[0].clientX;
  });

  slider.addEventListener("touchmove", function (event) {
    if (!isSliderActive()) return;
    touchEndX = event.touches[0].clientX;
  });

  slider.addEventListener("touchend", function () {
    if (!isSliderActive()) return;
    if (
      touchStartX - touchEndX > 50 &&
      currentIndex < document.querySelectorAll(".dot").length - 1
    ) {
      currentIndex++;
    } else if (touchStartX - touchEndX < -50 && currentIndex > 0) {
      currentIndex--;
    }
    updateSlider();
  });

  window.addEventListener("resize", () => {
    createDots();
    updateSlider();
  });

  createDots();
  updateSlider();
});
