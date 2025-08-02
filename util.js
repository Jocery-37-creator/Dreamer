// 🔹 Función para normalizar texto (elimina tildes y convierte a minúsculas)
function normalizarTexto(texto) {
    return texto
        .normalize("NFD")                   // Descompone acentos
        .replace(/[\u0300-\u036f]/g, "")    // Elimina marcas diacríticas
        .toLowerCase();                     // Convierte a minúsculas
}

// 🔹 Tab functionality
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelectorAll('.tab').forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
        });

        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');
    });
});

// 🔹 Form submission y redirección por destino
document.querySelector('.search-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Previene el envío tradicional del formulario

    const destinoInput = document.getElementById('destino');
    const destinoRaw = destinoInput.value.trim();

    if (!destinoRaw) {
        alert('Por favor, ingresa un destino');
        destinoInput.focus();
        return;
    }

    const destino = normalizarTexto(destinoRaw); // Normalizamos

    // Diccionario de destinos válidos (también normalizados)
    const destinos = {
        'tokio, japon': '../Destinations/japon.html',
        'amazonas, colombia': '../Destinations/amazonas.html',
        'juneau, alaska': '../Destinations/alaska.html'
    };

    if (destinos[destino]) {
        window.location.href = destinos[destino];
    } else {
        alert('Destino no disponible. Por favor, selecciona uno válido.');
    }
});

// 🔹 Set minimum date to today
const today = new Date().toISOString().split('T')[0];
document.querySelectorAll('input[type="date"]').forEach(input => {
    input.min = today;
});

