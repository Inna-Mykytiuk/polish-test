document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.querySelector('.burger-btn');
  const closeBtn = document.querySelector('.close-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  burgerBtn.addEventListener('click', function () {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'unset';
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = 'unset';
    }
  });

  return () => {
    document.body.style.overflow = 'unset';
  };
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const consent = document.getElementById('consent').checked;

  if (consent) {
    console.log('Form Submitted');
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Email:', email);

    alert('Form Submitted Successfully!');
  } else {
    alert('You must agree to the terms to submit the form.');
  }
});

/*dropdown*/
document.addEventListener('DOMContentLoaded', function () {
  const dropdownToggles = document.querySelectorAll('.nav-link.dropdown-toggle');

  dropdownToggles.forEach(function (dropdownToggle) {
    dropdownToggle.addEventListener('click', function (event) {
      event.preventDefault();
      this.classList.toggle('active');
    });
  });

  document.addEventListener('click', function (event) {
    dropdownToggles.forEach(function (dropdownToggle) {
      const dropdownMenu = dropdownToggle.nextElementSibling;
      if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownToggle.classList.remove('active');
      }
    });
  });
});
