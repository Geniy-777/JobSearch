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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgaWYgKCF3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogODAwcHgpJykubWF0Y2hlcykge1xyXG5cclxuICAgICQoXCIuam9iLWNhdGVnb3JpZXMtY2FydHNfX2l0ZW0uRGVzaWduXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLm1haW4tcGljXCIpLmNzcyh7XHJcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIjogXCJzY2FsZSgxKVwiXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAkKFwiLmNhcnQtcGljLmFkYW1cIikuY3NzKHtcclxuICAgICAgICAgIFwidHJhbnNmb3JtXCI6IFwic2NhbGUoMSlcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKFwiLm1haW4tcGljXCIpLmNzcyh7XHJcbiAgICAgICAgICBcInotaW5kZXhcIjogXCItMVwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIi5jYXJ0LXBpYy5tYWxpaGFcIikuY3NzKHtcclxuICAgICAgICAgIFwidHJhbnNmb3JtXCI6IFwic2NhbGUoMSlcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAkKFwiLmljb24tcGljLmdvb2dsZVwiKS5jc3Moe1xyXG4gICAgICAgICAgICBcInRyYW5zZm9ybVwiOiBcInNjYWxlKDEpIHJvdGF0ZSgtMzQuMTlkZWcpXCIsXHJcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiBcIjFcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgJChcIi5pY29uLXBpYy5taWNyb3Bob25lXCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgXCJ0cmFuc2Zvcm1cIjogXCJzY2FsZSgxKXJvdGF0ZSgxOC43NGRlZylcIixcclxuICAgICAgICAgICAgICBcIm9wYWNpdHlcIjogXCIxXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICQoXCIuaWNvbi1waWMuc210aG5nXCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBcInRyYW5zZm9ybVwiOiBcInNjYWxlKDEpIHJvdGF0ZSgxNWRlZylcIixcclxuICAgICAgICAgICAgICAgIFwib3BhY2l0eVwiOiBcIjFcIixcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoXCIuaWNvbi1waWMucGF5cGFsXCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgIFwidHJhbnNmb3JtXCI6IFwic2NhbGUoMSkgcm90YXRlKDE4ZGVnKVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIm9wYWNpdHlcIjogXCIxXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0sIDI1MCk7XHJcbiAgICAgICAgICAgIH0sIDI1MCk7XHJcbiAgICAgICAgICB9LCAyNTApO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICAgIH0sIDgwMCk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcbiAgJChcIi5qb2ItY2F0ZWdvcmllcy1jYXJ0c19faXRlbVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAkKFwiLmpvYi1jYXRlZ29yaWVzLWNhcnRzX19pdGVtXCIpLm5vdCgkKHRoaXMpKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9KTtcclxufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=