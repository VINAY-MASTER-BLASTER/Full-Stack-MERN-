// console.log("Start Script")

// setTimeout(()=>{
//     console.log("this is from task Queue (Settimeout)")
// },5000)
// console.log("End Of Script")



console.log("Start")

setTimeout(() => {
    console.log("this is from the Task Queue (settimeout)") 
},0);
Promise.resolve().then(()=>{
    console.log("this is from the microtask Queue (Promise)")
})
console.log("End")