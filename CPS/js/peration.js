var windArr=[
    {wind_id:13,task_id:'task0001',keep_Time:200,worker:5, description:'更换齿轮箱滤芯'},
    {wind_id:15,task_id:'task0002',keep_Time:30,worker:1, description:'滑环室巡检'},
    {wind_id:17,task_id:'task0003',keep_Time:45,worker:2, description:'齿轮箱换油'},
    {wind_id:14,task_id:'task0004',keep_Time:100,worker:2, description:'清理叶片'},
    {wind_id:18,task_id:'task0005',keep_Time:250,worker:6, description:'齿轮箱改造'},
    {wind_id:19,task_id:'task0006',keep_Time:60,worker:1, description:'风轮锁定销失效'},
    {wind_id:20,task_id:'task0007',keep_Time:70,worker:4, description:'更换断路旋钮,轮毂油管脱落'},
    {wind_id:21,task_id:'task0009',keep_Time:60,worker:3, description:'滑环室巡检'},
    {wind_id:23,task_id:'task0010',keep_Time:30,worker:1, description:'风速仪故障'},
    {wind_id:20,task_id:'task0008',keep_Time:30,worker:2, description:'轮毂油管脱落'}
];
for(var i=0;i<$('.wind-id').length;i++){
    $('.wind-id').eq(i).find('span').eq(0).css({'background':'url(../img/warn2.png)'});
    $('.wind-id').eq(i).find('span').eq(1).css({'background':'url(../img/warn1.png)'});
};

var str='';
var aWind=document.querySelectorAll('.wind-id');
for(var i=0;i<aWind.length;i++){
    aWind[i].index=i;
    aWind[i].onmouseover=function(){
        str='<div class="clearfix"><p class="fl">'+windArr[this.index].wind_id+'号</p><i class="fr ship_r"></i></div>\
        <div class="clearfix"><p class="fl">维修任务: </p><i class="fl">&nbsp; '+windArr[this.index].description+'</i></div>\
        <div class="clearfix"><p class="fl">维护时间 : </p><i class="fl">&nbsp; '+windArr[this.index].keep_Time+'分钟</i></div>\
        <div class="clearfix"><p class="fl">维护人数 : </p><i class="fl">&nbsp; '+windArr[this.index].worker+' 人</i></div>'
        $('.ship_u li').html(str);
    };

}