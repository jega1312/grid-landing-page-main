const navBtn = document.querySelector("#nav-btn");
const navImg = document.querySelector("#nav-img");

navBtn.addEventListener("click", () => {
  navImg.classList.toggle("clicked");

  if (navImg.classList.contains("clicked")) {
    navImg.src = "./assets/images/icon-close.svg";
  } else {
    navImg.src = "./assets/images/icon-menu.svg";
  }
});
