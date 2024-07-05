import {useRef} from "react";

const RefSample2 = () =>{
    const id = useRef(1);
    const setId = (n) =>{
        id.current = n;
    }
    const printId = () =>{
        console.log(id.current);
    }
    return(
      <div>
          refsample
      </div>
    );
}
export default RefSample2