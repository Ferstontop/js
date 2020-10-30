var readline = require('readline-sync');

let n = readline.question("enter word count: ");
let array = [];



for(let i=0; i<n;i++){
    array = readline.question("enter word: ");
}

let key = readline.question("enter key: ");

search(array,key);

function search(array, key){
    let array1 = array;
    let key1 =key;
    let num = 0;
    
    // while(true){
    //     let k = array1.indexOf(key1, num);
    //     if(k == -1) break;
    //     num = k+1;
        
    // }
    
    for(let i = 0; i<n; i++){
        if( array1[i]== key1){
            num=num+1;
            
        }
        
    }
    console.log("Вхождений: "+ num);

    
    return num;
}
