import {useEffect, useState} from 'react';

// 컴포넌트가 렌더링 결과가 실제 DOM 에 반영된(mounted) 상태인지 검사
export default function useMounted() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        console.log('-- useEffect in useMounted --');
        setMounted(true);
    }, []);

    return mounted;
}