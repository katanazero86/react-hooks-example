import React from "react";

export default function UserInfo({name, age, updateUserInfo}) {

    console.log(`UserInfo Component rendered..`);

    return (
        <div>
            <p>
                {name} / {age}
            </p>
            <button onClick={() => updateUserInfo('변경이름', 30)}>고객정보변경</button>
        </div>
    )
}