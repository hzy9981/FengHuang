
$(function(){
	var g = {};
	g.phone = "";
	g.imgCodeId = "";
	g.sendCode = false;
	g.sendCode2 = false;
	g.sendTime = 60;
	g.username = Base.userName;
	g.token = Utils.getQueryString("token");
	g.page = Utils.getQueryString("p") - 0;
	g.totalPage = 1;
	g.currentPage = 1;
	g.paseSize = 20;
	g.httpTip = new Utils.httpTip({});
	g.listdata = [];

	//验证登录状态
	g.loginStatus = Utils.getUserInfo();

	$("#countbtn").bind("click",countMoney);

	function countMoney(){
	
		var rate = [0.028634,0.050463,0.095027,0.140796,0.187768,0.285291,0.387527,0.494383];
		var month = [3,6,12,18,24,36,48,60];
		var money = $("#inputmoney").val() - 0 || 0;
		var time = $("#timeselect")[0].selectedIndex - 0;
		if(money > 0){
			var MonthReturn = (money + (money * rate[time])) / month[time];
			var Amount =  month[time] * MonthReturn;

			$("#dkje").html(money);
			$("#dkzq").html(month[time]);
			$("#bxhj").html(Amount.toFixed(2));
			$("#myhk").html(MonthReturn.toFixed(2));
		}
		else{
			Utils.alert("请输入贷款金额");
		}

	}
});











