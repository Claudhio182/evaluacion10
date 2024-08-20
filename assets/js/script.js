$(document).ready(function () {
  $(".text-body-secondary").click(function () {
    var idBoton = $(this).attr("id");  // Obtener el id del botón que fue clicado
    $("#detalles" + idBoton).toggle();
  });

  $(".btn-close").click(function () {
    $(this).closest(".detalles").hide();  // Ocultar solo el contenedor de detalles que fue cerrado
  });
});
