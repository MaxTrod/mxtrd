const heroBtn = document.querySelector('.hero__works-btn');
const worksSection = document.querySelector('.works');

heroBtn.addEventListener('click', (e) => {
  worksSection.scrollIntoView({ behavior: "smooth" });
})
