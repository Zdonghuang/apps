$(function() {
        var $fullText = $('.admin-fullText');
        $('#admin-fullscreen').on('click', function() {
            $.AMUI.fullscreen.toggle();
        });

        $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
            $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
        });

        var dataType = $('body').attr('data-type');
        for (key in pageData) {
            if (key === dataType) {
                pageData[key]();
            }
        }

        $('.tpl-switch').find('.tpl-switch-btn-view').on('click', function() {
            $(this).prev('.tpl-switch-btn').prop("checked", function() {
                    if ($(this).is(':checked')) {
                        return false
                    } else {
                        return true
                    }
            })
                // console.log('123')
        })
    });

    // ==========================
    // 侧边导航下拉列表
    // ==========================
    $('.tpl-left-nav-link-list').on('click', function() {
            $(this).siblings('.tpl-left-nav-sub-menu').slideToggle(80)
                .end()
                .find('.tpl-left-nav-more-ico').toggleClass('tpl-left-nav-more-ico-rotate');
        });

    // ==========================
    // 头部导航隐藏菜单
    // ==========================
    $('.tpl-header-nav-hover-ico').on('click', function() {
        $('.tpl-left-nav').toggle();
        $('.tpl-content-wrapper').toggleClass('tpl-content-wrapper-hover');
    });

// 页面数据
var pageData = {
    // ===============================================品牌咨询
    // 概述
    // ===============================================
    'index': function indexData() {

        /*  var myScroll = new IScroll('#wrapper', {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            preventDefault: false,
            fadeScrollbars: true
        });

       var myScrollA = new IScroll('#wrapperA', {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            preventDefault: false,
            fadeScrollbars: true
        });

        var myScrollB = new IScroll('#wrapperB', {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            preventDefault: false,
            fadeScrollbars: true
        });*/

        // document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);

        // ==========================
        // 百度图表A http://echarts.baidu.com
        // ==========================
        var echartsTop = echarts.init(document.getElementById('tpl-echarts-Top'));
        optionTop = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                top: 'middle',
                itemGap: 20,
                data:['iPhone','HUAWEI','OPPO','VIVO','MI','MEIZU','SAMSUNG','Lenovo','360','nubia']
            },
            grid: {
                width: '90%',
                height: '90%',
                left: '10%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['2017-01', '2017-03', '2017-05', '2017-07', '2017-09', '2017-11', '2018-01', '2018-08']

                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'iPhone',
                    type:'bar',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'HUAWEI',
                    type:'bar',
                    stack: '广告',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'OPPO',
                    type:'bar',
                    stack: '广告',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'VIVO',
                    type:'bar',
                    stack: '广告',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'MI',
                    type:'bar',
                    data:[162, 118, 164, 126, 179, 160, 157],
                    markLine : {
                        lineStyle: {
                            normal: {
                                type: 'dashed'
                            }
                        },
                        data : [
                            [{type : 'min'}, {type : 'max'}]
                        ]
                    }
                },
                {
                    name:'MEIZU',
                    type:'bar',
                    barWidth : 5,
                    stack: '搜索引擎',
                    data:[120, 132, 101, 134, 90, 130, 120]
                },
                {
                    name:'SAMSUNG',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[120, 132, 101, 134, 290, 230, 220]
                },
                {
                    name:'Lenovo',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[70, 78, 75, 79, 195, 132, 119]
                },
                {
                    name:'360',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[60, 72, 71, 74, 190, 130, 110]
                },
                {
                    name:'nubia',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[62, 82, 91, 84, 109, 110, 120]
                }
            ]
        };
        echartsTop.setOption(optionTop);

/*
        var echartsLe = echarts.init(document.getElementById('tpl-echarts-Le'));
        optionLe = {
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [{
                type: 'graph',
                layout: 'force',
                symbolSize: 70,
                roam: true,
                label: {
                    normal: {
                        show: true,
                        rich: {
                            gray: {
                                color: 'gray'
                            },
                            green: {
                                color: 'green'
                            }
                        }
                    }
                },
                //edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 10],
                edgeLabel: {
                    normal: {
                        textStyle: {
                            fontSize: 20
                        }
                    }
                },
                data: [{
                    name: '节点1',
                    x: 360,
                    y: 100,
                    symbolSize: 50
                }, {
                    name: '节点2',
                    x: 700,
                    y: 219
                }, {
                    name: 'lenovo',
                    x: 550,
                    y: 100
                }, {
                    name: '节点4',
                    x: 550,
                    y: 300
                }, {
                    name: '节点5',
                    x: 450,
                    y: 300
                }, {
                    name: '节点6',
                    x: 250,
                    y: 300
                }, {
                    name: '节点7',
                    x: 250,
                    y: 300
                }, {
                    name: '节点8',
                    x: 250,
                    y: 300
                }, {
                    name: '节点9',
                    x: 250,
                    y: 300
                }, {
                    name: '节点10',
                    x: 250,
                    y: 300
                }],
                // links: [],
                links: [{
                    source: 'lenovo',
                    target: '节点1'
                }, {
                    source: 'lenovo',
                    target: '节点2'
                }, {
                    source: 'lenovo',
                    target: '节点4'
                }, {
                    source: 'lenovo',
                    target: '节点5'
                }, {
                    source: 'lenovo',
                    target: '节点6'
                }, {
                    source: 'lenovo',
                    target: '节点7'
                }, {
                    source: 'lenovo',
                    target: '节点8'
                }, {
                    source: 'lenovo',
                    target: '节点9'
                }, {
                    source: 'lenovo',
                    target: '节点10'
                }],
                animation: true,
                markArea: {
                    animation: false
                },
                markPoint: {
                    symbol: 'arrow'
                },
                markLine: {
                    symbol: 'arrow',
                    precision: 5
                },

                lineStyle: {
                    normal: {
                        opacity: 0.9,
                        width: 2,
                        curveness: 0
                    }
                },
                force: {
                    repulsion: [0, 500],
                    edgeLength: [0, 200],
                    layoutAnimation: false,
                    //initLayout:'circle',
                    gravity: 0
                }
            }]
        };
        echartsLe.setOption(optionLe);

        var echartsMt = echarts.init(document.getElementById('tpl-echarts-Mt'));
        optionMt = {
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [{
                type: 'graph',
                layout: 'force',
                symbolSize: 70,
                roam: true,
                label: {
                    normal: {
                        show: true,
                        rich: {
                            gray: {
                                color: 'gray'
                            },
                            green: {
                                color: 'green'
                            }
                        }
                    }
                },
                //edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 10],
                edgeLabel: {
                    normal: {
                        textStyle: {
                            fontSize: 20
                        }
                    }
                },
                data: [{
                    name: '节点1',
                    x: 360,
                    y: 100,
                    symbolSize: 50,
                }, {
                    name: '节点2',
                    x: 700,
                    y: 219
                }, {
                    name: '节点3',
                    x: 550,
                    y: 100
                }, {
                    name: '节点4',
                    x: 550,
                    y: 300
                }, {
                    name: '节点5',
                    x: 450,
                    y: 300
                }, {
                    name: '节点6',
                    x: 250,
                    y: 300
                }, {
                    name: '节点7',
                    x: 250,
                    y: 300
                }, {
                    name: '节点8',
                    x: 250,
                    y: 300
                }, {
                    name: '节点9',
                    x: 250,
                    y: 300
                }, {
                    name: '节点10',
                    x: 250,
                    y: 300
                }],
                // links: [],
                links: [{
                    source: '节点3',
                    target: '节点1'
                }, {
                    source: '节点3',
                    target: '节点2'
                }, {
                    source: '节点3',
                    target: '节点4'
                }, {
                    source: '节点3',
                    target: '节点5'
                }, {
                    source: '节点3',
                    target: '节点6'
                }, {
                    source: '节点3',
                    target: '节点7'
                }, {
                    source: '节点3',
                    target: '节点8'
                }, {
                    source: '节点3',
                    target: '节点9'
                }, {
                    source: '节点3',
                    target: '节点10'
                }],
                animation: true,
                markArea: {
                    animation: false
                },
                markPoint: {
                    symbol: 'arrow',
                },
                markLine: {
                    symbol: 'arrow',
                    precision: 5
                },

                lineStyle: {
                    normal: {
                        opacity: 0.9,
                        width: 2,
                        curveness: 0
                    }
                },
                force: {
                    repulsion: [0, 500],
                    edgeLength: [0, 200],
                    layoutAnimation: false,
                    //initLayout:'circle',
                    gravity: 0
                }
            }]
        };
        echartsMt.setOption(optionMt);
*/

        var echartsS5 = echarts.init(document.getElementById('tpl-echarts-S5'));
        optionS5 = {
            title: {
                subtext: 'S5的声量在18年1月最高',
            },
            tooltip: {
                trigger: 'axis',
                position: function(point, params, dom, rect, size) {
                    console.log(dom.clientWidth)
                },
            },
            xAxis: {
                data: ['2016年1月', '2016年5月', '2016年9月', '2017年1月', '2017年5月','2017年9月', '2018年1月', ]
            },
            legend: {
                align: 'right',
                data:['S5','A396'],
                textStyle: {
                    align: 'right',
                    baseline: 'middle',
                    fontFamily: 'IRANSans'
                }
            },
            yAxis: {},
            series: [{
                name: 'S5',
                type: 'line',
                data: [300, 582, 1191, 834, 690, 330, 6310]
            },
                {
                    name: 'A396',
                    type: 'line',
                    data: [300, 252, 891, 984, 449, 530, 410]
                }
            ]
        };
        echartsS5.setOption(optionS5);

        var echartsA396 = echarts.init(document.getElementById('tpl-echarts-A396'));
        optionA396 = {
            title: {
                subtext: 'A396的网络健康度在16年2月最底'
            },
            tooltip: {
                trigger: 'axis',
                position: function(point, params, dom, rect, size) {
                    console.log(dom.clientWidth)
                },
            },
            xAxis: {
                data: ['2016年1月', '2016年5月', '2016年9月', '2017年1月', '2017年5月','2017年9月', '2018年1月', ]
            },
            legend: {
                align: 'right',
                data:['S5','A396'],
                textStyle: {
                    align: 'right',
                    baseline: 'middle',
                    fontFamily: 'IRANSans'
                }
            },
            yAxis: {},
            series: [{
                name: 'S5',
                type: 'line',
                data: [50, 42, 51, 64, 59, 36, 73]
            },
                {
                    name: 'A396',
                    type: 'line',
                    data: [70, 32, 66, 84, 49, 43, 61]
                }
            ]
        };
        echartsA396.setOption(optionA396);

        var echartsK51 = echarts.init(document.getElementById('tpl-echarts-K51'));
        optionK51 = {
            title: {
                subtext: 'K5的声量对比在16年2月最底'
            },
            tooltip: {
                trigger: 'axis',
                position: function(point, params, dom, rect, size) {
                    console.log(dom.clientWidth)
                },
            },
            xAxis: {
                data: ['2016年1月', '2016年5月', '2016年9月', '2017年1月', '2017年5月','2017年9月', '2018年1月', ]
            },
            legend: {
                align: 'right',
                data:['S5','A396','K5','K320t'],
                textStyle: {
                    align: 'right',
                    baseline: 'middle',
                    fontFamily: 'IRANSans'
                }
            },
            yAxis: {},
            series: [{
                    name: 'S5',
                    type: 'line',
                    data: [1150, 2542, 3510, 5564, 14590, 836, 5473]
                },
                {
                    name: 'A396',
                    type: 'line',
                    data: [170, 432, 766, 84, 849, 743, 961]
                },
                {
                    name: 'K5',
                    type: 'line',
                    data: [150, 742, 951, 64, 1359, 936, 773]
                },
                {
                    name: 'K320t',
                    type: 'line',
                    data: [150, 642, 651, 864, 1159, 636, 573]
                },
            ]
        };
        echartsK51.setOption(optionK51);

        var echartsK52 = echarts.init(document.getElementById('tpl-echarts-K52'));
        optionK52 = {
            title: {
                subtext: 'K5的声量对比在16年2月最底'
            },
            tooltip: {
                trigger: 'axis',
                position: function(point, params, dom, rect, size) {
                    console.log(dom.clientWidth)
                },
            },
            xAxis: {
                data: ['2016年1月', '2016年5月', '2016年9月', '2017年1月', '2017年5月','2017年9月', '2018年1月', ]
            },
            legend: {
                align: 'right',
                data:['S5','A396','K5','K320t'],
                textStyle: {
                    align: 'right',
                    baseline: 'middle',
                    fontFamily: 'IRANSans'
                }
            },
            yAxis: {},
            series: [{
                    name: 'S5',
                    type: 'line',
                    data: [40, 42, 50, 54, 90, 36, 113]
                },
                {
                    name: 'A396',
                    type: 'line',
                    data: [50, -32, 76, 84, 49, 43, 61]
                },
                {
                    name: 'K5',
                    type: 'line',
                    data: [45, 42, 41, 84, 59, 66, 73]
                },
                {
                    name: 'K320t',
                    type: 'line',
                    data: [38, 42, 51, 64, 49, 36, 53]
                },
            ]
        };
        echartsK52.setOption(optionK52);

        var echartszuk1 = echarts.init(document.getElementById('tpl-echarts-zuk1'));
        optionzuk1 = {
            title: {
                subtext: 'zuk z2的声量在18年1月最高'
            },
            tooltip: {
                trigger: 'axis',
                position: function(point, params, dom, rect, size) {
                    console.log(dom.clientWidth)
                },
            },
            xAxis: {
                data: ['2016年1月', '2016年5月', '2016年9月', '2017年1月', '2017年5月','2017年9月', '2018年1月', ]
            },
            legend: {
                align: 'right',
                data:['zuk z2'],
                textStyle: {
                    align: 'right',
                    baseline: 'middle',
                    fontFamily: 'IRANSans'
                }
            },
            yAxis: {},
            series: [{
                    name: 'zuk z2',
                    type: 'line',
                    data: [300, 582, 791, 834, 690, 330,910]
                }
            ]
        };
        echartszuk1.setOption(optionzuk1);

        var echartszuk2 = echarts.init(document.getElementById('tpl-echarts-zuk2'));
        optionzuk2 = {
            title: {
                subtext: 'zuk z2的网络健康度在16年2月最底'
            },
            tooltip: {
                trigger: 'axis',
                position: function(point, params, dom, rect, size) {
                    console.log(dom.clientWidth)
                },
            },
            xAxis: {
                data: ['2016年1月', '2016年5月', '2016年9月', '2017年1月', '2017年5月','2017年9月', '2018年1月', ]
            },
            legend: {
                align: 'right',
                data:['zuk z2'],
                textStyle: {
                    align: 'right',
                    baseline: 'middle',
                    fontFamily: 'IRANSans'
                }
            },
            yAxis: {},
            series: [
                {
                    name: 'zuk z2',
                    type: 'line',
                    data: [70, 32, 66, 84, 49, 43, 61]
                }
            ]
        };
        echartszuk2.setOption(optionzuk2);

        var echartsA = echarts.init(document.getElementById('tpl-echarts-A'));
        optionA = {

            tooltip: {
                trigger: 'axis',
            },
            legend: {
                data: ['邮件', '媒体', '资源']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: true,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }],

            yAxis: [{
                type: 'value'
            }],
            series: [{
                    name: '邮件',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [120, 132, 101, 134, 90, 230, 210],
                    itemStyle: {
                        normal: {
                            color: '#59aea2'
                        },
                        emphasis: {

                        }
                    }
                },
                {
                    name: '媒体',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [220, 182, 191, 234, 290, 330, 310],
                    itemStyle: {
                        normal: {
                            color: '#e7505a'
                        }
                    }
                },
                {
                    name: '资源',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [150, 232, 201, 154, 190, 330, 410],
                    itemStyle: {
                        normal: {
                            color: '#32c5d2'
                        }
                    }
                }
            ]
        };
        echartsA.setOption(optionA);

    },

    // ===============================================
    // 声量和健康度
    // ===============================================
    'volume': function volumeData() {
        var echartsTotal = echarts.init(document.getElementById('tpl-echarts-Total'));
        optionTotal = {
            title: {
                x: 'center'
            },
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '10%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['2017年1月', '3月', '5月', '7月', '9月','11月', '2018年1月', '3月', '5月', '7月', '9月','11月','2018年1月'],
                axisTick: {
                    alignWithLabel: true
                }
            }],
            yAxis: [{
                name: '（声量）',
                type: 'value',
                min: 0
            }],
            series: [{
                name: '',
                type: 'bar',
                barWidth: '60%',
                data: [, , , , , , ,45, 32, 49, 71, 54, 68, 46],
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
            }]
        };
        echartsTotal.setOption(optionTotal);

        var echartsTotala = echarts.init(document.getElementById('tpl-echarts-Totala'));
        optionTotala = {
            title: {
                x: 'center'
            },
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '10%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['2017年1月', '3月', '5月', '7月', '9月','11月', '2018年1月', '3月', '5月', '7月', '9月','11月','2018年1月'],
                axisTick: {
                    alignWithLabel: true
                }
            }],
            yAxis: [{
                name: '（互动量）',
                type: 'value',
                min: 0
            }],
            series: [{
                name: '',
                type: 'bar',
                barWidth: '60%',
                data: [, , , , , , ,30, 38, 45, 81, 64, 71, 42],
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                }
            }]
        };
        echartsTotala.setOption(optionTotala);

        var echartsTota2 = echarts.init(document.getElementById('tpl-echarts-Tota2'));
        optionTota2 = {
            tooltip: {},
            legend: {
                data: ['']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataZoom : {show: true},
                    dataView : {show: true, readOnly: false},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            radar: {
                // shape: 'circle',
                indicator: [
                    { name: '品牌形象', max: 6500},
                    { name: '购买倾向', max: 6000},
                    { name: '品牌体验', max: 3000},
                    { name: '品牌沟通', max: 3800}
                ]
            },
            series: [{
                type: 'radar',
                // areaStyle: {normal: {}},
                data : [
                    {
                        value : [4300, 1500, 2100, 2500, 3000, 1900],
                        name : '品牌表现'
                    }
                ]
            }]
        };
        echartsTota2.setOption(optionTota2);

        var echartsTota3 = echarts.init(document.getElementById('tpl-echarts-Tota3'));
        optionTota3 = {
            color: ['#1F6ABB','#3897C5','#A4C5E6'],
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                x: 'left',
                padding: [10, 0, 0, 30],
                itemWidth: 18,
                data:['品牌形象','综艺节目','代言人']
            },
            grid: {
                left: '8%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    axisLabel :{
                        interval:0
                    }  ,
                    show:true,
                    barGap: 0,
                    //  boundaryGap: false,

                    padding:0,
                    barMaxWidth:1,
                    type: 'category',
                    data: ['2017年1月', '3月', '5月', '7月', '9月','11月', '2018年1月', '3月', '5月', '7月', '9月','11月','2018年1月'],
                    fontSize: 6,
                    scale: true,
                    lineStyle:2,
                    axisTick: {
                        alignWithLabel: false
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    barGap: 1,
                    padding: 0,
                    //barMaxWidth: 1,
                    axisLabel: {
                        //formatter: '{value}W'
                        formatter: '{value}'
                    },
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'品牌形象',
                    type:'bar',
                    data: [, , , , , , ,25, 32, 49, 71, 54, 68, 46],


                },
                {
                    name:'综艺节目',
                    type:'bar',
                    data: [, , , , , , ,65, 42, 59, 79, 44, 58, 66],
                },
                {
                    name:'代言人',
                    type:'bar',
                    data: [, , , , , , ,45, 52, 69, 61, 34, 48, 56],
                }

            ]
        };
        echartsTota3.setOption(optionTota3);

        var echartsTota4 = echarts.init(document.getElementById('tpl-echarts-Tota4'));
        optionTota4 = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['外观', '硬件', '性能', '系统']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['2017年1月', '3月', '5月', '7月', '9月','11月', '2018年1月', '3月', '5月', '7月', '9月','11月','2018年1月','3月'],
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '外观',
                    type: 'bar',
                    barWidth: '50%',
                    barGap: '-100%',
                    data: [, , , , , , ,25, 32, 49, 71, 54, 68, 46],
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    }
                }, {
                    name: '硬件',
                    type: 'bar',
                    barWidth: '50%',
                    stack: 'group1',
                    data: [, , , , , , ,25, 32, 49, 71, 54, 68, 46],
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    }
                }, {
                    name: '性能',
                    type: 'bar',
                    barWidth: '50%',
                    stack: 'group1',
                    data: [, , , , , , ,25, 132, 49, 71, 54, 68, 46],
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    }
                }, {
                    name: '系统',
                    type: 'bar',
                    barWidth: '50%',
                    stack: 'group1',
                    data: [, , , , , , ,125, 32, 49, 71, 54, 68, 46],
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    }
                }
            ]
        };
        echartsTota4.setOption(optionTota4);

        var echartsTota5 = echarts.init(document.getElementById('tpl-echarts-Tota5'));
        optionTota5 = {
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2017年1月', '3月', '5月', '7月', '9月','11月', '2018年1月', '3月', '5月', '7月', '9月','11月','2018年1月','3月'],
            },
            yAxis: {
                x: 'center',
                type: 'value',
            },
            series: [{
                name: '销量',
                type: 'line',
                data: [20, 39, 45, 28, 30, 65, 42,25, 32, 49, 71, 54, 68, 46],
            }]
        };
        echartsTota5.setOption(optionTota5);

        var echartsTota6 = echarts.init(document.getElementById('tpl-echarts-Tota6'));
        function randomData() {
            return Math.round(Math.random()*1000);
        }
        var data = [
            {name: '北京', value: [randomData(), 0] },
            {name: '天津', value: [randomData(), 1] },
            {name: '上海', value: [randomData(), 2] },
            {name: '重庆', value: [randomData(), 3] },
            {name: '河北', value: [randomData(), 4] },
            {name: '河南', value: [randomData(), 5] },
            {name: '云南', value: [randomData(), 6] }
        ];
        optionTota6 = {
            title: {
                text: 'ZUK Z2',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['iphone3','iphone4','iphone5']
            },
            visualMap: {
                type: 'piecewise',
                dimension: 1,
                pieces: [
                    {value: 0, color: '#c23531'},
                    {value: 1, color: '#2f4554'},
                    {value: 2, color: '#61a0a8'},
                    {value: 3, color: '#d48265'},
                    {value: 4, color: '#91c7ae'},
                    {value: 5, color: '#749f83'},
                    {value: 6, color: '#ca8622'}
                ],
                formatter: function (value) {
                    return data[value].name + '： ' + data[value].value[0];
                },
                right: 10,
                top: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    // right: 50,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: data
                }
            ]
        };
        echartsTota6.setOption(optionTota6);

        var echartsTota7 = echarts.init(document.getElementById('tpl-echarts-Tota7'));
        function randomData() {
            return Math.round(Math.random()*1000);
        }
        var data = [
            {name: '北京', value: [randomData(), 0] },
            {name: '天津', value: [randomData(), 1] },
            {name: '上海', value: [randomData(), 2] },
            {name: '重庆', value: [randomData(), 3] },
            {name: '河北', value: [randomData(), 4] },
            {name: '河南', value: [randomData(), 5] },
            {name: '云南', value: [randomData(), 6] }
        ];
        optionTota7 = {
            title: {
                text: 'ZUK Z2',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['iphone3','iphone4','iphone5']
            },
            visualMap: {
                type: 'piecewise',
                dimension: 1,
                pieces: [
                    {value: 0, color: '#c23531'},
                    {value: 1, color: '#2f4554'},
                    {value: 2, color: '#61a0a8'},
                    {value: 3, color: '#d48265'},
                    {value: 4, color: '#91c7ae'},
                    {value: 5, color: '#749f83'},
                    {value: 6, color: '#ca8622'}
                ],
                formatter: function (value) {
                    return data[value].name + '： ' + data[value].value[0];
                },
                right: 10,
                top: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    // right: 50,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: data
                }
            ]
        };
        echartsTota7.setOption(optionTota7);

        var echartsTota8 = echarts.init(document.getElementById('tpl-echarts-Tota8'));
        var size = 40;
        var yy = 100;
        var yy1 = 100;
        optionTota8 = {
            tooltip: {},
            legend: [{
                tooltip: {
                    show: true
                },
                selectedMode: 'false',
                top: 0,
                data: ['社区运营', '圈子营销', '品牌产品', '活动营销', '舆情监测', '广告促销', ]
            }],
            toolbox: {
                show: true,
                feature: {

                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            animationDuration: 3000,
            animationEasingUpdate: 'quinticInOut',
            series: [{
                name: '品牌传播',
                type: 'graph',
                layout: 'force',
                force: {
                    //initLayout: ...,
                    repulsion: 500,
                    gravity: 0.1,
                    edgeLength: 100,
                    layoutAnimation: true,
                },

                data: [{
                    "name": "社区运营",
                    x: 100,
                    y: yy,
                    "symbolSize": size,
                    "category": "节目源",
                    "draggable": "true",
                    "value": 100

                }, {
                    "name": "圈子营销",
                    "value": 200,
                    x: 200,
                    y: yy1,
                    "symbolSize": size,
                    "category": "圈子营销",
                    "draggable": "true"
                }, {
                    x: 300,
                    y: yy,
                    "name": "品牌产品",
                    "symbolSize": size,
                    "category": "品牌产品",
                    "draggable": "true",
                    "value": 1
                }, {
                    x: 300,
                    y: 300,
                    "name": "搜索引擎",
                    "symbolSize": 30,
                    "category": "品牌产品",
                    "draggable": "true",
                    "value": 1
                }, {
                    x: 300,
                    y: 300,
                    "name": "公众平台",
                    "symbolSize": 30,
                    "category": "品牌产品",
                    "draggable": "true",
                    "value": 1
                }, {
                    x: 400,
                    y: yy1,
                    "name": "活动营销",
                    "symbolSize": size,
                    "category": "活动营销",
                    "draggable": "true",
                    "value": 1
                }, {
                    x: 500,
                    y: yy,
                    "name": "舆情监测",
                    "symbolSize": size,
                    "category": "舆情监测",
                    "draggable": "true",
                    "value": 1
                }, {
                    x: 600,
                    y: yy1,
                    "name": "广告促销",
                    "symbolSize": size,
                    "category": "广告促销",
                    "draggable": "true",
                    "value": 1
                }, ],
                links: [{
                    "source": "社区运营",
                    "target": "圈子营销"
                }, {
                    "source": "圈子营销",
                    "target": "品牌产品"
                }, {
                    "source": "品牌产品",
                    "target": "活动营销"
                }, {
                    "source": "品牌产品",
                    "target": "公众平台"
                }, {
                    "source": "品牌产品",
                    "target": "搜索引擎"
                }, {
                    "source": "活动营销",
                    "target": "舆情监测"
                }, {
                    "source": "舆情监测",
                    "target": "广告促销"
                }, ],
                categories: [{
                    'name': '社区运营'
                }, {
                    'name': '品牌产品'
                }, {
                    'name': '活动营销'
                }, {
                    'name': '舆情监测'
                }, {
                    'name': '广告促销'
                }, {
                    'name': '圈子营销'
                }],
                roam: false,
                label: {
                    normal: {

                        show: true,
                        position: 'inside',
                        fontSize: 16,
                        fontStyle: '600',

                    }
                },

                lineStyle: {
                    normal: {
                        width: 6,
                        color: 'source',
                        curveness: 0,
                        type: "solid"
                    }
                }
            }]
        };
        echartsTota8.setOption(optionTota8);
    },

    // ===============================================
    // 品牌话题
    // ===============================================
    'brand-topic': function chartData() {
        var echarts_topic_a = echarts.init(document.getElementById('option_topic_a'));
        option_topic_a = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['微博', '微信', '新闻', '视频', '博客', '论坛'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'Lenovo S5',
                    type:'bar',
                    barWidth: '40%',
                    data:[52, 200, 234, 190, 130, 80]
                }
            ]
        };
        echarts_topic_a.setOption(option_topic_a);

        var echarts_topic_b = echarts.init(document.getElementById('option_topic_b'));
        option_topic_b = {
            legend: {
                top: 30,
                left:30,
                textStyle: {
                    color: '#000000',
                },
                data: ['热度']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '10%',
                containLabel: true
            },

            tooltip: {
                show: "true",
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            xAxis: {
                type: 'value',
                axisTick: {
                    show: true
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#000',
                    }
                },
                splitLine: {
                    show: true
                },
            },
            yAxis: [{
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#000000',
                    }
                },
                data: ['联想小新', '鹿晗', '有格青年', '回调小王子', '清晨的小鹿', '鹿晗微吧'
                    , '鹿晗新专辑','傻狍子', '鹿哈尼',]
            }

            ],
            series: [{
                name: '热度',
                type: 'bar',

                itemStyle: {
                    normal: {
                        show: true,
                        color: '#31b8e7',
                        barBorderRadius: 50,
                        borderWidth: 0,
                        borderColor: '#333',
                    }
                },
                barGap: '0%',
                barCategoryGap: '50%',
                data: [132,42,44,55,60,77,80,56,31]
            }]
        };
        echarts_topic_b.setOption(option_topic_b);
    },

    // ===============================================
    // 人群画像
    // ===============================================
    'portrait': function chartData() {
        var echarts_portrait_a = echarts.init(document.getElementById('option_portrait_a'));
        option_portrait_a = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['男', '女'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'占比',
                    type:'bar',
                    barWidth: '30%',
                    data:[92, 130]
                }
            ]
        };
        echarts_portrait_a.setOption(option_portrait_a);

        var echarts_portrait_b = echarts.init(document.getElementById('option_portrait_b'));
        option_portrait_b = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['21-25', '26-30'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'占比',
                    type:'bar',
                    barWidth: '30%',
                    data:[120, 100]
                }
            ]
        };
        echarts_portrait_b.setOption(option_portrait_b);

        var echarts_portrait_c = echarts.init(document.getElementById('option_portrait_c'));
        option_portrait_c = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['游戏', '影视','电子书','聊天','音乐'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'占比',
                    type:'bar',
                    barWidth: '30%',
                    data:[82, 70,32, 95,82]
                }
            ]
        };
        echarts_portrait_c.setOption(option_portrait_c);

        var echarts_portrait_d = echarts.init(document.getElementById('option_portrait_d'));
        option_portrait_d = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['家', '公司', '户外'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'占比',
                    type:'bar',
                    barWidth: '30%',
                    data:[94,60,75]
                }
            ]
        };
        echarts_portrait_d.setOption(option_portrait_d);
        var echarts_portrait_e = echarts.init(document.getElementById('option_portrait_e'));
        function randomData() {
            return Math.round(Math.random()*1000);
        }
        var data = [
            {name: '北京', value: [randomData(), 0] },
            {name: '天津', value: [randomData(), 1] },
            {name: '上海', value: [randomData(), 2] },
            {name: '重庆', value: [randomData(), 3] },
            {name: '河北', value: [randomData(), 4] },
            {name: '河南', value: [randomData(), 5] },
            {name: '云南', value: [randomData(), 6] }
        ];
        option_portrait_e = {

            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['iphone3','iphone4','iphone5']
            },
            visualMap: {
                type: 'piecewise',
                dimension: 1,
                pieces: [
                    {value: 0, color: '#c23531'},
                    {value: 1, color: '#2f4554'},
                    {value: 2, color: '#61a0a8'},
                    {value: 3, color: '#d48265'},
                    {value: 4, color: '#91c7ae'},
                    {value: 5, color: '#749f83'},
                    {value: 6, color: '#ca8622'}
                ],
                formatter: function (value) {
                    return data[value].name + '： ' + data[value].value[0];
                },
                right: 10,
                top: 'center'
            },
            series: [
                {
                    name: '人数占比',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    // right: 50,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: data
                }
            ]
        };
        echarts_portrait_e.setOption(option_portrait_e);

        var echarts_portrait_f = echarts.init(document.getElementById('option_portrait_f'));
        var option_portrait_f = {
            radar: {
                radius: '60%',
                splitNumber: 6,
                axisLine: {
                    lineStyle: {
                        color: '#006c87',
                        opacity: .2
                    }
                },
                name: {
                    formatter:'{value}',
                    textStyle: {
                        color:'#000'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#007250',
                        opacity: .2
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: 'rgba(17,105,127,0.2)',
                        opacity: 1,
                    }
                },
                indicator: [{
                    name: 'IOS',
                    max: 110
                }, {
                    name: 'Android',
                    max: 110
                }, {
                    name: 'windows phone',
                    max: 110
                }, {
                    name: 'bada',
                    max: 110
                }, {
                    name: 'meego',
                    max: 110
                }, {
                    name: '黑莓',
                    max: 110
                }]
            },
            series: [{
                type: 'radar',
                symbolSize: 0,
                areaStyle: {
                    normal: {
                        color: 'rgba(65, 186, 240,0.6)'
                    }
                },
                data: [{
                    value: [103.5, 105.6, 86.6, 72.6, 33.8, 5.9],
                    name: '品类分布',
                    symbolSize: 6
                }]
            }],
            color: ['#2196F3'],
        };
        echarts_portrait_f.setOption(option_portrait_f);


        var echarts_portrait_g = echarts.init(document.getElementById('option_portrait_g'));
        var option_portrait_g = {
            radar: {
                radius: '60%',
                splitNumber: 6,
                axisLine: {
                    lineStyle: {
                        color: '#006c87',
                        opacity: .2
                    }
                },
                name: {
                    formatter:'{value}',
                    textStyle: {
                        color:'#000'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#007250',
                        opacity: .2
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: 'rgba(17,105,127,0.2)',
                        opacity: 1
                    }
                },
                indicator: [{
                    name: '苹果',
                    max: 110
                }, {
                    name: '三星',
                    max: 110
                }, {
                    name: '华为',
                    max: 110
                }, {
                    name: 'oppo',
                    max: 110
                }, {
                    name: 'vivo',
                    max: 110
                }, {
                    name: '小米',
                    max: 110
                }]
            },
            series: [{
                type: 'radar',
                symbolSize: 0,
                areaStyle: {
                    normal: {
                        color: 'rgba(65, 186, 240,0.6)'
                    }
                },
                data: [{
                    value: [99.5, 82.6, 105.6, 98.6, 92.8, 85.9],
                    name: '品类分布',
                    symbolSize: 6
                }]
            }],
            color: ['#2196F3']
        };
        echarts_portrait_g.setOption(option_portrait_g);

        var echarts_portrait_h = echarts.init(document.getElementById('option_portrait_h'));
        option_portrait_h = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {d}%"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                top: 'center',
                data: ['中产百事通']
            },
            series : [
                {
                    name: '类目',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '50%'],
                    data:[
                        {value:1802, name:'中产百事通',itemStyle: {normal:{color: '#F1C0B1'}}}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        echarts_portrait_h.setOption(option_portrait_h);

        var echarts_portrait_i = echarts.init(document.getElementById('option_portrait_i'));
        option_portrait_i = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {d}%"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                top: 'center',
                data: ['个性自由侠','平凡布依族','随性合群派','中产百事通','拼搏顶梁柱','品味饕餮客','其他']
            },
            series : [
                {
                    name: '类目',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '50%'],
                    data:[
                        {value:1959, name:'个性自由侠',itemStyle: {normal:{color: '#EA9294'}}},
                        {value:1239, name:'平凡布依族',itemStyle: {normal:{color: '#949494'}}},
                        {value:2844, name:'随性合群派',itemStyle: {normal:{color: '#A4D2D5'}}},
                        {value:1802, name:'中产百事通',itemStyle: {normal:{color: '#F1C0B1'}}},
                        {value:1576, name:'拼搏顶梁柱',itemStyle: {normal:{color: '#BAD7CB'}}},
                        {value:19, name:'品味饕餮客',itemStyle: {normal:{color: '#8B99A1'}}},
                        {value:107, name:'其他',itemStyle: {normal:{color: '#E6B9C0'}}}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        echarts_portrait_i.setOption(option_portrait_i);
    },

    // ===============================================
    // 微博运营
    // ===============================================
    'micro-blog': function chartData() {
        var echarts_micro_a = echarts.init(document.getElementById('option_micro_a'));
        option_micro_a = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['微博点赞数']
            },

            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['2017-01', '2017-03', '2017-05', '2017-07', '2017-09', '2017-11', '2018-01', '2018-03']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} w'
                }
            },
            series: [
                {
                    name:'微博点赞数',
                    type:'line',
                    data:[0, 0, 0, 6500, 0, 0, 0, 0],
                    markPoint: {
                        data: [
                            {name: '周最低', value: 5,type:'max',
                                symbolSize:2,
                                label: {
                                    normal: {
                                        position: 'top',
                                        formatter: '最高点赞数:6500,日期:2017-07'
                                    }
                                }

                            }
                        ]
                    }
                }
            ]
        };
        echarts_micro_a.setOption(option_micro_a);

        var echarts_micro_b = echarts.init(document.getElementById('option_micro_b'));
        option_micro_b = {
            color: ["#37A2DA"],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['Motorola 粉丝数']
            },

            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['2017-01', '2017-03', '2017-05', '2017-07', '2017-09', '2017-11', '2018-01', '2018-03']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} w'
                }
            },
            series: [
                {
                    name:'Motorola 粉丝数',
                    type:'line',
                    data:[2700, 6780, 9020, 15000, 15500, 15000, 15000, 15000],
                    markPoint: {
                        data: [
                            {name: '', value: 5,type:'max',
                                symbolSize:2,
                                label: {
                                    normal: {
                                        position: 'top',
                                        formatter: 'Motorola最高粉丝数:15500,日期:2017-09'
                                    }
                                }

                            }
                        ]
                    }
                }
            ]
        };
        echarts_micro_b.setOption(option_micro_b);

        var echarts_micro_c = echarts.init(document.getElementById('option_micro_c'));
        option_micro_c = {
            color: ["#009688"],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['转发数']
            },

            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['2017-01', '2017-03', '2017-05', '2017-07', '2017-09', '2017-11', '2018-01', '2018-03']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name:'转发数',
                    type:'line',
                    data:[1200, 2880, 2920, 4500, 5102, 7060, 7200, 9410]
                }
            ]
        };
        echarts_micro_c.setOption(option_micro_c);

        var echarts_micro_d = echarts.init(document.getElementById('option_micro_d'));
        option_micro_d = {
            color: ["#ff9800"],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['转发数']
            },

            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['2017-01', '2017-03', '2017-05', '2017-07', '2017-09', '2017-11', '2018-01', '2018-03']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name:'转发数',
                    type:'line',
                    data:[0, 0, 0.15, 0.23, 0.64, 0.31, 0.47, 0.12]
                }
            ]
        };
        echarts_micro_d.setOption(option_micro_d);

        var echarts_micro_e = echarts.init(document.getElementById('option_micro_e'));
        var option_micro_e = {
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [{
                type: 'graph',
                tooltip: {},
                ribbonType: true,
                layout: 'circular',

                circular: {
                    rotateLabel: true
                },
                symbolSize: 30,
                roam: true,
                focusNodeAdjacency: true,

                label: {
                    normal: {
                        position: 'center',
                        fontWeight: 'bold',
                        formatter: '{b}',
                        normal: {
                            textStyle: {

                                fontFamily: '宋体'
                            }
                        }
                    }
                },

                edgeSymbol: ['circle'],
                edgeSymbolSize: [4, 10],
                edgeLabel: {
                    normal: {
                        textStyle: {
                            fontSize: 13,
                            fontWeight: 'bold',
                            fontFamily: '宋体'
                        }
                    }
                },

                itemStyle: {
                    normal: {
                        label: {
                            rotate: true,
                            show: true,
                            textStyle: {
                                color: '#333',
                                fontWeight: 'bold'
                            }
                        },
                        color: ["#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7"] /* 内的颜色#393f51，外的颜色#85d6f7 */
                    },
                    emphasis: {
                        label: {
                            show: true
                            // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                        }
                    }
                },

                data: [{
                    name: '摩托罗拉强势归来',
                    itemStyle: {
                        normal: {
                            color: '#393f51'
                        }
                    }
                }, {
                    name: '摩托罗拉发布会直播',
                    itemStyle: {
                        normal: {
                            color: '#393f51'
                        }
                    }
                }, {
                    name: '摩托罗拉新产品',
                    itemStyle: {
                        normal: {
                            color: '#393f51'
                        }
                    }
                }, {
                    name: '摩托罗拉回归中国',
                    itemStyle: {
                        normal: {
                            color: '#393f51'
                        }
                    }
                }, {
                    name: '摩托罗拉新产品发布会',
                    itemStyle: {
                        normal: {
                            color: '#393f51'
                        }
                    }
                }, {
                    name: '摩托罗拉重返中国',
                    itemStyle: {
                        normal: {
                            color: '#85d6f7'
                        }
                    }
                }, {
                    name: '摩托罗拉奏响新乐章',
                    itemStyle: {
                        normal: {
                            color: '#85d6f7'
                        }
                    }
                }, {
                    name: '今夜我们都是摩托罗拉',
                    itemStyle: {
                        normal: {
                            color: '#85d6f7'
                        }
                    }
                }, {
                    name: ' 摩托罗拉强势归来',
                    itemStyle: {
                        normal: {
                            color: '#85d6f7'
                        }
                    }
                }, {
                    name: ' 摩托罗拉奏响新乐章',
                    itemStyle: {
                        normal: {
                            color: '#85d6f7'
                        }
                    }
                }, {
                    name: ' 摩托罗拉新产品发布会',
                    itemStyle: {
                        normal: {
                            color: '#85d6f7'
                        }
                    }
                }, {
                    name: '1摩托罗拉强势归来',
                    itemStyle: {
                        normal: {
                            color: '#85d6f7'
                        }
                    }
                }, {
                    name: '新领袖',
                    itemStyle: {
                        normal: {
                            color: '#85d6f7'
                        }
                    }
                }, {
                    name: '创未来',
                    itemStyle: {
                        normal: {
                            color: '#85d6f7'
                        }
                    }
                }, {
                    name: 'lenovo',
                    itemStyle: {
                        normal: {
                            color: '#85d6f7'
                        }
                    }
                }, {
                    name: 'Motorola',
                    itemStyle: {
                        normal: {
                            color: '#85d6f7'
                        }
                    }
                }, {
                    name: '摩托罗拉',
                    itemStyle: {
                        normal: {
                            color: '#85d6f7'
                        }
                    }
                }],
                // links: [],
                links: [{
                    source: '阿森纳',
                    target: '默特萨克',
                    name: 'xxx',
                    tooltip: {
                        trigger: 'item',
                        formatter: function(params, ticket, callback) {
                            return params.data.name;
                        }
                    },
                    symbolSize: [5, 20],
                    label: {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                params.name = params.data.name;
                                return params.name;
                            },
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            curveness: 0.2,
                            color: '#fcae00'
                        }
                    }
                }, {
                    source: '阿森纳',
                    target: '厄齐尔',
                    name: 'xxx',
                    tooltip: {
                        trigger: 'item',
                        formatter: function(params, ticket, callback) {
                            return params.data.name;
                        }
                    },
                    symbolSize: [5, 20],
                    label: {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                params.name = params.data.name;
                                return params.name;
                            },
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            curveness: 0.2,
                            color: '#fcae00'
                        }
                    }
                }, {
                    source: '阿森纳',
                    target: '拜仁慕尼黑',
                    name: 'xxx',
                    tooltip: {
                        trigger: 'item',
                        formatter: function(params, ticket, callback) {
                            return params.data.name;
                        }
                    },
                    symbolSize: [5, 20],
                    label: {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                params.name = params.data.name;
                                return params.name;
                            },
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            curveness: 0.2,
                            color: '#fcae00'
                        }
                    }
                }, {
                    source: '阿森纳',
                    target: '多特蒙德',
                    name: 'xxx',
                    tooltip: {
                        trigger: 'item',
                        formatter: function(params, ticket, callback) {
                            return params.data.name;
                        }
                    },
                    symbolSize: [5, 20],
                    label: {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                params.name = params.data.name;
                                return params.name;
                            },
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            curveness: 0.2,
                            color: '#fcae00'
                        }
                    }
                }, {
                    source: '阿森纳',
                    target: '波多尔斯基',
                    name: 'xxx',
                    tooltip: {
                        trigger: 'item',
                        formatter: function(params, ticket, callback) {
                            return params.data.name;
                        }
                    },
                    symbolSize: [5, 20],
                    label: {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                params.name = params.data.name;
                                return params.name;
                            },
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            curveness: 0.2,
                            color: '#fcae00'
                        }
                    }
                }, {
                    source: '拜仁慕尼黑',
                    target: '诺伊尔',
                    name: 'yyy',
                    tooltip: {
                        trigger: 'item',
                        formatter: function(params, ticket, callback) {
                            return params.data.name;
                        }
                    },
                    symbolSize: [5, 20],
                    label: {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                params.name = params.data.name;
                                return params.name;
                            },
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            curveness: 0.2,
                            color: '#6c70c0'
                        }
                    }
                }, {
                    source: '拜仁慕尼黑',
                    target: '博阿滕',
                    name: 'yyy',
                    tooltip: {
                        trigger: 'item',
                        formatter: function(params, ticket, callback) {
                            return params.data.name;
                        }
                    },
                    symbolSize: [5, 20],
                    label: {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                params.name = params.data.name;
                                return params.name;
                            },
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            curveness: 0.2,
                            color: '#6c70c0'
                        }
                    }
                }, {
                    source: '拜仁慕尼黑',
                    target: '施魏因施泰格',
                    name: 'yyy',
                    tooltip: {
                        trigger: 'item',
                        formatter: function(params, ticket, callback) {
                            return params.data.name;
                        }
                    },
                    symbolSize: [5, 20],
                    label: {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                params.name = params.data.name;
                                return params.name;
                            },
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            curveness: 0.2,
                            color: '#6c70c0'
                        }
                    }
                }, {
                    source: '拜仁慕尼黑',
                    target: '拉姆',
                    name: 'yyy',
                    tooltip: {
                        trigger: 'item',
                        formatter: function(params, ticket, callback) {
                            return params.data.name;
                        }
                    },
                    symbolSize: [5, 20],
                    label: {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                params.name = params.data.name;
                                return params.name;
                            },
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            curveness: 0.2,
                            color: '#6c70c0'
                        }
                    }
                }, {
                    source: '拜仁慕尼黑',
                    target: '克罗斯',
                    name: 'yyy',
                    tooltip: {
                        trigger: 'item',
                        formatter: function(params, ticket, callback) {
                            return params.data.name;
                        }
                    },
                    symbolSize: [5, 20],
                    label: {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                params.name = params.data.name;
                                return params.name;
                            },
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            curveness: 0.2,
                            color: '#6c70c0'
                        }
                    }
                }, {
                    source: '拜仁慕尼黑',
                    target: '穆勒',
                    name: 'xxx',
                    tooltip: {
                        trigger: 'item',
                        formatter: function(params, ticket, callback) {
                            return params.data.name;
                        }
                    },
                    symbolSize: [5, 20],
                    label: {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                params.name = params.data.name;
                                return params.name;
                            },
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            curveness: 0.2,
                            color: '#fcae00'
                        }
                    }
                }, {
                    source: '拜仁慕尼黑',
                    target: '格策',
                    name: 'zzz',
                    tooltip: {
                        trigger: 'item',
                        formatter: function(params, ticket, callback) {
                            return params.data.name;
                        }
                    },
                    symbolSize: [5, 20],
                    label: {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                params.name = params.data.name;
                                return params.name;
                            },
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            curveness: 0.2,
                            color: '#37bfe9'
                        }
                    }
                }, {
                    source: '拜仁慕尼黑',
                    target: '多特蒙德',
                    name: 'zzz',
                    tooltip: {
                        trigger: 'item',
                        formatter: function(params, ticket, callback) {
                            return params.data.name;
                        }
                    },
                    symbolSize: [5, 20],
                    label: {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                params.name = params.data.name;
                                return params.name;
                            },
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            curveness: 0.2,
                            color: '#37bfe9'
                        }
                    }
                }, {
                    source: '多特蒙德',
                    target: '胡梅尔斯',
                    name: 'zzz',
                    tooltip: {
                        trigger: 'item',
                        formatter: function(params, ticket, callback) {
                            return params.data.name;
                        }
                    },
                    symbolSize: [5, 20],
                    label: {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                params.name = params.data.name;
                                return params.name;
                            },
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            curveness: 0.2,
                            color: '#37bfe9'
                        }
                    }
                }, {
                    source: '多特蒙德',
                    target: '魏登费勒',
                    name: 'zzz',
                    tooltip: {
                        trigger: 'item',
                        formatter: function(params, ticket, callback) {
                            return params.data.name;
                        }
                    },
                    symbolSize: [5, 20],
                    label: {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                params.name = params.data.name;
                                return params.name;
                            },
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            curveness: 0.2,
                            color: '#37bfe9'
                        }
                    }
                }, {
                    source: '多特蒙德',
                    target: '杜尔姆',
                    name: 'zzz',
                    tooltip: {
                        trigger: 'item',
                        formatter: function(params, ticket, callback) {
                            return params.data.name;
                        }
                    },
                    symbolSize: [5, 20],
                    label: {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                params.name = params.data.name;
                                return params.name;
                            },
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            curveness: 0.2,
                            color: '#37bfe9'
                        }
                    }
                }, {
                    source: '多特蒙德',
                    target: '格罗斯克罗伊茨',
                    name: 'zzz',
                    tooltip: {
                        trigger: 'item',
                        formatter: function(params, ticket, callback) {
                            return params.data.name;
                        }
                    },
                    symbolSize: [5, 20],
                    label: {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                params.name = params.data.name;
                                return params.name;
                            },
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            curveness: 0.2,
                            color: '#37bfe9'
                        }
                    }
                }


                ]
            }]
        };
        echarts_micro_e.setOption(option_micro_e);
    },

    // ===============================================
    // 微信运营
    // ===============================================
    'operation': function chartData() {
        var echarts_wechat_a = echarts.init(document.getElementById('wechat_a'));
        option_wechat_a = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['阅读数','获赞数']
            },
            toolbox: {
                show : true,
                feature : {
                    //mark : {show: true},
                    //dataView : {show: true, readOnly: false},
                    //magicType : {show: true, type: ['line', 'bar']},
                    //restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ["07-30","07-31", "08-01", "08-02", "08-03", "08-04", "08-05", "08-06", "08-07", "08-08", "08-09", "08-10", "08-11", "08-12", "08-13", "08-14", "08-15", "08-16", "08-17", "08-18", "08-19", "08-20", "08-21", "08-22", "08-23", "08-24", "08-25", "08-26", "08-27", "08-28", "08-29", "08-30", "08-31", "09-01", "09-02", "09-03", "09-04", "09-05", "09-06", "09-07", "09-08", "09-09", "09-10", "09-11", "09-12", "09-13", "09-14", "09-15", "09-16", "09-17", "09-18", "09-19", "09-20", "09-21", "09-22", "09-23", "09-24", "09-25", "09-26", "09-27", "09-28", "09-29", "09-30"]//['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value} '
                    }
                }
            ],
            series : [
                {
                    name:'阅读数',
                    type:'line',
                    data:[0,24, 12, 8, 2, 2, 8, 8, 4, 3, 1, 4, 2, 0, 1, 1, 3, 0, 1, 2, 2, 0, 0, 0, 1, 3, 4, 10, 2, 165, 8, 8, 3, 4, 17, 69, 7, 15, 7, 9, 3, 16, 11, 4, 2, 7, 1, 3, 1, 0, 1, 2, 1, 1, 5, 11, 7, 62, 21, 11, 63, 17, 11],
                    /*markPoint : {
                     data : [
                     {type : 'max', name: '最大值'},
                     {type : 'min', name: '最小值'}
                     ]
                     },
                     markLine : {
                     data : [
                     {type : 'average', name: '平均值'}
                     ]
                     }*/
                },
                {
                    name:'获赞数',
                    type:'line',
                    data:[0,34, 8, 11, 3, 0, 8, 7, 4, 2, 1, 1, 3, 0, 1, 1, 7, 0, 1, 0, 1, 0, 0, 2, 2, 6, 2, 10, 11, 190, 10, 8, 4, 8, 12, 76, 7, 13, 9, 18, 13, 28, 10, 8, 5, 1, 0, 4, 1, 0, 1, 0, 0, 1, 8, 10, 10, 111, 31, 10, 98, 17, 22],
                    /*markPoint : {
                     data : [
                     {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                     ]
                     },
                     markLine : {
                     data : [
                     {type : 'average', name : '平均值'}
                     ]
                     }*/
                }
            ]
        };
        echarts_wechat_a.setOption(option_wechat_a);
    },

    // ===============================================
    // 奥运专题
    // ===============================================
    'olympic': function chartData() {
        var echarts_olympic_a = echarts.init(document.getElementById('olympic_a'));
        option_olympic_a = {
            title : {
                subtext: '(声量)'
            },
            color: ['#0099ff'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['2017年1周','2017年2周','2017年3周','2017年4周','2017年5周','2017年1周','2017年6周','2017年7周','2017年8周','2017年9周','2017年10周','2017年11周','2017年12周'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    // type : 'category',
                    // data : ['10','20','30','40'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            series : [
                {
                    name:'面积统计',
                    type:'bar',
                    barWidth: '60%',
                    data:[11.43,22.43,0.05,8.83,6.63,74.06,17.82,28.68,10.27,20.35,10.24,39.13,28.63]
                },

            ],
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}'
                }
            },
            itemStyle: {
                normal: {

                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 153, 255, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(0, 153, 255, 0.1)'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            }
        };
        echarts_olympic_a.setOption(option_olympic_a);

        var echarts_olympic_b = echarts.init(document.getElementById('olympic_b'));
        function randomData() {
            return Math.round(Math.random()*1000);
        }
        var data = [
            {name: '北京', value: [randomData(), 0] },
            {name: '天津', value: [randomData(), 1] },
            {name: '上海', value: [randomData(), 2] },
            {name: '重庆', value: [randomData(), 3] },
            {name: '河北', value: [randomData(), 4] },
            {name: '河南', value: [randomData(), 5] },
            {name: '云南', value: [randomData(), 6] }
        ];
        option_olympic_b = {

            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['iphone3','iphone4','iphone5']
            },
            visualMap: {
                type: 'piecewise',
                dimension: 1,
                pieces: [
                    {value: 0, color: '#c23531'},
                    {value: 1, color: '#2f4554'},
                    {value: 2, color: '#61a0a8'},
                    {value: 3, color: '#d48265'},
                    {value: 4, color: '#91c7ae'},
                    {value: 5, color: '#749f83'},
                    {value: 6, color: '#ca8622'}
                ],
                formatter: function (value) {
                    return data[value].name + '： ' + data[value].value[0];
                },
                right: 10,
                top: 'center'
            },
            series: [
                {
                    name: '人数占比',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    // right: 50,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: data
                }
            ]
        };
        echarts_olympic_b.setOption(option_olympic_b);

        var echarts_olympic_c = echarts.init(document.getElementById('olympic_c'));
        option_olympic_c = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            color:["#888","#f9d"],
            legend: {
                data: ['占比', '占比']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            xAxis: {
                type: 'category',
                data: ['女','男' ]
            },
            series: [
                {
                    name: '占比',
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var colorList = [
                                    '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B'];
                                return colorList[params.dataIndex]
                            }
                        }
                    },
                    type: 'bar',
                    data: [18203,19325 ]
                }
            ]
        };
        echarts_olympic_c.setOption(option_olympic_c);

        var echarts_olympic_d = echarts.init(document.getElementById('olympic_d'));
        option_olympic_d = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['12岁以下', '13-18岁', '19-24岁', '25岁-34岁', '35-50岁', '51-80岁',],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'区域占比',
                    type:'bar',
                    barWidth: '60%',
                    data:[5000, 10000, 70000, 85000, 70000, 30000]
                }
            ]
        };
        echarts_olympic_d.setOption(option_olympic_d);
    },

    // ===============================================综艺节目
    // 概述
    // ===============================================
    'summary': function indexData() {
        var echarts_summary_a = echarts.init(document.getElementById('summary_a'));
        option_summary_a = {
            legend: {
                top:'10',
                data: ['最强大脑','无限歌谣季', '热血街舞团']
            },
            grid:{
                bottom:'15%',
                right:'8%',
                left:'8%',
                top:'15%'
            },
            xAxis: {
                splitLine: {
                    lineStyle: {
                        show:true,
                        type: 'dashed'
                    }
                },"axisLabel": {
                    "interval": 0,
                    rotate:40,
                    textStyle:{
                        fontSize:12,
                        color:'#ed4e6e'
                    },},
                data: ['10000', '20000', '30000', '40000']
            },
            yAxis: {
                name:'互动量(万)',
                max:1000,
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>{a}:{c}(万元)'

            },
            series: [{
                name:'最强大脑',
                symbolSize: function (data) {
                    return Math.sqrt(data) * 2;
                },
                type: 'scatter',
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(164,298, 250)'
                }, {
                    offset: 1,
                    color: 'rgb(33, 207, 209)'
                }]),
                data:[141,131,340,248]
            },{
                name:'热血街舞团',
                symbolSize: function (data) {
                    return Math.sqrt(data) * 2;
                },
                type: 'scatter',
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(184,134,11)'
                }]),
                data:[441,531,340,618]
            },{
                name:'无限歌谣季',
                symbolSize: function (data) {
                    return Math.sqrt(data) * 2;
                },
                type: 'scatter',
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(154, 255, 154)'
                }, {
                    offset: 1,
                    color: 'rgb(0,252, 0)'
                }]),
                data:[868,454,578,756]
            }]
        };
        echarts_summary_a.setOption(option_summary_a);

        var echarts_summary_b = echarts.init(document.getElementById('summary_b'));
        option_summary_b = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['最强大脑','无限歌谣季','热血街舞团']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                show : true,
                feature: {
                    saveAsImage: {show:true}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data:  ["07-30","07-31", "08-01", "08-02", "08-03", "08-04", "08-05", "08-06", "08-07", "08-08", "08-09", "08-10", "08-11", "08-12", "08-13", "08-14", "08-15", "08-16", "08-17", "08-18", "08-19", "08-20", "08-21", "08-22", "08-23", "08-24", "08-25", "08-26", "08-27", "08-28", "08-29", "08-30", "08-31", "09-01", "09-02", "09-03", "09-04", "09-05", "09-06", "09-07", "09-08", "09-09", "09-10", "09-11", "09-12", "09-13", "09-14", "09-15", "09-16", "09-17", "09-18", "09-19", "09-20", "09-21", "09-22", "09-23", "09-24", "09-25", "09-26", "09-27", "09-28", "09-29", "09-30"]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'最强大脑',
                    type:'line',
                    stack: '总量',
                    data:[100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 6, 184, 8, 8, 3, 100, 3, 5, 1, 2, 1, 1, 2, 100, 100, 1, 100, 100, 100, 100, 100, 100, 100, 100, 100, 1, 100, 100, 100, 100, 1, 100, 2, 1, 1]
                },
                {
                    name:'无限歌谣季',
                    type:'line',
                    stack: '总量',
                    //data:[],
                    data:[100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 9, 10100, 21, 5, 46, 11, 6]
                },
                {
                    name:'热血街舞团',
                    type:'line',
                    stack: '总量',
                    //data:[],
                    data:[100, 34, 7, 11, 3, 100, 7, 6, 4, 2, 1, 1, 3, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 1, 1, 100, 1, 2, 2, 4, 2, 100, 100, 2, 100, 2, 1, 4, 100, 100, 1, 1, 1, 1, 100, 100, 100, 1, 100, 100, 100, 100, 100, 100, 1, 100, 100, 100, 1, 100, 1, 100, 2]
                }

            ]
        };
        echarts_summary_b.setOption(option_summary_b);

        var echarts_summary_c = echarts.init(document.getElementById('summary_c'));
        function randomData() {
            return Math.round(Math.random()*1000);
        }
        var data = [
            {name: '北京', value: [randomData(), 0] },
            {name: '天津', value: [randomData(), 1] },
            {name: '上海', value: [randomData(), 2] },
            {name: '重庆', value: [randomData(), 3] },
            {name: '河北', value: [randomData(), 4] },
            {name: '河南', value: [randomData(), 5] },
            {name: '云南', value: [randomData(), 6] }
        ];
        option_summary_c = {

            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['iphone3','iphone4','iphone5']
            },
            visualMap: {
                type: 'piecewise',
                dimension: 1,
                pieces: [
                    {value: 0, color: '#c23531'},
                    {value: 1, color: '#2f4554'},
                    {value: 2, color: '#61a0a8'},
                    {value: 3, color: '#d48265'},
                    {value: 4, color: '#91c7ae'},
                    {value: 5, color: '#749f83'},
                    {value: 6, color: '#ca8622'}
                ],
                formatter: function (value) {
                    return data[value].name + '： ' + data[value].value[0];
                },
                right: 10,
                top: 'center'
            },
            series: [
                {
                    name: '人数占比',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    // right: 50,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: data
                }
            ]
        };
        echarts_summary_c.setOption(option_summary_c);

        var echarts_summary_d = echarts.init(document.getElementById('summary_d'));
        function randomData() {
            return Math.round(Math.random()*1000);
        }
        var data = [
            {name: '北京', value: [randomData(), 0] },
            {name: '天津', value: [randomData(), 1] },
            {name: '上海', value: [randomData(), 2] },
            {name: '重庆', value: [randomData(), 3] },
            {name: '河北', value: [randomData(), 4] },
            {name: '河南', value: [randomData(), 5] },
            {name: '云南', value: [randomData(), 6] }
        ];
        option_summary_d = {

            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['iphone3','iphone4','iphone5']
            },
            visualMap: {
                type: 'piecewise',
                dimension: 1,
                pieces: [
                    {value: 0, color: '#c23531'},
                    {value: 1, color: '#2f4554'},
                    {value: 2, color: '#61a0a8'},
                    {value: 3, color: '#d48265'},
                    {value: 4, color: '#91c7ae'},
                    {value: 5, color: '#749f83'},
                    {value: 6, color: '#ca8622'}
                ],
                formatter: function (value) {
                    return data[value].name + '： ' + data[value].value[0];
                },
                right: 10,
                top: 'center'
            },
            series: [
                {
                    name: '人数占比',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    // right: 50,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: data
                }
            ]
        };
        echarts_summary_d.setOption(option_summary_d);

        var echarts_summary_e = echarts.init(document.getElementById('summary_e'));
        option_summary_e = {
            color: ['#3398DB','#675bba'],
            tooltip : {
                trigger: 'axis',
                formatter: "{a}<br>{b}:{c}",
                axisPointer: {
                    type: 'cross'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    name: '档期',
                    data : ['第1期', '第2期', '第3期', '第4期', '第5期', '第6期'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name:'贡献度'
                }
            ],
            series : [
                {
                    name:'贡献度',
                    type:'bar',
                    barWidth: '30%',
                    data:[10, 52, 100, 60, 50,89]
                },
                {
                    name:'贡献度',
                    type:'line',

                    data:[10, 52, 100, 60, 50,76]
                }
            ]
        };
        echarts_summary_e.setOption(option_summary_e);

        var echarts_summary_f = echarts.init(document.getElementById('summary_f'));
        var colors = ['#5793f3', '#d14a61', '#675bba', 'black'];
        option_summary_f = {
            color: colors,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            grid: {
                right: '30%'
            },
            toolbox: {
                feature: {
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            legend: {
                data: ['睿智不凡', '有容乃大', '发烧而生', '照亮你的美']
            },
            xAxis: [{
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }],
            yAxis: [{
                type: 'value',
                name: '睿智不凡',
                min: 0,
                max: 100,
                position: 'right',
                axisLine: {
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value} %'
                }
            }, {
                type: 'value',
                name: '有容乃大',
                min: 0,
                max: 100,
                position: 'right',
                offset: 80,
                axisLine: {
                    lineStyle: {
                        color: colors[3]
                    }
                },
                axisLabel: {
                    formatter: '{value} %'
                }
            }, {
                type: 'value',
                name: '发烧而生',
                min: 0,
                max: 100,
                position: 'right',
                offset: 160,
                axisLine: {
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisLabel: {
                    formatter: '{value} %'
                }
            }, {
                type: 'value',
                name: '声量(条)',
                min: 0,
                max: 100,
                position: 'left',
                axisLine: {
                    lineStyle: {
                        color: colors[2]
                    }
                },
                axisLabel: {
                    formatter: '{value}'
                }
            }],
            series: [{
                name: '睿智不凡',
                type: 'bar',
                data: [20.0, 40.9, 70.0, 23.2, 50.6, 60.7, 35.6, 60.2, 32.6, 20.0, 60.4, 30.3]
            }, {
                name: '有容乃大',
                type: 'bar',
                yAxisIndex: 1,
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3]
            }, {
                name: '发烧而生',
                type: 'bar',
                yAxisIndex: 2,
                data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }, {
                name: '照亮你的美',
                type: 'bar',
                yAxisIndex: 3,
                data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }]
        };
        echarts_summary_f.setOption(option_summary_f);

        var echarts_summary_g = echarts.init(document.getElementById('summary_g'));
        option_summary_g = {
            color: ['#3398DB','#675bba'],
            tooltip : {
                trigger: 'axis',
                formatter: "{a}<br>{b}:{c}",
                axisPointer: {
                    type: 'cross'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    name: '档期',
                    data : ['第1期', '第2期', '第3期', '第4期', '第5期', '第6期'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name:'贡献度',
                    position: 'right',
                    axisLine: {
                        lineStyle: {
                            color: colors[0]
                        }
                    },
                    axisLabel: {
                        formatter: '{value} %'
                    }
                }
            ],
            series : [
                {
                    name:'贡献度',
                    type:'bar',
                    barWidth: '30%',
                    data:[20, 72,80, 60, 70,69]
                },
                {
                    name:'贡献度',
                    type:'line',

                    data:[10, 62, 70, 30, 40,56]
                }
            ]
        };
        echarts_summary_g.setOption(option_summary_g);

        var echarts_summary_h = echarts.init(document.getElementById('summary_h'));
        option_summary_h = {
            backgroundColor: "#ffffff",
            color: ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8"],
            tooltip: {
                trigger: 'item',
                formatter: ""
            },
            calculable: true,
            series: [{
                name: '分析值',
                type: 'funnel',
                left: 100,
                right: 100,
                min: 0,
                maxSize: '100%',
                sort: 'descending',
                gap: 2,
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    },
                },
                labelLine: {
                    normal: {
                        length: 10,
                        lineStyle: {
                            width: 1,
                            type: 'solid'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                },
                data: [{
                    value: 10,
                    name: '节目10%'
                },
                    {
                        value: 20,
                        name: '品牌&节目20%'
                    },
                    {
                        value: 30,
                        name: '品牌&节目&正向30%'
                    }
                ]
            }]
        };
        echarts_summary_h.setOption(option_summary_h);

        var echarts_summary_i = echarts.init(document.getElementById('summary_i'));
        option_summary_i = {
            backgroundColor: "#ffffff",
            color: ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8"],
            tooltip: {
                trigger: 'item',
                formatter: ""
            },
            calculable: true,
            series: [{
                name: '分析值',
                type: 'funnel',
                left: 100,
                right: 100,
                min: 0,
                maxSize: '100%',
                sort: 'descending',
                gap: 2,
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                labelLine: {
                    normal: {
                        length: 10,
                        lineStyle: {
                            width: 1,
                            type: 'solid'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                },
                data: [{
                    value: 10,
                    name: '节目15%'
                },
                    {
                        value: 20,
                        name: '品牌&节目26%'
                    },
                    {
                        value: 30,
                        name: '品牌&节目&正向31%'
                    }
                ]
            }]
        };
        echarts_summary_i.setOption(option_summary_i);
    },

    // ===============================================
    // 节目舆情
    // ===============================================
    'sentiment': function indexData() {
        var echarts_sentiment_a = echarts.init(document.getElementById('sentiment_a'));
        option_sentiment_a = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['无限歌谣季']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['02-24', '03-03', '03-10', '03-17', '03-24'],
                splitLine: { //设置X轴的网格
                    show: true,
                    interval: 'auto'
                },
                axisLine: { //设置X轴的颜色
                    lineStyle: {
                        color: '#000'
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLine: { //设置y轴的颜色
                    lineStyle: {
                        color: '#000'
                    }
                }
            },
            series: [{
                name: '无限歌谣季',
                type: 'line',
                stack: '总量',
                smooth: true, //点与点之间的幅度,false为直线
                label: { //设置点数据的提示
                    normal: {
                        show: true,
                        position: 'bottom'
                    }
                },
                data: [60, 42, 101, 134, 90],
                markPoint: { //设置最大值和最小值
                    data: [{
                        type: 'max',
                        name: '最大值'
                    }, {
                        type: 'min',
                        name: '最小值'
                    }]
                }

            }]
        };
        echarts_sentiment_a.setOption(option_sentiment_a);

        var echarts_sentiment_b = echarts.init(document.getElementById('sentiment_b'));
        option_sentiment_b = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['无限歌谣季']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['02-24', '03-03', '03-10', '03-17', '03-24'],
                splitLine: { //设置X轴的网格
                    show: true,
                    interval: 'auto'
                },
                axisLine: { //设置X轴的颜色
                    lineStyle: {
                        color: '#000'
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLine: { //设置y轴的颜色
                    lineStyle: {
                        color: '#000'
                    }
                }
            },
            series: [{
                name: '无限歌谣季',
                type: 'line',
                stack: '总量',
                smooth: true, //点与点之间的幅度,false为直线
                label: { //设置点数据的提示
                    normal: {
                        show: true,
                        position: 'bottom'
                    }
                },
                data: [20, 32, 51, 84, 30],
                markPoint: { //设置最大值和最小值
                    data: [{
                        type: 'max',
                        name: '最大值'
                    }, {
                        type: 'min',
                        name: '最小值'
                    }]
                }

            }]
        };
        echarts_sentiment_b.setOption(option_sentiment_b);

        var echarts_sentiment_c = echarts.init(document.getElementById('sentiment_c'));
        function randomData() {
            return Math.round(Math.random()*1000);
        }
        var data = [
            {name: '北京', value: [randomData(), 0] },
            {name: '天津', value: [randomData(), 1] },
            {name: '上海', value: [randomData(), 2] },
            {name: '重庆', value: [randomData(), 3] },
            {name: '河北', value: [randomData(), 4] },
            {name: '河南', value: [randomData(), 5] },
            {name: '云南', value: [randomData(), 6] }
        ];
        option_sentiment_c = {

            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['iphone3','iphone4','iphone5']
            },
            visualMap: {
                type: 'piecewise',
                dimension: 1,
                pieces: [
                    {value: 0, color: '#c23531'},
                    {value: 1, color: '#2f4554'},
                    {value: 2, color: '#61a0a8'},
                    {value: 3, color: '#d48265'},
                    {value: 4, color: '#91c7ae'},
                    {value: 5, color: '#749f83'},
                    {value: 6, color: '#ca8622'}
                ],
                formatter: function (value) {
                    return data[value].name + '： ' + data[value].value[0];
                },
                right: 10,
                top: 'center'
            },
            series: [
                {
                    name: '人数占比',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    // right: 50,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: data
                }
            ]
        };
        echarts_sentiment_c.setOption(option_sentiment_c);

        var echarts_sentiment_d = echarts.init(document.getElementById('sentiment_d'));
        option_sentiment_d = {
            color: ['#f9c5ad', '#fff581','#bfdc99', '#b9e3f9','#7ecdf4', '#fffac6'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['微博','新闻','论坛','微信','博客','视频']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['第1期','第2期','第3期','第4期','第5期','第6期']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} 声量'
                    }
                }
            ],
            series: [
                {
                    name:'微博',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[50, 182, 174, 103, 93, 146]
                },
                {
                    name:'新闻',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[42, 173, 150, 82, 85, 139]
                },
                {
                    name:'论坛',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[42, 173, 150, 82, 85, 139]
                },
                {
                    name:'微信',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[42, 173, 150, 82, 85, 139]
                },{
                    name:'博客',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[42, 468, 150, 82, 85, 139]
                },{
                    name:'视频',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[142, 573, 253, 182, 285, 139]
                }
            ]
        };
        echarts_sentiment_d.setOption(option_sentiment_d);

        var echarts_sentiment_e = echarts.init(document.getElementById('sentiment_e'));
        option_sentiment_e = {
            color: ['#f9c5ad', '#fff581','#bfdc99', '#b9e3f9','#7ecdf4', '#fffac6'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['微博','新闻','论坛','微信','博客','视频']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['第1期','第2期','第3期','第4期','第5期','第6期']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} 声量'
                    }
                }
            ],
            series: [
                {
                    name:'微博',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[50, 282, 74, 303, 93, 46]
                },
                {
                    name:'新闻',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[142, 173, 350, 182, 85, 139]
                },
                {
                    name:'论坛',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[42, 173, 110, 182, 85, 139]
                },
                {
                    name:'微信',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[42, 173, 550, 82, 85, 139]
                },{
                    name:'博客',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[142, 468, 150, 82, 285, 139]
                },{
                    name:'视频',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[142, 573, 253, 282, 85, 39]
                }
            ]
        };
        echarts_sentiment_e.setOption(option_sentiment_e);
    },

    // ===============================================
    // 品牌关联
    // ===============================================
    'relation': function indexData() {
        var echarts_relation_a = echarts.init(document.getElementById('relation_a'));
        option_relation_a = {
            color: ['#f9c5ad', '#fff581','#bfdc99', '#b9e3f9','#7ecdf4', '#fffac6'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['oppo共同提及','华为共同提及','拼多多共同提及','联想共同提及','百度贴吧共同提及','途牛共同提及']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['第1期','第2期','第3期','第4期','第5期','第6期']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} 声量'
                    }
                }
            ],
            series: [
                {
                    name:'oppo共同提及',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[50, 282, 74, 303, 93, 46]
                },
                {
                    name:'华为共同提及',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[142, 173, 350, 182, 85, 139]
                },
                {
                    name:'拼多多共同提及',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[42, 173, 110, 182, 85, 139]
                },
                {
                    name:'联想共同提及',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[42, 173, 550, 82, 85, 139]
                },{
                    name:'百度贴吧共同提及',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[142, 468, 150, 82, 285, 139]
                },{
                    name:'途牛共同提及',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[142, 573, 253, 282, 85, 39]
                }
            ]
        };
        echarts_relation_a.setOption(option_relation_a);

        var echarts_relation_b = echarts.init(document.getElementById('relation_b'));
        option_relation_b = {
            tooltip : {
                trigger: 'item',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data :  ['oppo','华为','拼多多','联想','百度'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    type:'bar',
                    barWidth: '60px',
                    data:[10, 52, 200, 334, 330],
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var colorList = [
                                    '#91c7ae','#c23531', '#2f4554', '#61a0a8',
                                    '#d48265'
                                ];
                                return colorList[params.dataIndex]
                            }
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'
                        }
                    }

                }

            ]
        };
        echarts_relation_b.setOption(option_relation_b);

        var echarts_relation_c = echarts.init(document.getElementById('relation_c'));
        option_relation_c = {
            color: ['#f9c5ad', '#fff581','#bfdc99', '#b9e3f9','#7ecdf4', '#fffac6'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['oppo共同提及','华为共同提及','拼多多共同提及','联想共同提及','百度贴吧共同提及','途牛共同提及']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['第1期','第2期','第3期','第4期','第5期','第6期']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} 声量'
                    }
                }
            ],
            series: [
                {
                    name:'oppo共同提及',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[150, 182, 174, 233, 193, 46]
                },
                {
                    name:'华为共同提及',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[142, 173, 450, 122, 85, 239]
                },
                {
                    name:'拼多多共同提及',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[42, 173, 140, 122, 85, 139]
                },
                {
                    name:'联想共同提及',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[42, 173, 240, 82, 85, 139]
                },{
                    name:'百度贴吧共同提及',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[142, 213, 50, 82, 385, 139]
                },{
                    name:'途牛共同提及',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[182, 273, 353, 282, 85, 139]
                }
            ]
        };
        echarts_relation_c.setOption(option_relation_c);

        var echarts_relation_d = echarts.init(document.getElementById('relation_d'));
        option_relation_d = {
            xAxis: {
                data: ['第1期', '第2期', '第3期', '第4期', '第5期', '第6期']
            },
            tooltip: {
                trigger: 'axis',
            },
            yAxis: {},
            series: [{
                type: 'line',
                symbolSize: 10,
                data:[{
                    value: 220,
                    symbol: 'triangle'
                }, {
                    value: 182,
                    symbol: 'rect'
                }, 191, 234, 290, 330]
            }]
        };
        echarts_relation_d.setOption(option_relation_d);

        var echarts_relation_e = echarts.init(document.getElementById('relation_e'));
        var option_relation_e = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor:'rgba(255,255,255,0.8)',
                        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
                        textStyle:{
                            color:'#666',},
                    },
                },
                backgroundColor:'rgba(255,255,255,0.8)',
                extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
                textStyle:{
                    color:'#666',
                },
            },
            toolbox: {
                feature: {
                    magicType: {show: true, type: ['bar','line']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            grid: {
                top: '100',
                left: '3%',
                right: '4%',
                bottom: '50',
                containLabel: true
            },
            legend: {
                data:['无限歌谣季&vivo','vivo&无限歌谣季贡献度'],
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,//坐标轴两边留白
                    data: ['第1期', '第2期', '第3期', '第4期', '第5期'],
                    axisLabel: { //坐标轴刻度标签的相关设置。
                        interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                        //rotate:-30,
                        textStyle: {
                            color: '#666',
                            fontStyle: 'normal',
                        }
                    },
                    axisLine:{//坐标轴轴线相关设置
                        lineStyle:{
                            color:'#666',
                            opacity:1
                        }
                    },
                    splitLine: { //坐标轴在 grid 区域中的分隔线。
                        show: false,
                    }
                }
            ],
            yAxis: [
                {   name: '声量（条）',
                    type: 'value',
                    axisLabel: {
                        textStyle: {
                            color: '#666',
                        }
                    },
                    axisLine:{
                        show: false
                    },
                    axisTick:{
                        show: false
                    },
                    splitLine: {
                        show: false,
                    }

                },{   name: '贡献度（%）',
                    type: 'value',
                    position: 'right',
                    axisLabel: {
                        textStyle: {
                            color: '#666',
                            fontStyle: 'normal',
                        }
                    },
                    axisLine:{
                        show: false
                    },
                    axisTick:{
                        show: false
                    },
                    splitLine: {
                        show: false,
                    }
                }
            ],
            series : [
                {
                    name:'无限歌谣季&vivo',
                    type:'bar',
                    data:[61, 48, 45,23, 11],
                    barGap:0.2,//柱间距离
                    barWidth: 80,
                    label: {//图形上的文本标签
                        normal: {
                            show: false,
                            position: 'top',
                            textStyle: {
                                fontStyle: 'normal',
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#229aff'},
                                    {offset: 1, color: '#13bfe8'}
                                ]
                            )
                        }}
                },
                {
                    name:'vivo&无限歌谣季贡献度',
                    type:'line',
                    'yAxisIndex': 1,
                    showAllSymbol: true,
                    symbolSize:10,
                    data:[ 49, 13, 24, 23, 11],
                    barGap:0.2,//柱间距离
                    label: {//图形上的文本标签
                        normal: {
                            show: false,
                            position: 'top',
                            textStyle: {
                                fontStyle: 'normal',
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color:'#fdb94e'},
                    },
                }
            ]
        };
        echarts_relation_e.setOption(option_relation_e);

        var echarts_relation_f = echarts.init(document.getElementById('relation_f'));
        var option_relation_f = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor:'rgba(255,255,255,0.8)',
                        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
                        textStyle:{
                            color:'#666',},
                    },
                },
                backgroundColor:'rgba(255,255,255,0.8)',
                extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
                textStyle:{
                    color:'#666',
                },
            },
            toolbox: {
                feature: {
                    magicType: {show: true, type: ['bar','line']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            grid: {
                top: '100',
                left: '3%',
                right: '4%',
                bottom: '50',
                containLabel: true
            },
            legend: {
                data:['无限歌谣季(当期)','无限歌谣季贡献度(累计)'],
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,//坐标轴两边留白
                    data: ['第1期', '第2期', '第3期', '第4期', '第5期'],
                    axisLabel: { //坐标轴刻度标签的相关设置。
                        interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                        //rotate:-30,
                        textStyle: {
                            color: '#666',
                            fontStyle: 'normal',
                        }
                    },
                    axisLine:{//坐标轴轴线相关设置
                        lineStyle:{
                            color:'#666',
                            opacity:1
                        }
                    },
                    splitLine: { //坐标轴在 grid 区域中的分隔线。
                        show: false,
                    }
                }
            ],
            yAxis: [
                {   name: '声量（条）',
                    type: 'value',
                    axisLabel: {
                        textStyle: {
                            color: '#666',
                        }
                    },
                    axisLine:{
                        show: false
                    },
                    axisTick:{
                        show: false
                    },
                    splitLine: {
                        show: false,
                    }

                },{   name: '无限歌谣季(当期)',
                    type: 'value',
                    position: 'right',
                    axisLabel: {
                        textStyle: {
                            color: '#666',
                            fontStyle: 'normal',
                        }
                    },
                    axisLine:{
                        show: false
                    },
                    axisTick:{
                        show: false
                    },
                    splitLine: {
                        show: false,
                    }
                }
            ],
            series : [
                {
                    name:'无限歌谣季贡献度(累计)',
                    type:'bar',
                    data:[0, 0, 0,80, 104],
                    barGap:0.2,//柱间距离
                    barWidth: 80,
                    label: {//图形上的文本标签
                        normal: {
                            show: false,
                            position: 'top',
                            textStyle: {
                                fontStyle: 'normal',
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#229aff'},
                                    {offset: 1, color: '#13bfe8'}
                                ]
                            )
                        }}
                },
                {
                    name:'vivo&无限歌谣季贡献度',
                    type:'line',
                    'yAxisIndex': 1,
                    showAllSymbol: true,
                    symbolSize:10,
                    data:[ 0, 0, 0, 96, 141],
                    barGap:0.2,//柱间距离
                    label: {//图形上的文本标签
                        normal: {
                            show: false,
                            position: 'top',
                            textStyle: {
                                fontStyle: 'normal',
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color:'#fdb94e'},
                    },
                }
            ]
        };
        echarts_relation_f.setOption(option_relation_f);

        var echarts_relation_g = echarts.init(document.getElementById('relation_g'));
        var option_relation_g = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor:'rgba(255,255,255,0.8)',
                        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
                        textStyle:{
                            color:'#666',},
                    },
                },
                backgroundColor:'rgba(255,255,255,0.8)',
                extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
                textStyle:{
                    color:'#666',
                },
            },
            toolbox: {
                feature: {
                    magicType: {show: true, type: ['bar','line']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            grid: {
                top: '100',
                left: '3%',
                right: '4%',
                bottom: '50',
                containLabel: true
            },
            legend: {
                data:['无限歌谣季(当期)','无限歌谣季贡献度(累计)'],
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,//坐标轴两边留白
                    data: ['第1期', '第2期', '第3期', '第4期', '第5期'],
                    axisLabel: { //坐标轴刻度标签的相关设置。
                        interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                        //rotate:-30,
                        textStyle: {
                            color: '#666',
                            fontStyle: 'normal',
                        }
                    },
                    axisLine:{//坐标轴轴线相关设置
                        lineStyle:{
                            color:'#666',
                            opacity:1
                        }
                    },
                    splitLine: { //坐标轴在 grid 区域中的分隔线。
                        show: false,
                    }
                }
            ],
            yAxis: [
                {   name: '声量（条）',
                    type: 'value',
                    axisLabel: {
                        textStyle: {
                            color: '#666',
                        }
                    },
                    axisLine:{
                        show: false
                    },
                    axisTick:{
                        show: false
                    },
                    splitLine: {
                        show: false,
                    }

                },{   name: '无限歌谣季(当期)',
                    type: 'value',
                    position: 'right',
                    axisLabel: {
                        textStyle: {
                            color: '#666',
                            fontStyle: 'normal',
                        }
                    },
                    axisLine:{
                        show: false
                    },
                    axisTick:{
                        show: false
                    },
                    splitLine: {
                        show: false,
                    }
                }
            ],
            series : [
                {
                    name:'无限歌谣季贡献度(累计)',
                    type:'bar',
                    data:[0, 0, 0,30, 80],
                    barGap:0.2,//柱间距离
                    barWidth: 80,
                    label: {//图形上的文本标签
                        normal: {
                            show: false,
                            position: 'top',
                            textStyle: {
                                fontStyle: 'normal',
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#229aff'},
                                    {offset: 1, color: '#13bfe8'}
                                ]
                            )
                        }}
                },
                {
                    name:'vivo&无限歌谣季贡献度',
                    type:'line',
                    'yAxisIndex': 1,
                    showAllSymbol: true,
                    symbolSize:10,
                    data:[ 0, 0, 0, 46, 100],
                    barGap:0.2,//柱间距离
                    label: {//图形上的文本标签
                        normal: {
                            show: false,
                            position: 'top',
                            textStyle: {
                                fontStyle: 'normal',
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color:'#fdb94e'},
                    },
                }
            ]
        };
        echarts_relation_g.setOption(option_relation_g);

        var echarts_relation_h = echarts.init(document.getElementById('relation_h'));
        var option_relation_h = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor:'rgba(255,255,255,0.8)',
                        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
                        textStyle:{
                            color:'#666',},
                    },
                },
                backgroundColor:'rgba(255,255,255,0.8)',
                extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
                textStyle:{
                    color:'#666',
                },
            },
            toolbox: {
                feature: {
                    magicType: {show: true, type: ['bar','line']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            grid: {
                top: '100',
                left: '3%',
                right: '4%',
                bottom: '50',
                containLabel: true
            },
            legend: {
                data:['无限歌谣季(当期)','无限歌谣季贡献度(累计)'],
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,//坐标轴两边留白
                    data: ['第1期', '第2期', '第3期', '第4期', '第5期'],
                    axisLabel: { //坐标轴刻度标签的相关设置。
                        interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                        //rotate:-30,
                        textStyle: {
                            color: '#666',
                            fontStyle: 'normal',
                        }
                    },
                    axisLine:{//坐标轴轴线相关设置
                        lineStyle:{
                            color:'#666',
                            opacity:1
                        }
                    },
                    splitLine: { //坐标轴在 grid 区域中的分隔线。
                        show: false,
                    }
                }
            ],
            yAxis: [
                {   name: '声量（条）',
                    type: 'value',
                    axisLabel: {
                        textStyle: {
                            color: '#666',
                        }
                    },
                    axisLine:{
                        show: false
                    },
                    axisTick:{
                        show: false
                    },
                    splitLine: {
                        show: false,
                    }

                },{   name: '无限歌谣季(当期)',
                    type: 'value',
                    position: 'right',
                    axisLabel: {
                        textStyle: {
                            color: '#666',
                            fontStyle: 'normal',
                        }
                    },
                    axisLine:{
                        show: false
                    },
                    axisTick:{
                        show: false
                    },
                    splitLine: {
                        show: false,
                    }
                }
            ],
            series : [
                {
                    name:'无限歌谣季贡献度(累计)',
                    type:'bar',
                    data:[0, 0, 0,30, 80],
                    barGap:0.2,//柱间距离
                    barWidth: 80,
                    label: {//图形上的文本标签
                        normal: {
                            show: false,
                            position: 'top',
                            textStyle: {
                                fontStyle: 'normal',
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#229aff'},
                                    {offset: 1, color: '#13bfe8'}
                                ]
                            )
                        }}
                },
                {
                    name:'vivo&无限歌谣季贡献度',
                    type:'line',
                    'yAxisIndex': 1,
                    showAllSymbol: true,
                    symbolSize:10,
                    data:[ 0, 0, 0, 46, 100],
                    barGap:0.2,//柱间距离
                    label: {//图形上的文本标签
                        normal: {
                            show: false,
                            position: 'top',
                            textStyle: {
                                fontStyle: 'normal',
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color:'#fdb94e'},
                    },
                }
            ]
        };
        echarts_relation_h.setOption(option_relation_h);

        var echarts_relation_i = echarts.init(document.getElementById('relation_i'));
        var option_relation_i = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor:'rgba(255,255,255,0.8)',
                        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
                        textStyle:{
                            color:'#666',},
                    },
                },
                backgroundColor:'rgba(255,255,255,0.8)',
                extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
                textStyle:{
                    color:'#666',
                },
            },
            toolbox: {
                feature: {
                    magicType: {show: true, type: ['bar','line']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            grid: {
                top: '100',
                left: '3%',
                right: '4%',
                bottom: '50',
                containLabel: true
            },
            legend: {
                data:['无限歌谣季(当期)','无限歌谣季贡献度(累计)'],
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,//坐标轴两边留白
                    data: ['第1期', '第2期', '第3期', '第4期', '第5期'],
                    axisLabel: { //坐标轴刻度标签的相关设置。
                        interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                        //rotate:-30,
                        textStyle: {
                            color: '#666',
                            fontStyle: 'normal',
                        }
                    },
                    axisLine:{//坐标轴轴线相关设置
                        lineStyle:{
                            color:'#666',
                            opacity:1
                        }
                    },
                    splitLine: { //坐标轴在 grid 区域中的分隔线。
                        show: false,
                    }
                }
            ],
            yAxis: [
                {   name: '情感指数',
                    type: 'value',
                    axisLabel: {
                        textStyle: {
                            color: '#666',
                        }
                    },
                    axisLine:{
                        show: false
                    },
                    axisTick:{
                        show: false
                    },
                    splitLine: {
                        show: false,
                    }

                },{   name: '贡献指数 (%)',
                    type: 'value',
                    position: 'right',
                    axisLabel: {
                        textStyle: {
                            color: '#666',
                            fontStyle: 'normal',
                        }
                    },
                    axisLine:{
                        show: false
                    },
                    axisTick:{
                        show: false
                    },
                    splitLine: {
                        show: false,
                    }
                }
            ],
            series : [
                {
                    name:'无限歌谣季贡献度(累计)',
                    type:'bar',
                    data:[0, 45, 74,56, 61],
                    barGap:0.2,//柱间距离
                    barWidth: 80,
                    label: {//图形上的文本标签
                        normal: {
                            show: false,
                            position: 'top',
                            textStyle: {
                                fontStyle: 'normal',
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#229aff'},
                                    {offset: 1, color: '#13bfe8'}
                                ]
                            )
                        }}
                },
                {
                    name:'vivo&无限歌谣季贡献度',
                    type:'line',
                    'yAxisIndex': 1,
                    showAllSymbol: true,
                    symbolSize:10,
                    data:[0, 45, 74,56, 61],
                    barGap:0.2,//柱间距离
                    label: {//图形上的文本标签
                        normal: {
                            show: false,
                            position: 'top',
                            textStyle: {
                                fontStyle: 'normal',
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color:'#32c5d2'},
                    },
                }
            ]
        };
        echarts_relation_i.setOption(option_relation_i);

        var echarts_relation_j = echarts.init(document.getElementById('relation_j'));
        option_relation_j = {
            "tooltip": {
                "trigger": "axis",
                "axisPointer": {
                    "type": "cross",
                    "label": {
                        "backgroundColor": "#6a7985"
                    },
                    "lineStyle": {
                        "color": "#9eb2cb"
                    }
                }
            },

            "legend": {
                "top": "bottom",
                "left": "2%",
                "textStyle": {
                    "color": "#000"
                },
                "itemHeight": 10,
                "data":  ['节目','品牌&节目','品牌&节目&正向']
            },
            "grid": {
                "top": 24,
                "left": "2%",
                "right": 20,
                "bottom": 30,
                "containLabel": true,
                "borderWidth": 0.5
            },
            series: [
                {
                    top:0,

                    name: '',
                    type: 'funnel',
                    left: '10%',
                    width: '80%',
                    gap: 10,
                    minSize: 114,
                    maxSize: 390,
                    label: {
                        normal: {
                            color: '#353535',
                            position: 'left',

                        },
                        emphasis: {
                            position:'left',
                            formatter: '{c}%'
                        }
                    },
                    labelLine: {
                        normal: {
                            length: 40,
                            position: 'left',

                            lineStyle: {
                                width: 2

                            }
                        }
                    },
                    itemStyle: {
                        normal: {

                        }
                    },
                    data: [
                        {value: 60, name: '节目',
                            itemStyle: {
                                normal: {
                                    color: '#4e99de'
                                }
                            },
                            labelLine:{
                                normal: {
                                    lineStyle: {
                                        shadowColor: '#4e99de',
                                        shadowOffsetX: 1
                                    }
                                }
                            }
                        },
                        {value: 40, name: '品牌&节目',
                            itemStyle: {
                                normal: {
                                    color: '#4da7db'
                                }
                            },
                            labelLine:{
                                normal: {
                                    lineStyle: {
                                        shadowColor: '#4da7db',
                                        shadowOffsetX: 1
                                    }
                                }
                            }
                        },
                        {value: 20, name: '品牌&节目&正向',
                            itemStyle: {
                                normal: {
                                    color: '#53b8e2'
                                }
                            },
                            labelLine:{
                                normal: {
                                    lineStyle: {
                                        shadowColor: '#53b8e2',
                                        shadowOffsetX: 1
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    name: '',
                    type: 'funnel',
                    top:0,
                    gap: 10,
                    label: {
                        normal: {
                            position: 'inside',
                            formatter: '转化率：({c}%)',
                            textStyle: {
                                color: '#fff'
                            }
                        }

                    },
                    labelLine: {
                        normal: {


                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderWidth:0,
                            opacity: 0
                        }
                    },
                    data: [
                        {value: 60, name: '节目'},
                        {value: 40, name: '品牌&节目'},
                        {value: 20, name: '品牌&节目&正向'}
                    ]
                }
            ]
        };
        echarts_relation_j.setOption(option_relation_j);

        var echarts_relation_k = echarts.init(document.getElementById('relation_k'));
        option_relation_k = {
            "tooltip": {
                "trigger": "axis",
                "axisPointer": {
                    "type": "cross",
                    "label": {
                        "backgroundColor": "#6a7985"
                    },
                    "lineStyle": {
                        "color": "#9eb2cb"
                    }
                }
            },

            "legend": {
                "top": "bottom",
                "left": "2%",
                "textStyle": {
                    "color": "#000"
                },
                "itemHeight": 10,
                "data":  ['节目','品牌&节目','品牌&节目&正向']
            },
            "grid": {
                "top": 24,
                "left": "2%",
                "right": 20,
                "bottom": 30,
                "containLabel": true,
                "borderWidth": 0.5
            },
            series: [
                {
                    top:0,
                    name: '',
                    type: 'funnel',
                    left: '10%',
                    width: '80%',
                    gap: 10,
                    minSize: 114,
                    maxSize: 390,
                    label: {
                        normal: {
                            color: '#353535',
                            position: 'left',
                        },
                        emphasis: {
                            position:'left',
                            formatter: '{c}%'
                        }
                    },
                    labelLine: {
                        normal: {
                            length: 40,
                            position: 'left',
                            lineStyle: {
                                width: 2
                            }
                        }
                    },
                    itemStyle: {
                        normal: {

                        }
                    },
                    data: [
                        {value: 60, name: '节目',
                            itemStyle: {
                                normal: {
                                    color: '#339999'
                                }
                            },
                            labelLine:{
                                normal: {
                                    lineStyle: {
                                        shadowColor: '#4e99de',
                                        shadowOffsetX: 1
                                    }
                                }
                            }
                        },
                        {value: 40, name: '品牌&节目',
                            itemStyle: {
                                normal: {
                                    color: '#669999'
                                }
                            },
                            labelLine:{
                                normal: {
                                    lineStyle: {
                                        shadowColor: '#4da7db',
                                        shadowOffsetX: 1
                                    }
                                }
                            }
                        },
                        {value: 20, name: '品牌&节目&正向',
                            itemStyle: {
                                normal: {
                                    color: '#66CCCC'
                                }
                            },
                            labelLine:{
                                normal: {
                                    lineStyle: {
                                        shadowColor: '#53b8e2',
                                        shadowOffsetX: 1
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    name: '',
                    type: 'funnel',
                    top:0,
                    gap: 10,
                    label: {
                        normal: {
                            position: 'inside',
                            formatter: '转化率：({c}%)',
                            textStyle: {
                                color: '#fff'
                            }
                        }

                    },
                    labelLine: {
                        normal: {


                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderWidth:0,
                            opacity: 0
                        }
                    },
                    data: [
                        {value: 52, name: '节目'},
                        {value: 34, name: '品牌&节目'},
                        {value: 26, name: '品牌&节目&正向'}
                    ]
                }
            ]
        };
        echarts_relation_k.setOption(option_relation_k);
    },

    // ===============================================
    // 品牌关联
    // ===============================================
    'channel': function indexData() {
        var echarts_channel_a = echarts.init(document.getElementById('channel_a'));
        option_channel_a = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['华为','无限歌谣季']
            },
            grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['12月18日','12月19日','12月20日','12月21日',
                    '12月22日','12月23日','12月24日']
            },
            yAxis: {
                type: 'value',
                name: '到达数',
                mix:0,
                max:100
            },
            series: [
                {
                    name:'华为',
                    type:'line',
                    data:[20, 32, 26, 94, 27, 23, 87]
                },
                {
                    name:'无限歌谣季',
                    type:'line',
                    data:[26, 22, 61, 56, 39, 93, 28]
                }
            ]
        };
        echarts_channel_a.setOption(option_channel_a);

        var echarts_channel_b = echarts.init(document.getElementById('channel_b'));
        option_channel_b = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['华为','无限歌谣季']
            },
            grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['12月18日','12月19日','12月20日','12月21日',
                    '12月22日','12月23日','12月24日']
            },
            yAxis: {
                type: 'value',
                name: '互动量',
                mix:0,
                max:100
            },
            series: [
                {
                    name:'华为',
                    type:'line',
                    data:[0, 2, 6, 4, 7, 3, 7]
                },
                {
                    name:'无限歌谣季',
                    type:'line',
                    data:[16, 32, 41, 66, 32, 53, 38]
                }
            ]
        };
        echarts_channel_b.setOption(option_channel_b);

        var echarts_channel_c = echarts.init(document.getElementById('channel_c'));
        option_channel_c = {
            color: ['#f9c5ad', '#fff581','#bfdc99', '#b9e3f9','#7ecdf4', '#fffac6'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['新闻','论坛','微信','视频']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['第1期','第2期','第3期','第4期','第5期','第6期']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} 声量'
                    }
                }
            ],
            series: [
                {
                    name:'新闻',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[15, 18, 74, 133, 193, 46]
                },
                {
                    name:'论坛',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[12, 13, 50, 122, 85, 239]
                },
                {
                    name:'微信',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[42, 12, 14, 122, 85, 139]
                },
                {
                    name:'视频',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[22, 13, 40, 82, 85, 139]
                }
            ]
        };
        echarts_channel_c.setOption(option_channel_c);

        var echarts_channel_d = echarts.init(document.getElementById('channel_d'));
        option_channel_d = {
            color: ['#f9c5ad', '#fff581','#bfdc99', '#b9e3f9','#7ecdf4', '#fffac6'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['新闻','论坛','微信','视频']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['第1期','第2期','第3期','第4期','第5期','第6期']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} 声量'
                    }
                }
            ],
            series: [
                {
                    name:'新闻',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[5, 8, 4, 3, 3, 6]
                },
                {
                    name:'论坛',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[2, 3, 5, 1, 5, 3]
                },
                {
                    name:'微信',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[2, 2, 4, 2, 5, 9]
                },
                {
                    name:'视频',
                    type:'bar',
                    "barGap": "15%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[2, 3, 0, 2, 5, 139]
                }
            ]
        };
        echarts_channel_d.setOption(option_channel_d);

        var echarts_channel_e = echarts.init(document.getElementById('channel_e'));
        var option_channel_e = {
            tooltip: { //提示框组件
                trigger: 'axis',
                formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            grid: {
                left: '1%',
                right: '4%',
                bottom: '6%',
                top:30,
                padding:'0 0 10 0',
                containLabel: true,
            },
            legend: {//图例组件，颜色和名字
                right:10,
                top:0,
                itemGap: 16,
                itemWidth: 18,
                itemHeight: 10,
                data:[{
                    name:'广告关键词',
                    //icon:'image://../wwwroot/js/url2.png', //路径
                },
                    {
                        name:'视频广告',
                    }],
                textStyle: {
                    color: '#a8aab0',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,//坐标轴两边留白
                    data: ['第1期','第2期','第3期','第4期','第5期','第6期','第7期','第8期','第9期','第10期'],
                    axisLabel: { //坐标轴刻度标签的相关设置。
                        interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                        margin:15,
                        textStyle: {
                            color: '#078ceb',
                            fontStyle: 'normal',
                            fontFamily: '微软雅黑',
                            fontSize: 12,
                        }
                    },
                    axisTick:{//坐标轴刻度相关设置。
                        show: false,
                    },
                    axisLine:{//坐标轴轴线相关设置
                        lineStyle:{
                            color:'#fff',
                            opacity:0.2
                        }
                    },
                    splitLine: { //坐标轴在 grid 区域中的分隔线。
                        show: false,
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    splitNumber: 5,
                    axisLabel: {
                        textStyle: {
                            color: '#a8aab0',
                            fontStyle: 'normal',
                            fontFamily: '微软雅黑',
                            fontSize: 12,
                        }
                    },
                    axisLine:{
                        show: false
                    },
                    axisTick:{
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#fff'],
                            opacity:0.06
                        }
                    }

                }
            ],
            series : [
                {
                    name:'广告关键词',
                    type:'bar',
                    data:[4.9, 7.3, 9.2, 5.6, 7.7, 5.6, 4.2, 3.6, 6, 6.4],
                    barWidth: 10,
                    barGap:0,//柱间距离
                    label: {//图形上的文本标签
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#a8aab0',
                                fontStyle: 'normal',
                                fontFamily: '微软雅黑',
                                fontSize: 12,
                            },
                        },
                    },
                    itemStyle: {//图形样式
                        normal: {
                            barBorderRadius: [5, 5, 0, 0],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 1, color: 'rgba(127, 128, 225, 0.7)'
                            },{
                                offset: 0.9, color: 'rgba(72, 73, 181, 0.7)'
                            },{
                                offset: 0.31, color: 'rgba(0, 208, 208, 0.7)'
                            },{
                                offset: 0.15, color: 'rgba(0, 208, 208, 0.7)'
                            }, {
                                offset: 0, color: 'rgba(104, 253, 255, 0.7)'
                            }], false),
                        },
                    },
                },
                {
                    name:'视频广告',
                    type:'bar',
                    data:[2.9, 5, 4.4, 2.7, 5.7, 4.6, 1.2, 2.7, 4.8, 6.0],
                    barWidth: 10,
                    barGap:0.2,//柱间距离
                    label: {//图形上的文本标签
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#a8aab0',
                                fontStyle: 'normal',
                                fontFamily: '微软雅黑',
                                fontSize: 12,
                            },
                        },
                    },
                    itemStyle: {//图形样式
                        normal: {
                            barBorderRadius: [5, 5, 0, 0],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 1, color: 'rgba(127, 128, 225, 0.7)'
                            },{
                                offset: 0.9, color: 'rgba(72, 73, 181, 0.7)'
                            },{
                                offset: 0.25, color: 'rgba(226, 99, 74, 0.7)'
                            }, {
                                offset: 0, color: 'rgba(253, 200, 106, 0.7)'
                            }], false),
                        },
                    },
                },{
                    name:'总和',
                    type:'line',
                    data:[11,19, 15, 14.4, 12.7, 15.7, 14.6, 11.2, 12.7, 14.8, 16.0],
                    barWidth: 10,
                    barGap:0.2,//柱间距离
                    label: {//图形上的文本标签
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#a8aab0',
                                fontStyle: 'normal',
                                fontFamily: '微软雅黑',
                                fontSize: 12,
                            },
                        },
                    },
                    itemStyle: {//图形样式
                        normal: {
                            barBorderRadius: [5, 5, 0, 0],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 1, color: 'rgba(127, 128, 225, 0.7)'
                            },{
                                offset: 0.9, color: 'rgba(72, 73, 181, 0.7)'
                            },{
                                offset: 0.25, color: 'rgba(226, 99, 74, 0.7)'
                            }, {
                                offset: 0, color: 'rgba(253, 200, 106, 0.7)'
                            }], false),
                        },
                    },
                }
            ]
        };
        echarts_channel_e.setOption(option_channel_e);

        var echarts_channel_f = echarts.init(document.getElementById('channel_f'));
        var option_channel_f = {
            tooltip: { //提示框组件
                trigger: 'axis',
                formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            grid: {
                left: '1%',
                right: '4%',
                bottom: '6%',
                top:30,
                padding:'0 0 10 0',
                containLabel: true,
            },
            legend: {//图例组件，颜色和名字
                right:10,
                top:0,
                itemGap: 16,
                itemWidth: 18,
                itemHeight: 10,
                data:[{
                    name:'广告关键词',
                    //icon:'image://../wwwroot/js/url2.png', //路径
                },
                    {
                        name:'视频广告',
                    }],
                textStyle: {
                    color: '#a8aab0',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,//坐标轴两边留白
                    data: ['第1期','第2期','第3期','第4期','第5期','第6期','第7期','第8期','第9期','第10期'],
                    axisLabel: { //坐标轴刻度标签的相关设置。
                        interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                        margin:15,
                        textStyle: {
                            color: '#078ceb',
                            fontStyle: 'normal',
                            fontFamily: '微软雅黑',
                            fontSize: 12,
                        }
                    },
                    axisTick:{//坐标轴刻度相关设置。
                        show: false,
                    },
                    axisLine:{//坐标轴轴线相关设置
                        lineStyle:{
                            color:'#fff',
                            opacity:0.2
                        }
                    },
                    splitLine: { //坐标轴在 grid 区域中的分隔线。
                        show: false,
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    splitNumber: 5,
                    axisLabel: {
                        textStyle: {
                            color: '#a8aab0',
                            fontStyle: 'normal',
                            fontFamily: '微软雅黑',
                            fontSize: 12,
                        }
                    },
                    axisLine:{
                        show: false
                    },
                    axisTick:{
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#fff'],
                            opacity:0.06
                        }
                    }

                }
            ],
            series : [
                {
                    name:'广告关键词',
                    type:'bar',
                    data:[2.9, 4.3, 6.2, 7.6, 8.7, 9.6, 5.2, 4.6, 7, 8.4],
                    barWidth: 10,
                    barGap:0,//柱间距离
                    label: {//图形上的文本标签
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#a8aab0',
                                fontStyle: 'normal',
                                fontFamily: '微软雅黑',
                                fontSize: 12,
                            },
                        },
                    },
                    itemStyle: {//图形样式
                        normal: {
                            barBorderRadius: [5, 5, 0, 0],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 1, color: 'rgba(127, 128, 225, 0.7)'
                            },{
                                offset: 0.9, color: 'rgba(72, 73, 181, 0.7)'
                            },{
                                offset: 0.31, color: 'rgba(0, 208, 208, 0.7)'
                            },{
                                offset: 0.15, color: 'rgba(0, 208, 208, 0.7)'
                            }, {
                                offset: 0, color: 'rgba(104, 253, 255, 0.7)'
                            }], false),
                        },
                    },
                },
                {
                    name:'视频广告',
                    type:'bar',
                    data:[2.1, 3.5, 3.4, 4.7, 7.7, 5.6, 2.2, 3.7, 5.8, 7.0],
                    barWidth: 10,
                    barGap:0.2,//柱间距离
                    label: {//图形上的文本标签
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#a8aab0',
                                fontStyle: 'normal',
                                fontFamily: '微软雅黑',
                                fontSize: 12,
                            },
                        },
                    },
                    itemStyle: {//图形样式
                        normal: {
                            barBorderRadius: [5, 5, 0, 0],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 1, color: 'rgba(127, 128, 225, 0.7)'
                            },{
                                offset: 0.9, color: 'rgba(72, 73, 181, 0.7)'
                            },{
                                offset: 0.25, color: 'rgba(226, 99, 74, 0.7)'
                            }, {
                                offset: 0, color: 'rgba(253, 200, 106, 0.7)'
                            }], false),
                        },
                    },
                },{
                    name:'总和',
                    type:'line',
                    data:[14,12, 14, 16.4, 14.7, 13.7, 17.6, 13.2, 10.7, 11.8, 14.0],
                    barWidth: 10,
                    barGap:0.2,//柱间距离
                    label: {//图形上的文本标签
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#a8aab0',
                                fontStyle: 'normal',
                                fontFamily: '微软雅黑',
                                fontSize: 12,
                            },
                        },
                    },
                    itemStyle: {//图形样式
                        normal: {
                            barBorderRadius: [5, 5, 0, 0],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 1, color: 'rgba(127, 128, 225, 0.7)'
                            },{
                                offset: 0.9, color: 'rgba(72, 73, 181, 0.7)'
                            },{
                                offset: 0.25, color: 'rgba(226, 99, 74, 0.7)'
                            }, {
                                offset: 0, color: 'rgba(253, 200, 106, 0.7)'
                            }], false),
                        },
                    },
                }
            ]
        };
        echarts_channel_f.setOption(option_channel_f);

        var echarts_channel_g = echarts.init(document.getElementById('channel_g'));
        option_channel_g = {
            tooltip: {
                trigger: 'axis'
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['第1期','第2期','第3期','第4期','第5期','第6期','第7期'],
                }
            ],
            yAxis: [
                {
                    name: '情感指数',
                    type: 'value',
                    max: 100
                },

            ],
            series: [
                {
                    name: '正面',
                    type: 'line',
                    tooltip: {
                        trigger: 'axis'
                        // formatter: '{a} <br/>{b}日: {c}元'
                    },
                    smooth: true,
                    itemStyle: {
                        normal: {
                            color: 'rgba(2, 197, 233, 0.2)',
                            lineStyle: {
                                color: 'rgba(23, 107, 203, 0.2)'
                            },
                            areaStyle: {
                                color: 'rgba(223, 147, 233, 0.2)'
                            }
                        }
                    },
                    data: [50, 42, 51, 54, 60, 80, 71]
                },
                {
                    name: '负面',
                    type: 'line',
                    itemStyle: {
                        normal: {
                            color: 'rgba(2, 197, 233, 0.2)',
                            lineStyle: {
                                color: 'rgba(2, 197, 233, 0.2)'
                            },
                            areaStyle: {
                                color: 'rgba(2, 197, 233, 0.2)'
                            }
                        }
                    },
                    data: [30, 32, 21, 24, 20, 30, 20]
                }
            ]
        };
        echarts_channel_g.setOption(option_channel_g);

        var echarts_channel_h = echarts.init(document.getElementById('channel_h'));
        function randomData() {
            return Math.round(Math.random()*1000);
        }
        option_channel_h = {
            tooltip: {
                trigger: 'item'
            },
            visualMap: {
                type:'piecewise',
                min: 0,
                max: 2500,
                splitNumber: 5,
                left: 'left',
                top: 'bottom',
                calculable: true,
                seriesIndex:0
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {name: '北京',value: randomData() },
                        {name: '天津',value: randomData() },
                        {name: '上海',value: randomData() },
                        {name: '广东',value: randomData() },
                        {name: '台湾',value: randomData() },
                        {name: '香港',value: randomData() },
                        {name: '澳门',value: randomData() }
                    ]
                },
                {
                    name:"",
                    type:'pie',
                    center:['30%','40%'],
                    radius:[0,30],
                    data:[{
                        name:"12",
                        value : 10,
                        itemStyle:{normal:{
                            color:'blue',
                            opacity:0.5
                        }
                        }
                    },{
                        name:"24",
                        value : 20,
                        itemStyle:{normal:{
                            color:'blue',
                        }

                        }
                    }]
                },
                {
                    name:"test",
                    type:'pie',
                    center:['70%','50%'],
                    radius:[0,20],
                    data:[{
                        name:"12",
                        value : 10,
                        itemStyle:{normal:{
                            color:'blue',
                            opacity:0.5
                        }
                        }
                    },{
                        name:"24",
                        value : 20,
                        itemStyle:{normal:{
                            color:'blue',
                        }

                        }
                    }]
                }
            ]
        };
        echarts_channel_h.setOption(option_channel_h);

        var echarts_channel_i = echarts.init(document.getElementById('channel_i'));
        function randomData() {
            return Math.round(Math.random()*1000);
        }
        option_channel_i = {
            tooltip: {
                trigger: 'item'
            },
            visualMap: {
                type:'piecewise',
                min: 0,
                max: 2500,
                splitNumber: 5,
                left: 'left',
                top: 'bottom',
                calculable: true,
                seriesIndex:0
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {name: '北京',value: randomData() },
                        {name: '天津',value: randomData() },
                        {name: '上海',value: randomData() },
                        {name: '广东',value: randomData() },
                        {name: '台湾',value: randomData() },
                        {name: '香港',value: randomData() },
                        {name: '澳门',value: randomData() }
                    ]
                },
                {
                    name:"",
                    type:'pie',
                    center:['30%','40%'],
                    radius:[0,30],
                    data:[{
                        name:"12",
                        value : 10,
                        itemStyle:{normal:{
                            color:'blue',
                            opacity:0.5
                        }
                        }
                    },{
                        name:"24",
                        value : 20,
                        itemStyle:{normal:{
                            color:'blue',
                        }

                        }
                    }]
                },
                {
                    name:"test",
                    type:'pie',
                    center:['70%','50%'],
                    radius:[0,20],
                    data:[{
                        name:"12",
                        value : 10,
                        itemStyle:{normal:{
                            color:'blue',
                            opacity:0.5
                        }
                        }
                    },{
                        name:"14",
                        value : 20,
                        itemStyle:{normal:{
                            color:'blue',
                        }

                        }
                    }]
                }
            ]
        };
        echarts_channel_i.setOption(option_channel_i);
    },

    // ===============================================
    // 节目人群
    // ===============================================
    'crowd': function indexData() {
        var echarts_crowd_a = echarts.init(document.getElementById('crowd_a'));
        option_crowd_a = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['男', '女'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'占比',
                    type:'bar',
                    barWidth: '30%',
                    data:[92, 130]
                }
            ]
        };
        echarts_crowd_a.setOption(option_crowd_a);

        var echarts_crowd_b = echarts.init(document.getElementById('crowd_b'));
        option_crowd_b = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['21-25', '26-30', '31-35', '36-40', '41-45'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'占比',
                    type:'bar',
                    barWidth: '30%',
                    data:[190, 280,230,170,115]
                }
            ]
        };
        echarts_crowd_b.setOption(option_crowd_b);

        var echarts_crowd_c = echarts.init(document.getElementById('crowd_c'));
        function roundDatas(num, size, starname, color) {
            var datas = [];
            for (var i = 0; i < num; i++) {
                datas.push({
                    name: 'circle' + i,

                });
            }

            var mark = Math.floor(Math.random() * num);

            datas[mark] = {
                name: 'circle' + mark,
                symbolSize: size,
                itemStyle: {
                    normal: {
                        color: color,
                        opacity: 1
                    }
                },
                label: {
                    normal: {
                        show: true,
                        formatter: starname,

                    }
                }
            };

            return datas;

        }
        function linkDatas(num) {
            var ldatas = [];
            for (var i = 0; i < num; i++) {
                ldatas.push({
                    source: 'circle' + i,
                    target: 'circle' + (i + 1)
                });
            }
            ldatas.push({
                source: 'circle' + (i - 1),
                target: 'circle0'
            });
            return ldatas;

        }
        function starSeries(circlesize, data, link, flag) {
            var star = {
                type: 'graph',
                //layout: 'circular',
                layout: 'force',
                /*
                 force: {
                 repulsion: 90,
                 gravity: 0.2
                 },
                 */
                draggable: true,
                circular: {
                    rotateLabel: flag
                },
                itemStyle: {
                    normal: {
                        color: '#fff',
                        opacity: 0.3
                    }
                },
                lineStyle: {
                    normal: {
                        color: '#fff',
                        width: 0
                    }
                },
                symbol: 'circle',
                symbolSize: 1,
                width: circlesize,
                height: circlesize,
                data: data,
                links: link
            };
            return star;
        }
        option_crowd_c = {
            series: [
                starSeries('0%', roundDatas(1, 60, 'girl`sname', '#f173ac'), linkDatas(1), false),
                starSeries('50%', roundDatas(100, 50, '卡哇伊', '#72baa7'), linkDatas(100), false),
                starSeries('50%', roundDatas(100, 50, '才女', '#b4532a'), linkDatas(100), false),
                starSeries('50%', roundDatas(100, 50, '天生丽质', '#00BFFF'), linkDatas(100), false),
                starSeries('50%', roundDatas(100, 50, '孩子气', '#FF5809'), linkDatas(100), false),
                starSeries('50%', roundDatas(100, 50, '小家碧玉', '#e0861a'), linkDatas(100), false),
                starSeries('50%', roundDatas(100, 50, '干练', '#33a3dc'), linkDatas(100), false),
                starSeries('50%', roundDatas(100, 50, '天使', '#0370c8'), linkDatas(100), false),
                starSeries('50%', roundDatas(100, 50, '风趣', '#EE82EE'), linkDatas(100), false),
                starSeries('50%', roundDatas(100, 50, '阳光', '#6f60aa'), linkDatas(100), false),
            ]
        }
        echarts_crowd_c.setOption(option_crowd_c);

        var echarts_crowd_d = echarts.init(document.getElementById('crowd_d'));
        option_crowd_d = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}'
            },
            series: [
                {
                    name: '中国',
                    type: 'map',
                    mapType: 'china',
                    selectedMode : 'multiple',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {name:'广东', selected:true}
                    ]
                }
            ]
        };
        echarts_crowd_d.setOption(option_crowd_d);

        var echarts_crowd_e = echarts.init(document.getElementById('crowd_e'));
        function randomData() {
            return Math.round(Math.random()*1000);
        }
        var data = [
            {name: '北京', value: [randomData(), 0] },
            {name: '天津', value: [randomData(), 1] },
            {name: '上海', value: [randomData(), 2] },
            {name: '重庆', value: [randomData(), 3] },
            {name: '河北', value: [randomData(), 4] },
            {name: '河南', value: [randomData(), 5] },
            {name: '云南', value: [randomData(), 6] }
        ];
        option_crowd_e = {

            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['iphone3','iphone4','iphone5']
            },
            visualMap: {
                type: 'piecewise',
                dimension: 1,
                pieces: [
                    {value: 0, color: '#c23531'},
                    {value: 1, color: '#2f4554'},
                    {value: 2, color: '#61a0a8'},
                    {value: 3, color: '#d48265'},
                    {value: 4, color: '#91c7ae'},
                    {value: 5, color: '#749f83'},
                    {value: 6, color: '#ca8622'}
                ],
                formatter: function (value) {
                    return data[value].name + '： ' + data[value].value[0];
                },
                right: 10,
                top: 'center'
            },
            series: [
                {
                    name: '人数占比',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    // right: 50,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: data
                }
            ]
        };
        echarts_crowd_e.setOption(option_crowd_e);
    },
    // ===============================================
    // 节目人群
    // ===============================================
    'heat': function indexData() {
        var echarts_heat_a = echarts.init(document.getElementById('heat_a'));
        var colors = ['#1186c9', '#99CCFF', '#86b6d2', '#12ea1c'];
        var city = ['何炅', '孙红雷', '张艺兴', '张天爱', '邓伦', '鹿晗', '刘亦菲'];
        var data2 = [6750, 5860, 5580, 4319, 3300, 6239, 5130];
        var data1 = [1853, 1269, 1236, 1152, 1101, 1239, 1130];
        option_heat_a = {
            color: colors,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            grid: {
                right: '5%'
            },
            legend: {
                data: ['真粉数', '粉丝数'],
                right: 'right'
            },
            xAxis: [{
                type: 'category',

                axisTick: {
                    alignWithLabel: true
                },
                data: city
            }],
            yAxis: [{
                splitLine: {
                    show: false
                },
                type: 'value',
                name: '万',
                min: 0,
                max: 10000,
                position: 'left',
                axisLine: {
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value} '
                }
            }],
            series: [{
                name: '真粉数',
                stack: '总量',
                type: 'bar',
                barWidth: 30,
                data: data1
            },
                {
                    name: '粉丝数',
                    stack: '总量',
                    type: 'bar',
                    data: data2
                }
            ]
        };
        echarts_heat_a.setOption(option_heat_a);

        var echarts_heat_b = echarts.init(document.getElementById('heat_b'));
        var colors = ['#1186c9', '#489dcd', '#86b6d2', '#12ea1c'];
        var city = ['何炅', '孙红雷', '张艺兴', '张天爱', '邓伦', '鹿晗', '刘亦菲'];
        var data1 = [2853, 2269, 2236, 2152, 2101, 2239, 2130];
        option_heat_b = {
            color: colors,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            grid: {
                right: '5%'
            },
            legend: {
                data: ['真粉数'],
                right: 'right'
            },
            xAxis: [{
                type: 'category',

                axisTick: {
                    alignWithLabel: true
                },
                data: city
            }],
            yAxis: [{
                splitLine: {
                    show: false
                },
                type: 'value',
                name: '万',
                min: 0,
                max: 3000,
                position: 'left',
                axisLine: {
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value} '
                }
            }],
            series: [{
                name: '真粉数',
                stack: '总量',
                type: 'bar',
                barWidth: 30,
                data: data1
            }]
        };
        echarts_heat_b.setOption(option_heat_b);

        var echarts_heat_c = echarts.init(document.getElementById('heat_c'));
        var colors = ['#1186c9', '#489dcd', '#86b6d2', '#12ea1c'];
        var city = ['何炅', '孙红雷', '张艺兴', '张天爱', '邓伦', '鹿晗', '刘亦菲'];
        var data1 = [53, 69, 36, 52, 21, 39, 30];
        option_heat_c = {
            color: colors,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            grid: {
                right: '5%'
            },
            legend: {
                data: ['真粉数'],
                right: 'right'
            },
            xAxis: [{
                type: 'category',

                axisTick: {
                    alignWithLabel: true
                },
                data: city
            }],
            yAxis: [{
                splitLine: {
                    show: false
                },
                type: 'value',
                name: '',
                min: 0,
                max: 100,
                position: 'left',
                axisLine: {
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value} %'
                }
            }],
            series: [{
                name: '真粉数',
                stack: '总量',
                type: 'bar',
                barWidth: 30,
                data: data1
            }]
        };
        echarts_heat_c.setOption(option_heat_c);

        var echarts_heat_d = echarts.init(document.getElementById('heat_d'));
        var symbolSize = 10;
        option_heat_d = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                x: 'left',
                y: 'middle',
                orient: 'vertical',
                data: ['何炅', '孙红雷', '张艺兴', '张天爱', '邓伦']
            },
            grid: {
                left: '150px;',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['第1期', '第2期', '第3期', '第4期', '第5期', '第6期']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                id: 'a',
                name: '何炅',
                type: 'line',
                smooth: true,
                symbolSize: symbolSize,
                data: [
                    ['第1期', 270],
                    ['第2期', 320],
                    ['第3期', 280],
                    ['第4期', 220],
                    ['第5期', 290],
                    ['第6期', 260]
                ]
            }, {
                name: '孙红雷',
                type: 'line',
                smooth: true,
                data: [
                    ['第1期', 250],
                    ['第2期', 340],
                    ['第3期', 250],
                    ['第4期', 270],
                    ['第5期', 230],
                    ['第6期', 240]
                ]
            }, {
                name: '张艺兴',
                type: 'line',
                smooth: true,
                data: [
                    ['第1期', 220],
                    ['第2期', 330],
                    ['第3期', 290],
                    ['第4期', 280],
                    ['第5期', 240],
                    ['第6期', 250]
                ]
            }, {
                name: '张天爱',
                type: 'line',
                smooth: true,
                data: [
                    ['第1期', 260],
                    ['第2期', 380],
                    ['第3期', 220],
                    ['第4期', 210],
                    ['第5期', 260],
                    ['第6期', 270]
                ]
            }, {
                name: '邓伦',
                type: 'line',
                smooth: true,
                data: [
                    ['第1期', 230],
                    ['第2期', 350],
                    ['第3期', 260],
                    ['第4期', 270],
                    ['第5期', 250],
                    ['第6期', 290]
                ]
            }]
        };
        echarts_heat_d.setOption(option_heat_d);

        var echarts_heat_e = echarts.init(document.getElementById('heat_e'));
        var colors = ['#3399CC', '#99CCCC', '#99CCFF', '#CCCCFF'];
        var city = ['何炅', '孙红雷', '张艺兴', '张天爱', '邓伦', '鹿晗', '刘亦菲'];
        var data1 = [6750, 5860, 5580, 4319, 3300, 6239, 5130];
        var data2 = [1853, 1269, 1236, 1152, 1101, 1239, 1130];
        var data3 = [6750, 5860, 5580, 4319, 3300, 6239, 5130];
        var data4 = [1853, 1269, 1236, 1152, 1101, 1239, 1130];
        option_heat_e = {
            color: colors,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            grid: {
                right: '5%'
            },
            legend: {
                data: ['新闻', '微信', '视频', '微博'],
                right: 'right'
            },
            xAxis: [{
                type: 'category',

                axisTick: {
                    alignWithLabel: true
                },
                data: city
            }],
            yAxis: [{
                splitLine: {
                    show: false
                },
                type: 'value',
                name: '万',
                min: 0,
                max: 20000,
                position: 'left',
                axisLine: {
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value} '
                }
            }],
            series: [{
                name: '新闻',
                stack: '总量',
                type: 'bar',
                barWidth: 30,
                data: data1
            },
             {
                name: '微信',
                stack: '总量',
                type: 'bar',
                data: data2
             },
            {
                name: '视频',
                stack: '总量',
                type: 'bar',
                data: data3
            },
            {
                name: '微博',
                stack: '总量',
                type: 'bar',
                data: data4
            }
            ]
        };
        echarts_heat_e.setOption(option_heat_e);

        var echarts_heat_f = echarts.init(document.getElementById('heat_f'));
        var symbolSize = 10;
        option_heat_f = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                x: 'left',
                y: 'middle',
                orient: 'vertical',
                data: ['何炅', '孙红雷', '张艺兴', '张天爱', '邓伦']
            },
            grid: {
                left: '150px;',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['第1期', '第2期', '第3期', '第4期', '第5期', '第6期']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                id: 'a',
                name: '何炅',
                type: 'line',
                smooth: true,
                symbolSize: symbolSize,
                data: [
                    ['第1期', 1270],
                    ['第2期', 2320],
                    ['第3期', 2280],
                    ['第4期', 1220],
                    ['第5期', 2290],
                    ['第6期', 1260]
                ]
            }, {
                name: '孙红雷',
                type: 'line',
                smooth: true,
                data: [
                    ['第1期', 1250],
                    ['第2期', 1340],
                    ['第3期', 2250],
                    ['第4期', 2270],
                    ['第5期', 1230],
                    ['第6期', 1240]
                ]
            }, {
                name: '张艺兴',
                type: 'line',
                smooth: true,
                data: [
                    ['第1期', 1220],
                    ['第2期', 2330],
                    ['第3期', 1290],
                    ['第4期', 2280],
                    ['第5期', 2240],
                    ['第6期', 2250]
                ]
            }, {
                name: '张天爱',
                type: 'line',
                smooth: true,
                data: [
                    ['第1期', 1260],
                    ['第2期', 1380],
                    ['第3期', 2220],
                    ['第4期', 2210],
                    ['第5期', 1260],
                    ['第6期', 2270]
                ]
            }, {
                name: '邓伦',
                type: 'line',
                smooth: true,
                data: [
                    ['第1期', 1230],
                    ['第2期', 2350],
                    ['第3期', 1260],
                    ['第4期', 1270],
                    ['第5期', 1250],
                    ['第6期', 2290]
                ]
            }]
        };
        echarts_heat_f.setOption(option_heat_f);

        var echarts_heat_g = echarts.init(document.getElementById('heat_g'));
        var symbolSize = 10;
        option_heat_g = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                x: 'left',
                y: 'middle',
                orient: 'vertical',
                data: ['何炅', '孙红雷', '张艺兴', '张天爱', '邓伦']
            },
            grid: {
                left: '150px;',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['第1期', '第2期', '第3期', '第4期', '第5期', '第6期']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                id: 'a',
                name: '何炅',
                type: 'line',
                smooth: true,
                symbolSize: symbolSize,
                data: [
                    ['第1期', 1710],
                    ['第2期', 2110],
                    ['第3期', 1230],
                    ['第4期', 2420],
                    ['第5期', 1260],
                    ['第6期', 1810]
                ]
            }, {
                name: '孙红雷',
                type: 'line',
                smooth: true,
                data: [
                    ['第1期', 1560],
                    ['第2期', 1190],
                    ['第3期', 1420],
                    ['第4期', 2720],
                    ['第5期', 1200],
                    ['第6期', 1650]
                ]
            }, {
                name: '张艺兴',
                type: 'line',
                smooth: true,
                data: [
                    ['第1期', 1320],
                    ['第2期', 2330],
                    ['第3期', 1790],
                    ['第4期', 2680],
                    ['第5期', 2140],
                    ['第6期', 1250]
                ]
            }, {
                name: '张天爱',
                type: 'line',
                smooth: true,
                data: [
                    ['第1期', 1560],
                    ['第2期', 1980],
                    ['第3期', 2620],
                    ['第4期', 1510],
                    ['第5期', 1460],
                    ['第6期', 2370]
                ]
            }, {
                name: '邓伦',
                type: 'line',
                smooth: true,
                data: [
                    ['第1期', 1930],
                    ['第2期', 2150],
                    ['第3期', 1060],
                    ['第4期', 1770],
                    ['第5期', 1850],
                    ['第6期', 2190]
                ]
            }]
        };
        echarts_heat_g.setOption(option_heat_g);

        var echarts_heat_h = echarts.init(document.getElementById('heat_h'));
        var dataBJ = [
            ['2500000',96,0],
            ['5000000',55,0],
            ['7500000',62,0],
            ['9000000',45,0],
        ];
        var itemStyle = {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                }, {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                }])
            }
        };
        option_heat_h = {
            color: ['#3398DB'],

            legend: {
                x: 'center',
                y: 'bottom',
                right: 5,
                bottom: 5,
                textStyle: {
                    fontSize: 16
                },
                data: ['张艺兴']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {
                        show: true
                    },
                    dataZoom: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            tooltip: {
                trigger: 'axis',
                showDelay: 0,
                axisPointer: {
                    show: true,
                    type: 'cross',
                    lineStyle: {
                        type: 'dashed',
                        width: 1
                    }
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['2500000', '5000000', '7500000', '9000000'],
                name: '',
                nameTextStyle: {
                    fontSize: 14
                },
                splitLine: {
                    show: false
                }

            }],
            yAxis: [{
                type: 'value',
                name: '',
                splitNumber: 4,
                nameGap: 20,
                nameTextStyle: {
                    fontSize: 16
                },
                splitLine: {
                    show: true
                }
            }],
            series: [{
                name: '张艺兴',
                type: 'scatter',
                itemStyle: itemStyle,
                markPoint: {
                    data: [{
                        type: 'max',
                        name: '最大值'
                    },
                        {
                            type: 'min',
                            name: '最小值'
                        }
                    ]
                },
                markLine: {
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#DC143C',
                                type: 'dashed'
                            }

                        }
                    },
                    data: [{
                        yAxis: 35,
                        type: 'max'
                    },
                        {
                            yAxis: 25,
                            type: 'min'
                        }
                    ]
                },
                data: dataBJ
            }]
        };
        echarts_heat_h.setOption(option_heat_h);
    },

    // ===============================================代言人
    // 概述
    // ===============================================
    'spokesman': function indexData() {
        var echarts_spokesman_a = echarts.init(document.getElementById('spokesman_a'));
        var colors = ['#1186c9', '#489dcd', '#86b6d2', '#12ea1c'];
        var city = ['何炅', '孙红雷', '张艺兴', '张天爱', '邓伦', '鹿晗', '刘亦菲'];
        var data1 = [2853, 2269, 2236, 2152, 2101, 2239, 2130];
        option_spokesman_a = {
            color: colors,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            grid: {
                right: '5%'
            },
            legend: {
                data: ['真粉数'],
                right: 'right'
            },
            xAxis: [{
                type: 'category',

                axisTick: {
                    alignWithLabel: true
                },
                data: city
            }],
            yAxis: [{
                splitLine: {
                    show: false
                },
                type: 'value',
                name: '万',
                min: 0,
                max: 3000,
                position: 'left',
                axisLine: {
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value} '
                }
            }],
            series: [{
                name: '真粉数',
                stack: '总量',
                type: 'bar',
                barWidth: 30,
                data: data1
            }]
        };
        echarts_spokesman_a.setOption(option_spokesman_a);

        var echarts_spokesman_b = echarts.init(document.getElementById('spokesman_b'));
        var colors = ['#5793f3', '#CCCCCC'];
        var city=['何穗','刘涛', '邓伦','李娜','郭艾伦'];
        var data1=[45,56,58,69,62];
        var data2=[23,29,36,22,11];
        option_spokesman_b = {
            color: colors,
            backgroundColor:'#fff',
            tooltip: {
                trigger: 'axis',
                axisPointer: {type: 'cross'}
            },
            grid: {
                top:'15%',
                right: '5%',
                bottom:'10%'
            },
            legend: {
                data:['正面','负面'],
                top:35,
                left:120
            },
            xAxis: [
                {
                    type: 'category',

                    axisTick: {
                        alignWithLabel: true
                    },
                    data: city
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '情感指数',
                    min: 0,
                    max: 100,
                    position: 'left',
                    axisLine: {
                        lineStyle: {
                            color: colors[0]
                        }
                    },
                    axisLabel: {
                        formatter: '{value} '
                    }
                }],

            series: [{
                name:'',
                stack: '总量',
                type:'bar',
                barWidth : 30,
                data:data1
            },
                {
                    name:'',
                    stack: '总量',
                    type:'bar',
                    data:data2
                }]
        };
        echarts_spokesman_b.setOption(option_spokesman_b);

        var echarts_spokesman_c = echarts.init(document.getElementById('spokesman_c'));
        var colors = ['#6666CC', '#FFCC99'];
        var city=['何穗','刘涛', '邓伦','李娜','郭艾伦'];
        var data1=[45,56,58,69,62];
        var data2=[23,29,36,22,11];
        option_spokesman_c = {
            color: colors,
            backgroundColor:'#fff',
            tooltip: {
                trigger: 'axis',
                axisPointer: {type: 'cross'}
            },
            grid: {
                top:'15%',
                right: '5%',
                bottom:'10%'
            },
            legend: {
                data:['正面','负面'],
                top:35,
                left:120
            },
            xAxis: [
                {
                    type: 'category',

                    axisTick: {
                        alignWithLabel: true
                    },
                    data: city
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '声量',
                    min: 0,
                    max: 100,
                    position: 'left',
                    axisLine: {
                        lineStyle: {
                            color: colors[0]
                        }
                    },
                    axisLabel: {
                        formatter: '{value} '
                    }
                }],

            series: [{
                name:'',
                stack: '总量',
                type:'bar',
                barWidth : 30,
                data:data1
            },
                {
                    name:'食品添加剂生产企业',
                    stack: '总量',
                    type:'bar',
                    data:data2
                }]
        };
        echarts_spokesman_c.setOption(option_spokesman_c);

        var echarts_spokesman_d = echarts.init(document.getElementById('spokesman_d'));
        var colors = ['#99CCCC', '#CCFFFF'];
        var city=['何穗','刘涛', '邓伦','李娜','郭艾伦'];
        var data1=[25,36,48,79,42];
        var data2=[13,39,56,32,21];
        option_spokesman_d = {
            color: colors,
            backgroundColor:'#fff',
            tooltip: {
                trigger: 'axis',
                axisPointer: {type: 'cross'}
            },
            grid: {
                top:'15%',
                right: '5%',
                bottom:'10%'
            },
            legend: {
                data:['正面','负面'],
                top:35,
                left:120
            },
            xAxis: [
                {
                    type: 'category',

                    axisTick: {
                        alignWithLabel: true
                    },
                    data: city
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '声量',
                    min: 0,
                    max: 100,
                    position: 'left',
                    axisLine: {
                        lineStyle: {
                            color: colors[0]
                        }
                    },
                    axisLabel: {
                        formatter: '{value} '
                    }
                }],

            series: [{
                name:'',
                stack: '总量',
                type:'bar',
                barWidth : 30,
                data:data1
            },
                {
                    name:'食品添加剂生产企业',
                    stack: '总量',
                    type:'bar',
                    data:data2
                }]
        };
        echarts_spokesman_d.setOption(option_spokesman_d);
    },

    // ===============================================
    // 代言人效果跟踪
    // ===============================================
    'effect': function indexData() {
        var echarts_effect_a = echarts.init(document.getElementById('effect_a'));
        option_effect_a = {
            tooltip: {
                trigger: 'axis'
            },
            dataZoom: [{ // 这个dataZoom组件，默认控制x轴。
                type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                start: 10, // 左边在 10% 的位置。
                end: 60 // 右边在 60% 的位置。
            }, { // 这个dataZoom组件，也控制x轴。
                type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
                start: 10, // 左边在 10% 的位置。
                end: 60 // 右边在 60% 的位置。
            }],
            toolbox: {
                feature: {
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['line', 'bar']
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            legend: {
                data: ['Time', '贡献度(%)']
            },
            xAxis: [{
                type: 'category',
                data: [
                    '2015-08-12 17:35:03',
                    '2015-08-12 17:50:03',
                    '2015-08-12 18:05:03',
                    '2015-08-12 18:20:03',
                    '2015-08-12 18:35:03',
                    '2015-08-12 18:50:03',
                    '2015-08-12 19:05:03',
                    '2015-08-12 19:20:03',
                    '2015-08-12 19:35:03',
                    '2015-08-12 19:50:03',
                    '2015-08-12 20:05:03',
                    '2015-08-12 20:20:03',
                    '2015-08-12 20:35:03',
                    '2015-08-12 20:50:03',
                    '2015-08-12 21:05:03',
                    '2015-08-12 21:20:03',
                    '2015-08-12 21:35:03',
                    '2015-08-12 21:50:03',
                    '2015-08-12 22:05:03',
                    '2015-08-12 22:20:03',
                    '2015-08-12 22:35:03',
                    '2015-08-12 22:50:03',
                    '2015-08-12 23:05:03',
                    '2015-08-12 23:20:03',
                    '2015-08-12 23:35:03',
                    '2015-08-12 23:50:03',
                    '2015-08-13 00:05:03',
                    '2015-08-13 00:20:03',
                    '2015-08-13 00:35:03',
                    '2015-08-13 00:50:03',
                    '2015-08-13 01:05:03',
                    '2015-08-13 01:20:03',
                    '2015-08-13 01:35:03',
                    '2015-08-13 01:50:03',
                    '2015-08-13 02:05:03',
                    '2015-08-13 02:20:03',
                    '2015-08-13 02:35:03',
                    '2015-08-13 02:50:03',
                    '2015-08-13 03:05:03',
                    '2015-08-13 03:20:03',
                    '2015-08-13 03:35:03',
                    '2015-08-13 03:50:03',
                    '2015-08-13 04:05:03',
                    '2015-08-13 04:20:03',
                    '2015-08-13 04:35:03',
                    '2015-08-13 04:50:03',
                    '2015-08-13 05:05:03',
                    '2015-08-13 05:20:03',
                    '2015-08-13 05:35:03',
                    '2015-08-13 05:50:03',
                    '2015-08-13 06:05:03',
                    '2015-08-13 06:20:03',
                    '2015-08-13 06:35:03',
                    '2015-08-13 06:50:03',
                    '2015-08-13 07:05:03',
                    '2015-08-13 07:20:03',
                    '2015-08-13 07:35:03',
                    '2015-08-13 07:50:03',
                    '2015-08-13 08:05:03',
                    '2015-08-13 08:20:03',
                    '2015-08-13 08:35:03',
                    '2015-08-13 08:50:03',
                    '2015-08-13 09:05:03',
                    '2015-08-13 09:20:03',
                    '2015-08-13 09:35:03',
                    '2015-08-13 09:50:03',
                    '2015-08-13 10:05:03',
                    '2015-08-13 10:20:03',
                    '2015-08-13 10:35:03',
                    '2015-08-13 10:50:03',
                    '2015-08-13 11:05:03',
                    '2015-08-13 11:20:03',
                    '2015-08-13 11:35:03',
                    '2015-08-13 11:50:03',
                    '2015-08-13 12:05:03',
                    '2015-08-13 12:20:03',
                    '2015-08-13 12:35:03',
                    '2015-08-13 12:50:03',
                    '2015-08-13 13:05:03',
                    '2015-08-13 13:20:03',
                    '2015-08-13 13:35:03',
                    '2015-08-13 13:50:03',
                    '2015-08-13 14:05:03',
                    '2015-08-13 14:20:03',
                    '2015-08-13 14:35:03',
                    '2015-08-13 14:50:03',
                    '2015-08-13 15:05:03',
                    '2015-08-13 15:20:03',
                    '2015-08-13 15:35:03',
                    '2015-08-13 15:50:03',
                    '2015-08-13 16:05:03',
                    '2015-08-13 16:20:03',
                    '2015-08-13 16:35:03',
                    '2015-08-13 16:50:03',
                    '2015-08-13 17:05:03',
                    '2015-08-13 17:20:03',
                    '2015-08-13 17:35:03',
                    '2015-08-13 17:50:03',
                    '2015-08-13 18:05:03',
                    '2015-08-13 18:20:03',
                    '2015-08-13 18:35:03',
                    '2015-08-13 18:50:03',
                    '2015-08-13 19:05:03',
                    '2015-08-13 19:20:03',
                    '2015-08-13 19:35:03',
                    '2015-08-13 19:50:03',
                    '2015-08-13 20:05:03',
                    '2015-08-13 20:20:03',
                    '2015-08-13 20:35:03',
                    '2015-08-13 20:50:03',
                    '2015-08-13 21:05:03',
                    '2015-08-13 21:20:03',
                    '2015-08-13 21:35:03',
                    '2015-08-13 21:50:03',
                    '2015-08-13 22:05:03',
                    '2015-08-13 22:20:03',
                    '2015-08-13 22:35:03',
                    '2015-08-13 22:50:03',
                    '2015-08-13 23:05:03'
                ]
            }],
            yAxis: [{
                type: 'value',
                name: '声量',
                min: 0,
                max: 100,
                axisLabel: {
                    formatter: '{value} '
                }
            }, {
                type: 'value',
                name: '贡献度(%)',
                min: 0,
                max: 500,
                axisLabel: {
                    formatter: '{value}% '
                }
            }],
            series: [{
                name: '代言人',
                type: 'bar',
                yAxisIndex: 1,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 67, 19, 11, 14, 110, 14, 11, 10, 15, 90, 88, 80, 73, 75, 65, 55, 49, 47, 47, 47, 48, 48, 48, 47, 48, 45, 43, 46, 38, 46, 39, 39, 46, 46, 47, 47, 50, 57, 59, 72, 80, 102, 123, 141, 146, 149, 144, 147, 151, 146, 139, 147, 132, 157, 146, 155, 152, 154, 157, 149, 142, 133, 129, 137, 132, 137, 133, 125, 114, 120, 121, 122, 121, 115, 122, 124, 118, 116, 120, 114, 117, 128, 134, 142, 130, 131, 132, 133, 133, 139, 139, 138, 145, 129, 129, 130, 129, 124, 126, 124, 119, 108, 93, 87, 84, 79, 78, 71, 67, 37, 0
                ]   }, {
                name: '品牌声量',
                type: 'line',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 43.38946940845656, 17.49024083794058, 232.6352592654447, 227.53706354140868, 255.88313701510555, 240.97126591181453, 228.0310274261113, 222.96248225478226, 234.27285872916985, 225.0823062936662, 210.25577223279333, 175.385507356273, 176.31211456414098, 172.44844744270986, 145.82873479730938, 85.59443979633639, 113.66148161180246, 101.8943641284779, 65.70445440138023, 35.39445554351493, 42.99352728646546, 21.01817111980427, 31.22515967847409, 28.74570726164122, 40.13502600648357, 16.243757042417442, 43.80354009820116, 34.46054723470559, 29.165658175549382, 47.788857119787075, 15.187431669391811, 12.592449518978524, 18.649171438244267, 18.921998198520154, 8.376121654974995, 17.813489437983463, 29.263858150999045, 33.67383566222158, 70.77300517260844, 114.26724485431662, 160.2618760999904, 200.19977940039996, 262.5886634714944, 318.62816279823653, 317.3842683911697, 322.31717692354533, 306.2237174395395, 301.32006764536413, 287.820213473003, 273.96010521432106, 241.00561050461306, 251.92768364590208, 250.04078116499912, 277.0546395522128, 265.77870198888843, 277.8949014357988, 242.94200781510116, 244.11124369459682, 261.4431620758173, 261.3434719223561, 266.47973899226406, 248.81059004187077, 253.7029447621691, 254.6262843627449, 263.82002913505534, 247.7570725424023, 270.70467540639953, 252.45543576617436, 210.31452842665206, 227.94426708922762, 232.25425044514103, 222.0744740674748, 205.73216312372753, 208.77619937866615, 233.28533683147896, 204.69935574992627, 237.5505470194555, 229.44635808069813, 235.21168471528208, 248.7786362465025, 248.25391712866858, 253.24495642127266, 272.5431062070371, 263.51960283364133, 254.870854090296, 257.1387146560159, 259.0368812518209, 271.83954244193245, 246.28452837136362, 232.25571023777835, 253.0267247571281, 249.44418031287464, 257.8261761576302, 264.1114814269816, 257.6742965573407, 277.88228386536383, 273.79869037449845, 264.00669140277296, 263.45052369170344, 253.07097391931498, 274.28050156891794, 237.61152392788173, 208.90680891016083, 223.1830710792902, 212.1988868481618, 207.84597685673344, 210.29771715326294, 205.77083332018492, 172.91686530342278, 127.55285516145209, 0
                ]   }]
        };
        echarts_effect_a.setOption(option_effect_a);

        var echarts_effect_b = echarts.init(document.getElementById('effect_b'));
        var colors = ['#5793f3', '#d14a61', '#675bba'];
        option_effect_b = {
            color: colors,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            grid: {
                left: '5%',
                right: '10%',
                bottom: '16%',
                top: '8%',
                containLabel: true
            },
            legend: {
                data: ['正面', '中性', '负面']
            },
            dataZoom: [{
                show: true,
                start: 0,
                end: 60,
                bottom: '8%'
            },

            ],
            xAxis: [{
                type: 'category',

                data: ['2017-01-05', '2017-01-06', '2017-01-07', '2017-01-08', '2017-01-09', '2017-01-10', '2017-01-11', '2017-01-12', '2017-01-13', '2017-01-14', '2017-01-15', '2017-01-16']
            }],
            yAxis: [{
                type: 'value',
                name: '正面',
                min: 0,
                max: 100,
                nameRotate: 90,
                nameGap: 50,
                nameLocation: "middle",
                axisLine: {
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value} %'
                },

            }, {
                type: 'value',
                name: '中性',
                min: 0,
                max: 250,
                nameRotate: 90,
                nameGap: 50,
                nameLocation: "middle",
                offset: 80,
                axisLine: {
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisLabel: {
                    formatter: '{value} '
                }
            }, {
                type: 'value',
                name: '负面',
                min: 0,
                max: 25,
                nameRotate: 90,
                nameGap: 50,
                nameLocation: "middle",
                axisLine: {
                    lineStyle: {
                        color: colors[2]
                    }
                },

            }],
            series: [{
                name: '正面',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 86.6, 62.2, 32.6, 20.0, 6.4, 3.3]
            }, {
                name: '中性',
                type: 'line',
                yAxisIndex: 1,
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            }, {
                name: '负面',
                type: 'line',
                yAxisIndex: 2,
                data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }]
        };
        echarts_effect_b.setOption(option_effect_b);

        var echarts_effect_d = echarts.init(document.getElementById('effect_d'));
        option_effect_d = {
            backgroundColor: '#ffffff',
            name: 'a',
            tooltip: {
                trigger: 'axis', //按x轴显示
                show: true,
                axisPointer: {
                    lineStyle: {
                        color: 'none', //不显示线条
                    },
                },
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                textStyle: {
                    align: 'left',
                    fontSize: 12,
                    color: '#333333',
                },
                extraCssText: 'box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2)' //添加阴影
            },
            color: ['#0580f2', '#faa732', '#e1575d'],
            grid: {
                left: '5%',
                right: '6%',
                top: '14%',
                bottom: '6%',
                containLabel: true
            },
            legend: {
                show: true,
                icon: 'circle',
                right: 20,
                textStyle: {
                    fontSize: 12,
                    color: '#333333'
                },
                data: ['李娜', '郭艾伦', '刘涛']
            },
            xAxis: {
                show: true,
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#eeeeee',
                    }
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 14,
                        color: '#999999'
                    }
                },
                data: ['2010', '2011', '2012', '2015', '2016', '2017']
            },
            yAxis: {
                show: true,
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#f2f3f7'
                    }
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: '#999999'
                    }
                }
            },
            series: [{
                name: '李娜',
                type: 'line',
                symbol: 'circle',
                itemStyle: {
                    emphasis: {
                        symbol: 'circle',
                    }
                },
                symbolSize: [8, 8],
                data: [1, 0, 1, 4, 10, 8]
            }, {
                name: '郭艾伦',
                type: 'line',
                symbol: 'circle',
                symbolSize: [8, 8],
                data: [2, 1, 3, 3, 5, 6]
            }, {
                name: '刘涛',
                type: 'line',
                symbol: 'circle',
                symbolSize: [8, 8],
                data: [4, 4, 4, 10, 15, 3]
            }]
        };
        echarts_effect_d.setOption(option_effect_d);

        var echarts_effect_e = echarts.init(document.getElementById('effect_e'));
        option_effect_e = {
            color: ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", ],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            legend: {
                data: ['代言人声量', '代言人&品牌声量', '代言人&品牌声量&正向声量']
            },
            series: [{
                name: '预期',
                type: 'funnel',
                left: '10%',
                width: '80%',
                label: {
                    normal: {
                        formatter: '{b}预期'
                    },
                    emphasis: {
                        position: 'inside',
                        formatter: '{b}预期: {c}%'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        opacity: 0.7
                    }
                },
                data: [{
                    value: 60,
                    name: '代言人声量'
                },
                    {
                        value: 40,
                        name: '代言人&品牌声量'
                    },
                    {
                        value: 20,
                        name: '代言人&品牌声量&正向声量'
                    },
                ]
            },
                {
                    name: '实际',
                    type: 'funnel',
                    left: '10%',
                    width: '80%',
                    maxSize: '80%',
                    label: {
                        normal: {
                            position: 'inside',
                            formatter: '{c}%',
                            textStyle: {
                                color: '#777'
                            }
                        },
                        emphasis: {
                            position: 'inside',
                            formatter: '{b}实际: {c}%'
                        }
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0.4,
                            borderColor: '#fff',
                            borderWidth: 2
                        }
                    },
                    data: [{
                        value: 30,
                        name: '代言人声量'
                    },
                        {
                            value: 10,
                            name: '代言人&品牌声量'
                        },
                        {
                            value: 5,
                            name: '代言人&品牌声量&正向声量'
                        }
                    ]
                }
            ]
        };
        echarts_effect_e.setOption(option_effect_e);

        var echarts_effect_f = echarts.init(document.getElementById('effect_f'));
        option_effect_f = {
            color: ["#67E0E3", "#9FE6B8", "#FFDB5C", ],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            legend: {
                data: ['代言人声量', '代言人&品牌声量', '代言人&品牌声量&正向声量']
            },
            series: [{
                name: '预期',
                type: 'funnel',
                left: '10%',
                width: '80%',
                label: {
                    normal: {
                        formatter: '{b}预期'
                    },
                    emphasis: {
                        position: 'inside',
                        formatter: '{b}预期: {c}%'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        opacity: 0.7
                    }
                },
                data: [{
                    value: 60,
                    name: '代言人声量'
                },
                    {
                        value: 40,
                        name: '代言人&品牌声量'
                    },
                    {
                        value: 20,
                        name: '代言人&品牌声量&正向声量'
                    },
                ]
            },
                {
                    name: '实际',
                    type: 'funnel',
                    left: '10%',
                    width: '80%',
                    maxSize: '80%',
                    label: {
                        normal: {
                            position: 'inside',
                            formatter: '{c}%',
                            textStyle: {
                                color: '#777'
                            }
                        },
                        emphasis: {
                            position: 'inside',
                            formatter: '{b}实际: {c}%'
                        }
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0.4,
                            borderColor: '#fff',
                            borderWidth: 2
                        }
                    },
                    data: [{
                        value: 30,
                        name: '代言人声量'
                    },
                        {
                            value: 20,
                            name: '代言人&品牌声量'
                        },
                        {
                            value: 15,
                            name: '代言人&品牌声量&正向声量'
                        }
                    ]
                }
            ]
        };
        echarts_effect_f.setOption(option_effect_f);

        var echarts_effect_g = echarts.init(document.getElementById('effect_g'));
        option_effect_g = {
            color: ["#FFDB5C", "#9FE6B8", "#37A2DA", ],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            legend: {
                data: ['代言人声量', '代言人&品牌声量', '代言人&品牌声量&正向声量']
            },
            series: [{
                name: '预期',
                type: 'funnel',
                left: '10%',
                width: '80%',
                label: {
                    normal: {
                        formatter: '{b}预期'
                    },
                    emphasis: {
                        position: 'inside',
                        formatter: '{b}预期: {c}%'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        opacity: 0.7
                    }
                },
                data: [{
                    value: 60,
                    name: '代言人声量'
                },
                    {
                        value: 40,
                        name: '代言人&品牌声量'
                    },
                    {
                        value: 20,
                        name: '代言人&品牌声量&正向声量'
                    },
                ]
            },
                {
                    name: '实际',
                    type: 'funnel',
                    left: '10%',
                    width: '80%',
                    maxSize: '80%',
                    label: {
                        normal: {
                            position: 'inside',
                            formatter: '{c}%',
                            textStyle: {
                                color: '#777'
                            }
                        },
                        emphasis: {
                            position: 'inside',
                            formatter: '{b}实际: {c}%'
                        }
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0.4,
                            borderColor: '#fff',
                            borderWidth: 2
                        }
                    },
                    data: [{
                        value: 35,
                        name: '代言人声量'
                    },
                        {
                            value: 26,
                            name: '代言人&品牌声量'
                        },
                        {
                            value: 10,
                            name: '代言人&品牌声量&正向声量'
                        }
                    ]
                }
            ]
        };
        echarts_effect_g.setOption(option_effect_g);

        var echarts_effect_h = echarts.init(document.getElementById('effect_h'));
        option_effect_h = {
            color: ["#FFDB5C", "#67E0E3", "#9FE6B8", ],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            legend: {
                data: ['代言人声量', '代言人&品牌声量', '代言人&品牌声量&正向声量']
            },
            series: [{
                name: '预期',
                type: 'funnel',
                left: '10%',
                width: '80%',
                label: {
                    normal: {
                        formatter: '{b}预期'
                    },
                    emphasis: {
                        position: 'inside',
                        formatter: '{b}预期: {c}%'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        opacity: 0.7
                    }
                },
                data: [{
                    value: 60,
                    name: '代言人声量'
                },
                    {
                        value: 40,
                        name: '代言人&品牌声量'
                    },
                    {
                        value: 20,
                        name: '代言人&品牌声量&正向声量'
                    },
                ]
            },
                {
                    name: '实际',
                    type: 'funnel',
                    left: '10%',
                    width: '80%',
                    maxSize: '80%',
                    label: {
                        normal: {
                            position: 'inside',
                            formatter: '{c}%',
                            textStyle: {
                                color: '#777'
                            }
                        },
                        emphasis: {
                            position: 'inside',
                            formatter: '{b}实际: {c}%'
                        }
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0.4,
                            borderColor: '#fff',
                            borderWidth: 2
                        }
                    },
                    data: [{
                        value: 40,
                        name: '代言人声量'
                    },
                        {
                            value: 25,
                            name: '代言人&品牌声量'
                        },
                        {
                            value: 12,
                            name: '代言人&品牌声量&正向声量'
                        }
                    ]
                }
            ]
        };
        echarts_effect_h.setOption(option_effect_h);

        var echarts_effect_h = echarts.init(document.getElementById('effect_h'));
        option_effect_h = {
            color: ["#FFDB5C", "#67E0E3", "#9FE6B8", ],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            legend: {
                data: ['代言人声量', '代言人&品牌声量', '代言人&品牌声量&正向声量']
            },
            series: [{
                name: '预期',
                type: 'funnel',
                left: '10%',
                width: '80%',
                label: {
                    normal: {
                        formatter: '{b}预期'
                    },
                    emphasis: {
                        position: 'inside',
                        formatter: '{b}预期: {c}%'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        opacity: 0.7
                    }
                },
                data: [{
                    value: 60,
                    name: '代言人声量'
                },
                    {
                        value: 40,
                        name: '代言人&品牌声量'
                    },
                    {
                        value: 20,
                        name: '代言人&品牌声量&正向声量'
                    },
                ]
            },
                {
                    name: '实际',
                    type: 'funnel',
                    left: '10%',
                    width: '80%',
                    maxSize: '80%',
                    label: {
                        normal: {
                            position: 'inside',
                            formatter: '{c}%',
                            textStyle: {
                                color: '#777'
                            }
                        },
                        emphasis: {
                            position: 'inside',
                            formatter: '{b}实际: {c}%'
                        }
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0.4,
                            borderColor: '#fff',
                            borderWidth: 2
                        }
                    },
                    data: [{
                        value: 40,
                        name: '代言人声量'
                    },
                        {
                            value: 25,
                            name: '代言人&品牌声量'
                        },
                        {
                            value: 12,
                            name: '代言人&品牌声量&正向声量'
                        }
                    ]
                }
            ]
        };
        echarts_effect_h.setOption(option_effect_h);

        var echarts_effect_i = echarts.init(document.getElementById('effect_i'));
        option_effect_i = {
            tooltip : {
                trigger: 'axis',
                formatter: function (params) {
                    var relVal = params[0].name;
                    var value = 0;
                    for (var i = 0, l = params.length; i < l; i++) {
                        value += params[i].value;
                    }
                    for (var i = 0, l = params.length; i < l; i++) {
                        relVal += '<br/>' + params[i].seriesName + ' : ' + (100 * parseFloat(params[i].value) / parseFloat(value)).toFixed(2) + "%";
                    }
                    return relVal;
                },
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['新闻','微信','视频','微博']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['2017.1月','2017.3月','2017.5月','2017.7月','2017.9月','2017.11月','2017.12月']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'新闻',
                    type:'bar',
                    barWidth : 20,
                    stack: '搜索引擎',
                    data:[620, 732, 701, 734, 1090, 1130, 1120]
                },
                {
                    name:'微信',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[120, 132, 101, 134, 290, 230, 220]
                },
                {
                    name:'视频',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[60, 72, 71, 74, 190, 130, 110]
                },
                {
                    name:'微博',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[62, 82, 91, 84, 109, 110, 120]
                }
            ]
        };
        echarts_effect_i.setOption(option_effect_i);

        var echarts_effect_j = echarts.init(document.getElementById('effect_j'));
        option_effect_j = {
            tooltip : {
                trigger: 'axis',
                formatter: function (params) {
                    var relVal = params[0].name;
                    var value = 0;
                    for (var i = 0, l = params.length; i < l; i++) {
                        value += params[i].value;
                    }
                    for (var i = 0, l = params.length; i < l; i++) {
                        relVal += '<br/>' + params[i].seriesName + ' : ' + (100 * parseFloat(params[i].value) / parseFloat(value)).toFixed(2) + "%";
                    }
                    return relVal;
                },
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['新闻','微信','视频','微博']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['2017.1月','2017.3月','2017.5月','2017.7月','2017.9月','2017.11月','2017.12月']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'新闻',
                    type:'bar',
                    barWidth : 20,
                    stack: '搜索引擎',
                    data:[420, 232, 601, 534, 890, 1030, 1020]
                },
                {
                    name:'微信',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[150, 232, 301, 234, 290, 330, 420]
                },
                {
                    name:'视频',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[160, 172,61, 64, 90, 60, 120]
                },
                {
                    name:'微博',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[82, 52, 81, 74, 119, 120, 100]
                }
            ]
        };
        echarts_effect_j.setOption(option_effect_j);
    },
    // ===============================================
    // 微博粉丝分析
    // ===============================================
    'fans': function indexData() {
        var echarts_fans_a = echarts.init(document.getElementById('fans_a'));
        option_fans_a = {
            color: ["#37A2DA", "#FF9F7F"],
            legend: {
                data: ['其它', '真粉']

            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['李娜', '刘涛', '邓伦', '鹿晗', '邓超', '贾静雯'],
                axisTick: {
                    alignWithLabel: true
                }
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                name: '其它',
                type: 'bar',
                stack: '总量',
                barWidth: '70%',
                data: [1400000, 1000000, 1600000, 7000000, 6000000, 1500000]
            }, {
                name: '真粉',
                type: 'bar',
                stack: '总量',
                barWidth: '70%',
                data: [1200000, 1400000, 6000000, 1300000, 5000000, 400000]
            }]
        };
        echarts_fans_a.setOption(option_fans_a);

        var echarts_fans_b = echarts.init(document.getElementById('fans_b'));
        option_fans_b = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                data:['10-15','16-20','21-25','26-30','31-35','36-40','40-45',]
            },
            series: [
                {
                    name:'案件来源占比',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '60%'],
                    center:['50%','50%'],
                    color: ['#669999','#33CC99','#e47070', '#55b4e3','#eab2f6', '#ccc' ,'#FF9966',],
                    label:  {
                        normal: {
                            formatter: '{b}\n  {c} ({d}%)'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true
                        }
                    },

                    data:[
                        //{value:335, name:'食品生产', selected:true},
                        {value:3500, name:'10-15'},
                        {value:6500, name:'16-20'},
                        {value:3500, name:'21-25'},
                        {value:6500, name:'26-30'},
                        {value:3500, name:'31-35'},
                        {value:3500, name:'36-40'},
                        {value:6500, name:'40-45'}
                    ]
                },
            ]
        };
        echarts_fans_b.setOption(option_fans_b);

        var echarts_fans_c = echarts.init(document.getElementById('fans_c'));
        option_fans_c = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['女', '男'],
                bottom: 20
            },
            calculable: true,
            label: {
                normal: {
                    testStyle: {}
                }
            },
            xAxis: [{
                type: 'value',
                show: false
            }],
            itemStyle: {
                normal: {
                    barBorderRadius: 6
                }
            },
            barGap: 0,
            barCategoryGap: 0,
            yAxis: [{
                type: 'category',
                data: ['性别比例'],
                show: false
            }],
            series: [{
                name: '女',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'inside'
                        }
                    }
                },
                data: ['67.5']
            },
                {
                    name: '男',
                    type: 'bar',
                    stack: '总量',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'inside'
                            }
                        }
                    },
                    data: ['32.5']
                }
            ]
        };
        echarts_fans_c.setOption(option_fans_c);
    }
};


// ===============================================
// 日期插件
// ===============================================
$(function () {
    var startDate = new Date(2014, 11, 20);
    var endDate = new Date(2014, 11, 25);
    var $alert = $('#my-alert');
    $('#my-start').datepicker().on('changeDate.datepicker.amui', function (event) {
        if (event.date.valueOf() > endDate.valueOf()) {
            $alert.find('p').text('开始日期应小于结束日期！').end().show();
        } else {
            $alert.hide();
            startDate = new Date(event.date);
            $('#my-startDate').text($('#my-start').data('date'));
        }
        $(this).datepicker('close');
    });

    $('#my-end').datepicker().on('changeDate.datepicker.amui', function (event) {
        if (event.date.valueOf() < startDate.valueOf()) {
            $alert.find('p').text('结束日期应大于开始日期！').end().show();
        } else {
            $alert.hide();
            endDate = new Date(event.date);
            $('#my-endDate').text($('#my-end').data('date'));
        }
        $(this).datepicker('close');
    });
});