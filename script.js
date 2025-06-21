document.getElementById("enterBtn").addEventListener("click", () => {
  const statusElement = document.getElementById("status");
  if (statusElement.tagName === "P") {
    statusElement.outerHTML = `<h1 id="status">Entered Metaverse</h1>`;
  } else {
    statusElement.outerHTML = `<p id="status">Enter the Metaverse</p>`;
  }
});
