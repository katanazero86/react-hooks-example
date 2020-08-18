import {useState, useEffect} from 'react';

// 사용자 정보를 받는 단순한 커스텀 훅(API 통신과 연동해서 사용가능)
export default function useHook() {
    const [age, setAge] = useState(0);
    const [name, setName] = useState('야스');

    useEffect(()=>{
        setAge(23);
    },[]);


    return [name, age];

}