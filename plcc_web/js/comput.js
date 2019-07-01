$(document).ready(function(){
    /*导航切换*/
    $("#contenter-b").hide();
    $("#dom1").click(function(){
        $("#contenter-b").hide();
        $("#contenter-a").show();
    });
    $("#dom2").click(function(){
        $("#contenter-a").hide();
        $("#contenter-b").show();
    });


    /*业务人员详情显示信息*/
    $("#liuwen").hide();
    $("#chaz2,#fujin02").click(function(){
        $("#liuwen").show();
        $("#da-thumbs,#chaxun").hide();
    });
    $("#liuwen_fanhui").click(function(){
        $("#da-thumbs").show();
        $("#liuwen").hide();
    });

    $("#chaxun").hide();
    $("#chaz,#chaz1,#fujin01").click(function(){
        $("#chaxun").show();
        $("#da-thumbs,#liuwen").hide();
    });
    $("#fanhui").click(function(){
        $("#da-thumbs").show();
        $("#chaxun").hide();
    });



/*附近的业务人员*/
    $("#computerMove").hide();
    $("#chakan,#wangfujin,#wangfujin4").click(function(){
        $("#computerMove").show();
    });
    $("#yingc").click(function(){
        $("#computerMove").hide();
    });

    $("#changan,#changan1").click(function(){
        $("#computerMove_b").show();
    });
    $("#yingc").click(function(){
        $("#computerMove_b").hide();
    });



//业务人员定位

    var $div = $("div#computerMove");
    /* 绑定鼠标左键按住事件 */
    $div.bind("mousedown",function(event){
        /* 获取需要拖动节点的坐标 */
        var offset_x = $(this)[0].offsetLeft;//x坐标
        var offset_y = $(this)[0].offsetTop;//y坐标
        /* 获取当前鼠标的坐标 */
        var mouse_x = event.pageX;
        var mouse_y = event.pageY;
        /* 绑定拖动事件 */
        /* 由于拖动时，可能鼠标会移出元素，所以应该使用全局（document）元素 */
        $("#main").bind("mousemove",function(ev){
            /* 计算鼠标移动了的位置 */
            var _x = ev.pageX - mouse_x;
            var _y = ev.pageY - mouse_y;
            /* 设置移动后的元素坐标 */
            var now_x = (offset_x + _x ) + "px";
            var now_y = (offset_y + _y ) + "px";
            /* 改变目标元素的位置 */
            $div.css({
                top:now_y,
                left:now_x
            });
        });
    });
    /* 当鼠标左键松开，接触事件绑定 */
    $("#main").bind("mouseup",function(){
        $(this).unbind("mousemove");
    });



})



