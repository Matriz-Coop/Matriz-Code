document.querySelectorAll('.package button').forEach(button => {
    button.addEventListener('click', () => {
        alert('¡Gracias por suscribirte al paquete seleccionado!');
    });
});

document.querySelector('.hero button').addEventListener('click', () => {
    alert('¡Descubre más sobre Zigoto y cómo te podemos ayudar!');
});
