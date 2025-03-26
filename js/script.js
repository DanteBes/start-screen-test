const btnOpen = document.getElementById("btnOpen");
const btnClose = document.getElementById("btnClose");
const contentWindow = document.getElementById("contentWindow");

btnOpen.addEventListener("click", (event) => {
  event.preventDefault(); 
  contentWindow.style.display = "flex";
});

btnClose.addEventListener("click", () => {
  contentWindow.style.display = "none"; 
});

