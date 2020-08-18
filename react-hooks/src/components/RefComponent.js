import React, {useEffect, useState, useRef} from "react";


function TextInput({inputRef}) {
    return (
        <input type='text' ref={inputRef}/>
    )
}

const TextInput2 = React.forwardRef((props, ref) => {
    return (
        <input type='text' ref={ref}/>
    )
});

export default function RefComponent() {

    const [inputText, setInputText] = useState('');

    const inputRef = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input type='text' ref={inputRef} onInput={(e) => setInputText(e.target.value)}/>
            <p>{inputText}</p>
            <TextInput inputRef={inputRef2}/>
            <button onClick={() => inputRef2.current.focus()}>포커스 이동</button>
            <br/>
            <TextInput2 ref={inputRef3}/>
            <button onClick={() => inputRef3.current.focus()}>포커스 이동</button>
        </div>
    )
}