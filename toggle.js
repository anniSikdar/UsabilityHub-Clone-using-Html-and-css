const togglebtn = document.getElementById('nav-toggle');
const navlink = document.getElementById('nav-link');
togglebtn.addEventListener('click', () => {
    navlink.classList.toggle('active');
})