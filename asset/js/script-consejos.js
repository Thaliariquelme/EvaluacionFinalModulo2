$(document).ready(function () {
  // Validación y envío formulario contacto
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();

    let valid = true;

    const nombre = $('#nombre').val().trim();
    const email = $('#email').val().trim();
    const mensaje = $('#mensaje').val().trim();

    if (nombre === '') {
      $('#errorNombre').removeClass('d-none');
      valid = false;
    } else {
      $('#errorNombre').addClass('d-none');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      $('#errorEmail').removeClass('d-none');
      valid = false;
    } else {
      $('#errorEmail').addClass('d-none');
    }

    if (mensaje === '') {
      $('#errorMensaje').removeClass('d-none');
      valid = false;
    } else {
      $('#errorMensaje').addClass('d-none');
    }

    if (!valid) {
      return;
    }

    // Mostrar mensaje de éxito
    $('#successMsg')
      .text('¡Mensaje enviado con éxito!')
      .removeClass('d-none alert-warning')
      .addClass('alert-success')
      .show();

    // Limpiar formulario luego de 3 segundos
    setTimeout(() => {
      $('#successMsg').addClass('d-none');
      $('#contactForm')[0].reset();
    }, 3000);
  });

  // Validación y envío cuestionario
  $('#quizForm').on('submit', function (e) {
    e.preventDefault();

    const resp1 = $('#pregunta1').val();
    const resp2 = $('#pregunta2').val();

    if (!resp1 || !resp2) {
      alert('Por favor, selecciona todas las respuestas.');
      return;
    }

    let texto = '';
    let clase = '';

    if (resp1 === 'correcto' && resp2 === 'correcto') {
      texto = '¡Felicidades! Respuestas correctas.';
      clase = 'alert-success';
    } else {
      texto = 'Respuesta incorrecta. Revisa la sección de amenazas.';
      clase = 'alert-danger';
    }

    $('#resultTest')
      .removeClass('d-none alert-success alert-danger')
      .addClass(clase)
      .text(texto)
      .show();
  });
});
