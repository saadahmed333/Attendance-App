let burger = document.getElementById("burger");
let cross = document.getElementById("cross");
let side = document.getElementById("side");

burger.addEventListener("click", () => {
    side.style.left = "0px";
})
cross.addEventListener("click", () => {
    side.style.left = "-400px";
})
