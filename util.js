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

    // Diccionario de destinos válidos (también normalizados)
    const destinos = {
        'Tokio, Japon': '../Destinations/japon.html',
        'Amazonas, Colombia': '../Destinations/amazonas.html',
        'Juneau, Alaska': '../Destinations/alaska.html'
    };

    if (destinos[destinoRaw]) {
        const fechaIda = document.getElementById('entrada')?.value || '';
        const fechaVuelta = document.getElementById('salida')?.value || '';

        // Codifica los valores para que puedan ir en la URL
        const params = new URLSearchParams({
            fechaIda,
            fechaVuelta
        });

        window.location.href = `${destinos[destinoRaw]}?${params.toString()}`;
    } else {
        alert('Destino no disponible. Por favor, selecciona uno válido.');
    }
});

// 🔹 Set minimum date to today
const today = new Date().toISOString().split('T')[0];
document.querySelectorAll('input[type="date"]').forEach(input => {
    input.min = today;
});

document.getElementById('entrada').addEventListener('change', function () {
    const fechaIda = this.value;

    const fechaVueltaInput = document.getElementById('salida');

    // Si ya se había seleccionado una fecha de vuelta que ahora es inválida, la borramos
    if (fechaVueltaInput.value && fechaVueltaInput.value < fechaIda) {
        fechaVueltaInput.value = '';
    }

    fechaVueltaInput.min = fechaIda;
});

