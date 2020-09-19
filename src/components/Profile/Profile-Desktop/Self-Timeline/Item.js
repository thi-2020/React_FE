import React from 'react'
import {images} from "../../../../constant"
import moment from 'moment'
import {Button,Icon,Input} from "rsuite"
import {AiOutlineLike,FiMoreHorizontal} from "react-icons/all"
import * as API from "../../../../api"
const {photos}=images
export default function Item(props) {
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
                    <Button appearance="subtle" block >
                        <Icon icon="thumbs-o-up" /> Like
                    </Button>
                </div>
                <div>
                    <Button appearance="subtle" block >
                        <Icon icon="commenting-o" /> Comments
                    </Button>
                </div>
                <div>
                    <Button appearance="subtle" block >
                        <Icon icon="share" /> Share
                    </Button>
                </div>
            </div>
            <div className="comment-box">
                    {/* Comments will come here */}
                <div className="comment-input-box">
                <div className="avatar-box">
                <img src={`${API.BASE_URI}${props.thumbnail}`}   />
                </div>
                <div className="input-box">
                <Input block size="lg" placeholder="Write your Comment here" />
                </div>
                </div>
            </div>
        </div>
    )
}
