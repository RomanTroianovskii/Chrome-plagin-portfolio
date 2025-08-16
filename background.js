const PORTFOLIO_URL = "https://example.com/portfolio";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "open-portfolio",
    title: "Открыть портфолио",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "open-portfolio") {
    chrome.tabs.create({ url: PORTFOLIO_URL });
  }
});