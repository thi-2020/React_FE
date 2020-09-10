import React from 'react'
import {images} from "../../../../constant"
import moment from 'moment'
import {Button,Icon} from "rsuite"
import {AiOutlineLike} from "react-icons/all"
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
                    <p>Himanshu Barmola</p>
                </div>
                <div className="time-box">
                    <p>{moment("20200831", "YYYYMMDD").fromNow()}</p>
                </div>
            </div>
            <div className="text-post-container">
                 <p>{props.content}</p>
            </div>
            <div className="photo-container">
            <img src={`${API.BASE_URI}${props.image}`} />
            </div>
            <div className="like-container pt-2">
                <p> <Icon icon="thumbs-o-up" size={16} /> {props.likes}<span> <Icon icon="commenting-o" size={16} /> {props.comments}</span></p>
                <p><Icon icon="share" size={16} /> 17</p>
            </div>
            <div className="action-container">
                <div>
                    <Button appearance="ghost" block >
                        <Icon icon="thumbs-o-up" /> Like
                    </Button>
                </div>
                <div>
                    <Button appearance="ghost" block >
                        <Icon icon="commenting-o" /> Comments
                    </Button>
                </div>
                <div>
                    <Button appearance="ghost" block >
                        <Icon icon="share" /> Share
                    </Button>
                </div>
            </div>
        </div>
    )
}
