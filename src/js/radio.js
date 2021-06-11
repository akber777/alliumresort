$(document).ready(function () {
  $(".offers__title label").click(function () {
    $(".offers__title label span").removeClass("active");
    $(this).find("span").addClass("active");
  });

  $(".footerRadio").click(function () {
    if ($(".footerRadio input").prop("checked") == false) {
      $(".footerRadio input").attr("checked", true);

      $(".footerRadio").addClass("checkedRadio");
    } else {
      $(".footerRadio input").attr("checked", false);
      $(".footerRadio").removeClass("checkedRadio");
    }
  });

  $(".footerRadioMob").click(function () {

    if ($(".footerRadioMob input").prop("checked") == false) {
      $(".footerRadioMob input").attr("checked", true);
      $('.footerRadioMob').addClass('checkedRadioMob')

    } else {
      $(".footerRadioMob input").attr("checked", false);
      $('.footerRadioMob').removeClass('checkedRadioMob')
    }
  });
});
