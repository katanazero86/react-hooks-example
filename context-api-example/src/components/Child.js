import React from "react";
import Child2 from "./Child2";


export default function Child(props) {
    return (
        <div>
            <p>{props.msg}</p>
            <Child2 msg={props.msg}/>
        </div>
    )
}