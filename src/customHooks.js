import { useRef, useEffect } from "react"

export const useIsInit = ()=>{
    const mountRef = useRef(true);

    useEffect(()=>{
        mountRef.current = false
    },[])

    return mountRef.current;
}