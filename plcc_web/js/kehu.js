/**
 * 分组下拉菜单
 */
$(function(){
    $(".select").each(function(){
        var s=$(this);
        var z=parseInt(s.css("z-index"));
        var dt=$(this).children("dt");
        var dd=$(this).children("dd");
        var _show=function(){dd.slideDown(200);dt.addClass("cur");s.css("z-index",z+1);};   //展开效果
        var _hide=function(){dd.slideUp(200);dt.removeClass("cur");s.css("z-index",z);};    //关闭效果
        dt.click(function(){dd.is(":hidden")?_show():_hide();});
        dd.find("a").click(function(){dt.html($(this).html());_hide();});     //选择效果（如需要传值，可自定义参数，在此处返回对应的“value”值 ）
        $("body").click(function(i){ !$(i.target).parents(".select").first().is(s) ? _hide():"";});
    })
});



/*左侧弹出框*/
$(document).ready(function() {
    $("#jianspop").hide();
    $("#jians").click(function () {
        $("#jianspop").fadeToggle();
    });
    ;
    $("#close,#kssx").click(function () {
        $("#jianspop").hide();
    });

/*查看详细资料*/
    $("#rwpop").hide();
    $("#contenter-right-tb dd p a,#contenter-right-tb dt p a,#guani,#faqi").click(function () {
        $("#rwpop").fadeToggle();
    });


    <!--另存分组弹出框-->
    $("#cunwei").click(function () {
        $("#lcwfzpop").fadeToggle();
    });
    $("#lcw,#lcwfzpop ul li").click(function () {
        $("#lcwfzpop").hide();
    });




    /*客户消费分析*/
    $("#zheb,#zhec").hide();
    $("#kehu1").click(function () {
        $("#zhea").show();
        $("#zheb,#zhec").hide();
    });
    $("#kehu2").click(function () {
        $("#zheb").show();
        $("#zhea,#zhec").hide();
    });
    $("#kehu3").click(function () {
        $("#zhec").show();
        $("#zhea,#zheb").hide();
    });



    /* 标签切换*/
    $("#tongji").click(function(){
        $("#contenter-right-ta").slideDown("slow");
    });
    $("#xiangxi").click(function(){
        $("#contenter-right-ta").slideUp("slow");
        $("#contenter-right-tb").slideDown("slow");
    });


});



