$(document).ready(function () {
  $(".open").on("click", function () {
    $(".leftMenu").addClass("menuOpen");
  });

  $(".closeMenuLeftMenu").on("click", function () {
    $(".leftMenu").removeClass("menuOpen");
  });

  $(".header__cookieBox button").on("click", function () {
    $(".header__cookieBox").css({
      transform: "translateY(-150%)",
    });

    localStorage.setItem('cookie',false)

    setTimeout(() => {
      $(".header__cookieBox").css({
        display: "none",
      });
    }, 200);
  });

  $(".header__mobNavBoxItems > span").on("click", function () {
    $(this).next(".header__mobNavSubItem").show();
  });

  $(".header__mobNavSubItem span").on("click", function () {
    $(this).parents(".header__mobNavSubItem").hide();
  });

  $(".header__mobBtnBox").on("click", function () {
    $(".header__mobMenuBox").toggleClass("noTransform");
    $(".header__bookNowNew").fadeToggle()

    if (window.location.pathname.split("/").length === 2) {
      $("header").toggleClass("inlineHeader");
    }

    $(".header__wrapper").toggleClass("backColorF");

    $("body").toggleClass("overflowHidden");
  });

  $("header").hover(
    function () {
      $(this).addClass("inlineHeaderHome");
    },
    function () {
      $(this).removeClass("inlineHeaderHome");
    }
  );

  $(".signIn").click(function () {
    $("header").toggleClass("inlineHeaderHomeSign");

    if (
      $(".header__signIn").hasClass("activeSign") == false &&
      $(".header__registration").hasClass("activeSign") == false
    ) {
      $(".header__signIn").addClass("activeSign");
      // $(".header__registration").addClass("activeSign");
    } else {
      $(".header__signIn").removeClass("activeSign");
      $(".header__registration").removeClass("activeSign");
    }
  });

  $(".registerTab").click(function () {
    $(".header__signIn").removeClass("activeSign");
    $(".header__registration").addClass("activeSign");
  });

  $(".signInTab").click(function () {
    $(".header__signIn").addClass("activeSign");
    $(".header__registration").removeClass("activeSign");
  });

  $(".register").click(function () {
    $(".subMenuProfile").toggleClass("activeSign");
  });

  $(".signInMob").click(function () {
    $("header").toggleClass("inlineHeaderHomeSign");

    if (
      $(".header__signIn").hasClass("activeSign") == false &&
      $(".header__registration").hasClass("activeSign") == false
    ) {
      $(".header__signIn").addClass("activeSign");
      $(".sigMOb").fadeIn();
      // $(".header__registration").addClass("activeSign");
    }
  });

  $(".signInCloseMobil").click(function () {
    $(".signMob").fadeOut();

    $(".header__registration").removeClass("activeSign");

    $(".header__registration").fadeOut();

    $(".registerMob").fadeOut();

    if (
      $(".header__signIn").hasClass("activeSign") == false &&
      $(".header__registration").hasClass("activeSign") == false
    ) {
      $(".header__signIn").addClass("activeSign");
      // $(".header__registration").addClass("activeSign");
    } else {
      $(".header__signIn").removeClass("activeSign");
      $(".header__registration").removeClass("activeSign");
    }
  });

  $(".registerTabMOb").click(function () {
    $(".sigMOb").fadeOut();

    $(".header__registration").addClass("activeSign");

    $(".header__registration").fadeIn();

    $(".registerMob").fadeIn();
  });

  $(".searchMobButton").click(function () {
    $(".searchMob").fadeIn();
  });

  $(".profileMobOpenMenu").click(function () {
    $(".sigMOb").fadeOut();

    $(".subMenuProfile").addClass("activeSign");

    $(".subMenuProfile").fadeIn();

    $(".profileMob").fadeIn();
  });


  if(localStorage.getItem('cookie')!==null&& localStorage.getItem('cookie')=='false'){
    $('.header__cookieBox').remove()
  }


});
