const LINKS = {
  portfolio: "https://example.com/portfolio",
  github: "https://github.com/RomanTroianovskii"
};

const $ = (sel) => document.querySelector(sel);

$("#github").href = LINKS.github;

const githubLinkEl = document.getElementById("github");
if (githubLinkEl) {
  githubLinkEl.addEventListener("click", (e) => {
    e.preventDefault();
    chrome.tabs.create({ url: LINKS.github });
  });
}


const setStatus = (msg) => {
  const el = $("#status");
  el.textContent = msg;
  el.hidden = !msg;
};

async function getCurrentTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

$("#open-portfolio").addEventListener("click", () => {
  chrome.tabs.create({ url: LINKS.portfolio });
});

$("#inject-banner").addEventListener("click", async () => {
  const tab = await getCurrentTab();
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"]
  });
  setStatus("Баннер добавлен на страницу ✨");
});

$("#toggle-badge").addEventListener("click", async () => {
  const tab = await getCurrentTab();
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const id = "portfolio-corner-badge";
      const el = document.getElementById(id);
      if (el) { el.remove(); return; }
      const div = document.createElement("div");
      div.id = id;
      div.textContent = "Made by Roman";
      Object.assign(div.style, {
        position: "fixed",
        top: 0,
        right: 0,
        padding: "6px 10px",
        background: "#111827",
        color: "#fff",
        fontSize: "12px",
        borderBottomLeftRadius: "8px",
        zIndex: 2147483647,
        boxShadow: "0 2px 8px rgba(0,0,0,.2)",
        userSelect: "none",
        pointerEvents: "auto",
        cursor: "default"
      });
      document.documentElement.appendChild(div);
    }
  });
  setStatus("Уголок переключён ✔");
});