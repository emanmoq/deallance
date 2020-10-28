jQuery(function ($) {
  $(".loginclick").click(function(){
    $(".loginBox").css("display","block");
  })
  $(".loginBox .close").click(function(){
    $(".loginBox").css("display","none");
  })
  $(window).scroll(function () {  
    scrollTop = $(window).scrollTop();

    if (scrollTop >($('.headerImg').height()+ 200)) {
        $('header').addClass('scrollNav');
    }

    else {
        $('header').removeClass('scrollNav');
    }

});
});



