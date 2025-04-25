
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
document.getElementById("formularioPresupuesto").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío si hay errores

    // Limpiar errores anteriores
    const errores = document.querySelectorAll(".error");
    errores.forEach(error => error.textContent = "");

    let esValido = true;

    // Validar Nombre: solo letras y hasta 15 caracteres
    const nombre = document.getElementById("nombre").value.trim();
    if (!nombre.match(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/) || nombre.length > 15) {
        document.getElementById("errorNombre").textContent = "El nombre solo puede contener letras y debe tener como máximo 15 caracteres.";
        esValido = false;
    }

    // Validar Apellidos: solo letras y hasta 40 caracteres
    const apellidos = document.getElementById("apellidos").value.trim();
    if (!apellidos.match(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/) || apellidos.length > 40) {
        document.getElementById("errorApellidos").textContent = "Los apellidos solo pueden contener letras y como máximo 40 caracteres.";
        esValido = false;
    }

    // Validar Teléfono
    const telefono = document.getElementById("telefono").value.trim();
    if (!telefono.match(/^\d{9}$/)) {
        document.getElementById("errorTelefono").textContent = "El teléfono debe tener exactamente 9 dígitos.";
        esValido = false;
    }

    // Validar Email
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("errorEmail").textContent = "Por favor, introduce un correo electrónico válido.";
        esValido = false;
    }

    // Validar Destino del viaje
    const producto = document.getElementById("producto").value;
    if (producto === "0") {
        document.getElementById("errorProducto").textContent = "Por favor selecciona un destino.";
        esValido = false;
    }

    // Validar aceptación de condiciones
    const condiciones = document.getElementById("condiciones").checked;
    if (!condiciones) {
        document.getElementById("errorCondiciones").textContent = "Debes aceptar las condiciones de privacidad.";
        esValido = false;
    }

    // Si todo es válido, calcular presupuesto
    if (esValido) {
        // Llamar a la función que calcula el presupuesto total
        calcularPresupuestoTotal();

        // Finalmente, puedes enviar el formulario si todo es válido
        alert("Formulario enviado correctamente.");
       
    }
});

// Función que calcula el presupuesto total
function calcularPresupuestoTotal() {
    // Obtenemos el valor seleccionado en el campo de destino del viaje (producto)
    const producto = document.getElementById("producto").value;
    
    // Obtenemos la duración del viaje en días, si no se ha especificado, usamos el valor por defecto 1.
    const plazo = parseInt(document.getElementById("plazo").value) || 1;
    
    // Obtenemos el precio base del destino seleccionado
    let presupuestoBase = parseInt(producto);
    
    // Si el valor del producto es "0" (es decir, no se ha seleccionado un destino válido),
    // mostramos un mensaje indicando que se debe seleccionar un destino
    if (producto === "0") {
        document.getElementById("presupuestoTotal").value = "Selecciona un destino";
        return; // Detenemos la ejecución de la función aquí, ya que no podemos calcular el presupuesto sin un destino
    }
    
    // Inicializamos la variable 'extras' que almacenará el costo de los extras seleccionados
    let extras = 0;

    // Obtenemos todos los checkbox de extras que han sido seleccionados por el usuario
    const extrasSeleccionados = document.querySelectorAll(".extra:checked");
    
    // Iteramos sobre los extras seleccionados y sumamos su valor al total de 'extras'
    extrasSeleccionados.forEach(extra => {
        extras += parseInt(extra.value); // Sumamos el valor de cada extra
    });

    // Calculamos el presupuesto total: sumamos el precio base del destino + el costo de los extras
    // Y lo multiplicamos por la duración del viaje
    const presupuestoTotal = (presupuestoBase + extras) * plazo;
    
    // Finalmente, mostramos el presupuesto total calculado en el campo 'presupuestoTotal'
    // El resultado será mostrado en formato "X euros"
    document.getElementById("presupuestoTotal").value = `${presupuestoTotal} euros`;
}
