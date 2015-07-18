var dataModel;
var bind = false;//数据绑定标识
var rePage = true;
/*
分页功能变量定义
*/
var total ;//总数据条数
var curPage = 1;//当前页码,初始为1	
/*
*定义参数
*/
var param;
function onload(){
	initParam();
	getDatas();	
}
function initParam(){
	param={
		size : pSize,
		page : curPage
	};
}
function getDatas4page(page){
	rePage = false;
	$('.pageList').jqPaginator('option', {
    	currentPage: page
	});
	curPage = page;
	param.page = page;
	getDatas();
}
function getDatas(){
	getData(TEMPLATE_TEMPLATE,param,afterGetDatas);
}
function afterGetDatas(data){
	//先判断并处理错误数据
	if(!isErrorData(data))
	//数据正确时进行绑定
	bindData(data.result);	
}
function bindData(data){
	total = data.totalCount;
	var results = data.result;
	for(var i in results){
		results[i].selected = false;
		results[i].hasAppointedDisp = (results[i].hasAppointed?'已预约':'未预约');
		results[i].couldAppointDisp = (results[i].couldAppoint?'已预约':'未预约');
	}
	if(!bind){
		dataModel = ko.mapping.fromJS(data);	
	}else{
		ko.mapping.fromJS(data, dataModel);
	}
	dataModel.remove = function(item){
		if(ConfDel(0)){
			var url = genUrl(TEMPLATE_TEMPLATE)+'/'+item.id();
			deleteReq(url,function(dataObj){
				friendlyTip(dataObj);
			    if(dataObj.status === 'OK'){
			    	dataModel.result.remove(item);
				}
			});
		}
	}
	dataModel.removeSelected = function(){
		if(ConfDelAll(0)){
			//todo 删除
			alert(filterSelected(dataModel.result()).length);
		}
	}
	dataModel.modify = function(item){
		window.location.href='templateedit.htm?id='+item.id();
	}
	if(!bind){
		bind = true;
		ko.applyBindings(dataModel);
	}
	if(rePage){
		//生成分页
		genPaginator(total,pSize,param.page,handlePageChange);
	}
}
function handlePageChange (num, type) {
    if(type == 'change'){
    	getDatas4page(num);
    }
}
function add(){
	window.location.href="templateadd.htm";
}