const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        if(button.textContent === "AC"){
            display.value = "";
        }
        else if(button.textContent === "DEL"){
            display.value = display.value.slice(0,-1);
        }
        else if(button.textContent === "="){
            display.value = eval(display.value);
        }
        else{
            display.value = display.value + button.textContent;
        }
    });
}
);