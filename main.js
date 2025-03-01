let string=" ";
const label=document.querySelector(".label");
const input=document.querySelector("input");
const buttons=document.querySelectorAll(".button");
const equel=document.querySelector(".equel");
const ac=document.querySelector(".ac");
const ascape=document.querySelector(".escape");
const operat=document.querySelectorAll(".a");
let clickcount=0;


Array.from(buttons).forEach((button) =>{
    button.addEventListener("click",(evt)=>{
        string= string + evt.target.innerHTML;
        input.value= string;
    });
});

operat.forEach((a)=>{
    a.addEventListener("click",(evt)=>{
        clickcount++;
        if(clickcount===1){
            string= string + evt.target.innerHTML;
            input.value= string;

        }else
        {
            let inpute=document.querySelector("input").value;
            let match= inpute.match(/([-+]?\d*\.?\d+)\s*([\+\-\×\÷])\s*([-+]?\d*\.?\d+)/);
            
            if(match){
                let a=parseFloat(match[1]);
                let operator=match[2];
                let b=parseFloat(match[3]);

                
                string=calculate();
                string=string+evt.target.innerHTML;
                input.value= string;
               
                clickcount=2;
            }
        }        
    });
});

equel.addEventListener("click",()=>{
    calculate();
   
});

ascape.addEventListener("click",()=>{
    string=input.value=input.value.slice(0,-1) ;
    clickcount=0;
});

ac.addEventListener("click",()=>{
    string="";
    input.value= string;
    label.innerText= string;
    clickcount=0;
    
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
    return  result;    
};
