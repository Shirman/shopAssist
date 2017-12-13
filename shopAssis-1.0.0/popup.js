document.addEventListener('DOMContentLoaded', function() {
	var bg = chrome.extension.getBackgroundPage();
	document.getElementById("startBtn").addEventListener('click',function(){
		setStartFlag(true);
		var phone =document.getElementById("phone").value;
		bg.setPhone(phone);
	 	bg.run();
 	});
	document.getElementById("stopBtn").addEventListener('click',function(){
		setStartFlag(false);
 		bg.stop();
	});
	function setStartFlag(flag){
		document.getElementById("startFlag").value=flag;
	}
	function isStart(){
		return document.getElementById("startFlag").value == "true";
	}
});