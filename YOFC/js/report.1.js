 var monthByCorp3Chart;
 var monthByCorp3Option={};
 var monthByCorp6Chart;
 var monthByCorp6Option={};
 var monthByCorp7Chart;
 var monthByCorp7Option={};
 var monthByCorp8Chart;
 var monthByCorp8Option={};
  $(function() {
	 monthByCorp3Chart = echarts.init(document.getElementById('monthByCorp3'));
	 monthByCorp6Chart = echarts.init(document.getElementById('monthByCorp6'),'macarons');
	 monthByCorp7Chart = echarts.init(document.getElementById('monthByCorp7'),'macarons');
	 monthByCorp8Chart = echarts.init(document.getElementById('monthByCorp8'),'macarons');
     });
		
	
function drawByCorp3(){
	monthByCorp3Option = {
		backgroundColor: '#0B0B0D',//����ɫ
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
			extraCssText:'width:80px;height:50px', //��Ϣ���С
			// �����ı���ʽ
			textStyle : {
				color: '#FFFFFF',
				decoration: 'c',
				fontFamily: 'Verdana, sans-serif',
				//fontStyle: 'italic',
				align:'center',
				fontWeight: 'bold'
			},
			formatter: "<div><span style='font-size:12px;width:80px;height50px'>{b}</span></br><span style='font-size:18px;width:80px;height50px'>{c}kW/h</span></div>",
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
			show: false, // ����Y���Ƿ���ʾ
		},
		series: []
	};
	 
}

function loadDataByCorp3(cueName,seriesData,xAxisData){	
	 monthByCorp3Option.legend.data = cueName;
	 monthByCorp3Option.xAxis.data = xAxisData;
	 monthByCorp3Option.series = {
			name:cueName,
			data:seriesData,
			type:"bar",
			symbolSize: 5,
			itemStyle : {  
				normal : {  
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{  
						offset: 0,  
						color: '#FFA000'  
					}, {  
						offset: 1,  
						color: '#2DF0DB'  
					}]),//��������ɫ 
					lineStyle:{
						color:'#000000',  // �ߵ���ɫ
					}
				},				
			},
	 };
	 monthByCorp3Chart.setOption(monthByCorp3Option);
}
/*-------------------------------------------------------------------------------------------------------*/
function drawByCorp6(){
	monthByCorp6Option = {
		backgroundColor:'#000000',
		//backgroundColor: 'url(nav.png) no-repeat',
		//vbackgroundSize:cover,
		title: {
			text: '',
			top:'3%'
		},
		grid: {
			bottom: '20px',
			left: '25px',
			containLabel: true
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
			axisLine:{ // ����X�����Ƿ���ʾ
				show: false,
			},
			axisTick:{ // ���ÿ̶�����ɫ
				lineStyle:{
					color: '#FFC800',
				}
			},
			axisLabel: {  // ���ÿ̶�������
				interval:0,  
				formatter:function(value){  
				   return "";  
			   } 
			} 
		},
		yAxis: {
			type: 'value',
			show: false, // ����Y���Ƿ���ʾ
		},
		series: []
	};
	 
}

function loadDataByCorp6(cueName,seriesData,xAxisData){	
	 
	monthByCorp6Option.legend.data = "cueName";
	monthByCorp6Option.xAxis.data = xAxisData;
	monthByCorp6Option.series = {
		   name:"cueName",
		   data:seriesData,
		   type:"line",
		   symbol:'none',  
		   smooth:true,  
		   symbolSize: 5,
		   itemStyle : {  
			   normal : {  
				   color: '#FFC965 ',  // �ߵ���ɫ 						
			   },			
		   }, 
		   lineStyle: { 
			   width: 2,  
			   type: 'solid',  
			   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{  
				   offset: 0,  
				   color: '#FFC965'  
			   }, {  
				   offset: 1,  
				   color: '#CFFF7B'  
			   }]),
		   } 	
	};
	monthByCorp6Chart.setOption(monthByCorp6Option);
}

function drawByCorp7(){
	monthByCorp7Option = {
		backgroundColor:'#0B0B0D',//����ɫ
		title: {
			text: '',
			top:'3%'
		},
		grid: {
			bottom: '20px',
			left: '30px',
			containLabel: true
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
					color: '#FFC800',
					
				},
				interval:10,
				
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
			show: false, // ����Y���Ƿ���ʾ
		},
		series: []
	};
 
}

function loadDataByCorp7(cueName,seriesData,xAxisDat){	
 	 monthByCorp7Option.legend.data = cueName;
	 monthByCorp7Option.xAxis.data = xAxisDat;
	 monthByCorp7Option.series = {
			name:cueName,
			data:seriesData,
			type:"line",
			symbol:'none',  //������ȥ����  
			smooth:true,  //�����������߱�ƽ���� 
			itemStyle : {  
				normal : {  
					color:'#FC924F',  // �ߵ���ɫ
				},				
			},
			lineStyle: {        // ϵ�м����Ի�������ʽ  
				width: 2,  
				type: 'solid',  
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{  
					offset: 0,  
					color: '#2DF0DB '  
				}, {  
					offset: 1,  
					color: '#FFA000'  
				}]),//��������ɫ  
			} 	
	 };
	 monthByCorp7Chart.setOption(monthByCorp7Option);
}

function drawByCorp8(){
	monthByCorp8Option = {
		backgroundColor:'#0B0B0D',//����ɫ
		title: {
			text: '',
			top:'3%'
		},
		grid: {
			bottom: '20px',
			left: '25px',
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
			extraCssText:'width:80px;height:50px', //��Ϣ���С
			// �����ı���ʽ
			textStyle : {
				color: '#FFFFFF',
				decoration: 'c',
				fontFamily: 'Verdana, sans-serif',
				align:'center',
				fontWeight: 'bold'
			},
			formatter: "<div><span style='font-size:12px;width:80px;height50px'>{b}</span></br><span style='font-size:18px;width:80px;height50px'>{c}</span></div>",
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
					color: '#FFC800',
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
			minInterval:0,
			maxInterval:400,
			interval:50,

			splitArea : {
				show : false,
			},//ȡ����������
			axisLine: {
				show: false, //����y�����Ƿ���ʾ
			},
			axisLabel: {  
				interval:0,  
				color: '#FFC800',
			},		
		},
		series: []
	};
	 
}
			
function loadDataByCorp8(legendData,xAxisData,seriesData){	
 	 monthByCorp8Option.legend.data = legendData;
	 monthByCorp8Option.xAxis.data = xAxisData;
	 monthByCorp8Option.series =  [
		{
			name:'1',
			type:'line',
			itemStyle : {
				normal : {
					lineStyle:{
						width:4,//折线宽度
					}
				}
			},
			//symbol:'none',  //������ȥ����  
			smooth:true,  //�����������߱�ƽ���� 
			symbol: 'circle', //�趨Ϊʵ�ĵ�
			//symbolSize: 1,//�趨ʵ�ĵ�Ĵ�С
			color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{  
					offset: 0,  
					color: '#2DF0DB'  
				}, {  
					offset: 1,  
					color: '#FFA000'  
				}]),//��������ɫ  
			data:seriesData[0]
		},
		{
			name:'2',
			type:'line',
			itemStyle : {
				normal : {
					lineStyle:{
						width:4,//折线宽度
					}
				}
			},
			smooth:true,  //�����������߱�ƽ���� 
			color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{  
					offset: 0,  
					color: '#2DF0DB'  
				}, {  
					offset: 1,  
					color: '#FFA000'  
				}]),//��������ɫ  
			data:seriesData[1]
		},
		{
			name:'3',
			type:'line',
			itemStyle : {
				normal : {
					lineStyle:{
						width:4,//折线宽度
					}
				}
			},
			smooth:true,  //�����������߱�ƽ���� 
			color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{  
					offset: 0,  
					color: '#2DF0DB'  
				}, {  
					offset: 1,  
					color: '#FFA000'  
				}]),//��������ɫ  
			data:seriesData[2]
		},
		{
			name:'4',
			type:'line',
			itemStyle : {
				normal : {
					lineStyle:{
						width:4,//折线宽度
					}
				}
			},
			smooth:true,  //�����������߱�ƽ���� 
			color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{  
					offset: 0,  
					color: '#2DF0DB'  
				}, {  
					offset: 1,  
					color: '#FFA000'  
				}]),//��������ɫ  
			data:seriesData[3]
		}
	];
	 monthByCorp8Chart.setOption(monthByCorp8Option);
}