// decare variable to store menulinks
const menulinks = document.querySelectorAll('.row-list li a');
// section navigation
menulinks.forEach((menulink) => {
  menulink.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionId = menulink.dataset.section;
    const sections = document.querySelectorAll('.section-container');

    sections.forEach((section) => {
      section.classList.remove('active');
    });
    menulinks.forEach((link) => {
      link.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');
    menulink.classList.add('active');
  });
});