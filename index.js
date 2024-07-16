document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.querySelector('.burger-btn');
  const closeBtn = document.querySelector('.close-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  burgerBtn.addEventListener('click', function () {
    mobileMenu.classList.add('active');
  });

  closeBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('active');
  });
});

