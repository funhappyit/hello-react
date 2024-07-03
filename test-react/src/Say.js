import {useState} from 'react';

const Say = () => {
    const [message, setMessage] = useState(''); // 배열의 첫번째 원소는 현재 상태, 두 번째 원소는 상태를 바꾸어 주는 함수
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeabe = () => setMessage('안녕히 가세요!');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeabe}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color:'red'}} onClick={()=> setColor('red')}>
                빨강색
            </button>
            <button style={{color:'green'}} onClick={()=> setColor('green')}>
                초록색
            </button>
            <button style={{color:'blue'}} onClick={()=>setColor('blue')}>
                파란색
            </button>
        </div>
    )
}
export default Say;