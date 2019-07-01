 var electricReportChart;
 var electricReportOption={};
 var hvacTemperatureReportChart;
 var hvacTemperatureReportOption={};
 var hvacHumidityReportChart;
 var hvacHumidityReportOption={};
 var hvacAcReportChart;
 var hvacAcReportOption={};
 var ecosysReportChart;
 var ecosysReportOption={};
 var electricCorpChart;
 var electricCorpOption={};
 var costChart;
 var costOption={};
 
 $(function() {
	 electricReportChart = echarts.init(document.getElementById('electricReport'));
	 hvacTemperatureReportChart = echarts.init(document.getElementById('hvacTemperatureReport'));
	 hvacHumidityReportChart = echarts.init(document.getElementById('hvacHumidityReport'),'macarons');
	 hvacAcReportChart = echarts.init(document.getElementById('hvacAcReport'));
	 ecosysReportChart = echarts.init(document.getElementById('ecosysReport'));
	 costChart=echarts.init(document.getElementById('monthByCorp4'), 'macarons');
	 electricCorpChart=echarts.init(document.getElementById('monthByCorp5'), 'macarons');
    });
	   //第二页电系统报表初始化
	function electricReport(){
    	electricReportOption = {
			backgroundColor: '#FFE2D0',//背景色
			title: {
				text: '',
				top:'3%'
			},
			grid: {
				bottom: '10px',
				left: '10px',
				containLabel: true
			},
			tooltip : {         
				trigger: 'item',
				showDelay: 0,
				hideDelay: 50,
				transitionDuration:0,
				backgroundColor : 'rgba(72,84,101,0.9)',
				padding: 10,    // [5, 10, 15, 20]
				position : function(p) {
					return [p[0]-40, p[1] - 90];
				},
				extraCssText:'height:30px;margin-top:35px', //消息框大小
				// 设置文本样式
				textStyle : {
					color: '#FFFFFF',
					decoration: 'c',
					fontFamily: 'Verdana, sans-serif',
					fontStyle: 'italic',
					align:'center',
					fontWeight: 'bold'
				},
				formatter: "<div><span style='font-size:10px;text-algin:center;width:40px;height:15px'>{b}</span></br><span style='font-size:10px;text-algin:center;width:40px;height:15px'>{c}kW</span></div>",
				axisPointer:{
					type: 'none',
				}   
			},
			legend: {
				data:[],
				orient: 'vertical',
				textStyle:{
					fontSize: 14
				}
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: [],
				axisLine:{
					show:false,
				},axisLabel :{  
					interval:0,
					formatter:function(value){
				   return "";
				}     
				},
			},
			yAxis: {
				type: 'value',
				show: false, // 设置Y轴是否显示
				//axisLabel : {
					//formatter: '{value} °C', // 设置Y轴显示的值
				//}
			},
			series: []
		};
    }
	 //第二页电系统报表数据动态赋值
	function resetElectricReportData(seriesData,xAxisData,cueName){
		 electricReportOption.legend.data = "电力";
		 electricReportOption.xAxis.data = xAxisData;
		 electricReportOption.series = {
				name:"温度",
				data:seriesData,
				type:"line",
				symbolSize: 5,//设定实心点的大小
				itemStyle : {  
					normal : {  
						color:'#000000',  // 线的颜色				
					},
										
				}, 
		 };
		 electricReportChart.setOption(electricReportOption);
	}
    //暖通温度报表初始化
   function hvacTemperatureReport(){
    	hvacTemperatureReportOption = {
			backgroundColor: '#FFE2D0',//背景色
			title: {
				text: '',
				top:'3%'
			},
			grid: {
				bottom: '10px',
				left: '10px',
				containLabel: true
			},
			tooltip : {         
				trigger: 'item',
				showDelay: 0,
				hideDelay: 50,
				transitionDuration:0,
				backgroundColor : 'rgba(72,84,101,0.9)',
				position : function(p) {
					return [p[0]-40, p[1] - 65];
				},
				extraCssText:'width:80px;height:50px', //消息框大小
				// 设置文本样式
				textStyle : {
					color: '#FFFFFF',
					decoration: 'c',
					fontFamily: 'Verdana, sans-serif',
					//fontStyle: 'italic',
					align:'center',
					fontWeight: 'bold'
				},
				formatter: "<div><span style='font-size:12px;width:80px;height50px'>{b}</span></br><span style='font-size:18px;width:80px;height50px'>{c}°C</span></div>",
				axisPointer:{
					type: 'none',
				}   
			},
			legend: {
				data:[],
				orient: 'vertical',
				textStyle:{
					fontSize: 14
				}
			},
			calculable : true,
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: [],
				axisLine:{
					show: false,
				},
				axisTick:{
					lineStyle:{
						color: '#FC924F',
					}
				},
				axisLabel: {  
					interval:0,  
					formatter:function(value){  
					   return "";  
				   } 
				} 
			},
			yAxis: {
				type: 'value',
				show: false, // 设置Y轴是否显示
			},
			series: []
		};
    }
   //第二页暖通系统温度报表数据动态赋值
   	function resethvacTemperatureReportData(seriesData,xAxisData,cueName){
		 hvacTemperatureReportOption.legend.data = "温度";
		 hvacTemperatureReportOption.xAxis.data = xAxisData;
		 hvacTemperatureReportOption.series = {
				name:"温度",
				data:seriesData,
				type:"line",
				symbolSize: 5,//设定实心点的大小
				itemStyle : {  
					normal : {  
						color:'#000000',  // 线的颜色				
					},
										
				}, 
		 };
		 hvacTemperatureReportChart.setOption(hvacTemperatureReportOption);
	}
   //湿度报表初始化
   	function hvacHumidityReport(){
    	hvacHumidityReportOption = {
			backgroundColor: '#FFE2D0',//背景色
			title: {
				text: '',
				top:'3%'
			},
			grid: {
				bottom: '10px',
				left: '10px',
				containLabel: true
			},
			tooltip : {         
				trigger: 'item',
				showDelay: 0,
				hideDelay: 50,
				transitionDuration:0,
				backgroundColor : 'rgba(72,84,101,0.9)',
				position : function(p) {
					return [p[0]-40, p[1] - 65];
				},
				extraCssText:'width:80px;height:50px', //消息框大小
				// 设置文本样式
				textStyle : {
					color: '#FFFFFF',
					decoration: 'c',
					fontFamily: 'Verdana, sans-serif',
					align:'center',
					fontWeight: 'bold'
				},
				formatter: "<div><span style='font-size:12px;width:80px;height50px'>{b}</span></br><span style='font-size:18px;width:80px;height50px'>{c}%</span></div>",
				axisPointer:{
					type: 'none',
				}   
			},
			legend: {
				data:[],
				orient: 'vertical',
				textStyle:{
					fontSize: 14
				}
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: [],
				axisLine:{
					show: false,
				},
				axisTick:{
					lineStyle:{
						color: '#FC924F',
					}
				},
				axisLabel: {  
					interval:0,  
					formatter:function(value){  
					   return "";  
				   } 
				} 
			},
			yAxis: {
				type: 'value',
				show: false, // 设置Y轴是否显示
			},
			series: []
		};
    }
     //第二页暖通系统湿度报表数据动态赋值
   	function hvacHumidityReportData(seriesData,xAxisData,cueName){
		 hvacHumidityReportOption.legend.data = "温度";
		 hvacHumidityReportOption.xAxis.data = xAxisData;
		 hvacHumidityReportOption.series = {
				name:"温度",
				data:seriesData,
				type:"line",
				symbolSize: 5,//设定实心点的大小
				itemStyle : {  
					normal : {  
						color:'#000000',  // 线的颜色				
					},
										
				}, 
		 };
		 hvacHumidityReportChart.setOption(hvacHumidityReportOption);
	}
	//第二页空气洁净的报表初始化
	function hvacAcReport(){
    	hvacAcReportOption = {
			backgroundColor: '#FFE2D0',//背景色
			title: {
				text: '',
				top:'3%'
			},
			grid: {
				bottom: '10px',
				left: '10px',
				containLabel: true
			},
			tooltip : {         
				trigger: 'item',
				showDelay: 0,
				hideDelay: 50,
				transitionDuration:0,
				backgroundColor : 'rgba(72,84,101,0.9)',
				position : function(p) {
					return [p[0]-40, p[1] - 65];
				},
				extraCssText:'height:50px', //消息框大小
				// 设置文本样式
				textStyle : {
					color: '#FFFFFF',
					decoration: 'c',
					fontFamily: 'Verdana, sans-serif',
					align:'center',
					fontWeight: 'bold'
				},
				formatter: "<div><span style='font-size:12px;width:80px;height50px'>{b}</span></br><span style='font-size:18px;width:80px;height50px'>{c}PC/ft³</span></div>",
				axisPointer:{
					type: 'none',
				}   
			},
			legend: {
				data:[],
				orient: 'vertical',
				textStyle:{
					fontSize: 14
				}
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: [],
				axisLine:{
					show: false,
				},
				axisTick:{
					lineStyle:{
						color: '#FC924F',
					}
				},
				axisLabel: {  
					interval:0,  
					formatter:function(value){  
					   return "";  
				   } 
				} 
			},
			yAxis: {
				type: 'value',
				show: false, // 设置Y轴是否显示
			},
			series: []
		};
    }
    //第二页暖通系统湿度报表数据动态赋值
   	function hvacAcReportData(seriesData,xAxisData,cueName){
		 hvacAcReportOption.legend.data = "空气洁净度";
		 hvacAcReportOption.xAxis.data = xAxisData;
		 hvacAcReportOption.series = {
				name:"温度",
				data:seriesData,
				type:"line",
				symbolSize: 5,//设定实心点的大小
				itemStyle : {  
					normal : {  
						color:'#000000',  // 线的颜色				
					},
										
				}, 
		 };
		 hvacAcReportChart.setOption(hvacAcReportOption);
	}
	
	function ecosysReport(){
     	ecosysReportOption = {
			backgroundColor: '#E8FFC1',//背景色
			title: {
				text: '',
				top:'3%'
			},
			grid: {
				bottom: '10px',
				left: '10px',
				containLabel: true
			},
			tooltip : {         
				trigger: 'item',
				showDelay: 0,
				hideDelay: 50,
				transitionDuration:0,
				backgroundColor : 'rgba(72,84,101,0.9)',
				position : function(p) {
					return [p[0]-40, p[1] - 65];
				},
				extraCssText:'width:80px;height:50px', //消息框大小
				// 设置文本样式
				textStyle : {
					color: '#FFFFFF',
					decoration: 'c',
					fontFamily: 'Verdana, sans-serif',
					//fontStyle: 'italic',
					align:'center',
					fontWeight: 'bold'
				},
				formatter: "<div><span style='font-size:12px;width:80px;height50px'>{b}</span></br><span style='font-size:18px;width:80px;height50px'>{c}m³</span></div>",
				axisPointer:{
					type: 'none',
				}   
			},
			legend: {
				data:[],
				orient: 'vertical',
				textStyle:{
					fontSize: 14
				}
			},
			calculable : true,
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: [],
				axisLine:{
					show: false,
				},
				axisTick:{
					lineStyle:{
						color: '#A9ED3A',
					}
				},
				axisLabel: {  
					interval:0,  
					formatter:function(value){  
					   return "";  
				   } 
				} 
			},
			yAxis: {
				type: 'value',
				show: false, // 设置Y轴是否显示
			},
			series: []
		};
    }
    
	    //第二页暖通系统湿度报表数据动态赋值
   	function ecosysReportData(seriesData,xAxisData,cueName){
		 ecosysReportOption.legend.data = "空气洁净度";
		 ecosysReportOption.xAxis.data = xAxisData;
		 ecosysReportOption.series = {
				name:"温度",
				data:seriesData,
				type:"bar",
				symbolSize: 5,//设定实心点的大小
				itemStyle : {  
					normal : {  
						color:'#000000',  // 线的颜色				
					},
										
				}, 
		 };
		 ecosysReportChart.setOption(ecosysReportOption);
	}
	//数据耗能设备饼图初始化方法
	function electricCorpFunction(){
		electricCorpOption = {
			backgroundColor: '#0B0B0D',
			tooltip: {
				trigger: 'item',
				show: false,
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				x: 'left',
				left: 0,
				top: 0,
				show: false,
				data: []
			},
			series: [{
				name: '设备',
				type: 'pie',
				radius: ['40%', '70%'],
				color: ['#FFC800', '#FFF3C8', '#ccc'],
				avoidLabelOverlap: false,
				avoidAnimatio: false,
				hoverAnimation: false,//�Ƿ��� hover �������ϵķŴ󶯻�Ч����
				cursor: 'default',
				label: {
					normal: {
						show: false,
						position: 'center',
						formatter: "{a}%"
					},
					emphasis: {
						show: true,
						textStyle: {
							fontSize: '14',
							fontWeight: 'bold'
						},
						formatter: function (val) { //�����е�����
							return val.percent + "%";
						}
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				itemStyle: {
					borderColor: "#0B0B0D",
					borderWidth: 5,
				},
				data: []
			}]
		};
	}
	//数据耗能设备饼图赋值方法
	function electricCorpOptionData(lendata,seriesData) {
 		electricCorpOption.legend.data = lendata;
		electricCorpOption.series[0].data = seriesData;
		electricCorpChart.setOption(electricCorpOption);
		var currentIndex = -1;
			var dataLen = electricCorpOption.series[0].data.length;
			electricCorpChart.dispatchAction({
				type: 'downplay',
				seriesIndex: 0,
				dataIndex: currentIndex
			});
			currentIndex = (currentIndex + 1) % dataLen;
			$("#division_two").html(electricCorpOption.series[0].data[currentIndex].name);
			electricCorpChart.dispatchAction({
				type: 'highlight',
				seriesIndex: 0,
				dataIndex: currentIndex
			});
			electricCorpChart.dispatchAction({
				type: 'showTip',
				seriesIndex: 0,
				dataIndex: currentIndex,
			});
	}

	//数据部门费用饼图初始化方法
	function costFunction(){
		costOption = {
			backgroundColor: '#0B0B0D',
			tooltip: {
				trigger: 'item',
				show:false,
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				x: 'left',
				left: 0,
				top: 0,
				show: false,
				data: []
			},
			series: [{
				name: '费用',
				type: 'pie',
				radius: ['40%', '70%'],
				color: ['#FFC800', '#FFF3C8', '#ccc'],
				avoidLabelOverlap: false,
				avoidAnimatio: false,
				hoverAnimation: false,//�Ƿ��� hover �������ϵķŴ󶯻�Ч����
				cursor: 'default',
				label: {
					normal: {
						show: false,
						position: 'center',
						formatter: "{a}%"
					},
					emphasis: {
						show: false,
						textStyle: {
							fontSize: '14',
							fontWeight: 'bold'
						},
						formatter: function (val) { 
							return val.percent + "%";
						}
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				itemStyle: {
					borderColor: "#0B0B0D",
					borderWidth: 5,
				},
				data: []
			}]
		};
	}
	//数据部门费用饼图赋值方法
	function costOptionData(lendata,seriesData) {
		costOption.legend.data = lendata;
		costOption.series[0].data = seriesData;
		costChart.setOption(costOption);
		var currentsIndex = -1;
			var dataaLen = costOption.series[0].data.length;
			costChart.dispatchAction({
				type: 'downplay',
				seriesIndex: 0,
				dataIndex: currentsIndex
			});
			currentsIndex = (currentsIndex + 1) % dataaLen;
			$("#division_one").html(costOption.series[0].data[currentsIndex].name);
			costChart.dispatchAction({
				type: 'highlight',
				seriesIndex: 0,
				dataIndex: currentsIndex
			});
			costChart.dispatchAction({
				type: 'showTip',
				seriesIndex: 0,
				dataIndex: currentsIndex,
			});
	}

	