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
