
    /*风功率预测 product */
    var speed_d = document.getElementById("speed_e");
    var speedOption = {
            tooltip: {
                trigger: 'axis'
            },
            xAxis: [{
                name:'(时间h)',
                nameTextStyle:{
                    color:'#fff',
                },
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11', '12', '13', '14','15', '16', '17', '18', '19', '20', '21','22', '23',24,25, '26', '27', '28', '29', '30','31', '32','33', '34', '35', '36', '37', '38', '39','40', '41', '42', '43', '44', '45', '46','47', '48', '49', '50', '51', '52', '53','54', '55', '56', '57', '58', '59', '60','61', '62',63,64,65,66,67,68,69,70,71,72],
                splitLine: {
                    show:false,
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: '#ccc'
                    }
                },
                axisTick:{
                    interval:2,
                    length:1,
                },
                axisLabel:{
                    interval:2,
                    textStyle:{
                        color:'#fff',
                    },
                },
            }],
            yAxis: [
                {
                    axisLabel:{
                        textStyle:{
                            color:'#fff',
                        }
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color:['#2b2b2d'],
                            type:'solid',
                            width:1,
                        },
                    },
                    type: 'value',
                    name: '(MW)',
                    min: 0,
                    max: 40,
                    position: 'left',
                    nameTextStyle:{
                        color:'#fff',
                    },
                },
                {
                    axisLabel:{
                        textStyle:{
                            color:'#fff',
                        }
                    },
                    nameTextStyle:{
                        color:'#fff',
                    },
                    splitLine:{
                        show:false,
                        lineStyle:{
                            color:['rgb(255,255,255)'],
                            type:'solid',
                            width:2,
                            opacity:0.9,
                        },
                    },
                    position: 'right',
                    offset:0,
                    axisLine: {
                        lineStyle: {
                            color: '#2e2d2e'
                        }
                    }
                }],
            series: [
                {
                    name:'风速',
                    type:'line',
                    data:[40.0, 40.0, 40.0, 40.0, 32.0, 32.0, 32.0, 32.0, 24.0, 24.0, 24.0, 24.0, 16.0, 16.0, 16.0, 16.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 16.0, 16.0, 16.0, 16.0, 24.0, 24.0,40.0, 40.0, 40.0, 40.0, 32.0, 32.0, 32.0, 32.0, 24.0, 24.0, 24.0, 24.0, 16.0, 16.0, 16.0, 16.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 16.0, 16.0, 16.0, 16.0, 24.0, 24.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 16.0, 16.0, 16.0, 16.0, 24.0, 24.0,],
                    markLine: {
                        symbol:'',
                        large:true,
                        lineStyle:{
                            normal:{
                                color:'#ff4949',
                                width:1,
                                type:'dashed',
                            }
                        },
                        data : [
                            [
                                { xAxis: 4, yAxis: 0},
                                { xAxis: 4, yAxis: 40},
                            ],
                            [
                                {xAxis: 24, yAxis: 0},
                                {xAxis: 24, yAxis: 40},

                            ],
                        ]
                    },
                    itemStyle:{
                        normal:{
                            color:'#2985c0',
                        }
                    },
                    lineStyle:{
                        normal:{
                            color:'#ff4949',
                        },
                    },
                    symbol:'circle',
                    symbolSize:8,
                },
            ]
        };
    speedLine=echarts.init(speed_d);
    //speedLine.showLoading();
    speedLine.setOption(speedOption);
    
    
    /*误差统计*/
    var eStats = document.getElementById('speed_eh');
    var eStatsOption = {
            data:[
                {
                    name:'预测合格率',
                    icon:'rect',
                    textStyle:{
                        color:'#fff'
                    }
                },
                {
                    name:'均方根误差',
                    icon:'rect',
                    textStyle:{
                        color:'#fff'
                    }
                },
                {
                    name:'平方根误差',
                    icon:'rect',
                    textStyle:{
                        color:'#fff'
                    }
                },

            ],
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['预测合格率', '均方根误差', '平方绝对误差'],
                itemWidth:10,
                itemHeight:10,
                align: 'left',
                left: 10,
                textStyle:{
                    color:'#ccc',
                },
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['0-4h', '0-24h', '0-72h'],
                axisLine:{
                    lineStyle:{
                        color:'#2e2d2e'
                    }
                },
                nameTextStyle:{
                    color:'#fff',
                },
                axisLabel:{
                    textStyle:{
                        color:'#fff'
                    }
                },
            }],
            yAxis: [
                {
                type: 'value',
                name: '(%)',
                max:100,
                nameTextStyle:{
                    color:'#fff',
                },
                axisLabel: {
                    formatter: '{value}',
                    textStyle:{
                        color:'#fff',
                    },
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:['#2b2b2d'],
                        type:'solid',
                        width:1,
                    },
                },
            },
                {
                    name:'(kW)',
                    nameTextStyle:{
                        color:'#fff',
                    },
                    splitLine: {
                        show:false,
                    },
                    max:8,
                    position: 'right',
                    offset:0,
                    axisLine: {
                        lineStyle: {
                            color: '#2e2d2e'
                        }
                    },
                    axisLabel:{
                        textStyle:{
                           color:'#fff'
                        },
                    },
                }
            ],
            series: [
                {
                    name: '预测合格率',
                    type: 'bar',
                    data: [20, 12, 31],
                    barWidth:32,
                    label:{
                        normal:{
                            textStyle:{
                                color:'#ccc',
                            },
                        },
                    },
                    itemStyle:{
                        normal:{
                            color:'#2985c0',
                        }
                    },
                    markLine:{
                        silent:true,
                        symbol:'',
                        data:[{
                            name:'最大值',
                            type:'max',
                            lineStyle:{
                                normal:{
                                    color:'#9b5050'
                                }
                            }
                        }],
                        label:{
                            normal:{
                               show:false
                            }
                        }
                    }
                },
                {
                    name: '均方根误差',
                    type: 'bar',
                    data: [10, 20, 5],
                    barWidth:32,
                    itemStyle:{
                        normal:{
                            color:'#8d8c10',
                        }
                    },
                    markLine:{
                        silent:true,
                        symbol:'',
                        data:[{
                            name:'最大值',
                            type:'max',
                            lineStyle:{
                                normal:{
                                    color:'#65acb4'
                                }
                            }
                        }],
                        label:{
                            normal:{
                                show:false
                            }
                        }
                    }
                },
                {
                    name: '平方绝对误差',
                    type: 'bar',
                    barWidth:32,
                    data: [1, 1, 2],
                    yAxisIndex:1,
                    itemStyle:{
                        normal:{
                            color:'#ca403f',
                        }
                    },
                }]
        };
    eStatsLine=echarts.init(eStats);
    //eStatsLine.showLoading();
    eStatsLine.setOption(eStatsOption);
    /*电量预测 */
    var wind = document.getElementById("wind_e");
    var windOption = {
            legend:{
                orient:'horizontal',
                right:'30',
                itemWidth:10,
                itemHeight:10,
            },
            data:[
                {
                    name:'电网调度',
                    icon:'rect',
                    textStyle:{
                        color:'#fff'
                    }
                },
                {
                    name:'实际功率',
                    icon:'rect',
                    textStyle:{
                        color:'#fff'
                    }
                },
                {
                    name:'预测风速',
                    icon:'rect',
                    textStyle:{
                        color:'#fff'
                    }
                },
                {
                    name:'实际风速',
                    icon:'rect',
                    textStyle:{
                        color:'#fff'
                    }
                },
            ],
            tooltip: {
                trigger: 'axis'
            },
            xAxis: [
                {
                name:'(时间)',
                nameTextStyle:{
                    color:'#fff',
                },
                type: 'category',
                boundaryGap: false,
                grid: {
                    left: '0%',
                    right: '0%',
                    bottom: '0',
                    containLabel: true
                },
                data: [1, '2', '3', '4', '5', '6', '7','8', '9', '10', '11', '12', '13', '14','15', '16', '17', '18', '19', '20', '21','22', '23', '26', '27', '28', '29', '30','31', '32'],
                axisLabel:{
                    textStyle:{
                        color:'#fff'
                    }
                },
                splitLine: {
                    show:false,
                    lineStyle: {
                        color: '#ccc'
                    }
                },
                axisTick:{
                    interval:6,
                    length:1,
                },
                axisLabel:{
                    interval:6,
                    textStyle:{
                        color:'#fff',
                    },
                },
            }],
            yAxis: [
                {
                    axisLabel:{
                        textStyle:{
                            color:'#fff',
                        }

                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color:'#282829',
                            type:'solid',
                            width:2,
                        },
                    },
                    type: 'value',
                    name: '(MW)',
                    min: 0,
                    max: 100,
                    position: 'left',
                    nameTextStyle:{
                        color:'#fff',
                    },
                },
                {
                    axisLabel:{
                        textStyle:{
                            color:'#fff',
                        }
                    },
                    nameTextStyle:{
                        color:'#fff',
                    },
                    splitLine:{
                        show:false,
                        lineStyle:{
                            color:['rgb(255,255,255)'],
                            type:'solid',
                            width:2,
                            opacity:0.9,
                        },
                    },
                    type: 'value',
                    name: '(m/s)',
                    min: 0,
                    max:20,
                    position: 'right',
                    offset:0,
                    axisLine: {
                        lineStyle: {
                            color: '#2e2d2e'
                        }
                    }
                }],
            series: [
                {
                    name:'电网调度',
                    type:'line',
                    step:'start',
                    data:[40.0, 40.0, 40.0, 40.0, 32.0, 32.0, 32.0, 32.0, 24.0, 24.0, 24.0, 24.0, 16.0, 16.0, 16.0, 16.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 16.0, 16.0, 16.0, 16.0, 24.0, 24.0, 24.0, 24.0, 32.0, 32.0, 32.0, 32.0, 40.0, 40.0, 40.0, 40.0],
                    itemStyle:{
                        normal:{
                            color:'#ff4949',
                        }
                    }
                },
                {
                    name:'实际功率',
                    type:'line',
                    data:[40.12, 40.0, 40.0, 40.0, 32.0, 32.01, 32.04, 31.97, 23.97, 23.94, 23.97, 24.05, 15.99, 15.99, 16.0, 16.0, 8.0, 8.02, 8.0, 8.0, 8.0, 8.01, 8.0, 8.0, 16.01, 16.01, 16.0, 15.91, 24.0, 24.0, 24.01, 23.97, 31.97, 32.01, 32.03, 32.03, 40.0, 39.99, 40.0, 40.0],
                    itemStyle:{
                        normal:{
                            color:'#d69627',
                        }
                    }
                },
                {
                    name:'预测风速',
                    type:'line',
                    yAxisIndex:1,
                    data:[4.38, 4.26, 5.82, 5.86, 5.8, 6.01, 7.86, 8.42, 8.34, 7.51, 8.08, 10.9, 9.93, 9.72, 7.86, 9.32, 7.66, 9.54, 8.15, 6.81, 7.86, 6.85, 8.7, 6.71, 8.22, 11.7, 13.0, 13.8, 14.9, 13.2, 12.8, 12.9, 14.5, 11.6, 12.1, 12.5, 12.9, 13.4, 13.8, 15.8],
                    itemStyle:{
                        normal:{
                            color:'#549782',
                        }
                    }
                },
                {
                    name:'实际风速',
                    type:'line',
                    yAxisIndex:1,
                    data:[4.34, 3.86, 5.39, 5.51, 6.02, 6.06, 7.56, 8.89, 8.81, 7.79, 8.05, 10.3, 9.67, 9.94, 8.11, 8.9, 7.16, 9.37, 8.44, 7.3, 7.45, 6.75, 8.16, 7.23, 8.12, 12.0, 12.6, 14.2, 14.9, 13.4, 12.4, 12.7, 14.9, 11.8, 12.5, 12.3, 12.8, 13.7, 14.3, 15.9],
                    itemStyle:{
                        normal:{
                            color:'#54abe8',
                        }
                    }
                }
            ]
        };
    windLine=echarts.init(wind);
    //windLine.showLoading();
    windLine.setOption(windOption);
    //风机数据
var wind_arr=[{'wind_id':1,'health':0.91,'effect':75,'limit_speed':0,'future':1650,'production':80},
                {'wind_id':2,'health':0.93,'effect':66,'limit_speed':0,'future':1365,'production':83},
                {'wind_id':3,'health':0.78,'effect':53,'limit_speed':1,'future':500,'production':60},
                {'wind_id':4,'health':0.92,'effect':67,'limit_speed':0,'future':1593,'production':87},
                {'wind_id':5,'health':0.88,'effect':75,'limit_speed':0,'future':1100,'production':82},
                {'wind_id':6,'health':0.87,'effect':48,'limit_speed':1,'future':1270,'production':83},
                {'wind_id':7,'health':0.81,'effect':39,'limit_speed':0,'future':1493,'production':76},
                {'wind_id':8,'health':0.86,'effect':65,'limit_speed':0,'future':1775,'production':74},
                {'wind_id':9,'health':0.94,'effect':45,'limit_speed':0,'future':1404,'production':86},
                {'wind_id':10,'health':0.83,'effect':70,'limit_speed':0,'future':1551,'production':75},
                {'wind_id':11,'health':0.79,'effect':46,'limit_speed':1,'future':1334,'production':77},
                {'wind_id':12,'health':0.94,'effect':52,'limit_speed':0,'future':980,'production':88},
                {'wind_id':13,'health':0.85,'effect':58,'limit_speed':0,'future':735,'production':79},
                {'wind_id':14,'health':0.91,'effect':82,'limit_speed':0,'future':1503,'production':82},
                {'wind_id':15,'health':0.86,'effect':67,'limit_speed':1,'future':1609,'production':85},
                {'wind_id':16,'health':0.83,'effect':69,'limit_speed':0,'future':1528,'production':77},
                {'wind_id':17,'health':0.93,'effect':31,'limit_speed':0,'future':1833,'production':86},
                {'wind_id':18,'health':0.91,'effect':71,'limit_speed':0,'future':1047,'production':82},
                {'wind_id':19,'health':0.94,'effect':43,'limit_speed':0,'future':1103,'production':86},
                {'wind_id':20,'health':0.45,'effect':59,'limit_speed':1,'future':1258,'production':39},
                {'wind_id':21,'health':0.88,'effect':76,'limit_speed':0,'future':1688,'production':79},
                {'wind_id':22,'health':0.82,'effect':81,'limit_speed':0,'future':1176,'production':75},
                {'wind_id':23,'health':0.92,'effect':80,'limit_speed':0,'future':1560,'production':86},
                {'wind_id':24,'health':0.94,'effect':48,'limit_speed':0,'future':830,'production':85}];

for(var i=0;i<wind_arr.length;i++){
    $('.fan-id').eq(i).html(wind_arr[i].wind_id);
    $('.health').eq(i).html(wind_arr[i].health);
    $('.effect').eq(i).html(wind_arr[i].effect+'%');
    $('.limit-speed').eq(i).html(wind_arr[i].limit_speed);
    $('.forecast').eq(i).html(wind_arr[i].future);
    $('.productivity').eq(i).html(wind_arr[i].production+'%');
    if(wind_arr[i].health>=0.8){
        $('.health').eq(i).css({'color':'#009a42'});
    }else if(wind_arr[i].health>=0.5 &&wind_arr[i].health<0.8){
        $('.health').eq(i).css({'color':'#fffd00'});
    }else{
        $('.health').eq(i).css({'color':'red'});
    }
}
