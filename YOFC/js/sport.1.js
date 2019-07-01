//提供第二页暖通温度报表刷新数据方法
 function  powerFunction(roomId){
 var powerJson = "";
	if(roomId==""){
		powerJson = powerJsonString(powerJson,powerAlls);
	}
	if(roomId=="101"){
		powerJson = powerJsonString(powerJson,power_1s);
	}
	if(roomId=="201"){
		powerJson = powerJsonString(powerJson,power_2s);
	}
	
	if(powerJson!=""){
		$("#electric_y").html(powerJson.value);
	}
}
//提供第二页暖通温度报表刷新数据方法
 function  meritoriousFunction(roomId){
 var meritoriousJson = "";
	if(roomId==""){
		meritoriousJson = meritoriousJsonString(meritoriousJson,meritoriousAlls);
	}
	if(roomId=="101"){
		meritoriousJson = meritoriousJsonString(meritoriousJson,meritorious_1s);
	}
	if(roomId=="201"){
		meritoriousJson = meritoriousJsonString(meritoriousJson,meritorious_2s);
	}
	
	if(meritoriousJson!=""){
	$("#electric_s").html(meritoriousJson.value);
 }
}
//提供第二页暖通温度报表刷新数据方法
 function  sumElectricFunction(roomId){
 var sumElectricJson = "";
	if(roomId==""){
		sumElectricJson = sumElectricJsonString(sumElectricJson,sumElectricAlls);
	}
	if(roomId=="101"){
		sumElectricJson = sumElectricJsonString(sumElectricJson,sumElectric_1s);
	}
	if(roomId=="201"){
		sumElectricJson = sumElectricJsonString(sumElectricJson,sumElectric_2s);
	}
	
	if(sumElectricJson!=""){
$("#water_w").html(sumElectricJson.value);
	}
}
//提供第二页暖通温度报表刷新数据方法
 function  accumulativeElectricFunction(roomId){
 var accumulativeElectricJson = "";
	if(roomId==""){
		accumulativeElectricJson = accumulativeElectricJsonString(accumulativeElectricJson,accumulativeElectricAlls);
	}
	if(roomId=="101"){
		accumulativeElectricJson = accumulativeElectricJsonString(accumulativeElectricJson,accumulativeElectric_1s);
	}
	if(roomId=="201"){
		accumulativeElectricJson = accumulativeElectricJsonString(accumulativeElectricJson,accumulativeElectric_2s);
	}
	
	if(accumulativeElectricJson!=""){
$("#water_y").html(accumulativeElectricJson.value);
	}
}
//提供第二页暖通温度报表刷新数据方法
 function  forecastElectricFunction(roomId){
 var forecastElectricJsons = "";
	if(roomId==""){
		forecastElectricJsons = forecastElectricJsonString(forecastElectricJsons,forecastElectricAlls);
	}
	if(roomId=="101"){
		forecastElectricJsons = forecastElectricJsonString(forecastElectricJsons,forecastElectric_1s);
	}
	if(roomId=="201"){
		forecastElectricJsons = forecastElectricJsonString(forecastElectricJsons,forecastElectric_2s);
	}
	
	if(forecastElectricJsons!=""){
		$("#water_z").html(forecastElectricJsons.value);
	}
}


 function  firstElectricReportFunction(roomId){
 var firstElectricReportJson = "";
	if(roomId==""){
		firstElectricReportJson = firstElectricReportJsonString(firstElectricReportJson,powerShReportAlls);
	}
	if(roomId=="101"){
		firstElectricReportJson = firstElectricReportJsonString(firstElectricReportJson,powerShReport_1s);
	}
	if(roomId=="201"){
		firstElectricReportJson = firstElectricReportJsonString(firstElectricReportJson,powerShReport_2s);
	}
	
	if(firstElectricReportJson!=""){
		loadDataByCorp3(firstElectricReportJson.cueName,firstElectricReportJson.seriesData,firstElectricReportJson.xAxisData);
	}
}
 function  twoElectricReportFunction(roomId){
 var twoElectricReportJson = "";
	if(roomId==""){
		twoElectricReportJson = twoElectricReportJsonString(twoElectricReportJson,powerReportsAlls);
	}
	if(roomId=="101"){
		twoElectricReportJson = twoElectricReportJsonString(twoElectricReportJson,powerReports_1s);
	}
	if(roomId=="201"){
		twoElectricReportJson = twoElectricReportJsonString(twoElectricReportJson,powerReports_2s);
	}
	if(twoElectricReportJson!=""){
		loadDataByCorp6(twoElectricReportJson.cueName,twoElectricReportJson.seriesData,twoElectricReportJson.xAxisData);
	}
}
 function  threeElectricReportFunction(roomId){
 var threeElectricReportJson = "";
	if(roomId==""){
		threeElectricReportJson = threeElectricReportJsonString(threeElectricReportJson,powerCapacityAlls);
	}
	if(roomId=="101"){
		threeElectricReportJson = threeElectricReportJsonString(threeElectricReportJson,powerCapacity_1s);
	}
	if(roomId=="201"){
		threeElectricReportJson = threeElectricReportJsonString(threeElectricReportJson,powerCapacity_2s);
	}
	if(threeElectricReportJson!=""){
		loadDataByCorp7(threeElectricReportJson.cueName,threeElectricReportJson.seriesData,threeElectricReportJson.xAxisData);
	}
}
 function  forElectricReportFunction(roomId){
 var forElectricReportJson = "";
	if(roomId==""){
		forElectricReportJson = forElectricReportJsonString(forElectricReportJson,powerVoltageAlls);
	}
	if(roomId=="101"){
		forElectricReportJson = forElectricReportJsonString(forElectricReportJson,powerVoltage_1s);
	}
	if(roomId=="201"){
		forElectricReportJson = forElectricReportJsonString(forElectricReportJson,powerVoltage_2s);
	}
	if(forElectricReportJson!=""){
		loadDataByCorp8(forElectricReportJson.legendData,forElectricReportJson.xAxisData,forElectricReportJson.seriesData);
	}
}