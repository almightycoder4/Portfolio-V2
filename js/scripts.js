// scroll section active links//
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  console.log("hiii");
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      console.log("yes");
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active").add;
      });
    }
  });
};
// sticky navbar//
window.onscroll = () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
};
