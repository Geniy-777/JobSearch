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
