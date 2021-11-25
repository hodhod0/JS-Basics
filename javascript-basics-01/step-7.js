var size = document.getElementById('shoe_size');
var year = document.getElementById('year');
var valid = document.getElementById('validate');

valid.addEventListener("click",(e)=>{
    e.preventDefault();
    var total = ((((size.value*2)+5)*50)-year.value)+1766;
    alert('total = '+ total);
});
 
    