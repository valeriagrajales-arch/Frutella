// Funcionalidades interactivas para Frutella

document.addEventListener("DOMContentLoaded", () => {
    // Scroll suave al hacer click en el menú de navegación
    const links = document.querySelectorAll('.navbar nav a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if(targetId.startsWith("#")) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if(targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    console.log("¡Sitio web de Frutella cargado correctamente! 🍓🍫");
});