import {connect, useDispatch, useSelector} from 'react-redux';
import {changeInput, insert, toggle, remove} from "../modules/todos";
import Todos from "../components/Todos";
import {useCallback} from "react";
import React from 'react';

// const TodosContainer = ({
//     input,
//     todos,
//     changeInput,
//     insert,
//     toggle,
//     remove,
// }) => {
//     return(
//         <Todos
//             input={input}
//             todos={todos}
//             onChangeInput={changeInput}
//             onInsert={insert}
//             onToggle={toggle}
//             onRemove={remove}
//         />
//     );
// };

// export default connect(
//     //비구조화 할당을 위해 todos를 분리하여
//     //state.todos.input 대신 todos.input을 사용
//     ({todos}) => ({
//         input: todos.input,
//         todos: todos.todos,
//     }),
//     {
//         changeInput,
//         insert,
//         toggle,
//         remove,
//     },
// )(TodosContainer)

const TodosContainer = () => {
    const {input, todos} = useSelector(({todos}) => ({
        input: todos.input,
        todos:todos.todos
    }));
    const dispatch = useDispatch();
    const onChangeInput = useCallback(input=>dispatch(changeInput(input)),[dispatch]);
    const onInsert = useCallback(text=>dispatch(insert(text)),[dispatch]);
    const onToggle = useCallback(id=>dispatch(toggle(id)),[dispatch]);
    const onRemove = useCallback(id=>dispatch(remove(id)),[dispatch]);

    return(
      <Todos
        input={input}
        todos={todos}
        onChangeInput={onChangeInput}
        onInsert={onInsert}
        onToggle={onToggle}
        onRemove={onRemove}
      />

    );

};
/*
 memo를 사용하면 컴포넌트가 동일한 props로 다시 호출될 때, 리액트는 그 컴포넌트를 다시 랜더링 하지 않고 이전
랜더링 결과를 재사용합니다. 이를 통해 불필요한 연산을 줄이고 성능을 향상시킬 수 있습니다.
 */
export default React.memo(TodosContainer);