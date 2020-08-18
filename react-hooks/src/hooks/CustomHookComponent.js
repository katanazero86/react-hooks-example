import {useState, useEffect} from 'react';

// 창의 너비를 관리하는 커스텀 훅
export default function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(()=>{
       const onResize = () => setWidth(window.innerWidth);
       window.addEventListener('resize', onResize);
       return () => {
           window.removeEventListener('resize', onResize)
       }
    });
    
    return width;
}