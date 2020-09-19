import React,{useEffect,useRef,useState} from 'react'
import Item from "./Item"
import {connect} from "react-redux"
import {Button} from "rsuite"
import * as action from "../../../../redux/actions/selfTimeline"
function SelfTimeline(props) {
    const {_fetchTimeline,data,_intersection,loading}=props
    const [element,setElement]=useState(null)
    const [timeline,setTimeline]=useState(null)
    const observer = useRef(new IntersectionObserver((entries)=>{
        const first=entries[0]
        console.log("Observe: ",first)
        if(first.isIntersecting){
            _intersection()
        }

    },{threshold:0.25}))

    useEffect(()=>{
        _fetchTimeline()
    },[])

   useEffect(()=>{
    if(data!=null){
        setTimeline(data)
        console.log("Data Intersectino: ",data)
    }
   },[data])
    useEffect(()=>{
        const currentElement=element
        const currentObserver=observer.current

        if(currentElement){
            currentObserver.observe(currentElement)
        }

        return ()=>{
            if(currentElement){
                currentObserver.unobserve(currentElement)
            }
        }
    },[element])

    return (
        <div className="self-timeline-page">
            {timeline!=null && timeline.data.results.map((item,index)=>{return(
            <Item  
            thumbnail={item.thumbnail}
            name={item.full_name}
            like_id={item.like_id}
            comment_id={item.comment_id}
            is_edited={item.is_edited}
            is_comment_disabled={item.is_comment_disabled}
            likes={item.no_of_likes}
            comments={item.no_of_comments}
            content={item.content}
            image={item.image}
            timestamp={item.timestamp}
            key={index}
            />
            )})}
            <div className="text-center" ref={setElement} >
                <Button appearance="link" onClick={()=>_intersection()}  loading={loading} >Load More</Button>
            </div>
        </div>
    )
}






const mapStateToProps=(state)=>{
    return {
        data:state.SelfTimelineReducer.data,
        loading:state.SelfTimelineReducer.loading
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        _fetchTimeline:()=>dispatch(action.fetchSelfTimeline()),
        _intersection:(data)=>dispatch(action.selfTimelineIntersection(data))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(SelfTimeline)