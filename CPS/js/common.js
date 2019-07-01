Vue.component('common-meter',{
    template:'<div class="meter_t">\
                <h5>绩效仪表盘</h5>\
                <select name="" id="sel_1" >\
                    <option value="day">24小时</option>\
                    <option value="week">最近7天</option>\
                    <option value="month">最近30天</option>\
                </select>\
                <ul class="meter_pie clearfix">\
                    <li class="fl">\
                        <div id="factor"></div>\
                        <p>功率因数</p>\
                    </li>\
                    <li class="fl">\
                        <div id="factor_fir"></div>\
                        <p>发电损失率</p>\
                    </li>\
                    <li class="fl">\
                        <div id="factor_sec"></div>\
                        <p>电网调度<br/>匹配率</p>\
                    </li>\
                    <li class="fl">\
                        <div id="factor_thi"></div>\
                        <p>风机使用率</p>\
                    </li>\
                    <li class="fl">\
                        <p class="p1 kw"><em>kw</em></p>\
                        <p>累计发电量</p>\
                    </li>\
                    <li class="fl">\
                        <p class="p1 rmb"><em>RMB/kwh</em></p>\
                        <p>发电成本</p>\
                    </li>\
                </ul>\
            </div>'
});
Vue.component('common-history',{
    template:'<div class="meter_b clearfix">\
                <h5 class="">历史信息</h5>\
                <select name="" id="sel_2" class="">\
                    <option value="power_fac">功率因数</option>\
                    <option value="loss">发电损失率(%)</option>\
                    <option value="cost">发电成本</option>\
                    <option value="math_rate">电网调度匹配率</option>\
                    <option value="avail">风机使用率</option>\
                    <option value="prod_all">累计发电量(kW)</option>\
                </select>\
                <div id="meter_el" class="fl"></div>\
            </div>'

});
var meterVM=new Vue({
    el:'.meter'
});
//var URL='http://192.168.199.20:8080/WindFieldCPS/StartServlet';
var URL='http://cqwind.chinacloudapp.cn/WindFieldCPS/StartServlet';
var fac = document.getElementById('factor');
var fac_first = document.getElementById('factor_fir');
var fac_second = document.getElementById('factor_sec');
var fac_third = document.getElementById('factor_thi');
var dom1 = document.getElementById("meter_el");
var setLoading={
    text: '',
    color: '#fff',
    textColor: '#f00',
    maskColor: 'rgba(255, 255, 255, 0)',
    zlevel: 0
};

/*仪表盘信息存储*/
    $.ajax({
        url:URL+'?code=1&name='+$('#sel_1').val(),
        success: function(data){
            localStorage.setItem('meter',data);
        }
    });

/*历史信息存储*/

    $.ajax({
        url: URL+'?code=2&name='+$('#sel_2').val(),
        success:function(data){
            localStorage.setItem('history',data);
        }
    });

    

/*仪表盘交互*/
var facOption = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [
        {
            name: '',
            type: 'gauge',
            center: ['50%', '50%'], // 默认全局居中
            radius: '80%',
            axisLine: {
                show: false,
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [0/100,'rgba(255, 255, 255, 0.2)'],
                        [1,'rgba(255, 255, 255, 0.2)']
                        //[data/100, color1],
                        //[1, color2]
                    ],
                    width: 16
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: true,
                length: 0,
                width: 0
            },
            title:{
                show:true,
                offsetCenter:['50%','8%'],
                textStyle:{
                    color:'#ccc',  //color1,
                    fontSize:14,
                    fontFamily:'微软雅黑'
                }
            },
            detail: {
                formatter: '0',//data.toString(),
                offsetCenter: [0, '-10%'],
                textStyle:{
                    fontSize:30,
                    color:'#ccc'  //color1
                }},
            data: {
                label: {
                    textStyle: {
                        fontSize: 32
                    }
                },
                name:'%'
            }
        }]
};
var facMeter=echarts.init(fac);
var fac_firstMeter=echarts.init(fac_first);
var fac_secondMeter=echarts.init(fac_second);
var fac_thirdMeter=echarts.init(fac_third);
facMeter.showLoading(setLoading);
fac_firstMeter.showLoading(setLoading);
fac_secondMeter.showLoading(setLoading);
fac_thirdMeter.showLoading(setLoading);
facMeter.setOption(facOption);
fac_firstMeter.setOption(facOption);
fac_secondMeter.setOption(facOption);
fac_thirdMeter.setOption(facOption);
var meterData=localStorage.getItem('meter');
meter_success(meterData);
$('#sel_1').on('change', function(){
    $.ajax({
        url:URL+'?code=1&name='+$(this).val(),
        success: meter_success
    })
});
function meter_success(data){
    /*facMeter.hideLoading();
    fac_firstMeter.hideLoading();
    fac_secondMeter.hideLoading();*/
    facMeter.hideLoading();
    fac_thirdMeter.hideLoading();
    fac_firstMeter.hideLoading();
    var data1=eval('('+data+')');
        if($('#sel_1').val()=='day'){
            //功率因数
            facMeter.setOption({
                series:[{ axisLine: {
                    show: false,
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [Keeptwo(data1.T_Power_factor_D)/100, '#0eb1e6'],
                            [1, 'rgba(255, 255, 255, 0.2)']
                        ],
                        width: 16
                    }
                },
                    title:{
                        show:true,
                        offsetCenter:['50%','8%'],
                        textStyle:{
                            color:'#0eb1e6',  //color1,
                            fontSize:14,
                            fontFamily:'微软雅黑'
                        }
                    },
                    detail: {
                        formatter: Keeptwo(data1.T_Power_factor_D).toString(),
                        offsetCenter: [0, '-10%'],
                        textStyle:{
                            fontSize:30,
                            color:'#0eb1e6'
                        }
                    }
                }]
            });
            /*风机使用率*/
            
            fac_thirdMeter.setOption({
                series:[{ axisLine: {
                    show: false,
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [Keeptwo(data1.T_Avail_D)/100, '#7db343'],
                            [1, 'rgba(255, 255, 255, 0.2)']
                        ],
                        width: 16
                    }
                },
                    title:{
                        show:true,
                        offsetCenter:['50%','8%'],
                        textStyle:{
                            color:'#7db343',  //color1,
                            fontSize:14,
                            fontFamily:'微软雅黑'
                        }
                    },
                    detail: {
                        formatter: Keeptwo(data1.T_Avail_D).toString(),
                        offsetCenter: [0, '-10%'],
                        textStyle:{
                            fontSize:30,
                            color:'#7db343'
                        }
                    }
                }]
            });
            //累计发电量
            $('.kw').html(parseInt(data1.T_Prod_all_D/1000)+'<em>MW</em>');
            //发电损失率
            fac_firstMeter.setOption({
                series:[{ axisLine: {
                    show: false,
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [Number(data1.loss_D).toFixed(1)/100, '#7db343'],
                            [1, 'rgba(255, 255, 255, 0.2)']
                        ],
                        width: 16
                    }
                },
                    title:{
                        show:true,
                        offsetCenter:['50%','8%'],
                        textStyle:{
                            color:'#06b8ba',  //color1,
                            fontSize:14,
                            fontFamily:'微软雅黑'
                        }
                    },
                    detail: {
                        formatter: Number(data1.loss_D).toFixed(1).toString(),
                        offsetCenter: [0, '-10%'],
                        textStyle:{
                            fontSize:30,
                            color:'#06b8ba'//color1
                        }
                    }
                }]
            });
            //发电成本
            $('.rmb').html(data1.cost+'<em>RMB/kwh</em>');

        }else if($('#sel_1').val()=='week'){
            
            facMeter.setOption({
                series:[{ axisLine: {
                    show: false,
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [Keeptwo(data1.T_Power_factor_W)/100, '#0eb1e6'],
                            [1, 'rgba(255, 255, 255, 0.2)']
                        ],
                        width: 16
                    }
                },
                    title:{
                        show:true,
                        offsetCenter:['50%','8%'],
                        textStyle:{
                            color:'#0eb1e6',  //color1,
                            fontSize:14,
                            fontFamily:'微软雅黑'
                        }
                    },
                    detail: {
                        formatter: Keeptwo(data1.T_Power_factor_W).toString(),
                        offsetCenter: [0, '-10%'],
                        textStyle:{
                            fontSize:30,
                            color:'#0eb1e6'
                        }
                    }
                }]
            });
            fac_thirdMeter.setOption({
                series:[{ axisLine: {
                    show: false,
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [Keeptwo(data1.T_Avail_W)/100, '#7db343'],
                            [1, 'rgba(255, 255, 255, 0.2)']
                        ],
                        width: 16
                    }
                },
                    title:{
                        show:true,
                        offsetCenter:['50%','8%'],
                        textStyle:{
                            color:'#7db343',  //color1,
                            fontSize:14,
                            fontFamily:'微软雅黑'
                        }
                    },
                    detail: {
                        formatter: Keeptwo(data1.T_Avail_W).toString(),
                        offsetCenter: [0, '-10%'],
                        textStyle:{
                            fontSize:30,
                            color:'#7db343'
                        }
                    }
                }]
            });
            $('.kw').html(parseInt(data1.T_Prod_all_W/1000)+'<em>MW</em>');
            fac_firstMeter.setOption({
                series:[{ axisLine: {
                    show: false,
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [Number(data1.loss_W).toFixed(1)/100, '#7db343'],
                            [1, 'rgba(255, 255, 255, 0.2)']
                        ],
                        width: 16
                    }
                },
                    title:{
                        show:true,
                        offsetCenter:['50%','8%'],
                        textStyle:{
                            color:'#06b8ba',  //color1,
                            fontSize:14,
                            fontFamily:'微软雅黑'
                        }
                    },
                    detail: {
                        formatter: Number(data1.loss_W).toFixed(1).toString(),
                        offsetCenter: [0, '-10%'],
                        textStyle:{
                            fontSize:30,
                            color:'#06b8ba'//color1
                        }
                    }
                }]
            });
            //发电成本
            $('.rmb').html(data1.cost+'<em>RMB/kwh</em>');
        }else{
            //factor(fac,Keeptwo(data1.T_Power_factor_M),'#0eb1e6','rgba(255, 255, 255, 0.2)');
            facMeter.setOption({
                series:[{ axisLine: {
                    show: false,
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [Keeptwo(data1.T_Power_factor_M)/100, '#0eb1e6'],
                            [1, 'rgba(255, 255, 255, 0.2)']
                        ],
                        width: 16
                    }
                },
                    title:{
                        show:true,
                        offsetCenter:['50%','8%'],
                        textStyle:{
                            color:'#0eb1e6',  //color1,
                            fontSize:14,
                            fontFamily:'微软雅黑'
                        }
                    },
                    detail: {
                        formatter: Keeptwo(data1.T_Power_factor_M).toString(),
                        offsetCenter: [0, '-10%'],
                        textStyle:{
                            fontSize:30,
                            color:'#0eb1e6'
                        }
                    }
                }]
            });
            //factor(fac_third,Keeptwo(data1.T_Avail_M),'#7db343','rgba(255, 255, 255, 0.2)');
            fac_thirdMeter.setOption({
                series:[{ axisLine: {
                    show: false,
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [Keeptwo(data1.T_Avail_M)/100, '#7db343'],
                            [1, 'rgba(255, 255, 255, 0.2)']
                        ],
                        width: 16
                    }
                },
                    title:{
                        show:true,
                        offsetCenter:['50%','8%'],
                        textStyle:{
                            color:'#7db343',  //color1,
                            fontSize:14,
                            fontFamily:'微软雅黑'
                        }
                    },
                    detail: {
                        formatter: Keeptwo(data1.T_Avail_M).toString(),
                        offsetCenter: [0, '-10%'],
                        textStyle:{
                            fontSize:30,
                            color:'#7db343'
                        }
                    }
                }]
            });
            $('.kw').html(parseInt(data1.T_Prod_all_M/1000)+'<em>MW</em>');
            //factor(fac_first,Number(data1.loss_M).toFixed(1),'#06b8ba','rgba(255, 255, 255, 0.2)');
            fac_firstMeter.setOption({
                series:[{ axisLine: {
                    show: false,
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [Number(data1.loss_M).toFixed(1)/100, '#7db343'],
                            [1, 'rgba(255, 255, 255, 0.2)']
                        ],
                        width: 16
                    }
                },
                    title:{
                        show:true,
                        offsetCenter:['50%','8%'],
                        textStyle:{
                            color:'#06b8ba',  //color1,
                            fontSize:14,
                            fontFamily:'微软雅黑'
                        }
                    },
                    detail: {
                        formatter: Number(data1.loss_M).toFixed(1).toString(),
                        offsetCenter: [0, '-10%'],
                        textStyle:{
                            fontSize:30,
                            color:'#06b8ba'//color1
                        }
                    }
                }]
            });
            $('.rmb').html(data1.generation_cost+'<em>RMB/kwh</em>');
        }
        /*电网调度匹配率*/
        //factor(fac_second,Keeptwo(data1.math_rate),'#4cb050','rgba(255, 255, 255, 0.2)');
        fac_secondMeter.hideLoading();
        fac_secondMeter.setOption({
        series:[{ axisLine: {
            show: false,
            lineStyle: { // 属性lineStyle控制线条样式
                color: [
                    [Keeptwo(data1.math_rate)/100, '#4cb050'],
                    [1, 'rgba(255, 255, 255, 0.2)']
                ],
                width: 16
            }
        },
            title:{
                show:true,
                offsetCenter:['50%','8%'],
                textStyle:{
                    color:'#4cb050',  //color1,
                    fontSize:14,
                    fontFamily:'微软雅黑'
                }
            },
            detail: {
                formatter: Keeptwo(data1.math_rate).toString(),
                offsetCenter: [0, '-10%'],
                textStyle:{
                    fontSize:30,
                    color:'#4cb050'//color1
                }
            }
        }]
    });
}
/*历史信息*/
var messageOption = {
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
    legend: {
        orient: 'vertical',
        right: '5%',
        itemWidth: 10,
        itemHeight: 10,
        data: [{
            name: '当前风场',
            icon: 'rect',
            textStyle: {
                color: '#ccc'
            }
        }, {
            name: '其他风场',
            icon: 'rect',
            textStyle: {
                color: '#ccc'
            }
        }]
    },
    grid: {
        left: '5%',
        right: '4%',
        bottom: '0',
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
        type: 'category',
        boundaryGap: false,
        data:[],// data.T_Time,
        /*['2017/3/15', '2017/3/16', '2017/3/17', '2017/3/18','2017/3/19', '2017/3/20', '2017/3/21'],*/
        axisLine: {
            lineStyle: {
                color: '#2d2d2d'
            }
        },
        axisTick: {
            interval: 0
        },
        nameTextStyle: {
            color: '#fff'
        }
    },
    yAxis: [{
        splitLine: {
            show: true,
            lineStyle: {
                color: '#fff',
                type: 'solid',
                width: 1,
                opacity: 0.1
            }
        },
        //max:1,
        axisLine: {
            lineStyle: {
                color: '#2e2d2e'
            }
        },
        nameTextStyle: {
            color: '#fff'
        },
        axisLabel: {
            textStyle: {
                color: '#e6e6e6'
            }
        }
    }, {
        position: 'right',
        offset: 0,
        axisLine: {
            lineStyle: {
                color: '#2e2d2e'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        }
    }],
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
    series: [{
        name: '当前风场',
        type: 'line',
        data: [],//data.historyinfo,
        //[0.38, 0.39, 0.40, 0.41, 0.40,0.39,0.38],
        itemStyle: {
            normal: {
                color: '#54abe8'
            }
        },
        smooth: true
    },
        {
        name: '其他风场',
        type: 'line',
        data:[]    //data.otherhistoryinfo
        /*[0.39, 0.40, 0.41, 0.40, 0.39,0.38,0.37]*/,
        itemStyle: {
            normal: {
                color: '#119c64'
            }
        },
        smooth: true,
        markLine: {
            silent: true,
            symbol: '',
            large: true,
            lineStyle: {
                normal: {
                    color: 'yellow',
                    width: 1,
                    type: 'dashed'
                }
            },
            data: [
                [{
                    xAxis: '2017/3/20',
                    yAxis: 0
                }, {
                    xAxis: '2017/3/20',
                    yAxis: 1
                }]
            ]
        }
    }
    ]
};
var historMess = echarts.init(dom1);
historMess.showLoading(setLoading);
historMess.setOption(messageOption);

var historyData=localStorage.getItem('history');
history_success(historyData);

$('#sel_2').on('change', function() {
    //console.log($(this).val());
    historMess.showLoading(setLoading);
    $.ajax({
        url: URL+'?code=2&name='+$('#sel_2').val(),
        success: history_success
    })
});
function history_success(data){
    var data = eval('('+data+')');
    //message(dom1, data);
    historMess.hideLoading();
    historMess.setOption({
        xAxis: {
            name: '时间',
            type: 'category',
            boundaryGap: false,
            data:data.T_Time
            /*['2017/3/15', '2017/3/16', '2017/3/17', '2017/3/18','2017/3/19', '2017/3/20', '2017/3/21'],*/
        },
        series: [
            {
            name: '当前风场',
            type: 'line',
            data: data.historyinfo
            //[0.38, 0.39, 0.40, 0.41, 0.40,0.39,0.38],
        },
            {
                name: '其他风场',
                type: 'line',
                data:data.otherhistoryinfo
                /*[0.39, 0.40, 0.41, 0.40, 0.39,0.38,0.37]*/

            }
        ]
    })
}


//在数组中找某个数
function findInArr(num, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            return i;
        }
    }
    return false
}
//保留两位小数
function Keeptwo(data){
    return  parseInt(Number(data)*100);
}
/*补零*/
function toDou(n){
    return n<10 ? '0'+ n: n;
}



