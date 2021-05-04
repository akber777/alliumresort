$(document).ready(function () {
  $(".offers__title label").click(function () {
    $(".offers__title label span").removeClass("active");
    $(this).find("span").addClass("active");
  });
});
