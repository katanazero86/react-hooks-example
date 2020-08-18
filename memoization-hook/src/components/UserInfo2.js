import React from "react";

export default function UserInfo2({name, age, updateUserInfo}) {

    console.log(`UserInfo2 Component rendered..`);

    return (
        <div>
            <p>
                {name} / {age}
            </p>
            <button onClick={() => updateUserInfo('변경이름22', 50)}>고객정보변경2</button>
        </div>
    )
}