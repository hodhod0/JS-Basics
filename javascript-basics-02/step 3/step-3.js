var div = document.getElementById('div');
var input = document.getElementById('name');

input.addEventListener("keyup" ,()=>{
    div.innerText=input.value;
});