chrome.storage.local.get("tabsInfo", function(data) {
    let tabsList = document.getElementById("tabsList");
    for (let tab of data.tabsInfo) {
      let listItem = document.createElement("li");
      let link = document.createElement("a");
      link.href = tab.url;
      link.textContent = tab.title;
      listItem.appendChild(link);
      tabsList.appendChild(listItem);
    }
  });
  