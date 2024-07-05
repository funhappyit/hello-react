import {useEffect, useReducer, useState} from "react";

function reducer(state,action){
    return{
        ...state,
        [action.name]:action.value
    };
}


const Info=()=>{
    const[state,dispatch] = useReducer(reducer,{
       name:'',
       nickname:''
    });
    const {name,nickname} =state;
    const onChange = e =>{
        dispatch(e.target);
    };

    // //useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook입니다
    // useEffect(()=>{
    //     console.log("effect");
    //     console.log(name);
    //     return () => {
    //       console.log('cleanup');
    //       console.log(name);
    //
    //     };
    // },[])
    //
    // const onChangeName = e =>{
    //     setName(e.target.value);
    // };
    //
    // const onChangeNickname = e =>{
    //     setNickname(e.target.value);
    // };

    return(
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickname" value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름:</b>{name}
                </div>
                <div>
                    <b>닉네임:</b>
                    {nickname}
                </div>
            </div>
        </div>
    );
};
export default Info;