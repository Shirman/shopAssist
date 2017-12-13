function run(){
	var keyWord = "false";
	chrome.tabs.getSelected(null, function(tab) {
    	chrome.tabs.sendMessage(tab.id, {keyWord: keyWord,phone:phone}, function(response) {
        	
    	});
	});
}

function stop(){
	var keyWord = "true";
	chrome.tabs.getSelected(null, function(tab) {
    	chrome.tabs.sendMessage(tab.id, {keyWord: keyWord,phone:phone}, function(response) {
        	
    	});
	});
}

var phone;
function setPhone(phoneIn){
	phone=phoneIn;
}
function getPhone(){
	return phone;
}