let main_nav = document.getElementById('menu');
let toggle_navbar = document.getElementById('js_toggle');

toggle_navbar.addEventListener('click', () => {
  main_nav.classList.toggle('active');
});