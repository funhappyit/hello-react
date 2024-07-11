const TodoItem = ({todo,onToggle,onRemove}) => {
    return(
        <div>
            <input type="checkbox"/>
            <span>예제 텍스트</span>
            <button>삭제</button>
        </div>
    );
};
const Todos = ({
    input, //인풋에 입력되는 텍스트
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
}) => {
    const onSubmit = e => {
      e.preventDefault();
    };
    return(
        <div>
            <form onSubmit={onSubmit}>

            </form>

        </div>
    );
};


