var dom2 = document.getElementById("prod_ec");
var oUl = document.getElementById('map_con');
var aLi = oUl.getElementsByTagName('li');
var oText = document.getElementById('tooltip');
/*var setLoading={
    text: '',
    color: '#fff',
    textColor: '#f00',
    maskColor: 'rgba(255, 255, 255, 0)',
    zlevel: 0
};*/
/*风场总体信息 交互*/
$.ajax({
    url:URL+'?code=4',
    success: success_funAll
});
function success_funAll(data) {
    var Data = eval("(" + data + ")");
    //console.log(Data.all_wind);
        var mAp = $('.map_ui .math');
        mAp.eq(0).html(Data.online_all);
        /*mAp.eq(1).text(Data.feature_warn);
        mAp.eq(2).text(Data.warn);*/
        mAp.eq(3).html(parseInt(Data.power_all/1000)+'<em>MW</em>');
        mAp.eq(4).html(parseInt(Data.power_grid/1000)+"<em>MW</em>");
        mAp.eq(5).html((Number(Data.loss)).toFixed(1)+"<em>%</em>");
        mAp.eq(6).html(parseInt(Data.cur_speed) +"<em>m/s</em>");
        $.fn.fun(Data);//单个风机
        sin_fan(Data);
}
/*默认执行一次数据*/

function sin_fan(Data){
    oText.innerHTML = '<h5>' + Data.all_wind[0].name + '号风机</h5><ul><li class="clearfix"><p class="fl"></p><i class="fl">当前健康值</i><em class="fr">' + Number(Data.all_wind[0].cur_health).toFixed(2) + '</em></li> <li class="clearfix"><p class="fl"></p><i class="fl">当前发电损失率</i><em class="fr">' + Number(Data.all_wind[0].cur_loss).toFixed(2) + '%</em></li> <li class="clearfix"><p class="fl"></p><i class="fl">当前时间</i><em class="fr">' + Data.all_wind[0].cur_discription + '</em></li> </ul>';
}
/*天气预报交互*/
function weather(Maxdeg,Mindeg,Wind,Wea){
    var oDate = new Date();
    var oHour = oDate.getHours();
    var oMin = oDate.getMinutes();
    var oMou = oDate.getMonth();
    var m = (oMou+1).toString();
    var arr = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    var d = oDate.getDate().toString();
    var result = "";
    if (m.length == 2) {
        if (m.charAt(0) == "1") {
            result += ("十" + arr[m.charAt(1)] + "月");
        }
    }
    else {
        result += (arr[m.charAt(0)] + "月");
    }
    if (d.length == 2) {
        result += (arr[d.charAt(0)] + "十" + arr[d.charAt(1)] + "日");
    }
    else {
        result += (arr[d.charAt(0)] + "日");
    }
/*获取日期*/
    var oThu = "星期" + "日一二三四五六".charAt(new Date().getDay());
    var oWeather = $('.weather_fl');
    var oImg = $('.weather_p');
    var oWeather_h = $('.weather');
    oWeather_h.find('h5').eq(0).html(oThu+',&nbsp; '+result)
    oWeather.find('li').eq(0).html('温度：'+Mindeg+'℃/'+Maxdeg+'℃');
    oWeather.find('li').eq(1).html('时间：'+toDou(oHour)+'：'+toDou(oMin));
    oWeather.find('li').eq(2).html('风向：'+Wind.dir+' '+Wind.sc+'级');
    oImg.css('background','url(img/weather/'+Wea+'.png)')
}
$.ajax({
    url:'https://free-api.heweather.com/v5/forecast?city=beijing&key=aa96d7be821f453da1d3b47aa684ce8b',
    success:function(data){
        var Maxdeg = data.HeWeather5[0].daily_forecast[0].tmp.max;
        var Mindeg = data.HeWeather5[0].daily_forecast[0].tmp.min;
        var Wind = data.HeWeather5[0].daily_forecast[0].wind;
        var Wea = data.HeWeather5[0].daily_forecast[0].cond.code_d;
        //console.log(Wea);
        weather(Maxdeg,Mindeg,Wind,Wea);
}
});

/*生产管理交互*/

$.ajax({
    url: URL +'?code=3',
    success: prodData
});

var prodOption = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        right: '5%',
        itemWidth: 10,
        itemHeight: 10,
        orient: 'horizontal',
        width: 146,
        height: 32,
        top: 10
    },
    toolbox: {
        show: true,
        left:'45%',
        top:'5%',
        itemGap:15,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {}
        }
    },
    data: [
        {
            name: '电网调度',
            icon: 'rect',
            textStyle: {
                color: '#ccc'
            }
        },
        {
            name: '实际功率',
            icon: 'rect',
            textStyle: {
                color: '#ccc'
            }
        },
        {
            name: '预测风速',
            icon: 'rect',
            textStyle: {
                color: '#ccc'
            }
        },
        {
            name: '实际风速',
            icon: 'rect',
            textStyle: {
                color: '#ccc'
            }
        }

    ],
    grid: {
        left: '3%',
        right: '8%',
        bottom: '3%',
        top: '30%',
        containLabel: true
    },
    xAxis: [{
        name: '时间',
        nameTextStyle: {
            color: '#fff'
        },
        type: 'category',
        boundaryGap: true,
        data:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23','24','25', '26', '27', '28', '29', '30', '31', '32', '33','34','35','36','37','38','39','40'],   //Data.T_Time,
        /*  data:
         */
        splitLine: {
            show: false,
            lineStyle: {
                // 使用深浅的间隔色
                color: '#ccc'
            }
        },
        axisTick: {
            interval: 0
            //length: 2
        },
        axisLabel: {
            //interval: 3,
            //length: 1,
            textStyle: {
                color: '#fff'
            }
        }
    }],
    yAxis: [
        {
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }

            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    type: 'solid',
                    width: 1,
                    opacity: 0.1
                }
            },
            type: 'value',
            name: '(MW)',
            position: 'left',
            nameTextStyle: {
                color: '#fff'
            }
        },
        {
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            nameTextStyle: {
                color: '#fff'
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: ['rgb(255,255,255)'],
                    type: 'solid',
                    width: 2,
                    opacity: 0.9
                }
            },
            type: 'value',
            name: '(m/s)',
            position: 'right',
            offset: 0,
            axisLine: {
                lineStyle: {
                    color: '#2e2d2e'
                }
            }
        }],
    series: [
        {
            name: '电网调度',
            type: 'line',
            //step: 'start',
            data: [40.0, 40.0, 40.0, 40.0, 32.0, 32.0, 32.0, 32.0, 24.0, 24.0, 24.0, 24.0, 16.0, 16.0, 16.0, 16.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 16.0, 16.0, 16.0, 16.0, 24.0, 24.0, 24.0, 24.0, 32.0, 32.0, 32.0, 32.0, 40.0, 40.0, 40.0, 40.0],//Data.grid_match,
            /**/
            itemStyle: {
                normal: {
                    color: '#ff4949'
                }
            }
        },
        {
            name: '实际功率',
            type: 'line',
            //step: 'start',
            data:[40.12, 50.0, 40.0, 45.0, 32.0, 34.01, 54.04, 31.97, 45.97, 23.94, 23.97, 24.05, 15.99, 15.99, 16.0, 16.0, 8.0, 8.02, 8.0, 8.0, 8.0, 8.01, 8.0, 8.0, 16.01, 16.01, 16.0, 32, 24.0,43, 24.01, 23.97, 31.97, 32.01, 32.03, 32.03, 40.0, 39.99, 40.0, 40.0],// Data.T_Power,
            /**/
            itemStyle: {
                normal: {
                    color: '#d69627'
                }
            }
        },
        {
            name: '预测风速',
            type: 'line',
            yAxisIndex: 1,
            data: [4.38, 4.26, 5.82, 5.86, 5.8, 6.01, 7.86, 8.42, 8.34, 7.51, 8.08, 10.9, 9.93, 9.72, 7.86, 9.32, 7.66, 9.54, 8.15, 6.81, 7.86, 6.85, 8.7, 6.71, 8.22, 11.7, 13.0, 13.8, 14.9, 13.2, 12.8, 12.9, 14.5, 11.6, 12.1, 12.5, 12.9, 13.4, 13.8, 15.8],//Data.T_forecast_speed,
            /**/
            itemStyle: {
                normal: {
                    color: '#549782'
                }
            }
        },
        {
            name: '实际风速',
            type: 'line',
            yAxisIndex: 1,
            data:[4.34, 3.86, 5.39, 5.51, 6.02, 6.06, 7.56, 8.89, 8.81, 7.79, 8.05, 10.3, 9.67, 9.94, 8.11, 8.9, 7.16, 9.37, 8.44, 7.3, 7.45, 6.75, 8.16, 7.23, 8.12, 12.0, 12.6, 14.2, 14.9, 13.4, 12.4, 12.7, 14.9, 11.8, 12.5, 12.3, 12.8, 13.7, 14.3, 15.9],// Data.T_Wind_speed,
            /**/
            itemStyle: {
                normal: {
                    color: '#54abe8'
                }
            }
        }
    ]
};
var prodLine = echarts.init(dom2);
 /*prodLine.showLoading(setLoading);*/
 prodLine.setOption(prodOption);
function prodData(data){
    //var Data = eval("(" + data + ")");
    var Data = data;
        console.log(Data);
    //$.fn.prod(dom2,Data);
    prodLine.hideLoading();
    prodLine.setOption({
        xAxis: [{
            name: '时间',
            nameTextStyle: {
                color: '#fff'
            },
            type: 'category',
            boundaryGap: true,
            //data:Data.T_Time
             data:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23','24','25', '26', '27', '28', '29', '30', '31', '32', '33','34','35','36','37','38','39','40'],

        }],
        series: [
            {
                name: '电网调度',
                type: 'line',
                //step: 'start',
                data: [40.0, 40.0, 40.0, 40.0, 32.0, 32.0, 32.0, 32.0, 24.0, 24.0, 24.0, 24.0, 16.0, 16.0, 16.0, 16.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 16.0, 16.0, 16.0, 16.0, 24.0, 24.0, 24.0, 24.0, 32.0, 32.0, 32.0, 32.0, 40.0, 40.0, 40.0, 40.0],
                //Data.grid_match,

                itemStyle: {
                    normal: {
                        color: '#ff4949'
                    }
                }
            },
            {
                name: '实际功率',
                type: 'line',
                //step: 'start',
                data:[40.12, 50.0, 40.0, 45.0, 32.0, 34.01, 54.04, 31.97, 45.97, 23.94, 23.97, 24.05, 15.99, 15.99, 16.0, 16.0, 8.0, 8.02, 8.0, 8.0, 8.0, 8.01, 8.0, 8.0, 16.01, 16.01, 16.0, 32, 24.0,43, 24.01, 23.97, 31.97, 32.01, 32.03, 32.03, 40.0, 39.99, 40.0, 40.0],
                //Data.T_Power,

                itemStyle: {
                    normal: {
                        color: '#d69627'
                    }
                }
            },
            {
                name: '预测风速',
                type: 'line',
                yAxisIndex: 1,
                data:[4.38, 4.26, 5.82, 5.86, 5.8, 6.01, 7.86, 8.42, 8.34, 7.51, 8.08, 10.9, 9.93, 9.72, 7.86, 9.32, 7.66, 9.54, 8.15, 6.81, 7.86, 6.85, 8.7, 6.71, 8.22, 11.7, 13.0, 13.8, 14.9, 13.2, 12.8, 12.9, 14.5, 11.6, 12.1, 12.5, 12.9, 13.4, 13.8, 15.8],
                //Data.T_forecast_speed,

                itemStyle: {
                    normal: {
                        color: '#549782'
                    }
                }
            },
            {
                name: '实际风速',
                type: 'line',
                yAxisIndex: 1,
                data: [4.34, 3.86, 5.39, 5.51, 6.02, 6.06, 7.56, 8.89, 8.81, 7.79, 8.05, 10.3, 9.67, 9.94, 8.11, 8.9, 7.16, 9.37, 8.44, 7.3, 7.45, 6.75, 8.16, 7.23, 8.12, 12.0, 12.6, 14.2, 14.9, 13.4, 12.4, 12.7, 14.9, 11.8, 12.5, 12.3, 12.8, 13.7, 14.3, 15.9],
                //Data.T_Wind_speed,

                itemStyle: {
                    normal: {
                        color: '#54abe8'
                    }
                }
            }
        ]
    });
    $('.prod_em').html(parseInt(Data.Potent_Power)+'KW');
    $('.prod_emb').html(Data.cur_math_rate)
}
$.fn.extend({
    
    /*任务通知 选项卡 */
    notice:function () {
        var $p = $("div.task .task_h p");
        $p.on('click', function () {
            $(this).addClass("selected")
                .siblings().removeClass("selected");
            var index = $p.index(this);
            $(".mass > div")
                .eq(index).show()
                .siblings().hide();
        })
    },
    /*单个风机 鼠标移入mouseover*/
    fun:function(Data){
        for (var i = 0; i < 24; i++) {
            aLi[i].index = i;
            aLi[i].onmouseover = function () {
                for (var i = 0; i < 24; i++) {
                    aLi[i].className = '';
                }
                this.className = 'active';
                oText.innerHTML = '<h5>' + Data.all_wind[this.index].name + '号风机</h5><ul><li class="clearfix"><p class="fl"></p><i class="fl">当前健康值</i><em class="fr">' + Number(Data.all_wind[this.index].cur_health).toFixed(2) + '</em></li> <li class="clearfix"><p class="fl"></p><i class="fl">当前发电损失率</i><em class="fr">' + Number(Data.all_wind[this.index].cur_loss).toFixed(2) + '%</em></li> <li class="clearfix"><p class="fl"></p><i class="fl">当前时间</i><em class="fr">' + Data.all_wind[this.index].cur_discription + '</em></li> </ul>';

            };
        }
    }
});


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


