import {useState, useEffect} from 'react';

export default function useHook() {
    const [age, setAge] = useState(0);
    const [name, setName] = useState('야스');

    useEffect(()=>{
        setAge(23);
    },[]);


    return [name, age];

}