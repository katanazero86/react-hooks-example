import {useEffect, useState} from 'react';

export default function useMounted() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        console.log('-- useEffect in useMounted --');
        setMounted(true);
    }, []);

    return mounted;
}