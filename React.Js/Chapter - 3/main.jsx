import React  from "react";
import ReactDOM from "react-dom/client"


//? React Object 
// React.createElement => ReactElement-JS Object => HTMLElement(render) 
// const heading = React.createElement("h1",{},"Namasta Dosto ")


//? What is  Jsx 
// Jsx is syntax where we write HTML and Js together 
// jsx HTML Like or XML like syntax 
// Jsx (trancepiled befour it reaches the JS Engine) - Vite - Babel 

//? React Element
// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// if you Write Multiple Line use parentheses()

// const jsxheading  = (
//   <h1 className="head">Hello World </h1> 
// ) 
// console.log(jsxheading)


//? React Components 
// class based components = OLD 
// Functional Compents = NEW


//? React Functional components 
// A function that is retune the jsx code it's a React components
// You can also say a JS Function that retune the React Element 




const Headingcomponents2 = () => <h1>Namasta React 2</h1>
// both are same

// Component Composetions
const Headingcomponents = () =>{
    return(
        <div>
             <h1>Namasta React </h1>
            <Headingcomponents2/>
            {/* <Headingcomponents2></Headingcomponents2> */}
            {/* {Headingcomponents2()} */}
        </div>
       
    ) 
}

// Inside this {} curly braces you write any javascript code 

    

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Headingcomponents/>)