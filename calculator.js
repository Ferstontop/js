var readline = require('readline-sync');

let a = readline.question("enter number: ");
let action = readline.question("enter + - * / : ", );
let b = readline.question("enter number: ");

try{
    calculator(a,action,b);
}catch(e){
    if(e instanceof TypeError){
        console.log("Вводите числа!");
    }
}


function calculator(a,action,b){
    let a1 = Number(a);
    let action1 = action;
    let b1 = Number(b);
    switch(action1){
        case "+":
            console.log(a1+b1);
            break;
        case "-":
            console.log(a1-b1);
            break;
        case "*":
            console.log(a1*b1);
            break;
        case "/":
            if(b1!=0){
                console.log(a1/b1);
                break;
            }
            else{
                return "На ноль не делится!"
            }
            
    }
    
    
}