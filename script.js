document.getElementById("enterBtn").addEventListener("click", () => {
  const statusElement = document.getElementById("status");

  // Create <h1> element with updated text and same ID
  const h1 = document.createElement("h1");
  h1.id = "status";
  h1.textContent = "Entered Metaverse";

  // Replace the original <p> with the new <h1>
  statusElement.replaceWith(h1);
});
