document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
  
    // Obtener los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var numero = document.getElementById("numero").value;
    var mensaje = document.getElementById("mensaje").value;
    var talla = document.querySelector("select[name='talla']").value;
    var lineaRopa = document.querySelector("select[name='linea-ropa']").value;
  
    // Construir el mensaje de WhatsApp
    var mensajeWhatsApp = "Nombre: " + nombre + "\n" +
                          "Numero de teléfono: " + numero + "\n" +
                          "Talla: " + talla + "\n" +
                          "Línea de ropa que le interesa: " + lineaRopa+ "\n" +
                          "Mensaje: " + mensaje ;
  
    // Redirigir al usuario a WhatsApp con el mensaje preparado
    window.location.href = "https://wa.me/51986378055/?text=" + encodeURIComponent(mensajeWhatsApp);
  });
