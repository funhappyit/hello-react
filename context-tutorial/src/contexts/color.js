import {createContext,useState} from "react";

    const ColorContext = createContext({ //ColorContext는 기본값을 갖는 Context 객체를 생성합니다
        state:{color:'black',subcolor:'red'}, // state는 초기 색상 값(검정색) 과 보조 색상 값(빨강색)을 포함합니다.
        actions:{ // actions는 setColor와 SetSubColor라는 두 개의 빈 함수로 구성됩니다.
            setColor: () => {},
            setSubcolor: () => {}
        }
    });
    //ColorProvider는 Context의 값을 설정하고 하위 컴포넌트에게 제공하는 Provider 컴포넌트입니다.
    const ColorProvider = ({children}) => {
        //useState를 사용하여 color와 subcolor의 상태를 관리하고,
      const [color,setColor] = useState('black');
      const [subcolor,setSubcolor] = useState('red');

      //이 value 객체는 ColorContext.Provider의 value 속성에 전달됩니다.
      const value={
          state:{color,subcolor},
          actions:{setColor,setSubcolor}
      };

      return(
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
      );
    };

    //const ColorConsumer = ColorContext.Consumer와 같은 의미
    const {Consumer:ColorConsumer} = ColorContext;

    //ColorProvider와 ColorConsumer 내보내기
    export {ColorProvider,ColorConsumer};

export default ColorContext;