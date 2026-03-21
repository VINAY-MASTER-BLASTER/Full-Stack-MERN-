// blocking 
// let a = 1078698
// let b = 20986

// function multiplyFn(x,y){
//     const result = x * y
//     return result
// }
// let c = multiplyFn(a,b)
// console.log(c)


// non-blocking 
// const fs = require('fs')
console.log("Start")

fs.readFile("./text.txt",'utf-8',(error,data)=>{
    if (error) {
        console.log("Failed to read file:", error);
        return; // Stop execution if there's an error
    }
    console.log("File Data:", data)
})



setTimeout(() => { 
    console.log("wait here for 5 second")
},5000);