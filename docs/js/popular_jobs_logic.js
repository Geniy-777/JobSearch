$(document).ready(function () {

  $(".btn-view").on("click.view-all", function () {
    //- Получение статуса контента (развернуты или свернутый)
    let btnStatus = $(this).attr("id") === "hide" ? false : true;

    let parent_height;
    //- Вычисление высоты контента
    if (!window.matchMedia('(max-width: 1230px)').matches) {
      parent_height = parseInt($(".carts-job__container.additional").length) * 300;
    }
    else{
      parent_height = parseInt($(".carts-job__container.additional").length) * 860;
    }
    const current_parent_height = $(this).parent().height();

    //- Изменение высоты контента
    if (!btnStatus) {

      //- Для корректного отображения карточек
      $(".carts-job__container.additional").css("display", "flex");

      $(this).parent().css('height', current_parent_height + parent_height + "px");
      $(this).animate({
        "margin-top": parent_height + 50 + "px"
      }, 1000)

      //- TODO динамические ID
      //- Показ дополнительных карточек
      setTimeout(() => {
        $(".carts-job__container.additional#0").addClass("active");

        setTimeout(() => {
          $(".carts-job__container.additional#1").addClass("active");

          setTimeout(() => {
            $(".carts-job__container.additional#2").addClass("active");
          }, 250);
        }, 250);
      }, 250);

      //- Изменение названия кнопки и стрелки после развертывания контента
      setTimeout(() => {
        $(this).attr("id", "show");
        $(this).css("margin-top", "50px");
        $(this).text("Only popular");
      }, 1500);
    } else {

      setTimeout(() => {
        $(this).parent().css(`height`, `fit-content`);
        $(this).animate({
          "margin-top": -parent_height - 50 + "px"
        }, 1000)
      }, 350);
      //- TODO динамические ID
      //- Показ дополнительных карточек
      $(".carts-job__container.additional#2").removeClass("active");

      setTimeout(() => {
        $(".carts-job__container.additional#1").removeClass("active");

        setTimeout(() => {
          $(".carts-job__container.additional#0").removeClass("active");

          setTimeout(() => {

            //- Для корректного отображения карточек
            $(".carts-job__container.additional").css("display", "none");
          }, 750);
        }, 100);
      }, 100);


      //- Изменение названия кнопки и стрелки после свертывания контента
      setTimeout(() => {
        $(this).attr("id", "hide");
        $(this).css("margin-top", "70px");

        $(this).text("View all");
      }, 1500);
    }

  });

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwb3B1bGFyX2pvYnNfbG9naWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gICQoXCIuYnRuLXZpZXdcIikub24oXCJjbGljay52aWV3LWFsbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8tINCf0L7Qu9GD0YfQtdC90LjQtSDRgdGC0LDRgtGD0YHQsCDQutC+0L3RgtC10L3RgtCwICjRgNCw0LfQstC10YDQvdGD0YLRiyDQuNC70Lgg0YHQstC10YDQvdGD0YLRi9C5KVxuICAgIGxldCBidG5TdGF0dXMgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKSA9PT0gXCJoaWRlXCIgPyBmYWxzZSA6IHRydWU7XG5cbiAgICBsZXQgcGFyZW50X2hlaWdodDtcbiAgICAvLy0g0JLRi9GH0LjRgdC70LXQvdC40LUg0LLRi9GB0L7RgtGLINC60L7QvdGC0LXQvdGC0LBcbiAgICBpZiAoIXdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAxMjMwcHgpJykubWF0Y2hlcykge1xuICAgICAgcGFyZW50X2hlaWdodCA9IHBhcnNlSW50KCQoXCIuY2FydHMtam9iX19jb250YWluZXIuYWRkaXRpb25hbFwiKS5sZW5ndGgpICogMzAwO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgcGFyZW50X2hlaWdodCA9IHBhcnNlSW50KCQoXCIuY2FydHMtam9iX19jb250YWluZXIuYWRkaXRpb25hbFwiKS5sZW5ndGgpICogODYwO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50X3BhcmVudF9oZWlnaHQgPSAkKHRoaXMpLnBhcmVudCgpLmhlaWdodCgpO1xuXG4gICAgLy8tINCY0LfQvNC10L3QtdC90LjQtSDQstGL0YHQvtGC0Ysg0LrQvtC90YLQtdC90YLQsFxuICAgIGlmICghYnRuU3RhdHVzKSB7XG5cbiAgICAgIC8vLSDQlNC70Y8g0LrQvtGA0YDQtdC60YLQvdC+0LPQviDQvtGC0L7QsdGA0LDQttC10L3QuNGPINC60LDRgNGC0L7Rh9C10LpcbiAgICAgICQoXCIuY2FydHMtam9iX19jb250YWluZXIuYWRkaXRpb25hbFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiZmxleFwiKTtcblxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ2hlaWdodCcsIGN1cnJlbnRfcGFyZW50X2hlaWdodCArIHBhcmVudF9oZWlnaHQgKyBcInB4XCIpO1xuICAgICAgJCh0aGlzKS5hbmltYXRlKHtcbiAgICAgICAgXCJtYXJnaW4tdG9wXCI6IHBhcmVudF9oZWlnaHQgKyA1MCArIFwicHhcIlxuICAgICAgfSwgMTAwMClcblxuICAgICAgLy8tIFRPRE8g0LTQuNC90LDQvNC40YfQtdGB0LrQuNC1IElEXG4gICAgICAvLy0g0J/QvtC60LDQtyDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3Ri9GFINC60LDRgNGC0L7Rh9C10LpcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAkKFwiLmNhcnRzLWpvYl9fY29udGFpbmVyLmFkZGl0aW9uYWwjMFwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAkKFwiLmNhcnRzLWpvYl9fY29udGFpbmVyLmFkZGl0aW9uYWwjMVwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJChcIi5jYXJ0cy1qb2JfX2NvbnRhaW5lci5hZGRpdGlvbmFsIzJcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICAgIH0sIDI1MCk7XG5cbiAgICAgIC8vLSDQmNC30LzQtdC90LXQvdC40LUg0L3QsNC30LLQsNC90LjRjyDQutC90L7Qv9C60Lgg0Lgg0YHRgtGA0LXQu9C60Lgg0L/QvtGB0LvQtSDRgNCw0LfQstC10YDRgtGL0LLQsNC90LjRjyDQutC+0L3RgtC10L3RgtCwXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgJCh0aGlzKS5hdHRyKFwiaWRcIiwgXCJzaG93XCIpO1xuICAgICAgICAkKHRoaXMpLmNzcyhcIm1hcmdpbi10b3BcIiwgXCI1MHB4XCIpO1xuICAgICAgICAkKHRoaXMpLnRleHQoXCJPbmx5IHBvcHVsYXJcIik7XG4gICAgICB9LCAxNTAwKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoYGhlaWdodGAsIGBmaXQtY29udGVudGApO1xuICAgICAgICAkKHRoaXMpLmFuaW1hdGUoe1xuICAgICAgICAgIFwibWFyZ2luLXRvcFwiOiAtcGFyZW50X2hlaWdodCAtIDUwICsgXCJweFwiXG4gICAgICAgIH0sIDEwMDApXG4gICAgICB9LCAzNTApO1xuICAgICAgLy8tIFRPRE8g0LTQuNC90LDQvNC40YfQtdGB0LrQuNC1IElEXG4gICAgICAvLy0g0J/QvtC60LDQtyDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3Ri9GFINC60LDRgNGC0L7Rh9C10LpcbiAgICAgICQoXCIuY2FydHMtam9iX19jb250YWluZXIuYWRkaXRpb25hbCMyXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgJChcIi5jYXJ0cy1qb2JfX2NvbnRhaW5lci5hZGRpdGlvbmFsIzFcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgJChcIi5jYXJ0cy1qb2JfX2NvbnRhaW5lci5hZGRpdGlvbmFsIzBcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgLy8tINCU0LvRjyDQutC+0YDRgNC10LrRgtC90L7Qs9C+INC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0LrQsNGA0YLQvtGH0LXQulxuICAgICAgICAgICAgJChcIi5jYXJ0cy1qb2JfX2NvbnRhaW5lci5hZGRpdGlvbmFsXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICAgIH0sIDc1MCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9LCAxMDApO1xuXG5cbiAgICAgIC8vLSDQmNC30LzQtdC90LXQvdC40LUg0L3QsNC30LLQsNC90LjRjyDQutC90L7Qv9C60Lgg0Lgg0YHRgtGA0LXQu9C60Lgg0L/QvtGB0LvQtSDRgdCy0LXRgNGC0YvQstCw0L3QuNGPINC60L7QvdGC0LXQvdGC0LBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAkKHRoaXMpLmF0dHIoXCJpZFwiLCBcImhpZGVcIik7XG4gICAgICAgICQodGhpcykuY3NzKFwibWFyZ2luLXRvcFwiLCBcIjcwcHhcIik7XG5cbiAgICAgICAgJCh0aGlzKS50ZXh0KFwiVmlldyBhbGxcIik7XG4gICAgICB9LCAxNTAwKTtcbiAgICB9XG5cbiAgfSk7XG5cbn0pOyJdLCJmaWxlIjoicG9wdWxhcl9qb2JzX2xvZ2ljLmpzIn0=