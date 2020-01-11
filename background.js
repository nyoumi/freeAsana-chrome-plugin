chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'app.asana.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()],
			
      }]);
    });
  });
 chrome.runtime.onMessage.addListener(function(message, callback) {
    alert("This is my favorite website!");
  });
  chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    alert("This is my favorite website!");
  });
 