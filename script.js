document.getElementById("enterBtn").addEventListener("click", () => {
  const statusElement = document.getElementById("status");

  // Replace <p> with <h1> while preserving the ID and changing the text
  const p = document.createElement("h1");
  p.id = "status";
  p.textContent = "Entered Metaverse";

  // Replace the original element
  statusElement.replaceWith(h1);
});
