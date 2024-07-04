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


}