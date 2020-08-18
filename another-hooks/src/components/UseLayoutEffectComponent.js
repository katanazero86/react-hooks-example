import React,{useEffect, useLayoutEffect}from "react";

export default function UseLayoutEffectComponent() {

    // rendering 결과가 DOM 에 반영된 후 비동기로 호출
    // 일단 화면을 보여주고 실행
    useEffect(() => {
        // do side effects
        console.log(`useEffect hook..`);
        return () => {

        }
    }, []);

    // rendering 후, DOM 에 반영되기 전에 동기로 호출
    // 여기서 연산을 많이하면, 동기로 호출이 되기때문에 브라우저가 먹통이 되는 경우가 있으니 주의
    // rendering 후, 변화과 완료된 DOM 을 보여주기 때문에 DOM 조작시 오히려 더 적합
    // 모든 처리를 다 하고, 화면을 보여줌
    useLayoutEffect(() => {
        // do side effects
        console.log(`useLayoutEffect hook..`);
        return () => {

        }
    }, []);

    console.log(`UseLayoutEffectComponent render..`);

    return (
        <div>
            <p>
                useLayoutEffect
            </p>
            <p>
                콘솔창을 확인하면 <br/>
                UseLayoutEffectComponent render..<br/>
                useLayoutEffect hook....<br/>
                useEffect hook..<br/>
            </p>
        </div>
    )
}
