const fs = require('fs')

// Sync...
// fs.writeFileSync("./text.txt","Hello There")

// Async... 
// fs.writeFile("./text.txt","Hello vinay",(err,data)=>{})



// Sync result ko retune karta hai handle try and catch
// const result = fs.readFileSync("./Contact.txt","utf-8",)
// console.log(result)


// Async callback fumction dana padta hai
// fs.readFile("./Contact.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })



// fs.appendFile("./text.txt",`hello ${Date.now()}\n`,(err)=>{})


// fs.copyFileSync("./text.txt","./copy")  


// fs.unlinkSync('./copy.txt')


// console.log(fs.statSync('./text.txt').isFile())


// fs.mkdirSync("document/a/b",{recursive:true})


console.log("1")
fs.readFile("./Contact.txt","utf-8",(err,res)=>{
    if(err){
        console.log("Error",err)
    }else{
        console.log(res)
    }
})
console.log(2)


