/*
 * 通过JSON RPC来提交表单数据，并将提交后服务器Action响应的结果返回
 */

//避免重复请求的标记变量
var reqFlag = false;
/*
 * 请求服务器，获取json格式数据
 */
function requestByGetJSON(reqUrl, reqParams, callBack){
	if(reqFlag) {
		alert("请求已经提交，请耐心等待。");
		return;
	}
	reqUrl = addUrlRandomParam(reqUrl);
	reqFlag = true;
	$.getJSON(reqUrl, reqParams, 
			function(data) {
				//使用json对象将服务器响应解析成json对象
				reqFlag = false;
				callBack(data);
			});
}
function postReq(url,params,callback){
	if(reqFlag) {
		alert("请求已经提交，请耐心等待。");
		return;
	}
	var url = addUrlRandomParam(url);
	reqFlag = true;
	$.post(url,params,function(data){
		reqFlag = false;
		var dataObj = JSON.parse(data); //依赖与json2
		callback(dataObj);
	});
}
function updateAll(url,params,callback){
	if(reqFlag) {
		alert("请求已经提交，请耐心等待。");
		return;
	}
	var url = addUrlRandomParam(url);
	reqFlag = true;
	$.ajax({
   		url:url,
   		data:params,
   		async:false,
     	type:"post",
     	//dataType:"json",
     	contentType: "application/json; charset=utf-8",
     	success:function(data){
   			reqFlag = false;
			//var dataObj = JSON.parse(data); //依赖与json2
			callback(data);
   		},
   		error:function(jqXHR, textStatus, errorThrown){
        	alert("请求失败" + textStatus + ":" + errorThrown);
     	}
	});	
}
function modifyReq(url,params,callback){
	if(reqFlag) {
		alert("请求已经提交，请耐心等待。");
		return;
	}
	var url = addRandomParam4modifyUrl(url);
	reqFlag = true;
	$.post(url,params,function(data){		
		reqFlag = false;
		var dataObj = JSON.parse(data); //依赖与json2
		callback(dataObj);
	});
}
function deleteReq(url,callback){
	
	if(reqFlag) {
		alert("请求已经提交，请耐心等待。");
		return;
	}
	var url = addUrlRandomParam(url);	
	reqFlag = true;
	$.ajax({
			    url: url,
			    type: 'DELETE',
			    success: function(data) {
			    	reqFlag = false;
			    	var dataObj = JSON.parse(data); 
			    	callback(dataObj); 	
			    }
			});	
}
/*
 * 通过URL方式请求后台Action，第一个参数为请求URL，第二个为请求时所传递参数
 */
function requestByJson(reqUrl, reqParams, callBack){
	if(reqFlag) {
		alert("请求已经提交，请耐心等待。");
		return;
	}
	reqUrl = addUrlRandomParam(reqUrl);
	reqFlag = true;
	$.post(reqUrl, reqParams, 
			function(data) {
				//使用json对象将服务器响应解析成json对象
				reqFlag = false;
				callBack(data);
			});
}
/*
 * 同步ajax请求
 */
function asyncAjax(reqUrl, data,callback){
	$.ajax({
		url:addUrlRandomParam(reqUrl),
		data:data,
		async:true,
		type:"post",
		dataType:"json",
		success:function(data){
			callback(data);
		},
		error:function(jqXHR, textStatus, errorThrown){
			alert("请求失败" + textStatus + ":" + errorThrown);
		}
	});
}
/*
 * 通过URL方式请求后台Action，第一个参数为请求URL，第二个为请求时所传递数据
 */
function requestByAjax(reqUrl, data,callback){
	$.ajax({
   		url:addUrlRandomParam(reqUrl),
   		data:data,
   		async:false,
     	type:"post",
     	dataType:"json",
     	success:function(data){
   			callback(data);
   		},
   		error:function(jqXHR, textStatus, errorThrown){
        	alert("请求失败" + textStatus + ":" + errorThrown);
     	}
	});
}

/*
 * 同步提交form表单数据
 */
function submitAsyFormByJson(reqUrl, formId, callBack){
	$.ajax({
   		url:addUrlRandomParam(reqUrl),
   		data:$("#"+formId).serialize(),
   		async:false,
     	type:"post",
     	dataType:"json",
     	success:function(data){
			reqFlag = false;
			callBack(data);
   		},
   		error:function(){
        	alert("请求失败");
     	}
	});
}

/*
 * 通过串行化表单数据方式请求后台Action，第一个参数为请求URL，第二个为页面表单的ID
 */
function submitFormByJson(reqUrl, formId, callBack){
	if(reqFlag) {
		alert("请求已经提交，请耐心等待。");
		return;
	}
	reqUrl = addUrlRandomParam(reqUrl);
	reqFlag = true;
	$.post(reqUrl, $("#"+formId).serialize(), 
			function(data) {
				//使用json对象将服务器响应解析成json对象
				//var result = JSON.parse(data);
				reqFlag = false;
				callBack(data);
			});
}

/*
 * 为一个URL加上一个随机字符串参数，以避免浏览器缓存 
 */
function addUrlRandomParam(url) {
	var regex = /\?/;
	var randStr;
	if(regex.test(url)){
		randStr = "&rand=" + generateRandomStr(16);
	}else{
		randStr = "?rand=" + generateRandomStr(16);
	}
	return url+randStr;
}
/*
 * 为修改操作的URL加上一个随机字符串参数，以避免浏览器缓存 
 *修改资源接口特殊，所以拿出来单独定义：basepath/{id}?param1=v1&param2=v2...     method=POST
 */
function addRandomParam4modifyUrl(url) {
	//var randStr = "?rand=" + generateRandomStr(16);
	//return url+randStr;
	return url;
}

/*
 * 生成随机字符串，本函数从common.js中复制过来
 */
function generateRandomStr(n) {
	var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	     var res = "";
	     for(var i = 0; i < n ; i ++) {
	         var id = Math.ceil(Math.random()*35);
	         res += chars[id];
	     }
	     return res;
}