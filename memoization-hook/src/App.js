import React, {useState, useMemo, useCallback} from 'react';
import UserInfo from "./components/UserInfo";
import UserInfo2 from "./components/UserInfo2";


const UserInfoMemo = React.memo((props) => {
    return (
        <UserInfo name={props.name} age={props.age} updateUserInfo={props.updateUserInfo}/>
    )
});

const UserInfoMemo2 = React.memo((props) => {
    return (
        <UserInfo2 name={props.name} age={props.age} updateUserInfo={props.updateUserInfo}/>
    )
});

export default function App() {

    const [number, setNumber] = useState(1);
    const [userInfo, setUserInfo] = useState({name: 'test', age: 20});

    const memoNumber = useMemo(() => number * 100, [number]);

    const updateUser = (targetName, targetAge) => {
        setUserInfo({
            name: targetName,
            age: targetAge
        });
    };

    const updateUserCallback = useCallback((targetName, targetAge) => updateUser(targetName, targetAge), [userInfo.name, userInfo.age]);


    return (
        <div>
            <div style={{boarder: '1px dotted skyblue', padding: '4px'}}>
                <h2>useMemo</h2>
                <p>
                    useMemo 훅은 계산량이 많은 함수의 반환값을 재활용하는 용도로 사용
                </p>
                <p>
                    {`memoNumber : ${memoNumber}`}
                </p>
                <button onClick={() => setNumber(number + 1)}>값 변경</button>
            </div>
            <div style={{boarder: '1px dotted skyblue', padding: '4px'}}>
                <h2>useCallback</h2>
                <p>
                    useCallback 훅은 리액트의 렌더링 성능을 위해 제공되는 훅
                </p>
                <p>
                    값 변경을 누르면, App 컴포넌트가 상태값이 변경되었기 때문에 re-rendering 된다.<br/>
                    UserInfo 컴포넌트를 React.memo 를 사용했는데, console 에 계속 렌더링 메세지가 출력이 된다. <br/>
                    이유는 App 컴포넌트가 re-rendering 되면서, updateUser 함수가 새로 생성이 되고 이를 속성값 변경이기 때문에 불필요한 렌더링이 발생된다.<br/>
                </p>
                <UserInfoMemo name={userInfo.name}
                              age={userInfo.age}
                              updateUserInfo={updateUser}/>
                <p>
                    useCallback() 훅을 이용하여 개선한 컴포넌트
                </p>
                <UserInfoMemo2 name={userInfo.name}
                               age={userInfo.age}
                               updateUserInfo={updateUserCallback}/>
            </div>
        </div>
    );
}
