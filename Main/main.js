// Tab functionality
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove active class from all tabs
        document.querySelectorAll('.tab').forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
        });

        // Add active class to clicked tab
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');
    });
});

// Form validation
document.querySelector('.search-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const destino = document.getElementById('destino').value;
    if (!destino.trim()) {
        alert('Por favor, ingresa un destino');
        return;
    }

    // Here you would typically send the form data to a server
    alert('Búsqueda realizada para: ' + destino);
});

// Set minimum date to today
const today = new Date().toISOString().split('T')[0];
document.querySelectorAll('input[type="date"]').forEach(input => {
    input.min = today;
});

//Validacion del destino
document.querySelector('.search-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Previene el envío tradicional del formulario

    const destino = document.getElementById('destino').value.trim().toLowerCase();

    // Diccionario de destinos válidos y su página respectiva
    const destinos = {
        'Tokio, japon': 'japon.html',
        'Amazonas, Colombia': 'amazonas.html',
        'Juneau, Alaska': 'alaska.html'
    };

    // Verifica si el destino ingresado está en la lista
    if (destinos[destino]) {
        window.location.href = destinos[destino]; // Redirige a la página correspondiente
    } else {
        alert('Destino no disponible. Por favor, selecciona uno válido.');
    }
});