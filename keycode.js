

const body = document.getElementById("body");
const key = document.getElementById("key")
const which = document.getElementById("which")
const code = document.getElementById("code")



body.addEventListener("keyup",(event)=> {
    key.textContent= event.key;
})

body.addEventListener("keyup",(event)=> {
    
    which.textContent= event.which;
})

body.addEventListener("keyup",(event)=> {
    code.textContent= event.code;
})


  

