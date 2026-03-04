// Q.1 In a real-world web app (like an e-commerce site), why is JavaScript called single-threaded, and how does it still handle multiple tasks like API calls, timers, and user clicks at the same time?

// ans- JavaScript is called single-threaded because it can execute only one piece of code at a time on the main thread. It does not run multiple functions simultaneously in parallel like multi-threaded languages.

// But in real applications (e-commerce, dashboards, booking apps), JavaScript still handles multiple things at once — API calls, timers, user clicks — by not blocking the main thread.

// Real-life analogy:
// Think of JavaScript as a single cashier at a restaurant.

// The cashier can take only one order at a time → single-threaded.

// If a customer orders food that takes 20 minutes, the cashier does not stand idle waiting.

// The order is sent to the kitchen (browser APIs / Web APIs).

// The cashier immediately moves to the next customer.

// In JavaScript:

// Long tasks like setTimeout, fetch, DOodM events are offloaded to browser APIs.

// When those tasks are completed, their callbacks are placed in the callback queue / microtask queue.

// The event loop checks if the main thread (call stack) is free.

// When free, JavaScript picks the next task and executes it.






//Q.2-- Suppose you are building a search input (like Amazon / Flipkart).
// A user types very fast.
// How will you avoid unnecessary API calls and still give a smooth experience?


// let btn = document.querySelector(".btn");

// debouncing--------
// function debounce(fn,delay){
//     let timer;

//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(()=>{
//             fn.apply(this,args)
//         },delay)
//     }
        
   
// }

// let clickfn = debounce((...args)=>{
//     console.log("click happened")
//     console.log(args)
// },2000)

// btn.addEventListener('click',()=>{
//     clickfn(2,3)
// })




//Q.3-- Suppose you have a button on a webpage.
// A user clicks it multiple times very fast, and each click triggers an API call.

// How will you make sure only one API call is made at a time, and the rest of the clicks are ignored until the first call finishes?

// Throttling-----------
// let btn = document.querySelector(".btn");


// function throttlefn(fn,delay){
//     let isThrottle;
//     return function (){
//         if(!isThrottle){
//             isThrottle = true
//             fn();
//             setTimeout(()=>{
//                 isThrottle = false
//             },delay)
//         }
//     }
// }

// let fun = throttlefn(()=>{
//     console.log("this is throttle running");
// },5000);

// btn.addEventListener("click",()=>{
//     fun()
// })


// Q.4 Suppose you are fetching data from an API, and the user navigates away from the page before the request completes.
// How will you cancel the ongoing API request using JavaScript, and why is this important?


// let controller = null;

// window.addEventListener("beforeunload", () => {
//   if (controller) {
//     controller.abort();
//   }
// });


// function fetchData(query) {
//   cancel previous request
//   if (controller) {
//     controller.abort();
//   }

//   controller = new AbortController();

//   fetch(`/search?q=${query}`, {
//     signal: controller.signal
//   })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => {
//       if (err.name === "AbortError") {
//         console.log("Previous request cancelled");
//       }
//     });
// }

// signal is the link between an AbortController and an async operation, and we pass it to fetch so it knows when to cancel itself.


// Q.5 Suppose you have an object in JavaScript that is used as global state.
// Multiple parts of the app are reading from it.
// How will you prevent accidental modification of that object while still allowing reads?

// ans -I prevent accidental modification by freezing the global object, ensuring read-only access and safer shared state.


// Q.6 -Suppose your JavaScript code runs a heavy computation (like processing a large array), and because of that the UI freezes for a few seconds.
// How will you fix this issue so that the UI remains responsive?

// Ans - I fix UI freezing by breaking heavy tasks into chunks or moving CPU-intensive work to Web Workers so the main thread stays responsive.

// Worker.js
// const worker = new Worker("worker.js");

// worker.postMessage(100000000);

// worker.onmessage = function (e) {
//   console.log("Result from worker:", e.data);
// };


// worker in main js
// self.onmessage = function (e) {
//   const number = e.data;

//   let sum = 0;
//   for (let i = 0; i < number; i++) {
//     sum += i;
//   }

//   self.postMessage(sum);
// };



// Q.7 let count = 0;

// function increment() {
//   count++;
// }

// increment();
// increment();

// console.log(count);

// Now imagine the same logic is used inside a large application, and multiple functions are updating count

// Output kya hoga aur kyun?
//  Is approach me kya problem aa sakti hai real projects me?
//  Isko better & safer kaise likhoge JavaScript me?

// Ans-function createCounter() {
//   let count = 0;

//   return {
//     increment() {
//       count++;
//       return count;
//     }
//   };
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();

// console.log(counter.increment()); // 3

// The output will be 2 because the same global variable is incremented twice. However, using global mutable state is risky in large applications, so I would encapsulate the state using closures approach to make the logic safer and predictable.



// Q.8 for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
//  Output kya aayega?
// Kyun?
// Isko 2 different ways me fix karo.

// Ans - The output is 3 3 3 because var is function-scoped and all callbacks reference the same variable. When the callbacks run, the loop has already completed and i is 3. This can be fixed using let or by creating a new scope using an IIFE.

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }


// for (var i = 0; i < 3; i++) {
//   (function (x) {
//     setTimeout(() => {
//       console.log(x);
//     }, 1000);
//   })(i);
// }



// Q.9-const user = {
//   name: "Abhi",
//   greet: function () {
//     setTimeout(function () {
//       console.log(this.name);
//     }, 1000);
//   }
// };

// user.greet();

//  Output kya aayega?
//  Kyun?
//  Isko fix karo.

// Ans-    Undefined and this ka value function kaise call hota hai uspe depend karta hai

// setTimeout(function () { ... }) ke andar jo function hai:

// wo normal function hai

// uska this → window (browser) hota hai


// const user = {
//   name: "Abhi",
//   greet: function () {
//     setTimeout(() => {
//       console.log(this.name);
//     }, 1000);
//   }
// };

// user.greet();

// The output is undefined because the callback inside setTimeout is a regular function, so this refers to the global object. To fix it, we can use an arrow function.



// Q.10 - You are building a form-heavy web application (registration / job application / payment details).

// A user fills a long form.
// By mistake:

// page refresh ho jaata hai

// tab close ho jaata hai

// internet blip aa jaata hai


// Ans - Store data while user is typing (not only on submit)
// form.addEventListener("input", () => {
//   const data = {
//     name: nameInput.value,
//     email: emailInput.value,
//     phone: phoneInput.value
//   };

//   localStorage.setItem("formData", JSON.stringify(data));
// });


// Restore data on page load
// window.addEventListener("DOMContentLoaded", () => {
//   const savedData = localStorage.getItem("formData");

//   if (savedData) {
//     const data = JSON.parse(savedData);
//     nameInput.value = data.name || "";
//     emailInput.value = data.email || "";
//     phoneInput.value = data.phone || "";
//   }
// });


// Clear data after successful submit (VERY IMPORTANT)
// form.addEventListener("submit", () => {
//   localStorage.removeItem("formData");
// });


// Q.11 You are working on a page where a button is dynamically added after an API call.

// Sometimes the click works, sometimes it doesn’t.

// You find this code:

// document.getElementById("btn").addEventListener("click", () => {
//   console.log("Clicked");
// });

// Ans - This code runs immediately

// API call is async

// Button is added later

// So getElementById("btn") returns null

// Event listener is never attached

// That’s why:

// Sometimes it works (button already existed)

// Sometimes it doesn’t (button created later).

// fix :
// document.body.addEventListener("click", (e) => {
//   if (e.target.id === "btn") {
//     console.log("Clicked");
//   }
// });


// Q.12 You have an API that sometimes responds very slowly.
// Users click the submit button multiple times, causing duplicate API requests.

// How will you prevent multiple submissions using JavaScript only?

// Ans - let isSubmitting = false;

// button.addEventListener("click", async () => {
//   if (isSubmitting) return;

//   isSubmitting = true;
//   button.disabled = true;

//   try {
//     await submitForm(); // API call
//   } finally {
//     isSubmitting = false;
//     button.disabled = false;
//   }
// });


// Q.13 Why is event delegation more memory-efficient than attaching event listeners to every element?

// Ans - Event delegation is more memory-efficient because instead of attaching an event listener to every individual element, we attach a single listener to a parent element and handle events using bubbling.

// This reduces:

// number of event listeners

// memory usage

// re-binding issues for dynamic elements


// Q.14 Why does try-catch NOT catch errors thrown inside setTimeout, and how do you handle such errors properly?

// Ans - try-catch works only for synchronous code

// setTimeout callback runs later

// By the time callback runs:

// try block is already finished

// Call stack is empty

// Error happens in a different execution context.

// correct way:
// setTimeout(() => {
//   try {
//     throw new Error("Something went wrong");
//   } catch (err) {
//     console.log("Handled:", err.message);
//   }
// }, 1000);



// Q.15 What is the difference between microtasks and macrotasks, and why does it matter in real applications?

//Ans- Microtasks like Promise callbacks have higher priority and always execute before macrotasks like setTimeout. This matters because it affects execution order, UI responsiveness, and can even block rendering if misused




// Q.16 You are working on a page that shows a live counter / timer.

// After some time, users report:

// Page becomes slow

// CPU usage increases

// Even after leaving the page, the issue continues

// You find this code:

// setInterval(() => {
//   console.log("running");
// }, 1000);

// Ans - ncleared intervals keep references alive and prevent garbage collection.


// Fix : const intervalId = setInterval(() => {
//   console.log("running");
// }, 1000);

// // cleanup
// clearInterval(intervalId);


// Q.17 What is the difference between setTimeout and setInterval, and why is setTimeout sometimes safer?

// Ans - setTimeout runs once while setInterval runs repeatedly. setTimeout is often safer because it gives better control, avoids overlapping executions, and is easier to clean up, especially for heavy or async tasks


// Q.18 How will you implement a retry mechanism for a failed API call using JavaScript?


// Ans - function fetchWithRetry(url, retries = 3, delay = 1000) {
//   fetch(url)
//     .then(res => {
//       if (!res.ok) throw new Error("Failed");
//       return res.json();
//     })
//     .catch(err => {
//       if (retries === 0) return;

//       setTimeout(() => {
//         fetchWithRetry(url, retries - 1, delay * 2);
//       }, delay);
//     });
// }


// Q.19 You are working on a list page that shows thousands of items (users, products, logs).

// Rendering all items at once makes the page slow and laggy.

// Ans - Pagination
// function renderPage(items, page, pageSize) {
//   const start = page * pageSize;
//   const end = start + pageSize;
//   render(items.slice(start, end));
// }

// Q.20 Explain closures with a real-world example.



// Q.21 What is the difference between:
// call()
// apply()
// bind()
// And in what real-world situations would you use each?

// Ans - call and apply both invoke the function immediately while setting this, but call takes arguments individually and apply takes them as an array. bind does not call the function immediately; it returns a new function with this permanently bound.


// Q.22 What is the difference between shallow copy and deep copy in JavaScript?
// And more importantly:
// 👉 Why can shallow copy cause bugs in real projects?
// 👉 How will you create a deep copy properly?
// Explain with example.



// Q.23 console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

// Ans - true
// false

// Explanation 
// 1 < 2 → true 
// true<3  --- true considered as 1
// 1<3 --- true


// Q.24 console.log("5" - 3);
// console.log("5" + 3);
// console.log("5" * "2");

// Ans - 2
// 53
// 10

// explanation - and * force numeric conversion

// + with string causes concatenation

// test();

// Q.25 function test() {
//   console.log(a);
//   var a = 10;
// }



// Ans - hoisted

// Q.26 setTimeout(() => console.log("A"), 0);
// Promise.resolve().then(() => console.log("B"));
// console.log("C");

// Ans-C
// B
// A

// Q.27 difference - const obj1 = {};
// const obj2 = new Object();

// Ans - same

// Q.28 console.log(typeof typeof 1);

// Ans - String

// Q.29 const obj = { a: 1 };
// Object.freeze(obj);
// obj.a = 2;
// console.log(obj.a);

// Ans - 1


// Q.30 - In JavaScript, we often hear that 'everything is an object.' If I create a new string using const name = 'Abhishek', how is it able to access methods like .toUpperCase() if it's a primitive string and not an object?
// ans - Internally, it behaves like: new String("Abhishek").toUpperCase();



// Q.31 Explain the order of execution for the code below. This tests your understanding of how JavaScript handles asynchronous tasks\

// Ans console.log('A');

// setTimeout(() => console.log('B'), 0);

// Promise.resolve().then(() => console.log('C'));

// console.log('D');

// Q.32 What is the primary difference between a regular function and an arrow function when it comes to the this keyword? Could you give me an example of a situation where using an arrow function might actually break your code?