function getUserId() {
    // Primero intenta obtenerlo de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const urlId = urlParams.get('id');
    
    // Si está en la URL, lo guarda en sessionStorage
    if (urlId) {
        sessionStorage.setItem('id', urlId);
        return urlId;
    }
    
    // Si no está en la URL, lo obtiene de sessionStorage
    return sessionStorage.getItem('id');
}

// Función para obtener el nombre del usuario
function getUserName() {
    return sessionStorage.getItem('name');
}

// Función para navegar manteniendo el ID
function navigateWithId(page) {
    const userId = getUserId();
    if (userId) {
        window.location.href = `${page}?id=${userId}`;
    } else {
        window.location.href = page;
    }
}

// Función para agregar ID a todos los enlaces de navegación
function updateNavigationLinks() {
    const userId = getUserId();
    if (userId) {
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && !href.includes('?id=')) {
                // Solo agregar ID si no es un enlace externo
                if (href.startsWith('./') || href.startsWith('../') || !href.includes('http')) {
                    link.href = `${href}?id=${userId}`;
                }
            }
        });
    }
}

// Ejecutar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    updateNavigationLinks();
    
    // Mostrar información del usuario si existe
    const userName = getUserName();
    const userId = getUserId();
    
    if (userName && userId) {
        console.log(`Usuario logueado: ${userName} (ID: ${userId})`);
    }
});