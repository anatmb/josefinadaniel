// /* script.js */

// const navItems = document.querySelectorAll('.nav-item');
// navItems.forEach(item => {
//     item.addEventListener('click', () => {
//         navItems.forEach(i => i.classList.remove('active'));
//         item.classList.add('active');
//     });
// });

lucide.createIcons();

// Lógica del Menú Hamburguesa Móvil
// const hamburgerBtn = document.getElementById('hamburgerBtn');
// const navMenu = document.getElementById('navMenu');
// const menuIcon = document.getElementById('menuIcon');

// hamburgerBtn.addEventListener('click', () => {
//     navMenu.classList.toggle('is-active');
    
//     // Cambiar icono entre hamburguesa y cerrar
//     if (navMenu.classList.contains('is-active')) {
//         menuIcon.setAttribute('data-lucide', 'x');
//     } else {
//         menuIcon.setAttribute('data-lucide', 'menu');
//     }
    
//     // Volver a procesar los iconos para que Lucide dibuje el cambio
//     lucide.createIcons();
// });

// // Cerrar el menú automáticamente al hacer click en cualquier enlace
// const navLinks = document.querySelectorAll('.nav-menu a');
// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         navMenu.classList.remove('is-active');
//         menuIcon.setAttribute('data-lucide', 'menu');
//         lucide.createIcons();
//     });
// });

// // Mantener tu lógica existente de la nav inferior (puedes borrarla si ya no usas .nav-item)
// const navItems = document.querySelectorAll('.nav-item');
// navItems.forEach(item => {
//     item.addEventListener('click', () => {
//         navItems.forEach(i => i.classList.remove('active'));
//         item.classList.add('active');
//     });
// });

/* script.js */
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar iconos de Lucide al cargar la página
  lucide.createIcons();

  // Lógica del Menú Hamburguesa Móvil
 // Lógica del Menú Hamburguesa Móvil
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
const menuIcon = document.getElementById('menuIcon');

if (hamburgerBtn && navMenu && menuIcon) {
  hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('is-active');

    // Cambiar icono entre hamburguesa (menu) y cerrar (x)
    if (navMenu.classList.contains('is-active')) {
      menuIcon.setAttribute('data-lucide', 'x');
    } else {
      menuIcon.setAttribute('data-lucide', 'menu');
    }

    lucide.createIcons();
  });

  // Caza TODOS los enlaces dentro de .nav-menu (Corregido: .nav-menu a)
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-active');
      menuIcon.setAttribute('data-lucide', 'menu');
      lucide.createIcons();
    });
  });
}

  // Lógica para marcar enlace activo
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      navItems.forEach((i) => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
});

const btnContacto = document.getElementById('btnContacto');
const seccionContacto = document.getElementById('contacto');

if (btnContacto && seccionContacto) {
  btnContacto.addEventListener('click', () => {
    seccionContacto.scrollIntoView({ behavior: 'smooth' });
  });
}