function isProductPage(){
	var pathname = window.location.pathname;
	var result = false;
	if( (pathname.indexOf("item.htm") > -1) || (pathname.indexOf("detail.htm") > -1)){
		result = true;
	}
	return result;
}

function isOrderPage(){
	var pathname = window.location.pathname;
	var result = false;
	/*
	*	buy_now.jhtml 淘宝订单页面
	*	confirm_order.htm 天猫订单页面
	*/
	if((pathname.indexOf("buy_now.jhtml") > -1) 
		|| (pathname.indexOf("confirm_order.htm") > -1) || (pathname.indexOf("confirmOrderWap.htm") > -1) || (pathname.indexOf("order.html") > -1)){
		result = true;
	}
	return result;
}

/*
* 立即购买
*/
function buyNow(){
	var result = false;
	if(isProductPage()){
		var buyBtn = document.getElementById("J_LinkBuy") || document.getElementsByClassName("J_LinkBuy")[0] || document.getElementsByClassName("buy")[0] || document.getElementsByClassName("sys_button buy")[0];
		if(buyBtn){
			result = true;
			buyBtn.click();
			var okbtn = document.getElementsByClassName("ok")[0] || document.getElementsByClassName("ctrl-ui-sku")[0].getElementsByClassName("gobuy")[0];//移动版本还有确定按钮
			if(!!okbtn){
				okbtn.click();
			}else{
				console.log("no ok btn");
			}

		}
	}
	return result;
}

/*
* 立即提交订单
*/
function orderNow(){
	var result = false;
	if(isOrderPage()){
		var btn = document.getElementsByClassName("go-btn")[0] || document.getElementsByClassName("order-submitOrder")[0].getElementsByClassName("action")[0].getElementsByTagName("span")[0];
		if(btn){
			result = true;
			btn.click();
		}
	}
	return result;
}

/**
* 抢购任务
*/
function job(){
	if(!runFlag){//停止运行中的插件
		return;
	}
	if(buyNow() || orderNow()){
		//执行中
		console.log("抢购中...");
	}else{
		console.log("抢购尚未开始...");
	}
}

var repeatNumPerSecond=5;//每秒执行次数
var runFlag = isOrderPage();
var jobTimer;
/**
* 初始化设置
*/
function init(){
	if(!!runFlag){
		jobTimer = setInterval("job()",Math.ceil(1000/repeatNumPerSecond));
	}
}
init();
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
    	if(request.keyWord == "true"){//停止
			runFlag = false;
			console.log("stop");
			clearTimeout(jobTimer);
    	}else{
    		runFlag = true;
			init();
    	}
	}
);