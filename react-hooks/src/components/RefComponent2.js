import React, {useState, useCallback, useRef, useEffect} from "react";


const INIT_TEXT = 'HI';
const INIT_TEXT2 = 'HI2';

export default function RefComponent2() {

    const [text, setText] = useState(INIT_TEXT);
    const [text2, setText2] = useState(INIT_TEXT2);
    const [showText, setShowText] = useState(true);
    const prevText2Ref = useRef();

    useEffect(() => {
        // text2 값이 변경될때마다..
        prevText2Ref.current = text2;
    },[text2]);

    const setInitText = useCallback((ref) => ref && setText2(INIT_TEXT2), []); // 한번 생성된 함수를 계속 재사용 한다.
    const prevText2Value = prevText2Ref.current;

    return (
        <div>
            {showText && <div>
                <input type='text'
                       value={text}
                       onInput={(e) => setText(e.target.value)}
                       ref={(ref) => ref && setText(INIT_TEXT)}
                />

                <input type='text'
                       value={text2}
                       onChange={(e) => setText2(e.target.value)}
                       ref={setInitText}
                />
            </div>
            }
            <button onClick={() => setShowText(!showText)}>보이기/가리기</button>
            <p>
                {`text2 이전값 : ${prevText2Value}`}
            </p>
        </div>

    )
}