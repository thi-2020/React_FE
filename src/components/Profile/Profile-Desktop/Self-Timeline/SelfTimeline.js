import React,{useEffect,useRef,useState} from 'react'
import Item from "./Item"
import {connect} from "react-redux"
import {Button} from "rsuite"
import * as action from "../../../../redux/actions/selfTimeline"
import * as post from "../../../../redux/actions/post"
import IntersectionWrapper from "../../../HOC/intersectionWrapper"
function SelfTimeline(props) {
    const {
        _fetchTimeline,
        data,
        _intersection,
        loading,
        setElement,
        isIntersecting,
        _likePost,
        _unlikePost,
        _createComment,
        _fetchComments,
        postLoading
    }=props
    const [timeline,setTimeline]=useState(null)


    useEffect(()=>{
        _fetchTimeline()
    },[])

   useEffect(()=>{
    if(data!=null){
        setTimeline(data)
        console.log("Data Intersectino: ",data)
        console.log("Child Component: ",props)
    }
   },[data])
   

   useEffect(()=>{
    console.log("Is Intersecting: ",isIntersecting)
    if(isIntersecting){
        _intersection()
    }
   },[isIntersecting])
    return (
        <div className="self-timeline-page">
            {timeline!=null && timeline.data.results.map((item,index)=>{return(
            <Item  
            thumbnail={item.thumbnail}
            name={item.full_name}
            // like_id={item.like_id}
            // comment_id={item.comment_id}
            is_comment_disabled={item.is_comment_disabled}
            likes={item.no_of_likes}
            comments={item.no_of_comments}
            content={item.content}
            image={item.image}
            timestamp={item.timestamp}
            postId={item.post_id}
            postType={item.post_type}
            isLiked={item.is_liked}
            isEdited={item.is_edited}
            loading={postLoading}
            key={index}
//----------------------Handle Functions----------
            likePost={_likePost}
            unlikePost={_unlikePost}
            createComment={_createComment}
            fetchComments={_fetchComments}
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
        loading:state.SelfTimelineReducer.loading,
        postLoading:state.PostReducer.loading
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        _fetchTimeline:()=>dispatch(action.fetchSelfTimeline()),
        _intersection:(data)=>dispatch(action.selfTimelineIntersection(data)),
        _likePost:(data)=>dispatch(post.handleLike(data)),
        _unlikePost:(data)=>dispatch(post.handleUnlike(data)),
        _createComment:(data)=>dispatch(post.handleCreateComment(data)),
        _fetchComments:(data)=>dispatch(post.handleFetchComments(data))

    }
}

SelfTimeline=connect(mapStateToProps,mapDispatchToProps)(SelfTimeline)

export default IntersectionWrapper(SelfTimeline)