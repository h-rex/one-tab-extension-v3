let tabsInfo = [];

chrome.action.onClicked.addListener(function () {
  chrome.tabs.query({}, function (tabs) {
    let tabsInfo = [];
    for (let tab of tabs) {
      tabsInfo.push({ id: tab.id, url: tab.url, title: tab.title });
    }
    chrome.storage.local.set({ tabsInfo: tabsInfo }, function () {
      console.log("Tabs information saved.");
    });
    chrome.storage.local.get("tabsInfo", function (data) {
      console.log(data.tabsInfo);
      chrome.tabs.create({url: "popup.html"});
    });
  });
});
