import React from 'react'
import {images} from "../../../constant"
import * as API from "../../../api"
export default function Item(props) {
    const {image,name}=props
    return (
        <div className="connection-item-page">
            <div className="grid-container">
                <img  src={`${API.BASE_URI}${image}`} />
                <div className="info-container">
                    <h4>{name}</h4>
                </div>
            </div>
        </div>
    )
}
