function toggleMenu() {
  const $navMenu = document.getElementById('nav__menu');
  $navMenu.classList.toggle('show');
}

function handleFloatingButton() {
  const $floatingButton = document.getElementById('floating-button');
  $floatingButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth',
    });
  });
}

function init() {
  const $navToggle = document.getElementById('nav-toggle');
  $navToggle.addEventListener('click', () => {
    // Menu Toggle
    toggleMenu();
  });

  const $navLinkList = document.querySelectorAll('.nav__link ');
  $navLinkList.forEach((el) => el.addEventListener('click', toggleMenu));

  handleFloatingButton();
}

init();

const options = {
  threshold: 1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    if (entry.isIntersecting) {
      document
        .querySelector(`.nav__link[href*=${sectionId}]`)
        .classList.add('active-link');

      const $items = document.querySelectorAll(
        `.nav__link:not([href*=${sectionId}])`,
      );
      $items.forEach((el) => el.classList.remove('active-link'));
    }
  });
}, options);

const $sectionList = document.querySelectorAll('.section');
$sectionList.forEach((el) => observer.observe(el));
// observer.observe($workSection);
// observer.observe($workSection);
// observer.observe($workSection);
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
});
scrollReveal.reveal('.home__data, .about__img, .skills__text, .about__list');
scrollReveal.reveal('.home__img, .about__data, .skills__img', { delay: 400 });
scrollReveal.reveal('.skills__data, .contact__input', {
  interval: 200,
});

// TypeIt
const typeit = new TypeIt('#typeit', {
  speed: 70,
  startDelay: 1300,
  waitUntilVisible: true,
});

typeit
  .type('안녕하세요 😊<br/>')
  .type('신입 프론트엔드 웹 개발자 ')
  .type('<strong class="home__title-color">Lee Youn ho</strong>', {
    delay: 300,
  })
  .delete(11, { delay: 300 })
  .type('<strong class="home__title-color">이윤호</strong>입니다.')
  .go();
