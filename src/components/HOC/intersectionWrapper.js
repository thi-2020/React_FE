import React,{useState,useRef,useEffect} from 'react'


const IntersectionWrapper=WrapperComponent=>{

    const UpdatedComponent=(props)=>{
        const [element,setElement]=useState(null)
        const [isIntersecting,setIntersection]=useState(false)
        const observer = useRef(new IntersectionObserver((entries)=>{
            const first=entries[0]
            console.log("Observe: ",first)
            setIntersection(false)

            if(first.isIntersecting){
                // _intersection()
                setIntersection(true)
                console.log("HOC Intersection Observer: ")
            }
    
        },{threshold:0.25}))

        useEffect(()=>{
            console.log("Props here: ",props)
            const currentElement=element
            const currentObserver=observer.current
    
            if(currentElement){
                currentObserver.observe(currentElement)
            }
    
            return ()=>{
                if(currentElement){
                    currentObserver.unobserve(currentElement)
                    setIntersection(false)
                }
            }
        },[element])


        return(
            <WrapperComponent
                {...props}
                setElement={setElement}
                isIntersecting={isIntersecting}
            />
        )
    }

    return UpdatedComponent
}


export default IntersectionWrapper