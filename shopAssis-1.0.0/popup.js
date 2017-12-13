document.addEventListener('DOMContentLoaded', function() {
	var bg = chrome.extension.getBackgroundPage();
	document.getElementById("startBtn").addEventListener('click',function(){
	 	bg.start();
 	});
	document.getElementById("stopBtn").addEventListener('click',function(){
 		bg.stop();
	});
});
