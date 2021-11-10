const menuButton = document.getElementById('navbar_menu');
const menu = document.getElementById('navbar_links');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('show_menu');
});
