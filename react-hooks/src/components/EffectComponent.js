import React, {useEffect} from 'react';

export default function EffectComponent() {


    // useEffect
    useEffect(()=> {
        console.log(`useEffect in EffectComponent`);
    });

    // useEffect
    useEffect(()=> {
        console.log(`useEffect in EffectComponent(first render)`);
    },[]);

    // useEffect
    useEffect(()=> {
        const onResize = () => console.log(`resize event`);
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        }
    },[]);

    return (
        <div>
            EffectComponent
        </div>
    )

}