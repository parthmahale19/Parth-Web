const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
function closeMobile(){ mobileMenu.classList.remove('open'); }

function sendMessage(e){
  e.preventDefault();
  document.getElementById('msgSuccess').classList.add('show');
  document.getElementById('msgForm').reset();
}