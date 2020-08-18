import React, {useState} from "react";
import Child3 from "./Child3";


const Child3Memo = React.memo(()=>{
   return (<Child3/>)
});


export default function Child2(props) {

    const [name, setName] = useState('zzzz');

    return (
        <div>
            <p>{props.msg} / {name}</p>
            <button onClick={() => setName('test')}>이름 변경</button>
            <Child3Memo/>
        </div>
    )
}