import React,{useEffect} from 'react'
import Item from "./Item"
import {connect} from "react-redux"
import * as action from "../../../../redux/actions/selfTimeline"
function SelfTimeline(props) {
    const {_fetchTimeline,data}=props

    useEffect(()=>{
        _fetchTimeline()
    },[])

    return (
        <div className="self-timeline-page">
            {data!=null && data.data.results.map((item,index)=>{return(
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
            />
            )})}
        </div>
    )
}






const mapStateToProps=(state)=>{
    return {
        data:state.SelfTimelineReducer.data
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        _fetchTimeline:()=>dispatch(action.fetchSelfTimeline())
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(SelfTimeline)