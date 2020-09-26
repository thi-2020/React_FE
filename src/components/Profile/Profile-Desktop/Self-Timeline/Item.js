import React,{useState,useEffect} from 'react'
import {images} from "../../../../constant"
import moment from 'moment'
import {Button,Icon,Input,InputGroup} from "rsuite"
import {AiOutlineLike,FiMoreHorizontal} from "react-icons/all"
import * as API from "../../../../api"
import {motion} from "framer-motion"
import { set } from 'lodash'
const {photos}=images
export default function Item(props) {
    const {likePost,loading,unlikePost,createComment,fetchComments}=props
    const [isComment,setIsComment]=useState(false)
    const [loader,setLoader]=useState(0)
    const [comment,setComment]=useState('')

    const likepost=()=>{
        setLoader(1)
        let data={
            post_id:props.postId,
            post_type:props.postType
        }

        likePost(data)
    }

    const unlikepost=()=>{
        let data={
            post_id:props.postId,
            post_type:props.postType
        }
        unlikePost(data)
    }

    const CreateComment=()=>{
        setLoader(2)
        let data={
            post_id:props.postId,
            post_type:props.postType,
            content:comment
        }
        createComment(data)
    }

    useEffect(()=>{
        if(!loading){
            setComment('')
        }
    },loading)

    const showComments=()=>{
        setLoader(3)
        let data={
            post_id:props.postId,
            post_type:props.postType
        }
        fetchComments(data)
        setIsComment((prev)=>!prev)
    }




    return (
        <div className="item-box">
            <div className="top-box" >
                <div className="avatar-box">
                <img src={`${API.BASE_URI}${props.thumbnail}`}   />
                </div>
                <div className="heading-box">
                    <p>{props.name}</p>
                </div>
                <div className="time-box">
                    <p>{moment(props.timestamp).startOf('second').fromNow()}</p>
                    <Button appearance="subtle" ><FiMoreHorizontal size={22} /></Button>
                </div>
            </div>
            <div className="text-post-container">
                 <p>{props.content}</p>
            </div>
            <div className="photo-container">
            <img src={`${API.BASE_URI}${props.image}`} />
            </div>
            <div className="like-container pt-2">
                <p> <Icon icon="thumbs-o-up" style={{fontSize:"22px"}} /> {props.likes}</p>
                <p><Icon icon="share" style={{fontSize:"22px"}}/> 17</p>
            </div>
            <div className="action-container">
                <div>
                    <Button appearance="subtle" block onClick={props.isLiked?unlikepost:likepost} loading={loading && loader==1} >
                        <Icon icon="thumbs-o-up" /> {props.isLiked?"Unlike":"Like"}
                    </Button>
                </div>
                <div>
                    <Button appearance="subtle" block onClick={()=>showComments()} >
                        <Icon icon="commenting-o" /> Comments
                    </Button>
                </div>
                <div>
                    <Button appearance="subtle" block >
                        <Icon icon="share" /> Share
                    </Button>
                </div>
            </div>
           {isComment&& <motion.div className="comment-box"
                initial={{height:0}}
                animate={{height:"100%"}}
            >
                    {/* Comments will come here */}
                <div className="comment-input-box">
                <div className="avatar-box">
                <img src={`${API.BASE_URI}${props.thumbnail}`}   />
                </div>
                <div className="input-box">
                <InputGroup>
                <Input block size="lg" placeholder="Write your Comment here" value={comment}
                onChange={(v)=>setComment(v)} onPressEnter={CreateComment} />
                <InputGroup.Button disabled={loader==2 && loading}  onClick={CreateComment} >
                <Icon  icon="send-o" />
                </InputGroup.Button>
                </InputGroup>
                </div>
                </div>
            </motion.div>}
        </div>
    )
}
