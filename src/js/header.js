$(document).ready(function () {
  $(".open").on("click", function () {
    $(".leftMenu").addClass("menuOpen");
  });

  $('.closeMenuLeftMenu').on("click", function () {
    $(".leftMenu").removeClass("menuOpen");
  });

});
