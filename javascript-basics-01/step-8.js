var age = document.getElementById('age');
var btn = document.getElementById('validate');


btn.addEventListener("click",(e)=>{

    e.preventDefault();
    if(age.value>18){
        alert("you are over 18");
    }else{
        alert("you are under 18");
    }
   
});