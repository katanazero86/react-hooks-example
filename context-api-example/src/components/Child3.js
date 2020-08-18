import React from "react";

// context API
import {MyContext} from '../App.js';

export default function Child3() {

    console.log(`Child3 Component rendered..`);

    return (
        <MyContext.Consumer>
            {({msg, setMsg}) => {

                return (
                    <React.Fragment>
                        <p>{msg}</p>
                        <button onClick={() => setMsg('context 값을 수정했어요!')}>context 값 수정하기</button>
                    </React.Fragment>
                )

            }}
        </MyContext.Consumer>
    )
}