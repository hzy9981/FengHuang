
(function(window){
	window._pageId = {};

	sendGetNavigationHttp();
	function sendGetNavigationHttp(){
		var url = Base.serverUrl + "/api/navigations";
		//g.httpTip.show();
		$.ajax({
			url:url,
			data:{},
			type:"GET",
			dataType:"json",
			context:this,
			global:false,
			async: false,
			success: function(data){
				console.log("sendGetNavigationHttp",data);
				var status = data.status || "";
				if(status == "OK"){
					changeNavigationHtml(data);
				}
				else{
					var msg = data.error || "";
					alert("获取导航栏错误:" + msg);
				}
				//g.httpTip.hide();
			},
			error:function(data){
				//g.httpTip.hide();
			}
		});
	}

	function changeNavigationHtml(data){
		var obj = data.result || [];
		var html = [];
		var pageid = {};

		html.push('<div class="am-offcanvas-bar" style="background:#333 none repeat scroll 0 0">');
		html.push('<ul class="am-menu-nav sm-block-grid-1">');

		for(var i = 0,len = obj.length; i < len; i++){
			var sub = obj[i].subNavigations || [];
			var className = sub.length > 0 ? "am-parent" : "";
			var url = obj[i].url || "";

			if(url == ""){
				url = "javascript:void(0);";
			}
			else{
				url = url.substring(1);
			}
			var title = obj[i].title || "";
			var id = obj[i].id || "";
			html.push('<li class="' + className + '">');

			if(className === ""){
				html.push('<a href="' + url + '">' + title + '</a>');
				pageid[url] = id;
			}
			else{
				html.push('<a href="javascript:void(0);">' + title + '</a>');
				html.push('<ul class="am-menu-sub am-collapse am-avg-sm-1">');
			}

			for(var j = 0,jlen = sub.length; j < jlen; j++){
				var url = sub[j].url || "";
				if(url == ""){
					url = "javascript:void(0);";
				}
				else{
					url = url.substring(1);
					if(url.indexOf('tc_599') > -1){
						url = "tcdetails.html?packageId=599";
					}else if(url.indexOf('tc_699') > -1){
						url = "tcdetails.html?packageId=699";
					}else if(url.indexOf('gyzs') > -1){
						url = "tmzs.html?pt=1";
					}else if(url.indexOf('zczs') > -1){
						url = "tmzs.html?pt=2";
					}else if(url.indexOf('live') > -1){
						url = "case.html?pt=1";
					}else if(url.indexOf('rzb') > -1){
						url = "t_sjb.html?packageId=799&type=rzb";
					}else if(url.indexOf('dqb') > -1){
						url = "t_sjb.html?packageId=1099&type=dqb";
					}else if(url.indexOf('gxhb') > -1){
						url = "t_sjb.html?packageId=1199&type=gxhb";
					}
				}
				var title = sub[j].title || "";
				var id = sub[j].id || "";
				html.push('<li><a href="' + url + '">' + title + '</a></li>');
				pageid[url] = id;
			}
			if(className !== ""){
				html.push('</ul>');
			}
		}

		html.push('</ul>');
		html.push('</div>');

		$("#navBar").html(html.join(''));

		window._pageId = pageid;
	}

	//getCarousels();
	function getCarousels(){
		var arr = location.href.split('/');
		var len = arr.length;
		var id = _pageId[arr[len-1]];
		var url = Base.serverUrl + '/api/page/'+ id +'/carousels';
		$.ajax({
			url:url,
			data:{},
			type:"GET",
			dataType:"json",
			context:this,
			global:false,
			async: false,
			success: function(data){
				console.log("getCarousels",data);
				var status = data.status || "";
				if(status == "OK"){
					//changeNavigationHtml(data);
				}
				else{
					var msg = data.error || "";
					alert("获取轮播列表错误:" + msg);
				}
				//g.httpTip.hide();
			},
			error:function(data){
				//g.httpTip.hide();
			}
		});
	}

})(window);


