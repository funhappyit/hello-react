import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValIdationSample from "./ValIdationSample";
import ScrollBox from "./ScrollBox";
import {Component} from "react";
import IterationSample from "./IterationSample";

class App extends Component{
    render() {
        return(
            <div>
                {/*<ScrollBox ref={(ref)=> this.scrollBox=ref}/>*/}
                {/*<button onClick={()=>this.scrollBox.scrollToBottom()}>*/}
                {/*    맨 밑으로*/}
                {/*</button>*/}
                <IterationSample></IterationSample>
            </div>
        );
    }
}

    //return (<MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>);



export default App;