// Элементы
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

// Создаём оверлей
const navOverlay = document.createElement('div');
navOverlay.className = 'nav-overlay';
document.body.appendChild(navOverlay);

// Переключение меню
function toggleMenu() {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  const newState = !isExpanded;

  menuToggle.setAttribute('aria-expanded', newState);
  menuToggle.classList.toggle('active');
  mainNav.classList.toggle('active');
  navOverlay.classList.toggle('active');

  document.body.style.overflow = newState ? 'hidden' : '';
}

// Обработчики
menuToggle.addEventListener('click', toggleMenu);
navOverlay.addEventListener('click', toggleMenu);

// Закрытие при клике на ссылку
document.querySelectorAll('.main-nav__link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      toggleMenu();
    }
  });
});

// Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mainNav.classList.contains('active')) {
    toggleMenu();
  }
});

// Закрытие при ресайзе
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
    toggleMenu();
  }
});

// Кнопка "Наверх"
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});