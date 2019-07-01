//获取风机编号
var search=window.location.search;
$('.heal_u a').eq(0).attr('href','health.html'+search);
$('.heal_u a').eq(1).attr('href','effect.html'+search);
var num=search.substring(search.indexOf('=')+1);

var run = document.getElementById("fun");
var radar = document.getElementById('radar');
var single = document.getElementById("single");
var timer=null;
/*设置默认的loading*/
var setLoading={
    text: '数据加载中',
    color: '#fff',
    textColor: '#fff',
    maskColor: 'rgba(255, 255, 255, 0)',
    zlevel: 0
};
/*单个部件的健康状态历史信息*/
var singleOption = {
        title: {
            text: '发电机的健康状态',
            textStyle: {
                color: '#fff',
                fontSize: 12
            }
        },
        legend: {
            itemWidth: 10,
            itemHeight: 10,
            orient: 'horizontal',
            right: 40
        },
        toolbox: {
            show: true,
            left:'45%',
            top:'0%',
            itemGap:15,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {}
            }
        },
        data: [{
            name: '期望值',
            icon: 'rect',
            textStyle: {
                color: '#ccc'
            }
        }, {
            name: '实际值',
            icon: 'rect',
            textStyle: {
                color: '#ccc'
            }
        },{
            name: '上限值',
            icon: 'rect',
            textStyle: {
                color: '#ccc'
            }
        }],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    color: '#2f2f30',
                    width: 1,
                    type: 'solid'
                }
            }
        },
        grid: {
            left: '0%',
            right: '5%',
            bottom: '0',
            top: '20%',
            y: '10%',
            y2: '20%',
            containLabel: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#2d2d2d',
                width: 1,
                type: 'solid'
            }
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: '#fff'
            }
        },
        xAxis: {
            name: '时间',
            nameTextStyle: {
                color: '#fff'
            },
            type: 'category',
            boundaryGap: false,
            data: ['3/15', '3/16', '3/17', '3/18', '3/19', '3/20', '3/21'],
            //
            axisLine: {
                lineStyle: {
                    color: '#2d2d2d'
                }
            },
            "axisTick": {
                "show":true,
                //"interval":5000,
                "length":3,
                alignWithLabel:true

            },
            "axisLabel": {
                //"interval": 5000,
                textStyle: {
                    color: '#e6e6e6',
                }
            }
        },
        yAxis: [{
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#fff'],
                    type: 'solid',
                    width: 2,
                    opacity: 0.1
                }
            },
            name: '',
            color: '#fff',
            //min: 0,
            axisLine: {
                lineStyle: {
                    color: '#2e2d2e'
                }
            },
            nameTextStyle: {
                color: '#fff'
            }
        }, {
            position: 'right',
            offset: 0,
            axisLine: {
                lineStyle: {
                    color: '#2e2d2e'
                }
            }
        }],
        series: [{
            name: '期望值',
            type: 'line',
            data:[0.2, 0.3, 0.32, 0.33, 0.35, 0.5, 0.6],
            //
            itemStyle: {
                normal: {
                    color: '#c34448'
                }
            },
            smooth: true
        }, {
            name: '实际值',
            type: 'line',

            data:[0.25, 0.2, 0.38, 0.33, 0.4, 0.5, 0.7],
            //
            itemStyle: {
                normal: {
                    color: '#d0c75d'
                }
            },
            smooth: true
        } ,{
            name: '上限值',
            type: 'line',
            data:[0.5, 0.53, 0.32, 0.42, 0.55, 0.5, 0.52],

            itemStyle: {
                normal: {
                    color: '#f00'
                }
            },
            smooth: true
        }]
    };
var singleLine=echarts.init(single);
singleLine.hideLoading(setLoading);
singleLine.setOption(singleOption);
$.ajax({
    url:URL+'?code=6&serial_num='+num+'&code2=3&name=T_GW_U1',
    success:singleSuccess
})
$('#sel_3').on('change',function(){
    singleLine.hideLoading(setLoading);
    $.ajax({
        url:URL+'?code=6&serial_num='+num+'&code2=3&name='+$(this).val(),
        success:singleSuccess
    })
});
function singleSuccess(data){
    singleLine.hideLoading();
    var data=eval('('+data+')');
    //var data=data;
     singleLine.setOption({
        title:{
            text:data.name+'的健康状态'
        },
        xAxis:{
            data:data.T_Time
        },
        series:[
        {name:'期望值',data:data.hope},
        {name:'实际值',data:data.real},
        {name:'上限值',data:data.limit}]
     });
}


//健康相关信息
$.ajax({
    url:URL+'?code=6&serial_num='+num+'&code2=1',
    success:function(data){
        var data=eval('('+data+')');
        $('p.CV').html(parseInt(Number(data.CV).toFixed(2)*100)+'%');
        $('p.generate_loss').html(parseInt(data.generate_loss)+'kwh');
        $('p.Visu_Rot_Spd').html(parseFloat(data.Visu_Rot_Spd).toFixed(1)+'RPM');
        $('p.WindSpeed').html(parseFloat(data.WindSpeed).toFixed(2)+'m/s');
    }

});

//风机图
$.ajax({
    url:URL+'?code=6&serial_num='+num+'&code2=5',
    success:function(data){
        var data=eval('('+data+')');
        //console.log(data);
        //风轮
        if(data.Rotor.T_Rotor_CV >= 0.8){
            $('.rotor').css('background','url(../img/fan/normal3.png) no-repeat');
        }else if(data.Rotor.T_Rotor_CV < 0.8 &&data.Rotor.T_Rotor_CV <= 0.5 ){
            $('.rotor').css('background','url(../img/fan/feature3.png) no-repeat');
        }else{
            $('.rotor').css('background','url(../img/fan/warn3.png) no-repeat')
        }
        $('.rotor dd').eq(0).html('平均桨距角：'+data.Rotor.Pit_Pos_123+'度');
        $('.rotor dd').eq(1).html('叶片振动值：'+data.Rotor.Vib_Effec_Val+'g');
        $('.rotor dd').eq(2).html('风轮转速：'+data.Rotor.Visu_Rot_Spd+'RPM');
        $('.rotor dd').eq(3).html('风速：'+data.Rotor.WindSpeed+'m/s');

        //齿轮箱
        if(data.GBS.T_GBS_CV >= 0.8){
            $('.GBS').css('background','url(../img/fan/normal1.png) no-repeat');
        }else if(data.GBS.T_GBS_CV < 0.8 &&data.GBS.T_GBS_CV <= 0.5 ){
            $('.GBS').css('background','url(../img/fan/feature1.png) no-repeat');
        }else{
            $('.GBS').css('background','url(../img/fan/warn1.png) no-repeat')
        }
        $('.GBS dd').eq(0).html('输入轴温度 :'+parseInt(data.GBS.T_GBS_In_Visu)+'℃');
        $('.GBS dd').eq(1).html('滑油温度：'+parseInt(data.GBS.T_GBO_Visu)+'℃');
        $('.GBS dd').eq(2).html('冷却水温度：'+parseInt(data.GBS.T_GBW_Visu)+'℃');
        $('.GBS dd').eq(3).html('输出轴温度：'+parseInt(data.GBS.T_GBS_Out_Visu)+'℃');

        //发电机
        if(data.GW.T_GW_CV >= 0.8){
            $('.GW').css('background','url(../img/fan/normal2.png) no-repeat');
        }else if(data.GBS.T_GBS_CV < 0.8 &&data.GBS.T_GBS_CV <= 0.5 ){
            $('.GW').css('background','url(../img/fan/feature2.png) no-repeat');
        }else{
            $('.GW').css('background','url(../img/fan/warn2.png) no-repeat')
        }
        $('.GW dd').eq(0).html('输入轴转速 :'+data.GW.Gen_Spd+'RPM');
        $('.GW dd').eq(1).html('输入轴承温度：'+parseInt(data.GW.T_GB_A_Visu)+'℃');
        $('.GW dd').eq(2).html('输出轴承温度：'+parseInt(data.GW.T_GB_B_Visu)+'℃');
        $('.GW dd').eq(3).html('变流器冷却水温度 ：'+parseInt(data.GW.ConverCoolWaterTemp)+'℃');
        $('.GW2 dd').eq(0).html('U相绕阻温度:'+parseInt(data.GW.T_GW_U1_Visu)+'℃');
        $('.GW2 dd').eq(1).html('V相绕阻温度:'+parseInt(data.GW.T_GW_V1_Visu)+'℃');
        $('.GW2 dd').eq(2).html('W相绕阻温度:'+parseInt(data.GW.T_GW_W1_Visu)+'℃');
    }
});
$('.heal-name').find('a').not('.T_Rotor').on('click',function(){
    var name=$(this).attr('data-name');
    var name1=$(this).attr('data-name1');
    singleLine.hideLoading(setLoading);
    $.ajax({
        url:URL+'?code=6&serial_num='+num+'&code2=3&name='+name,
        success:singleSuccess
    })
  switch(name1){
        case '发电机':
            str='<option value="T_GW_U1">发电机U相绕组温度</option>\
                <option value="T_GW_V1">发电机V相绕组温度</option>\
                <option value="T_GW_W1">发电机W相绕组温度</option>';
            break;
        case '齿轮箱':
            str='<option value="T_GBO">齿轮箱滑油温度</option>\
                <option value="T_GBW">齿轮箱冷却水温度</option>';
            break;
    }
    $('#sel_3').html(str);
});

/*radar雷达图*/
var radarOption = {
        tooltip: {
            show:false
        },
        radar: {
            z: 2,
            startAngle: 120,
            indicator: [{
                name: '发电机',
                max: 1
            }, {
                name: '发电机轴承',
                max: 1
            }, {
                name: '齿轮箱轴承',
                max: 1
            }, {
                name: '齿轮箱',
                max: 1
            }, {
                name: '风轮',
                max: 1
            }, {
                name: '偏航系统',
                max: 1
            }],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#a0a0a0',
                    width: 1,
                    type: 'solid'
                }
            },
            splitArea: {
                areaStyle: {
                    color: ['#29272d', 'rgba(255,255,255,0.05)']
                }
            },
            triggerEvent: true
        },
        series: [{
            name: '',
            type: 'radar',
            symbol: 'rect',
            symbolSize: [8, 8],
            itemStyle: {
                normal: {
                    color: '#ffffff'
                }
            },
            data: [{
                value: [0.1,0.2,0.3,0.4,0.5,0.6]
               // [0,0,0,0,0,0]
            }],
            lineStyle: {
                normal: {
                    color: '#70acd5',
                    width: 2
                }
            }
        }]
    };
var radarLine=echarts.init(radar);
radarLine.hideLoading(setLoading);
radarLine.setOption(radarOption);
$.ajax({
    url:URL+'?code=6&serial_num='+num+'&code2=2',
    success:function(data){
        radarLine.hideLoading();
        var data=eval('('+data+')');
        radarLine.setOption({
            series:[
                {data:[{
                value: [data.T_GW_CV,data.T_GB_A_CV,data.T_GB_B_CV, data.T_GBS_CV, data.T_Rotor_CV, data.T_Yaw_CV]
                }]}
            ]
        })
    }
});
radarLine.on('click',function(params) {
        singleLine.hideLoading(setLoading);
        var str='';
        if (params.componentType == 'radar') {
            if(params.name=='风轮'|| params.name=='偏航系统'){
                return false;
            }else{
                switch(params.name){
                    case '发电机':
                        $.ajax({
                            url:URL+'?code=6&serial_num='+num+'&code2=3&name=T_GW_U1',
                            success:singleSuccess
                        });
                        str='<option value="T_GW_U1">发电机U相绕组温度</option>\
                            <option value="T_GW_V1">发电机V相绕组温度</option>\
                            <option value="T_GW_W1">发电机W相绕组温度</option>';
                        break;
                    case '发电机轴承':
                        $.ajax({
                                url:URL+'?code=6&serial_num='+num+'&code2=3&name=T_GB_A',
                                success:singleSuccess
                        });
                        str='<option value="T_GB_A">发电机前轴承温度</option>\
                            <option value="T_GB_B">发电机后轴承温度</option>';
                        break;
                    case '齿轮箱轴承':
                        $.ajax({
                                url:URL+'?code=6&serial_num='+num+'&code2=3&name=T_GBS_Out',
                                success:singleSuccess
                        });
                        str='<option value="T_GBS_Out">齿轮箱输出轴温度</option>\
                            <option value="T_GBS_In">齿轮箱输入轴温度</option>';
                        break;
                    case '齿轮箱':
                        $.ajax({
                                url:URL+'?code=6&serial_num='+num+'&code2=3&name=T_GBO',
                                success:singleSuccess
                        });
                        str='<option value="T_GBO">齿轮箱滑油温度</option>\
                            <option value="T_GBW">齿轮箱冷却水温度</option>';
                        break;
                }
                $('#sel_3').html(str);
            }
        }
});



/*运行风险状态*/
var runOption = {
        title: {
            text: '运行风险状态',
            textStyle: {
                fontSize: 12,
                color: '#fff'
            },
            top:0
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    color: '#000',
                    width: 1,
                    type: 'solid'
                }
            }
        },
        grid: {
            left: '0%',
            right: '0',
            bottom: '20%',
            top: '100',
            containLabel: true
        },
        toolbox: {
            show: true,
            right:'20',
            top:'0%',
            itemGap:15,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {}
            }
        },
        data: [{
            name: ' ',
            icon: 'rect',
            textStyle: {
                color: '#fff'
            }
        }],
        grid: {
            left: '8%',
            right: '8%',
            bottom: '0',

            y: '10%',
            y2: '80',
            x2: '30%',
            containLabel: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#000',
                width: 1,
                type: 'solid'
            }
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: '#fff'
            }
        },
        xAxis: {
            name: '时间',
            nameTextStyle: {
                color: '#fff'
            },
            boundaryGap: false,
            data: ['3/15', '3/16', '3/17', '3/18', '3/19', '3/20', '3/21'],
            //
            axisLine: {
                lineStyle: {
                    color: '54abe8'
                }
            }
        },
        yAxis: [{
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#fff'],
                    type: 'solid',
                    width: 1,
                    opacity: 0.2
                }
            },
            name: '',
            color: '#fff',
            min: 0.1,
            max: 1,
            axisLine: {
                lineStyle: {
                    color: '#2e2d2e'
                }
            },
            nameTextStyle: {
                color: '#fff'
            }
        }, {
            position: 'right',
            offset: 0,
            axisLine: {
                lineStyle: {
                    color: '#2e2d2e'
                }
            }
        }],
        series: [{
                name: ' ',
                type: 'line',
                data:[0.4, 0.2, 0.3, 0.4, 0.5,0.2,0.3],
                //
                //[],
                itemStyle: {
                    normal: {
                        color: '#5a50ce'
                    }
                },
                smooth: true
            }

        ]
    };
var runLine=echarts.init(run);
runLine.hideLoading(setLoading);
runLine.setOption(runOption);
$.ajax({
    url:URL+'?code=6&serial_num='+num+'&code2=4',
    success:function(data){
        runLine.hideLoading();
        var data=eval('('+data+')');
        runLine.setOption({
            xAxis:{
                data: data.T_Time
            },
            series:[{
                data:data.CV
            }]
        });
    }
})








