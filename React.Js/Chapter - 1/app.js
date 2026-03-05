//? React 

//* Creating a Element Using React.js
// const heading = React.createElement("h1",{id:"Heading"},"Hello React")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

// React Element(Object) => HTML(Brower Understand)


// How To Create the structur 
//<div id = "Parent">
//    <div id = "Child">
//        <h1>Hello World</h1>
//    </div>
//</div>


// let div = React.createElement("div",{id:"Parent"},React.createElement("div",{id:"Child"}, React.createElement("h1",{},"Hello World")))
// let root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(div)




// How To Create the structur
//<div id = "Parent">
//    <div id = "Child">
//        <h1>Hello World 1</h1>
//        <h1>Hello World 2</h1>
//    </div>
//</div>


// let div = React.createElement("div",{id:"Parent"},React.createElement("div",{id:"Child"}, [React.createElement("h1",{},"Hello World 1") ,React.createElement("h1",{},"Hello World 2"),]))
// let root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(div)





// How To Create the structur
{/* <div id = "Parent">
   <div id = "Child">
       <h1>Hello World 1</h1>
       <h1>Hello World 2</h1>
   </div>
   <div id = "Child1">
       <h1>Hello World 1</h1>
       <h1>Hello World 2</h1>
   </div>
</div> */}

let div = React.createElement("div",{id:"Parent"},[React.createElement("div",{id:"Child"},[React.createElement("h1",{},"Hello World 1"), React.createElement("h1",{},"Hello World 2")]),React.createElement("div",{id:"Child1"},[React.createElement("h1",{},"Hello World 1"), React.createElement("h1",{},"Hello World 2")])])
let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(div)