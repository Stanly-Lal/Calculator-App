// AC BUTTON var###########################
let clearBtn = document.querySelector("#ac-btn");
// NUMBER BUTTON VAR#####################
let buttons = document.querySelectorAll(".all-btn");
// NUMBER BUTTON VAR#####################
let opr = document.querySelectorAll(".operator");
// FOR DISPLAY FONT SIZE################
let inputF = document.getElementById("display");


// AC BUTTON LOGIC###########################
clearBtn.addEventListener("click", () => {
    display.value = "";
});
// OPERATOR BUTTON LOGIC###############
opr.forEach(op => {
    op.addEventListener("click", () =>{
        if(op.innerText === "x"){
            display.value += "*";
        } else if(op.innerText === "÷"){
            display.value += "/";
        } else {
          display.value += op.innerText;   
        }
    });
});
// NUMBER BUTTON LOGIC###############
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(button.innerText !== "="){
           display.value += button.innerText;
        } else if(button.innerText === "="){
            display.value = eval(display.value);
        }
    });   
});

if(inputF.textLenght >= 8){
    inputF.style.fontSize = "1rem";
}







