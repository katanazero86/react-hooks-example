import React, {useContext} from "react";
import {AppContext} from '../App';

export default function ChildComponent() {

    const dispatchContext = useContext(AppContext);

    return (
        <div>
            <p style={{margin : '0'}}>자식 컴포넌트</p>
            <button onClick={() => dispatchContext({type : 'SET_NAME', name : '둘리'})}>이름 변경</button>
            <button onClick={() => dispatchContext({type : 'SET_AGE', age : 100})}>나이 변경</button>
        </div>
    )
}
