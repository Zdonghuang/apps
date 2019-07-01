/*左侧导航菜单*/
$(function (){
    $('.cu').mouseover(function () {
        // alert(1);
        $('.nav').delay().animate({
            left: "0px"
        }, 0);
        $('.nav').delay(0).fadeIn(0);
    });
    $('.nav').mouseleave(function () {
        // alert(1);
        $('.nav').delay().animate({
            left: "-100px"
        }, 500);
        $('.nav').delay(500).fadeOut(100);
    });

});

/*交通预测右侧板块*/
$(function (){
    $('.traffic_cf').click(function () {
        $('.traffic_right').delay().animate({
            right: "0"
        }, 0);
       /* $('.traffic_right').delay(0).fadeIn(0);*/
    });
    $('.traffic_right').mouseleave(function () {
        // alert(1);
        $('.traffic_right').delay().animate({
            right: "-35%"
        }, 300);
       /* $('.traffic_right').delay(1500).fadeOut(1100);*/
    });

});