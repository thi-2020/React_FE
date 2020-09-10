import React from 'react'
import {Button} from "rsuite"
import * as API from "../../api/index"
export default function ShowInfoDesktop(props) {
    const {data}=props
    return (
        <div className="show-info-desktop">
           {data!=null?data.map((item,index)=>{return(
            <div className="show-info-box">
                <div className="box" >
            <img src={`${API.BASE_URI}${item.thumbnail}`} />
                </div>
                <div className="box">
                    <h3>{item.full_name}</h3>
                </div>
            </div>
           )}):<div></div>} 
        </div>
    )
}
