let string=" ";
const label=document.querySelector(".label");
const input=document.querySelector("input");
const buttons=document.querySelectorAll(".button");
const equel=document.querySelector(".equel");
const ac=document.querySelector(".ac");
const ascape=document.querySelector(".escape");


Array.from(buttons).forEach((button) =>{
    button.addEventListener("click",(evt)=>{
        string= string + evt.target.innerHTML;
        input.value= string;

    })
});

equel.addEventListener("click",()=>{
    calculate();
   
});

ascape.addEventListener("click",()=>{
    string=input.value=input.value.slice(0,-1) ;
});

ac.addEventListener("click",()=>{
    string="";
    input.value= string;
    label.innerText= string;
    
});

function calculate(){
    let input=document.querySelector("input").value;
    let match= input.match(/([-+]?\d*\.?\d+)\s*([\+\-\×\÷])\s*([-+]?\d*\.?\d+)/);
    let result;

    if (match){
        let a=parseFloat(match[1]);
        let operator=match[2];
        let b=parseFloat(match[3]);
        

        switch(operator){
            case '+': result= a+b;break;
            case '-': result= a-b;break;
            case '×': result= a*b;break;
            case '÷': result= b !==0 ? a/b:"can not devide by zero";break;
            default:result="invali operator";
        }


        label.innerText= result;
    }
    else{
        label.innerText="invalid input format";
    }

    string=result;
}
