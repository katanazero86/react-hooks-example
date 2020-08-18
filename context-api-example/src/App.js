import React, {useState} from 'react';
import Child from "./components/Child";
import Child4 from "./components/Child4";


// context API
export const MyContext = React.createContext(''); // createContext() 호출하여 context 객체 생성
// {Provider, Consumer}
// 상위 컴포넌트에서 Provider 컴포넌트를 이용해서 데이터를 전달
// 하위 컴포넌트에서 Consumer 컴포넌트를 이용해서 데이터를 사용

export const MyContext2 = React.createContext('');

const Child4Memo = React.memo(() => {
    return (
        <Child4/>
    )
});

export default function App() {

    const [msg, setMsg] = useState('hello Child3 Component');

    return (
        <div className="App">
            <button onClick={() => setMsg('안녕? 3번째 자식 컴포넌트!')}>메시지 변경</button>
            <MyContext.Provider value={{msg, setMsg}}>
                <Child msg='hello Child Component'/>
                <MyContext2.Provider value={msg}>
                    <Child4Memo/>
                </MyContext2.Provider>
            </MyContext.Provider>
        </div>
    )
}
