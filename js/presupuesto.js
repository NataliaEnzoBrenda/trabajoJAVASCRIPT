
    document.getElementById("formularioPresupuesto").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe si hay errores
    
    // Limpiar los errores previos
    const errores = document.querySelectorAll(".error");
    errores.forEach(error => error.textContent = "");

    let esValido = true;

    // Validar Nombre
    const nombre = document.getElementById("nombre").value;
    if (!nombre || nombre.length > 15) {
        document.getElementById("errorNombre").textContent = "El nombre no puede estar vacío ni tener más de 15 caracteres.";
        esValido = false;
    }

    // Validar Apellidos
    const apellidos = document.getElementById("apellidos").value;
    if (!apellidos || apellidos.length > 40) {
        document.getElementById("errorApellidos").textContent = "Los apellidos no pueden estar vacíos ni tener más de 40 caracteres.";
        esValido = false;
    }

    // Validar Teléfono
    const telefono = document.getElementById("telefono").value;
    if (!telefono.match(/^\d{9}$/)) {
        document.getElementById("errorTelefono").textContent = "El teléfono debe tener 9 dígitos.";
        esValido = false;
    }

    // Validar Email
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("errorEmail").textContent = "Por favor ingresa un correo electrónico válido.";
        esValido = false;
    }

    // Validar Destino del viaje
    const producto = document.getElementById("producto").value;
    if (producto === "0") {
        alert("Por favor selecciona un destino.");
        esValido = false;
    }

    // Validar Condiciones de privacidad
    const condiciones = document.getElementById("condiciones").checked;
    if (!condiciones) {
        document.getElementById("errorCondiciones").textContent = "Debes aceptar las condiciones de privacidad.";
        esValido = false;
    }

    // Si el formulario es válido, calcular el presupuesto total
    if (esValido) {
        const plazo = document.getElementById("plazo").value;
        let presupuestoBase = parseInt(producto);
        let extras = 0;

        // Calcular el valor de los extras seleccionados
        const extrasSeleccionados = document.querySelectorAll(".extra:checked");
        extrasSeleccionados.forEach(extra => {
            extras += parseInt(extra.value);
        });

        const presupuestoTotal = presupuestoBase + extras;
        document.getElementById("presupuestoTotal").value = presupuestoTotal + " euros";

        // Finalmente, puedes enviar el formulario si todo es válido
        alert("Formulario enviado correctamente.");
        this.submit(); // Enviar el formulario
    }
});