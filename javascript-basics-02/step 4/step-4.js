var all = document.querySelectorAll('input[type="text"]');
var inputs = [...all]
var resetBtn = document.querySelector('button[type="button"]');

resetBtn.addEventListener("click",()=>{
    var feedback= confirm("Are you sure to reset feilds?");    
    if(feedback){
        inputs.forEach(input => {
            input.value = "";
            
        });
    
    }
   
});
