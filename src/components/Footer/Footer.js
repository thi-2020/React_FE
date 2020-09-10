import React from 'react'
import {images} from "../../constant"
const {logo}=images





let Footer=()=>{
    

    return (
        <div className="footer-container">
            <div className="footer-box">
                <ul>
                    <li><img src={logo.LogoFull} className="footer-logo" /></li>
                    <li>User Agreement</li>
                    <li>Privacy Policy</li>
                    <li>Community Guidelines</li>
                    <li>Cookie Policy</li>
                    <li>Copyright Policy</li>
                    <li>Send Feedback</li>
                </ul>
            </div>
        </div>
    )
}




export default Footer