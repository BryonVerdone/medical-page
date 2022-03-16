const mobilenav = document.querySelector('.mobile-nav');
const mobileBtn = document.getElementById('mobile-btn');

function showMobileNav() {
  mobilenav.classList.toggle('hidden');
}

mobileBtn.addEventListener('click', showMobileNav);
