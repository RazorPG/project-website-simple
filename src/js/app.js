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

// ketika gambar diklik maka akan mengganti gambar profile dan background main .navbar dan footer
const main = document.querySelector("main");
const navbar = document.querySelector(".navbar");
const footer = document.querySelector("footer");
const allImages = document.querySelectorAll(".gambar");
const profile = document.querySelector(".profile");
allImages.forEach((e) =>
  e.addEventListener("click", function () {
    if (e.src !== profile.src) {
      profile.classList.add("hidden");
      main.classList.add("hidden");
      navbar.classList.add("hidden");
      footer.classList.add("hidden");
      setTimeout(() => {
        profile.classList.remove("hidden");
        main.classList.remove("hidden");
        navbar.classList.remove("hidden");
        footer.classList.remove("hidden");
        profile.src = this.src;

        if (this.classList.contains("gambar1")) {
          main.style.backgroundImage = gambar1;
          navbar.style.backgroundImage = gambar1;
          footer.style.backgroundImage = gambar1Reverse;
        } else if (this.classList.contains("gambar2")) {
          main.style.backgroundImage = gambar2;
          navbar.style.backgroundImage = gambar2;
          footer.style.backgroundImage = gambar2Reverse;
        } else if (this.classList.contains("gambar3")) {
          main.style.backgroundImage = gambar3;
          navbar.style.backgroundImage = gambar3;
          footer.style.backgroundImage = gambar3Reverse;
        } else if (this.classList.contains("gambar4")) {
          main.style.backgroundImage = gambar4;
          navbar.style.backgroundImage = gambar4;
          footer.style.backgroundImage = gambar4Reverse;
        }
      }, 1000);
    }
  })
);

// variabel warna pada root
const root = document.documentElement;
const gambar1 = getComputedStyle(root).getPropertyValue("--gambar1");
const gambar1Reverse =
  getComputedStyle(root).getPropertyValue("--gambar1Reverse");
const gambar2 = getComputedStyle(root).getPropertyValue("--gambar2");
const gambar2Reverse =
  getComputedStyle(root).getPropertyValue("--gambar2Reverse");
const gambar3 = getComputedStyle(root).getPropertyValue("--gambar3");
const gambar3Reverse =
  getComputedStyle(root).getPropertyValue("--gambar3Reverse");
const gambar4 = getComputedStyle(root).getPropertyValue("--gambar4");
const gambar4Reverse =
  getComputedStyle(root).getPropertyValue("--gambar4Reverse");

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
