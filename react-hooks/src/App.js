import React, {useState, useEffect} from 'react';
import EffectComponent from "./components/EffectComponent";
import useMounted from "./hooks/useMounted";
import useHook from "./hooks/useHook";
import RefComponent from "./components/RefComponent";
import RefComponent2 from "./components/RefComponent2";

export default function App() {

    const mounted = useMounted();
    const [name, age] = useHook();
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(100);
    const [state, setState] = useState({name:'zz', age : 'xxx'});


    function incrementCount() {
        // count 상태값을 2번 증가시키려고 한다.
        setCount(count+1);
        setCount(count+1);
    }

    function incrementCount2() {
        // incrementCount() 의 문제를 아래와 같이 해결이 가능
        setCount2(prevState => prevState + 1);
        setCount2(prevState => prevState + 1);
    }

    useEffect(()=>{
        console.log(`useEffect`);
        function onClick(){
            // count 상태값을 2번 증가시키려고 한다.
            console.log(`onClick call.. & count : ${count}`);
            setCount(count+1);
            setCount(count+1);
            // setCount(prevState => prevState +1);
        }
        // 이벤트 등록 및 처리 함수를 등록
        document.getElementById('target-click').addEventListener('click', onClick);
    },[]);

    console.log(`render app component..`);

    return (
        <div>
            react hooks
            <div>
                <p>
                    useState
                </p>
                <p>
                    {count}<br/>
                    <button onClick={()=> setCount(count + 1)}>1씩 값 증가</button>
                    <button onClick={incrementCount}>2씩 값 증가(배치)</button>
                    <button id="target-click">외부에서 값 증가 이벤트 처리</button>
                    <hr/>
                    {count2}<br/>
                    <button onClick={incrementCount2}>2씩 값 증가</button>
                </p>
            </div>
            <div>
                <p>
                    useEffect
                </p>
                <EffectComponent/>
            </div>
            <div style={{border: `1px dotted gray`, margin : `4px`, padding : `4px`}}>
                <p>
                    useMounted
                </p>
                <p>
                    {mounted ? `mounted` : `unmounted`}
                </p>
            </div>
            <div style={{border: `1px dotted gray`, margin : `4px`, padding : `4px`}}>
                <p>
                    useHook
                </p>
                <p>
                    {name} : {age}
                </p>
            </div>
            <div style={{border: `1px dotted gray`, margin : `4px`, padding : `4px`}}>
                <p>
                    useRef
                </p>
                <RefComponent/>
                <RefComponent2/>
            </div>
        </div>
    );
}
