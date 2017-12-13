function start(){
	var keyWord = "false";
	chrome.tabs.getSelected(null, function(tab) {
    	chrome.tabs.sendMessage(tab.id, {keyWord: keyWord}, function(response) {
        	
    	});
	});
}

function stop(){
	var keyWord = "true";
	chrome.tabs.getSelected(null, function(tab) {
    	chrome.tabs.sendMessage(tab.id, {keyWord: keyWord}, function(response) {
        	
    	});
	});
}
