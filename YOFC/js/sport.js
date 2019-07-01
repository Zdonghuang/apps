
//提供第一页电系统刷新数据方法
function  electricFunction(roomId){
	var electricJson = "";
	if(roomId==""){
		electricJson = pubGetElectricJsonString(electricJson,electriAlls);
	}
	if(roomId=="101"){
		electricJson = pubGetElectricJsonString(electricJson,electric_1s);
	}
	if(roomId=="201"){
		electricJson = pubGetElectricJsonString(electricJson,electric_2s);
	}
	if(electricJson!=""){
		// $("#electric_s").html(electricJson.kwh);
		$("#electric_s").html(pubGetElectricJsonString_2());
		$("#electric_c").html(electricJson.ecke);
		$("#electric_z").html(electricJson.dc);
	}
	
}
function  electricFunction1(roomId){
	var electricJson = "";
	if(roomId==""){
		electricJson = pubGetElectricJsonString(electricJson,electriAlls);
	}
	if(roomId=="101"){
		electricJson = pubGetElectricJsonString(electricJson,electric_1s);
	}
	if(roomId=="201"){
		electricJson = pubGetElectricJsonString(electricJson,electric_2s);
	}
	if(electricJson!=""){
		$("#electric_y").html(electricJson.rtl);
		// $("#electric_s").html(electricJson.kwh);
		$("#electric_s").html(pubGetElectricJsonString_2());
		$("#electric_c").html(electricJson.ecke);
		$("#electric_z").html(electricJson.dc);
	}
	
}

//提供第一页水系统刷新数据方法
function  waterFunction(roomId){
	var waterJson = "";
	if(roomId==""){
		//waterJson = pubGetWaterJsonString(waterJson,waterAlls);
		//console.log(waterJson);
		waterJson = JSON.parse('{"temperature": "25", "tpw": "4", "pressure": "4.1", "ta": "' + getWater_2() + '"}');	
		console.log(waterJson);
	}
	if(roomId=="101"){
		waterJson = pubGetWaterJsonString(waterJson,water_1s);
	}
	if(roomId=="201"){
		waterJson = pubGetWaterJsonString(waterJson,water_2s);
	}
	if(waterJson!=""){
		$("#water_w").html(waterJson.temperature);
		$("#water_y").html(waterJson.tpw);
		$("#water_z").html(waterJson.pressure);
		$("#water_t").html(waterJson.ta);
	}
}
//提供第一页气系统刷新数据方法
 function  gasFunction(roomId){
	var gasJson = "";
	var gasJson_before = "";
	var gasJson_allyear = "";
	if(roomId==""){
		gasJson = pubGetGasJsonString(gasJson,gasAlls);
		gasJson_before = gasAll_before;
		gasJson_allyear = gasAll_allyear;
	}
	if(roomId=="101"){
		gasJson = pubGetGasJsonString(gasJson,gas_1s);
		gasJson_before = gasAll_1_before;
		gasJson_allyear = gasAll_1_allyear;
	}
	if(roomId=="201"){
		gasJson = pubGetGasJsonString(gasJson,gas_2s);
		gasJson_before = gasAll_2_before;
		gasJson_allyear = gasAll_2_allyear;
	}
	if(gasJson!=""){
		$("#gas_x").html(gasJson_before.flow);
		$("#gas_z").html(gasJson_allyear.flow);
		$("#gas_d").html(gasJson_before.flow);
		$("#gas_d_two").html(gasJson_allyear.flow);

		$("#gas_y").html(gasJson.flow);
	}
}
function  gasFunction1(roomId){
	var gasJson = "";
	var gasJson_before = "";
	var gasJson_allyear = "";
	if(roomId==""){
		gasJson = pubGetGasJsonString(gasJson,gasAlls);
		gasJson_before = gasAll_before;
		gasJson_allyear = gasAll_allyear;
	}
	if(roomId=="101"){
		gasJson = pubGetGasJsonString(gasJson,gas_1s);
		gasJson_before = gasAll_1_before;
		gasJson_allyear = gasAll_1_allyear;
	}
	if(roomId=="201"){
		gasJson = pubGetGasJsonString(gasJson,gas_2s);
		gasJson_before = gasAll_2_before;
		gasJson_allyear = gasAll_2_allyear;
	}
	if(gasJson!=""){
		$("#gas_d_one").html(gasJson.pressure);
		$("#gas_h").html(gasJson.pressure);
	}
}
//提供第一页暖通系统刷新数据方法
function  hvacFunction(roomId){
	var hvacJson = "";
	if(roomId==""){
		hvacJson = pubGetHvacJsonString(hvacJson,hvacAlls);
	}
	if(roomId=="101"){
		hvacJson = pubGetHvacJsonString(hvacJson,hvac_1s);
	}
	if(roomId=="201"){
		hvacJson = pubGetHvacJsonString(hvacJson,hvac_2s);
	}
	if(hvacJson!=""){
		$("#hvac_w").html(hvacJson.temperature);
	}
 	
}
function  hvacFunction1(roomId){
	var hvacJson = "";
	if(roomId==""){
		hvacJson = pubGetHvacJsonString(hvacJson,hvacAlls);
	}
	if(roomId=="101"){
		hvacJson = pubGetHvacJsonString(hvacJson,hvac_1s);
	}
	if(roomId=="201"){
		hvacJson = pubGetHvacJsonString(hvacJson,hvac_2s);
	}
	if(hvacJson!=""){
		$("#hvac_s").html(hvacJson.humidity);
	}
 	
}
function  hvacFunction2(roomId){
	var hvacJson = "";
	if(roomId==""){
		hvacJson = pubGetHvacJsonString(hvacJson,hvacAlls);
	}
	if(roomId=="101"){
		hvacJson = pubGetHvacJsonString(hvacJson,hvac_1s);
	}
	if(roomId=="201"){
		hvacJson = pubGetHvacJsonString(hvacJson,hvac_2s);
	}
	if(hvacJson!=""){
		$("#hvac_k").html(hvacJson.ca);
	}
 	
}
//提供第一页环保系统刷新数据方法
function  ecosysFunction(roomId){
	var ecosysJson = "";
	if(roomId==""){
		//ecosysJson = pubGetEcosysJsonString(ecosysJson,ecosysAlls);
		//console.log(ecosysJson)
		var v = getEco_2()
		console.log(v)
		ecosysJson = JSON.parse('{"tdww": "' + v + '", "teif": "8.63", "trpHv": "6.5"}');
	}
	if(roomId=="101"){
		ecosysJson = pubGetEcosysJsonString(ecosysJson,ecosys_1s);
	}
	if(roomId=="201"){
		ecosysJson = pubGetEcosysJsonString(ecosysJson,ecosys_2s);
	}
	if(ecosysJson!=""){
		$("#ecosys_f").html(ecosysJson.tdww);
		$("#ecosys_z").html(ecosysJson.teif);
		$("#ecosys_p").html(ecosysJson.trpHv);
	}
 	
}
//提供第一页电系统报表刷新数据方法
function  electricReportFunction(roomId){
 var electricReportJson = "";
	if(roomId==""){
		electricReportJson = pubGetElectricReportJsonString(electricReportJson,electricAll_reports);
	}
	if(roomId=="101"){
		electricReportJson = pubGetElectricReportJsonString(electricReportJson,electric_1_reports);
	}
	if(roomId=="201"){
		electricReportJson = pubGetElectricReportJsonString(electricReportJson,electric_2_reports);
	}
	if(electricReportJson!=""){
		resetElectricReportData(electricReportJson.seriesData,electricReportJson.xAxisData,electricReportJson.cueName);
	}
	
}
//提供第二页暖通温度报表刷新数据方法
 function  hvacTemperatureReportFunction(roomId){
 var hvacTemperatureReportJson = "";
	if(roomId==""){
		hvacTemperatureReportJson = pubGetHvacReportJsonString(hvacTemperatureReportJson,hvacAll_reports);
	}
	if(roomId=="101"){
		hvacTemperatureReportJson = pubGetHvacReportJsonString(hvacTemperatureReportJson,hvac_1_reports);
	}
	if(roomId=="201"){
		hvacTemperatureReportJson = pubGetHvacReportJsonString(hvacTemperatureReportJson,hvac_2_reports);
	}
	
	if(hvacTemperatureReportJson!=""){
		resethvacTemperatureReportData(hvacTemperatureReportJson.seriesData,hvacTemperatureReportJson.xAxisData,hvacTemperatureReportJson.cueName);
	}
}
//提供第二页暖通湿度报表刷新数据方法
function  hvacHumidityReportFunction(roomId){
 var hvacHumidityReportJson = "";
	if(roomId==""){
		hvacHumidityReportJson = pubGetHvacHumidityReportJsonString(hvacHumidityReportJson,hvacHumidityAll_reports);
	}
	if(roomId=="101"){
		hvacHumidityReportJson = pubGetHvacHumidityReportJsonString(hvacHumidityReportJson,hvacHumidity_1_reports);
	}
	if(roomId=="201"){
		hvacHumidityReportJson = pubGetHvacHumidityReportJsonString(hvacHumidityReportJson,hvacHumidity_2_reports);
	}
	if(hvacHumidityReportJson!=""){
		hvacHumidityReportData(hvacHumidityReportJson.seriesData,hvacHumidityReportJson.xAxisData,hvacHumidityReportJson.cueName);
	}
}
//提供第二页暖通湿度报表刷新数据方法
function  hvacAcReportFunction(roomId){
 var hvacAcReportJson = "";
	if(roomId==""){
		hvacAcReportJson = pubGetHvacReportJsonString(hvacAcReportJson,hvacAcAll_reports);
	}
	if(roomId=="101"){
		hvacAcReportJson = pubGetHvacReportJsonString(hvacAcReportJson,hvacAc_1_reports);
	}
	if(roomId=="201"){
		hvacAcReportJson = pubGetHvacReportJsonString(hvacAcReportJson,hvacAc_2_reports);
	}
	if(hvacAcReportJson!=""){
		hvacAcReportData(hvacAcReportJson.seriesData,hvacAcReportJson.xAxisData,hvacAcReportJson.cueName);
	}
	
}

//提供第二页暖通湿度报表刷新数据方法
function  ecosysReportFunction(roomId){
 var ecosysReportJson = "";
	if(roomId==""){
		ecosysReportJson = pubGetEcosysReportJsonString(ecosysReportJson,ecosysAll_reports);
	}
	if(roomId=="101"){
		ecosysReportJson = pubGetEcosysReportJsonString(ecosysReportJson,ecosys_1_reports);
	}
	if(roomId=="201"){
		ecosysReportJson = pubGetEcosysReportJsonString(ecosysReportJson,ecosys_2_reports);
	}
	if(ecosysReportJson!=""){
		ecosysReportData(ecosysReportJson.seriesData,ecosysReportJson.xAxisData,ecosysReportJson.cueName);
	}
}

//第一页的部门费用报表刷新
function ulOneList() {
	var ulOneJson = "";
	if(roomId==""){
		ulOneJson = pubGetUlOneJsonString(ulOneJson,ulOneAll_reports);	
	}
	if(roomId=="101"){
		ulOneJson = pubGetUlOneJsonString(ulOneJson,ulOne_1_reports);	
	}
	if(roomId=="201"){
		ulOneJson = pubGetUlOneJsonString(ulOneJson,ulOne_2_reports);	
	}
 
	if(ulOneJson!=""){
		var ulOneList = ""
		for (var i = 0; i <ulOneJson.length ; i++) {
			ulOneList += `<li>
							<span>${ulOneJson[i].name}</span>
							<i>${ulOneJson[i].price}</i>
							</li>`
		}
		var ulOne = document.getElementById("costEchartsData_one")
		ulOne.innerHTML = ulOneList
	}
 }
//第一页的耗能列表刷新
  function ulTwoList() {
	var ulTwoJson = "";
	if(roomId==""){
		ulTwoJson = pubGetUlTwoJsonString(ulTwoJson,ulTwoAll_reports);	
	}
	if(roomId=="101"){
		ulTwoJson = pubGetUlTwoJsonString(ulTwoJson,ulTwo_1_reports);	
	}
	if(roomId=="201"){
		ulTwoJson = pubGetUlTwoJsonString(ulTwoJson,ulTwo_2_reports);	
	}

	if(ulTwoJson!=""){
		var ulTwoList = ""
		for (var i = 0; i <ulTwoJson.length ; i++) {
			ulTwoList += `<li>
							<span>${ulTwoJson[i].name}</span>
							<i>${ulTwoJson[i].price}</i>
							</li>`
		}
		var ulTwo = document.getElementById("costEchartsData_two")
		ulTwo.innerHTML = ulTwoList
	}
}

//提供第一页设备耗能饼图列表刷新方法
var electricCorpFlag="a";
function  electricCorpsssFunction(roomId){
 var electricCorpJson = "";
	if(roomId==""){
		electricCorpJson = pubGetElectricCorpJsonString(electricCorpJson,electricCorpAlls);	
	}
	if(roomId=="101"){
		electricCorpJson = pubGetElectricCorpJsonString(electricCorpJson,electricCorp_1_reports);	
	}
	if(roomId=="201"){
		electricCorpJson = pubGetElectricCorpJsonString(electricCorpJson,electricCorp_2_reports);	
	}
	if(electricCorpJson!=""){
		electricCorpOptionData(electricCorpJson.lendata,electricCorpJson.seriesData);
	}
 	
}

//提供第一页费用饼图列表刷新方法
var costFlag="a";
function  costsFunction(roomId){
 var costJson = "";
	if(roomId==""){
		costJson = pubGetCostcakeJsonString(costJson,costcakeAlls);	
	}
	if(roomId=="101"){
		costJson = pubGetCostcakeJsonString(costJson,costcake_1_reports);	
	}
	if(roomId=="201"){
		costJson = pubGetCostcakeJsonString(costJson,costcake_2_reports);	
	}
	if(costJson!=""){
		costOptionData(costJson.lendata,costJson.seriesData);
	}
}
 