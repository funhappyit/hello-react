import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValIdationSample from "./ValIdationSample";
import ScrollBox from "./ScrollBox";
import {Component, useState} from "react";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";
import Info from "./info";
import Average from "./Average";


// class App extends Component{
//     state = {
//         color:'#000000'
//     };
//     handleClick=()=>{
//         this.setState({
//             color:getRandomColor()
//         });
//     };
//
//     render() {
//         return(
//             <div>
//                 <Info/>
//
//             </div>
//         );
//     }
// }
const App = () =>{
    // const[visible,setVisible] = useState(false);
    // return(
    //     <div>
    //         <button onClick={()=>{
    //         setVisible(!visible)}
    //         }>
    //             {visible?'숨기기':'보이기'}
    //         </button>
    //         <hr/>
    //         {visible && <Info/>}
    //
    //     </div>
    // )
    return <Average/>
}



export default App;