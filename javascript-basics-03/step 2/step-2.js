var show = document.getElementById('show');
var hide = document.getElementById('hide');
var div = document.getElementById('texte');

const toggle = (view) => {
    if (view) {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
};

show.addEventListener("click", () => {
    toggle(true)
});

hide.addEventListener("click", () => {
    toggle(false)
});