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