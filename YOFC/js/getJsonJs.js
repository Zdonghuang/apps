var pubelectricDataIndex=0;
var waterDataIndex=0;
var gasDataIndex=0;
var hvacDataIndex=0;
var hvacReportIndex=0;
var ecosysIndex=0;
var electricReportIndex=0;
var hvacHumidityReportIndex=0;
var ecosysReportIndex=0;
var ulTwoIndex=0;
var ulOneIndex=0;
var electricCorpIndex=0;
var costcakeIndex=0;
var firstElectricReportIndex=0;
var towElectricReportIndex=0;
var threeElectricReportIndex=0;
var forElectricReportIndex=0;

function my_formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

var my_newkwh = 273779;
function pubGetElectricJsonString_2(){
	var diff = Math.floor(Math.random() * 20) + 70;
	my_newkwh += diff;

	if(my_newkwh > 900000) {
		my_newkwh = 273779;
	}

	return my_formatNumber(my_newkwh);
}

var my_newWater = 2800;
function getWater_2(){
	var diff = Math.floor(Math.random() * 10) / 100 ;
	console.log('=====' + diff);
	my_newWater += diff;

	if(my_newWater > 9000) {
		my_newWater = 2800;
	}

	return my_newWater.toFixed(2).toString();
}

var my_neweco = 3234873;
function getEco_2(){
	var diff = Math.floor(Math.random() * 20) + 50;
	my_neweco += diff;

	if(my_neweco > 9000000) {
		my_neweco = 3234873;
	}

	return my_formatNumber(my_neweco);
}

//公共调用获取对应的json数据
function pubGetElectricJsonString(sjson,jsonArray){
 	var returnStr = "";
	if(parseInt(pubelectricDataIndex)<=jsonArray.length-1){
		returnStr = jsonArray[pubelectricDataIndex];
		pubelectricDataIndex = parseInt(pubelectricDataIndex)+1;
	}else{
		pubelectricDataIndex = parseInt(0);
		returnStr = jsonArray[jsonArray.length-1];
	}
	return returnStr;
}
//公共调用获取对应的json数据
function pubGetWaterJsonString(sjson,jsonArray){
 	var returnStr = "";
	if(parseInt(waterDataIndex)<=jsonArray.length-1){
		returnStr = jsonArray[waterDataIndex];
		waterDataIndex = parseInt(waterDataIndex)+1;
	}else{
		waterDataIndex = parseInt(0);
		returnStr = jsonArray[jsonArray.length-1];
	}
	return returnStr;
}
//公共调用获取对应的json数据
function pubGetGasJsonString(sjson,jsonArray){
 	var returnStr = "";
	if(parseInt(gasDataIndex)<=jsonArray.length-1){
		returnStr = jsonArray[gasDataIndex];
		gasDataIndex = parseInt(gasDataIndex)+1;
	}else{
		gasDataIndex = parseInt(0);
		returnStr = jsonArray[jsonArray.length-1];
	}
	return returnStr;
}
//公共调用获取对应的json数据
function pubGetHvacJsonString(sjson,jsonArray){
 	var returnStr = "";
	if(parseInt(hvacDataIndex)<=jsonArray.length-1){
		returnStr = jsonArray[hvacDataIndex];
		hvacDataIndex = parseInt(hvacDataIndex)+1;
	}else{
		hvacDataIndex = parseInt(0);
		returnStr = jsonArray[jsonArray.length-1];
	}
	return returnStr;
}

//公共调用获取对应的json数据
function pubGetHvacReportJsonString(sjson,jsonArray){
 	var returnStr = "";
	if(parseInt(hvacReportIndex)<=jsonArray.length-1){
		returnStr = jsonArray[hvacReportIndex];
		hvacReportIndex = parseInt(hvacReportIndex)+1;
	}else{
		hvacReportIndex = parseInt(0);
		returnStr = jsonArray[jsonArray.length-1];
	}
	return returnStr;
}
//公共调用获取对应的json数据
function pubGetEcosysJsonString(sjson,jsonArray){
 	var returnStr = "";
	if(parseInt(ecosysIndex)<=jsonArray.length-1){
		returnStr = jsonArray[ecosysIndex];
		ecosysIndex = parseInt(ecosysIndex)+1;
	}else{
		ecosysIndex = parseInt(0);
		returnStr = jsonArray[jsonArray.length-1];
	}
	return returnStr;
}
//公共调用获取对应的json数据
function pubGetElectricReportJsonString(sjson,jsonArray){
 	var returnStr = "";
	if(parseInt(electricReportIndex)<=jsonArray.length-1){
		returnStr = jsonArray[electricReportIndex];
		electricReportIndex = parseInt(electricReportIndex)+1;
	}else{
		electricReportIndex = parseInt(0);
		returnStr = jsonArray[jsonArray.length-1];
	}
	return returnStr;
}
//公共调用获取对应的json数据
function pubGetHvacHumidityReportJsonString(sjson,jsonArray){
 	var returnStr = "";
	if(parseInt(hvacHumidityReportIndex)<=jsonArray.length-1){
		returnStr = jsonArray[hvacHumidityReportIndex];
		hvacHumidityReportIndex = parseInt(hvacHumidityReportIndex)+1;
	}else{
		hvacHumidityReportIndex = parseInt(0);
		returnStr = jsonArray[jsonArray.length-1];
	}
	return returnStr;
}
//公共调用获取对应的json数据
function pubGetEcosysReportJsonString(sjson,jsonArray){
 	var returnStr = "";
	if(parseInt(ecosysReportIndex)<=jsonArray.length-1){
		returnStr = jsonArray[ecosysReportIndex];
		ecosysReportIndex = parseInt(ecosysReportIndex)+1;
	}else{
		ecosysReportIndex = parseInt(0);
		returnStr = jsonArray[jsonArray.length-1];
	}
	return returnStr;
}

//公共调用获取对应的json数据
function pubGetUlOneJsonString(sjson,jsonArray){
 	var returnStr = "";
	if(parseInt(ulOneIndex)<=jsonArray.length-1){
		returnStr = jsonArray[ulOneIndex];
		ulOneIndex = parseInt(ulOneIndex)+1;
	}else{
		ulOneIndex = parseInt(0);
		returnStr = jsonArray[jsonArray.length-1];
	}
	return returnStr;
}
//公共调用获取对应的json数据
function pubGetUlTwoJsonString(sjson,jsonArray){
 	var returnStr = "";
	if(parseInt(ulTwoIndex)<=jsonArray.length-1){
		returnStr = jsonArray[ulTwoIndex];
		ulTwoIndex = parseInt(ulTwoIndex)+1;
	}else{
		ulTwoIndex = parseInt(0);
		returnStr = jsonArray[jsonArray.length-1];
	}
	return returnStr;
}
//公共调用获取对应的json数据
function pubGetElectricCorpJsonString(sjson,jsonArray){
 	var returnStr = "";
	if(parseInt(electricCorpIndex)<=jsonArray.length-1){
		returnStr = jsonArray[electricCorpIndex];
		electricCorpIndex = parseInt(electricCorpIndex)+1;
	}else{
		electricCorpIndex = parseInt(0);
		returnStr = jsonArray[jsonArray.length-1];
	}
	return returnStr;
}
//公共调用获取对应的json数据
function pubGetCostcakeJsonString(sjson,jsonArray){
 	var returnStr = "";
	if(parseInt(costcakeIndex)<=jsonArray.length-1){
		returnStr = jsonArray[costcakeIndex];
		costcakeIndex = parseInt(costcakeIndex)+1;
	}else{
		costcakeIndex = parseInt(0);
		returnStr = jsonArray[jsonArray.length-1];
	}
	return returnStr;
}
//---------------------------------------------------------------第二页面面的js开始
var powerIndex=0;//功率
var meritoriousIndex=0;//有功功率
var sumElectricIndex=0;//总用电量
var accumulativeElectricIndex=0;//累计用电量
var forecastElectricIndex=0;//用电量预测
function powerJsonString(sjson,jsonArray){
 	var returnStr = "";
	if(parseInt(powerIndex)<=jsonArray.length-1){
		returnStr = jsonArray[powerIndex];
		powerIndex = parseInt(powerIndex)+1;
	}else{
		powerIndex = parseInt(0);
		returnStr = jsonArray[jsonArray.length-1];
	}
	return returnStr;
}
function meritoriousJsonString(sjson,jsonArray){
 	var returnStr = "";
	if(parseInt(meritoriousIndex)<=jsonArray.length-1){
		returnStr = jsonArray[meritoriousIndex];
		meritoriousIndex = parseInt(meritoriousIndex)+1;
	}else{
		meritoriousIndex = parseInt(0);
		returnStr = jsonArray[jsonArray.length-1];
	}
	return returnStr;
}
function sumElectricJsonString(sjson,jsonArray){
 	var returnStr = "";
	if(parseInt(sumElectricIndex)<=jsonArray.length-1){
		returnStr = jsonArray[sumElectricIndex];
		sumElectricIndex = parseInt(sumElectricIndex)+1;
	}else{
		sumElectricIndex = parseInt(0);
		returnStr = jsonArray[jsonArray.length-1];
	}
	return returnStr;
}
function accumulativeElectricJsonString(sjson,jsonArray){
 	var returnStr = "";
	if(parseInt(accumulativeElectricIndex)<=jsonArray.length-1){
		returnStr = jsonArray[accumulativeElectricIndex];
		accumulativeElectricIndex = parseInt(accumulativeElectricIndex)+1;
	}else{
		accumulativeElectricIndex = parseInt(0);
		returnStr = jsonArray[jsonArray.length-1];
	}
	return returnStr;
}
function forecastElectricJsonString(sjson,jsonArray){
 	var returnStr = "";
	if(parseInt(forecastElectricIndex)<=jsonArray.length-1){
		returnStr = jsonArray[forecastElectricIndex];
		forecastElectricIndex = parseInt(forecastElectricIndex)+1;
	}else{
		forecastElectricIndex = parseInt(0);
		returnStr = jsonArray[jsonArray.length-1];
	}
	return returnStr;
}

function firstElectricReportJsonString(sjson,jsonArray){
 	var returnStr = "";
	if(parseInt(firstElectricReportIndex)<=jsonArray.length-1){
		returnStr = jsonArray[firstElectricReportIndex];
		firstElectricReportIndex = parseInt(firstElectricReportIndex)+1;
	}else{
		firstElectricReportIndex = parseInt(0);
		returnStr = jsonArray[jsonArray.length-1];
	}
	return returnStr;
}
function twoElectricReportJsonString(sjson,jsonArray){
 	var returnStr = "";
	if(parseInt(towElectricReportIndex)<=jsonArray.length-1){
		returnStr = jsonArray[towElectricReportIndex];
		towElectricReportIndex = parseInt(towElectricReportIndex)+1;
	}else{
		towElectricReportIndex = parseInt(0);
		returnStr = jsonArray[jsonArray.length-1];
	}
	return returnStr;
}
function threeElectricReportJsonString(sjson,jsonArray){
 	var returnStr = "";
	if(parseInt(threeElectricReportIndex)<=jsonArray.length-1){
		returnStr = jsonArray[threeElectricReportIndex];
		threeElectricReportIndex = parseInt(threeElectricReportIndex)+1;
	}else{
		threeElectricReportIndex = parseInt(0);
		returnStr = jsonArray[jsonArray.length-1];
	}
	return returnStr;
}
function forElectricReportJsonString(sjson,jsonArray){
 	var returnStr = "";
	if(parseInt(forElectricReportIndex)<=jsonArray.length-1){
		returnStr = jsonArray[forElectricReportIndex];
		forElectricReportIndex = parseInt(forElectricReportIndex)+1;
	}else{
		forElectricReportIndex = parseInt(0);
		returnStr = jsonArray[jsonArray.length-1];
	}
	return returnStr;
}