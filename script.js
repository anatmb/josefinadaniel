// /* script.js */
lucide.createIcons();

// const navItems = document.querySelectorAll('.nav-item');
// navItems.forEach(item => {
//     item.addEventListener('click', () => {
//         navItems.forEach(i => i.classList.remove('active'));
//         item.classList.add('active');
//     });
// });

lucide.createIcons();

// Lógica del Menú Hamburguesa Móvil
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
const menuIcon = document.getElementById('menuIcon');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('is-active');
    
    // Cambiar icono entre hamburguesa y cerrar
    if (navMenu.classList.contains('is-active')) {
        menuIcon.setAttribute('data-lucide', 'x');
    } else {
        menuIcon.setAttribute('data-lucide', 'menu');
    }
    
    // Volver a procesar los iconos para que Lucide dibuje el cambio
    lucide.createIcons();
});

// Cerrar el menú automáticamente al hacer click en cualquier enlace
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('is-active');
        menuIcon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});

// Mantener tu lógica existente de la nav inferior (puedes borrarla si ya no usas .nav-item)
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});