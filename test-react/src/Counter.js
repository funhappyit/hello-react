import {useState} from "react";

const Counter = () => {
    const [value,setValue] = useState(0);

    return (
        <div>
            <p>현재 카운터 값은 <b>{value}</b> 입니다</p>
            <button onClick={()=>setValue(value+1)}>+1</button>
            <button onClick={()=>setValue(value-1)}>-1</button>
        </div>
    )


}




// class Counter extends Component{
//     state={
//         number:0,
//         fixedNumber:0
//     }
//     render() {
//         const {number,fixedNumber} = this.state; //state를 조회할 때는 this.state로 조회합니다.
//         return(
//           <div>
//               <h1>{number}</h1>
//               <h2>바뀌지 않는 값:{fixedNumber}</h2>
//               <button
//               onClick={()=>{
//                   this.setState(
//                       {
//                           number: number+1
//                       },
//                       ()=>{
//                           console.log("방금 setState가 호출되었습니다.");
//                           console.log(this.state);
//                       }
//                   )
//
//               }}
//               >
//                   +1
//               </button>
//           </div>
//         );
//     }
// }

export default Counter;