import Counter from "../components/Counter";
import {connect, useDispatch} from 'react-redux';
import {decrease, increase} from "../modules/counter";
import {bindActionCreators} from "redux";
import {useSelector} from "react-redux";
import {useCallback} from "react";
/*
mapStateToProps는 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
mapDispatchToProps는 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
*/
/*
CounterContainer: 프리젠테이셔널 컴포넌트인 Counter를 래핑하는 컨테이너 컴포넌트입니다.
number, increase, decrease: Counter 컴포넌트에 전달되는 props입니다.
*/
// const CounterContainer = ({number,increase,decrease}) => {
//     return (
//         <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
//     );
// };
/*
mapStateToProps: Redux 스토어의 상태를 CounterContainer 컴포넌트의 props로 매핑합니다.
state.counter.number: 스토어의 상태 중 counter 리듀서의 number 값을 number props로 전달합니다.
*/
// const mapStateToProps = state => ({
//    number:state.counter.number,
// });
/*
mapDispatchToProps: 액션 생성 함수를 CounterContainer 컴포넌트의 props로 매핑합니다.
increase: increase 액션을 디스패치하는 함수입니다.
decrease: decrease 액션을 디스패치하는 함수입니다.
*/
// const mapDispatchToProps = dispatch => ({
//    //임시 함수
//     increase: () => {
//        dispatch(increase());
//    },
//    decrease:  () => {
//        dispatch(decrease());
//    },
// });
/*
connect: CounterContainer 컴포넌트를 Redux 스토어와 연결합니다.
mapStateToProps와 mapDispatchToProps를 사용하여 상태와 액션을 컴포넌트의 props로 전달합니다.
CounterContainer를 Redux에 연결한 컴포넌트로 내보냅니다.
*/
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(CounterContainer);

//connect 함수 내부에 익명 함수 형태로 선언
// export default connect(
//     state => ({
//          number:state.counter.number,
//         }),
//     dispatch =>
//         bindActionCreators(
//             {
//                 increase,
//                 decrease,
//             },
//             dispatch,
//         )
// )(CounterContainer);

const CounterContainer = () => {
    const number = useSelector(state=>state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(()=> dispatch(increase()),[dispatch]);
    const onDecrease = useCallback(()=>dispatch(decrease()),[dispatch]);
    return(
      <Counter number={number} onIncrease={onIncrease()} onDecrease={onDecrease()}/>
    );
};

export default CounterContainer;