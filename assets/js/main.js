let navLinks = document.querySelectorAll(".nav-link");

function setActiveNavLink() {
  navLinks.forEach((navLink) => {
    if (!navLink.getAttribute("href").startsWith("#")) return;

    let correspondingSection = document.querySelector(navLink.getAttribute("href"));
    if (!correspondingSection) return;

    let scrollPosition = window.scrollY + 200;

    if (
      scrollPosition >= correspondingSection.offsetTop &&
      scrollPosition <= correspondingSection.offsetTop + correspondingSection.offsetHeight
    ) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });
}

window.addEventListener('scroll', setActiveNavLink);
document.addEventListener("scroll", setActiveNavLink);