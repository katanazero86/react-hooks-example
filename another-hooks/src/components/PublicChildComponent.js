import React,{useState, useImperativeHandle, useRef} from "react";

// ref 속성명을 사용하고 싶다면, React.forwardRef() 함수 사용하기
export default function PublicChildComponent({publicChildComponentRef}) {
    // App 컴포넌트에서 에서 ref 를 넘기지 않았다면 null 로 넘어와 에러가 일어나게 된다.

    const [number, setNumber] = useState(0);

    // 마치 함수형 컴포넌트를 클래스처럼 public / private 하게 사용가능하게 해준다.
    // 1번째 인자 : ref
    // 2번째 인자 : 외부로 공개할 함수(ref.current 로 접근)
    useImperativeHandle(publicChildComponentRef, () => {
        return {
            setNumberValue : (targetNumber) => setNumber(targetNumber),
            addNumberValue : () => setNumber(number + 1),
        }
    });

    return (
        <div>
            number is {number}
        </div>
    )
}
