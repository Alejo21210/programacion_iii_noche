const areaTouch= document.getElementById("areaTouch");
areaTouch.addEventListener("touchstart", () => {
    areaTouch.style.background = "blue";
});
areaTouch.addEventListener("touchend", () => {
    areaTouch.style.background = "green";
    alert("!Touch Finalizado!");
});