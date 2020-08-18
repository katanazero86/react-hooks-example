import React, {useReducer, useState, useRef} from 'react';
import ChildComponent from "./components/ChildComponent";
import PublicChildComponent from "./components/PublicChildComponent";
import UseLayoutEffectComponent from "./components/UseLayoutEffectComponent";


const INITIAL_STATE = {
    name: 'default',
    age: 0
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_NAME' :
            return {
                ...state,
                name: action.name
            };
        case 'SET_AGE' :
            return {
                ...state,
                age: action.age
            };
        default :
            return {
                ...state
            };
    }
}

const SET_NAME = 'SET_NAME';
const SET_AGE = 'SET_AGE';


// context API 생성
export const AppContext = React.createContext(null);

export default function App() {

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const publicChildComponentRef = useRef();

    return (
        <div style={{border: '1px dotted pink', padding: '4px'}}>
            <p>
                useReducer
            </p>
            <p>
                my name is {state.name}
            </p>
            <p>
                my age is {state.age}
            </p>
            <div>
                <button onClick={()=>dispatch({type : SET_NAME, name : '홍길동'})}>이름 변경</button>
                <button onClick={()=>dispatch({type : SET_AGE, age : 20})}>나이 변경</button>
            </div>
            <hr/>
            <div>
                <p>
                    context API 와 useReducer 훅을 이용하면, 상위 컴포넌트에서 깊은 하위컴포넌트에게 이벤트 처리 함수를 쉽게 전달이 가능<br/>
                    dispatch 함수는 값이 변하지 않는 특징이 있음(useCallback 훅을 이용하여 기억할 필요도 없음)
                </p>
                <AppContext.Provider value={dispatch}>
                    <ChildComponent/>
                </AppContext.Provider>
            </div>
            <div style={{border : '1px dotted red', padding : '4px'}}>
                <p>
                    useImperativeHandle
                </p>
                <PublicChildComponent publicChildComponentRef={publicChildComponentRef}/>
                <button onClick={() => publicChildComponentRef.current && publicChildComponentRef.current.addNumberValue()}>숫자 값 증가시키기</button>
                <button onClick={() => publicChildComponentRef.current && publicChildComponentRef.current.setNumberValue(0)}>숫자 값 초기화</button>
            </div>
            <div style={{border : '1px dotted blue', padding : '4px'}}>
                <UseLayoutEffectComponent/>
            </div>
        </div>
    );
}
