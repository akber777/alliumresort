$(document).ready(function () {
  if (document.querySelector(".header__imgBox video") !== null) {
    document.querySelector(".header__imgBox video").play();

    $(".playVideo").on("click", function () {
      document.querySelector(".header__imgBox video").play();

      $(this).parents(".header__textBox").hide();
    });
  }

  let play = true;

  document.querySelector("audio").play();


  $(".whatsap_div").on("click", function () {
    if (play == false) {
      document.querySelector("audio").play();

      $(".muteMusic").css({
        display: 'none',
      });

      $('.header__toolsBox--music > svg').css({
        display:'block'
      })

      play = true;
    } else {
      document.querySelector("audio").pause();

      $(".muteMusic").css({
        display: 'block',
      });

      $('.header__toolsBox--music > svg').css({
        display:'none'
      })

      play = false;
    }
  });

  $(".whatsap_div3").on("click", function () {
    if (play == false) {
      document.querySelector("audio").play();

      $(".muteMusic").css({
        display: 'none',
      });

      $('.header__toolsBox--music > svg').css({
        display:'block'
      })

      play = true;
    } else {
      document.querySelector("audio").pause();

      $(".muteMusic").css({
        display: 'block',
      });

      $('.header__toolsBox--music > svg').css({
        display:'none'
      })

      play = false;
    }
  });

  $(".showFooterPopup").on("click", function () {
    $(".footer__popup").show();
  });

  $(".closeFooterPopup").on("click", function () {
    $(".footer__popup").hide();
  });

  // $('.header__bookNowNewWrapper').fadeOut()

  // $('.bookNowBtn').click(function(){

  //   $('.header__bookNowNewWrapper').fadeToggle()

  // })
});
