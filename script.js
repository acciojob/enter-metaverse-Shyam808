document.getElementById("enterBtn").addEventListener("click", () => {
  const statusElement = document.getElementById("status");

  // Replace <p> with <h1> while preserving the ID and changing the text
  const h1 = document.createElement("h1");
  h1.id = "status";
  h1.textContent = "Entered Metaverse";

  // Replace the original element
  statusElement.replaceWith(h1);
});
