document.getElementById('quickMenu').addEventListener('click', toggleQuickMenu);

function toggleQuickMenu() {
  const beforeButtons = document.querySelectorAll('.before_button');

  beforeButtons.forEach(button => {
    button.classList.toggle('d-none');
    button.classList.toggle('d-flex');
  });

  const quickMenu = document.getElementById('quickMenu');
  const quickplus = document.getElementById('quickplus');

  quickMenu.classList.toggle('show');
  quickplus.classList.toggle('close');
  quickplus.classList.toggle('d-none');
  quickplus.classList.toggle('d-flex');
}