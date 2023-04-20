// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
//diluar sidebar
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//search bar
const search = document.querySelector(".bar");
document.querySelector("#search").onclick = () => {
  search.classList.toggle("muncul");
};

//berhasil
const searchEngine = document.querySelector("#search");
document.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    search.classList.remove("muncul");
  }
});
