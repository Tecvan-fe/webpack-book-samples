document.getElementById("someButton").addEventListener("click", async () => {
  const someBigMethod = await import("./someBigMethod");
  someBigMethod();
});
