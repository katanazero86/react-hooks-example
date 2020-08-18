import React, {useContext} from "react";

import {MyContext2} from '../App';

export default function Child4() {

    const myContext = useContext(MyContext2); // useContext 훅을 사용

    console.log('Child4 Component rendered..');

    return (
        <div>
            <p style={{padding : '4px', border : '1px dotted gray'}}>
                Child4 Component : {myContext}
            </p>
        </div>
    )
}