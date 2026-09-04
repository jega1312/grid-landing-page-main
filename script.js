const navBtn = document.querySelector("#nav-btn");
const navImg = document.querySelector("#nav-img");
const overlayBg = document.querySelector("#overlay");
const navTab = document.querySelector("#nav-tab");

navBtn.addEventListener("click", () => {
  navImg.classList.toggle("clicked");
  navBtn.classList.toggle("opened");
  navTab.classList.toggle("active");

  if (navImg.classList.contains("clicked")) {
    navImg.src = "./assets/images/icon-close.svg";
  } else {
    navImg.src = "./assets/images/icon-menu.svg";
  }

  if (navBtn.classList.contains("opened")) {
    overlayBg.classList.remove("hidden");
  } else {
    overlayBg.classList.add("hidden");
  }

  if (navBtn.classList.contains("opened")) {
    navTab.classList.remove("hidden");
  } else {
    navTab.classList.add("hidden");
  }
});
