// Control del Menú Lateral
function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('main-content').classList.toggle('shifted');
}

// Lógica del Pop-up con Estilos Dinámicos
const items = document.querySelectorAll('.insta-item');
const modal = document.getElementById('insta-modal');
const modalImg = document.getElementById('modal-img');

// Aplicamos estilos base al modal por JS para asegurar que funcione
modal.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    opacity: 0;
    transition: opacity 0.3s ease;
    backdrop-filter: blur(5px);
`;

// Estilo base para la imagen
// Busca esta parte en tu JS y ajusta los valores:
modalImg.style.cssText = `
    width: 600px;         /* Ancho fijo si así lo prefieres */
    height: auto;          /* Altura automática para no deformar */
    max-width: 95vw;       /* O usa 95vw para que ocupe casi todo el ancho en móviles */
    max-height: 90vh;      /* O usa 90vh para que no se salga de la pantalla arriba/abajo */
    border-radius: 10px;
    box-shadow: 0 10px 50px rgba(0,0,0,0.8);
    transform: scale(0.5);
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

items.forEach(item => {
    const img = item.querySelector('img');

    item.addEventListener('click', () => {
        modalImg.src = img.src;

        // 1. Mostramos el contenedor
        modal.style.display = 'flex';

        // 2. Pequeño delay para que la animación se note
        setTimeout(() => {
            modal.style.opacity = '1';
            modalImg.style.transform = 'scale(1)';
        }, 10);
    });
});

// Cerrar el modal
modal.addEventListener('click', () => {
    modal.style.opacity = '0';
    modalImg.style.transform = 'scale(0.5)';

    // Esperamos a que termine la animación para ocultar el display
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
});

// Cerrar con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && modal.style.display === 'flex') {
        modal.click();
    }
});