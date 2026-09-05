const navBtn = document.querySelector("#nav-btn");
const navImg = document.querySelector("#nav-img");
const overlayBg = document.querySelector("#overlay");
const navTab = document.querySelector("#nav-tab");
const statsBox = document.querySelector("#stats-box");

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

async function statsData() {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    data.forEach((stats) => {
      statsBox.innerHTML += `
       <div
              class="flex flex-col justify-between border-y lg:border-x border-blue-500 p-7 hover:bg-blue-600 cursor-pointer transition duration-300 ease-in-out"
            >
              <div class="flex justify-between items-center">
                <img
                  src=${stats.src}
                  alt="icon-sparkle"
                />
                <h2 class="text-white font-inter text-2xl">${stats.statsNum}</h2>
              </div>
              <div class="mt-40">
                <p class="text-white font-inter text-lg">${stats.heading}</p>
                <p class="text-white/75 font-inter text-xs">
                  ${stats.paragraph}
                </p>
              </div>
            </div>
      `;
    });
  } catch (error) {
    console.error(error);
  }
}

statsData();
