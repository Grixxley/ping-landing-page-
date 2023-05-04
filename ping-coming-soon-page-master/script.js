// /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const input = document.querySelector('.input');
const submit = document.querySelector('.button');
const error = document.querySelector('.error');

submit.addEventListener("click", function(){
    const er =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    
    if(!er.test(input.Value.toLowerCase())){
        error.style.display = "block";
        input.style.borderColor = "red";
    } 
    else{
          error.style.display = "none";
        input.style.borderColor = "green";
    }
})