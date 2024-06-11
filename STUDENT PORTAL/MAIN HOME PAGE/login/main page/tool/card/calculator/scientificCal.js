var blink =document.querySelector('.blink'); 
setInterval(function () { 
            blink.style.opacity =  
            (blink.style.opacity == 0 ? 1 : 0); 
        }, 500); 


let operation="";
let temp;
function clearScreen()
{
    operation="";
    document.querySelector('.out').innerHTML="";
}
function binary(x)
{
    operation="binary";
    // let original=document.querySelector('.out').innerHTML;
    document.querySelector('.out').innerHTML+=x;
}
function insert(x)
{
    
    // let original=document.querySelector('.out').innerHTML;
    document.querySelector('.out').innerHTML+=x;
}

function dualOperation(x)
{
    operation=x;
    
    // let original=document.querySelector('.out').innerHTML;
    document.querySelector('.out').innerHTML+=x;
}

function xoperations(x)
{
    operation="xop";
    if(x=='2')
    {
        document.querySelector('.out').innerHTML+='²'; 
    }
    else if(x=='3'){
        
        document.querySelector('.out').innerHTML+='³'; 
    }
    
}
function parse(str) {
    return Function(`'use strict'; return (${str})`)()
}

function DEL()
{
    let original=document.querySelector('.out').innerHTML;
    if(original!="")
    {
        original=original.substring(0,original.length-1);
        document.querySelector('.out').innerHTML=original;   
    }

}

function find()
{
    let original=document.querySelector('.out').innerHTML;
    if(operation!="binary")
    {
    let ans;
    temp=original.substring(3);
    switch (operation) {
        case "sin":
            ans=Math.sin(temp);
            break;
        case "sinh":
            temp=original.substring(4);
            ans=Math.sinh(temp);
            break;
        case "cot":
            ans=1/Math.tan(temp);
            break;
        case "cos":
            ans=Math.cos(temp);
            break;
        case "cosh":
            temp=original.substring(4);
            ans=Math.cosh(temp);
            break;
        case "sec":
            ans=1/Math.cos(temp);
            break;
        case "tan":
            ans=Math.tan(temp);
            break;
        case "tanh":
            temp=original.substring(4);
            ans=Math.tanh(temp);
            break;
        case "ln":
            temp=original.substring(2);
            ans=Math.log(temp);
            break;
        case "log":
            ans=Math.log(temp)/Math.log(10);
            break;
        case '10^':
            ans=Math.pow(10,temp);
            break;
        case '√':
            temp=original.substring(1);
            ans=Math.sqrt(temp);
            break;
        case '∛':
            temp=original.substring(1);
            ans=Math.cbrt(temp);
            break;
        case 'xop':
            temp=original.substring(0,original.length-1);
            if(original[original.length-1]=='²')
            {
                ans=Math.pow(temp,2);
            }else{
                ans=Math.pow(temp,3);
            }
            break;

            default:
            break;
    }
    if(Number.isInteger(temp)){
        ans=temp;
    }
    else{

        ans=ans.toFixed(2);
    }
    document.querySelector('.out').innerHTML=ans;
    }
    else if(operation=='binary')
    {
        console.log(original);
        temp=parse(original);
        ans=temp.toFixed(2);
        document.querySelector('.out').innerHTML=ans;
    }
    temp="";
    operation="";
}
