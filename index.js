
const navLinks = document.querySelectorAll('.portfolio-links');


window.addEventListener('scroll', () => {
    document.querySelectorAll('.section').forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');


    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((navLink) => {
        navLink.classList.toggle('active', navLink.getAttribute('id') === `${sectionId}`);
      });
    }
  });
});