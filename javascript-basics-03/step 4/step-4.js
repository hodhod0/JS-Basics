var pass = document.getElementById('password');
var confirmation = document.getElementById('confirmation');
var btn = document.querySelector("button");

btn.addEventListener("click", () => {
    pass.style.borderColor = "red";
    confirmation.style.borderColor = "red";

});