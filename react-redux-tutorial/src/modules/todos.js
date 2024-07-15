import {createAction,handleActions} from "redux-actions";
import produce from 'immer';
//액션 타입을 문자열 상수로 정의합니다. 이는 액션 타입을 사용할 때 오타를 방지하고 관리하기 쉽게 해줍니다.
const CHANGE_INPUT = "todos/CHANGE_INPUT"; // 인풋 값을 변경함
const INSERT = "todos/INSERT"; //새로운 todo를 등록함
const TOGGLE = "todos/TOGGLE"; //todo를 체크/체크 해제함
const REMOVE = "todos/REMOVE"; //todo를 제거함
//액션 생성자 함수는 액션 객체를 반환하는 함수입니다.
// export const changeInput = input => ({
//     type:CHANGE_INPUT,
//     input
// });
/*
페이로드(payload)는 액션 객체에서 데이터를 전달하는 부분을 말합니다. 액션 객체는 일반적으로 `type`과 `payload` 속성으로 구성됩니다.
여기서는 `redux-actions`의 `createAction` 함수를 사용하여 페이로드를 설정하고 있습니다

*/

// export const insert = text => ({
//     type:INSERT,
//     todo:{
//         id:id++,
//         text,
//         done:false
//     }
// });


// export const toggle = id => ({
//     type:TOGGLE,
//     id
// });
//
// export const remove = id => ({
//     type:REMOVE,
//     id
// });

export const changeInput = createAction(CHANGE_INPUT,input=>input);

let id = 3;//insert가 호출될 때마다 1씩 더해집니다.
export const insert = createAction(INSERT,text=>({
    id:id++,
    text,
    done:false,
}))
export const toggle = createAction(TOGGLE,id=>id);
export const remove = createAction(REMOVE, id=>id);


//초기 상태는 인풋 필드와 두 개의 기본 todo 항목으로 구성됩니다.
const initialState = {
    input:'',
    todos:[
        {
            id:1,
            text:'리덕스 기초 배우기',
            done:true
        },
        {
            id:2,
            text:'리액트와 리덕스 사용하기',
            done:false
        }
    ]
};
//리듀서는 현재 상태와 액션을 받아 새로운 상태를 반환하는 순수 함수입니다.
/*
function todos(state=initialState,action){
    switch (action.type){
        case CHANGE_INPUT:
            return{
                ...state,
                input:action.input
            };
        case INSERT:
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            };
        case TOGGLE:
            return {
                ...state,
                todos: state.todos.map(todo=>
                    todo.id === action.id ? {...todo,done: !todo.done} :todo
                )
            };
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo=>todo.id !== action.id)
            };
        default:
            return state;
    }
}
*/
const todos = handleActions(
    {
        [CHANGE_INPUT]:(state, {payload:input})=>
            ({...state,input}),
        [INSERT]:(state,{payload:todo})=>
            ({
                ...state,
                todos:state.todos.concat(todo),
            }),

        [TOGGLE]:(state,{payload:id})=>({
           ...state,
           todos:state.todos.map(todo=>
                todo.id === id ? {...todo, done:!todo.done}:todo,
           ),
        }),
        [REMOVE]:(state,{payload:id})=>({
            ...state,
            todos: state.todos.filter(todo=>todo.id !== id),
        }),

    },
    initialState,
);

export default todos;

