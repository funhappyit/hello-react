import {Component} from "react";

class LifeCycleSample extends Component{
    state = {
        number:0,
        color:null,
    }
    myRef = null; //ref를 설정할 부분

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    //props로 받아 온 값을 state에 동기화시키는 용도로 사용, 컴포넌트가 마운트될 때와 업데이트될 때 호출
    static getDerivedStateFromProps(nextProps,prevState){
        console.log("getDerivedStateFromProps");
        if(nextProps.color !== prevState.color){
            return {color:nextProps.color};
        }
        return null;
    }

    //컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행합니다. 자바스크립트 라이브러리 또는 프레임워크 함수를 호출하거나 이벤트 등록,
    // setTimeout, setInterval, 네트워크 요청 같은 비동기 작업을 처리하면 됩니다.
    componentDidMount() {
        console.log('componentDidMount');
    }
    //이것은 props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메서드입니다. 이 메서드에서는 반드시
    //true 값 또는 false 값을 반환해야 합니다.
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate",nextProps,nextState);
        //숫자의 마지막 자리가 4면 리렌더링하지 않습니다
        return nextState.number % 10 !== 4;
    }

    //컴포넌트를 DOM에서 제거할 때 실행합니다. componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 
    //제거 작업을 해야 합니다
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () =>{
        this.setState({
            number:this.state.number+1
        });
    }

    //render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출됩니다.
    //스크롤바 위치 유지
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    //리렌더링을 완료한 후 실행합니다.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate',prevProps,prevState);
        if(snapshot){
            console.log('업데이트되기 직전 색상: ',snapshot);
        }
    }

    render() {
        console.log('render');

        const style = {
            color:this.props.color
        };

        return(
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={ref=>this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color:{this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
    }
}

export default LifeCycleSample;