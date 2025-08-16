(() => {
  const EXISTING = document.getElementById("portfolio-demo-banner");
  if (EXISTING) return;

  const bar = document.createElement("div");
  bar.id = "portfolio-demo-banner";
  bar.textContent = "Этот сайт улучшен расширением Portfolio Helper 🚀";

  Object.assign(bar.style, {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    padding: "12px 16px",
    background: "linear-gradient(90deg, #4f46e5, #06b6d4)",
    color: "white",
    fontSize: "14px",
    textAlign: "center",
    zIndex: 2147483647,
    boxShadow: "0 2px 10px rgba(0,0,0,.25)",
    fontWeight: 600
  });

  const close = document.createElement("button");
  close.textContent = "×";
  Object.assign(close.style, {
    position: "absolute",
    right: "10px",
    top: "5px",
    border: 0,
    background: "transparent",
    color: "white",
    fontSize: "20px",
    cursor: "pointer"
  });
  close.addEventListener("click", () => bar.remove());

  bar.appendChild(close);
  document.documentElement.appendChild(bar);
})();