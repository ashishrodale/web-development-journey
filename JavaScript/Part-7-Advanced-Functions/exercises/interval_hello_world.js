// Question : Write a function that prints"Hello world" 5 times at interval of 5s each.

let id = setInterval(()=>{
    console.log("Helloworld");
    
},2000);

setTimeout(()=>{
    clearInterval(id);
},10000);
