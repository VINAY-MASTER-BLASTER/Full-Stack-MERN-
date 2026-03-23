// async and defer 

// const root = ReactDOM.createRoot(document.getElementById("root"))
// const parent = React.createElement("h2",{},"Heading One")
// root.render(parent)


//  <div class="parent">
//         <div class="child">
//           <h1>i'm h1 tag </h1>
//           <h1>i'm h1 tag </h1>
//         </div>
//  </div>

const root = ReactDOM.createRoot(document.getElementById("root"))
const parent = React.createElement("div",{className:"parent"},React.createElement('div',{className:"child"},[React.createElement('h1',{},"I'm am H1 tag"),React.createElement('h1',{},"I'm am H1 tag")]))
root.render(parent)





  
// <div class="parent"> 
//  <div class="child1">
//    <h1>I'm h1 tag</h1>
//    <h1>I'm h1 tag</h1>
//  </div>
//  <div class="child2">
//    <h1>I'm h1 tag</h1>
//    <h1>I'm h1 tag</h1>
//  </div>
//</div>

// const root = ReactDOM.createRoot(document.getElementById("root"))
// const parent = React.createElement("div",{className:"parent"},[React.createElement('div',{className:"child1"},[React.createElement('h1',{},"I'm am H1 tag"),React.createElement('h1',{},"I'm am H1 tag")]),React.createElement('div',{className:"child2"},[React.createElement('h1',{},"I'm am H1 tag"),React.createElement('h1',{},"I'm am H1 tag")])])
// root.render(parent)



