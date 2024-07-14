import {createAction, handleActions} from "redux-actions";
/*
INCREASE와 DECREASE는 액션의 타입을 정의합니다. 액션 타입은 상태를 어떻게 변경할지 설명하는 문자열입니다.
*/
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/*
increase와 decrease는 액션 생성자 함수입니다.
이 함수들은 각각 INCREASE와 DECREASE 타입의 액션 객체를 반환합니다. 이 액션 객체는 리듀서에 의해 처리됩니다.
*/
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
/*
initialState는 상태의 초기값을 정의합니다.
여기서는 number 속성이 0인 객체로 초기 상태를 설정했습니다.
*/
const initialState = {
  number:0
};
/*
counter 함수는 리듀서 함수입니다. 이 함수는 현재 상태와 액션을 받아 새로운 상태를 반환합니다.
state 파라미터는 현재 상태를 나타내며, 기본값은 initialState입니다.
action 파라미터는 액션 객체를 나타냅니다.
switch 문을 사용하여 액션의 타입에 따라 상태를 변경합니다.
INCREASE 액션이 들어오면 state.number 값을 1 증가시킵니다.
DECREASE 액션이 들어오면 state.number 값을 1 감소시킵니다.
그 외의 액션이 들어오면 현재 상태를 그대로 반환합니다.

*/
// function counter(state=initialState, action){
//     switch (action.type){
//         case INCREASE:
//             return{
//               number: state.number+1
//             };
//         case DECREASE:
//             return {
//                 number: state.number -1
//             };
//         default:
//             return state;
//     }
// }
const counter = handleActions({
    [INCREASE]:(state,action)=>({number: state.number+1}),
    [DECREASE]:(state,action)=>({number: state.number-1}),
},
    initialState,
);


//이 코드는 카운터 기능을 수행하는 리덕스 모듈로, INCREASE와 DECREASE 액션을 처리하여 상태의 number 값을 증가 또는 감소시킵니다.
export default counter;