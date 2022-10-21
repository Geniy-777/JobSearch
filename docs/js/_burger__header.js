$(document).ready(function() {
  $(".burger-menu").on("click", function () {

    $(this).attr("id") === "hide" ? $(this).attr("id","show") : $(this).attr("id","hide");
    
    let status = $(this).attr("id") === "hide" ? 0 : 1;

    if(status){
      $(".header__content").css({"position":"fixed", "top":"0"});
      $("main").css("margin-top","310px");

      $(this).parent().css("margin-bottom","200px");
      $(this).next().addClass("active");
      setTimeout(() => {
        outOfRange();
      }, 100); 
    }

    else{
      $(".header__content").css({"position":"relative", "top":"0"});
      $("main").css("margin-top","0");

      $(this).next().removeClass("active");
      $(this).parent().css("margin-bottom","0");
    }
  });
});

function outOfRange(){
  $(document).off();
  $(document).on("click", function (e) {

    // Если кликнуть за пределами хедера он свернется
    if (!$(".burger-menu").is(e.target)) {

      $(".header__content").css({"position":"relative", "top":"0"});
      $("main").css("margin-top","0");

      $(".burger-menu").attr("id","hide");
      $(".burger-menu").next().removeClass("active");
      $(".burger-menu").parent().css("margin-bottom","0");
    }
  }); 
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJfYnVyZ2VyX19oZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICQoXCIuYnVyZ2VyLW1lbnVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAkKHRoaXMpLmF0dHIoXCJpZFwiKSA9PT0gXCJoaWRlXCIgPyAkKHRoaXMpLmF0dHIoXCJpZFwiLFwic2hvd1wiKSA6ICQodGhpcykuYXR0cihcImlkXCIsXCJoaWRlXCIpO1xuICAgIFxuICAgIGxldCBzdGF0dXMgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKSA9PT0gXCJoaWRlXCIgPyAwIDogMTtcblxuICAgIGlmKHN0YXR1cyl7XG4gICAgICAkKFwiLmhlYWRlcl9fY29udGVudFwiKS5jc3Moe1wicG9zaXRpb25cIjpcImZpeGVkXCIsIFwidG9wXCI6XCIwXCJ9KTtcbiAgICAgICQoXCJtYWluXCIpLmNzcyhcIm1hcmdpbi10b3BcIixcIjMxMHB4XCIpO1xuXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcyhcIm1hcmdpbi1ib3R0b21cIixcIjIwMHB4XCIpO1xuICAgICAgJCh0aGlzKS5uZXh0KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb3V0T2ZSYW5nZSgpO1xuICAgICAgfSwgMTAwKTsgXG4gICAgfVxuXG4gICAgZWxzZXtcbiAgICAgICQoXCIuaGVhZGVyX19jb250ZW50XCIpLmNzcyh7XCJwb3NpdGlvblwiOlwicmVsYXRpdmVcIiwgXCJ0b3BcIjpcIjBcIn0pO1xuICAgICAgJChcIm1haW5cIikuY3NzKFwibWFyZ2luLXRvcFwiLFwiMFwiKTtcblxuICAgICAgJCh0aGlzKS5uZXh0KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcyhcIm1hcmdpbi1ib3R0b21cIixcIjBcIik7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBvdXRPZlJhbmdlKCl7XG4gICQoZG9jdW1lbnQpLm9mZigpO1xuICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG5cbiAgICAvLyDQldGB0LvQuCDQutC70LjQutC90YPRgtGMINC30LAg0L/RgNC10LTQtdC70LDQvNC4INGF0LXQtNC10YDQsCDQvtC9INGB0LLQtdGA0L3QtdGC0YHRj1xuICAgIGlmICghJChcIi5idXJnZXItbWVudVwiKS5pcyhlLnRhcmdldCkpIHtcblxuICAgICAgJChcIi5oZWFkZXJfX2NvbnRlbnRcIikuY3NzKHtcInBvc2l0aW9uXCI6XCJyZWxhdGl2ZVwiLCBcInRvcFwiOlwiMFwifSk7XG4gICAgICAkKFwibWFpblwiKS5jc3MoXCJtYXJnaW4tdG9wXCIsXCIwXCIpO1xuXG4gICAgICAkKFwiLmJ1cmdlci1tZW51XCIpLmF0dHIoXCJpZFwiLFwiaGlkZVwiKTtcbiAgICAgICQoXCIuYnVyZ2VyLW1lbnVcIikubmV4dCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgJChcIi5idXJnZXItbWVudVwiKS5wYXJlbnQoKS5jc3MoXCJtYXJnaW4tYm90dG9tXCIsXCIwXCIpO1xuICAgIH1cbiAgfSk7IFxufVxuIl0sImZpbGUiOiJfYnVyZ2VyX19oZWFkZXIuanMifQ==
