let hamburger = document.querySelector('.hamburger-menu');
let overlay = document.querySelector('.overlay');
let overCross = document.querySelector('.overlay__cross-wrap');

hamburger.addEventListener('click', function() {
  overlay.style.display = 'flex';
})

overCross.addEventListener('click', function() {
  overlay.style.display = 'none';
})

