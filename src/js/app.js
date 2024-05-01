// aktif humburger menu
const humburgerMenu = document.querySelector(".humburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

humburgerMenu.addEventListener("click", function (e) {
  e.preventDefault();
  navbarNav.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  !humburgerMenu.contains(e.target) && !navbarNav.contains(e.target)
    ? navbarNav.classList.remove("active")
    : 0;
});

// ketika gambar diklik maka akan mengganti gambar profile
const main = document.querySelector("main");
const navbar = document.querySelector(".navbar");
const footer = document.querySelector("footer");
const allImages = document.querySelectorAll(".gambar");
const profile = document.querySelector(".profile");
allImages.forEach((e) =>
  e.addEventListener("click", function () {
    if (e.src !== profile.src) {
      profile.classList.add("hidden");
      setTimeout(() => {
        profile.classList.remove("hidden");
        profile.src = this.src;
        if (this.classList.contains("gambar1")) {
          main.style.background = gambar1;
          navbar.style.background = gambar1;
          footer.style.background = gambar1Reverse;
        } else if (this.classList.contains("gambar2")) {
          main.style.background = gambar2;
          navbar.style.background = gambar2;
          footer.style.background = gambar2Reverse;
        } else if (this.classList.contains("gambar3")) {
          main.style.background = gambar3;
          navbar.style.background = gambar3;
          footer.style.background = gambar3Reverse;
        } else if (this.classList.contains("gambar4")) {
          main.style.background = gambar4;
          navbar.style.background = gambar4;
          footer.style.background = gambar4Reverse;
        }
      }, 1000);
    }
  })
);

// ketika gambar diklik maka akan mengganti background color dari main dan footer
const root = document.documentElement;
const gambar1 = getComputedStyle(root).getPropertyValue("--gambar1");
const gambar1Reverse =
  getComputedStyle(root).getPropertyValue("--gambar1-reverse");
const gambar2 = getComputedStyle(root).getPropertyValue("--gambar2");
const gambar2Reverse =
  getComputedStyle(root).getPropertyValue("--gambar2-reverse");
const gambar3 = getComputedStyle(root).getPropertyValue("--gambar3");
const gambar3Reverse =
  getComputedStyle(root).getPropertyValue("--gambar3-reverse");
const gambar4 = getComputedStyle(root).getPropertyValue("--gambar4");
const gambar4Reverse =
  getComputedStyle(root).getPropertyValue("--gambar4-reverse");

// animasi gambar ketika diload tidak dijalankan
allImages.forEach((e) =>
  e.addEventListener("mouseenter", function () {
    this.classList.add("fade");
    this.classList.remove("out");
  })
);
allImages.forEach((e) =>
  e.addEventListener("mouseleave", function () {
    this.classList.add("out");
    this.classList.remove("fade");
  })
);
