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

