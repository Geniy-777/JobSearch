window.onload = () => {
  if (!window.matchMedia('(max-width: 800px)').matches) {

    $(".job-categories-carts__item.Design").addClass("active");

    setTimeout(() => {
      $(".main-pic").css({
        "transform": "scale(1)"
      });
      setTimeout(() => {
        $(".cart-pic.adam").css({
          "transform": "scale(1)"
        });

        $(".main-pic").css({
          "z-index": "-1"
        });
        $(".cart-pic.maliha").css({
          "transform": "scale(1)"
        });


        setTimeout(() => {
          $(".icon-pic.google").css({
            "transform": "scale(1) rotate(-34.19deg)",
            "opacity": "1"
          });
          setTimeout(() => {
            $(".icon-pic.microphone").css({
              "transform": "scale(1)rotate(18.74deg)",
              "opacity": "1"
            });
            setTimeout(() => {
              $(".icon-pic.smthng").css({
                "transform": "scale(1) rotate(15deg)",
                "opacity": "1",
              });
              setTimeout(() => {
                $(".icon-pic.paypal").css({
                  "transform": "scale(1) rotate(18deg)",
                  "opacity": "1"
                });
              }, 250);
            }, 250);
          }, 250);
        }, 500);
      }, 800);
    }, 500);
  }

}


$(document).ready(() => {
  $(".job-categories-carts__item").on("click", function () {
    $(this).toggleClass("active");
    $(".job-categories-carts__item").not($(this)).removeClass("active");
  });
});