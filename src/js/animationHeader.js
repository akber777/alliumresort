$(document).ready(function () {
  let x = 0;

  let y = 0;

  setInterval(() => {
    x = x + 0.01;
    y = y + 0.007;

    $(".inlineHeader___imageBox img").css({
      transform: `scale(${1 + x})`,
    });

    $(".welness__imgBox img").css({
      transform: `scale(${1 + y})`,
    });

    if (x > 0.3) {
      x = 0;
      y = 0;
    }
  }, 500);
});
