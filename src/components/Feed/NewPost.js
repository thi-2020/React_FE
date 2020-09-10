import React, { useState ,useEffect} from 'react'
import {FiEdit} from "react-icons/all"
import {IconButton,Icon,Uploader,Button} from "rsuite"
import {CreatePost} from '../'
import {connect} from 'react-redux'
function NewPost(props) {
    const [show,setShow]=useState(false)
    const {data}=props

    useEffect(()=>{
    if(data!=null && data.success){
        setShow(false)
    }
    },data)
    return (
        <div className="newpost-card" onClick={()=>setShow(true)} >
            <div className="start-post">
                <div className="button-container">
                    <IconButton icon={<Icon icon="edit" size="3x"/>} placement="left" size="lg" block onClick={()=>setShow(true)} >
                        Start a Post
                    </IconButton>
                </div>
                
            </div>
            <div className="post-button-toolbar">
                <div className="row no-gutters">
                    <div className="col-4 col-sm-4 col-xs-4"> 
                    <div className="button-container-toolbar">
                    <IconButton icon={<Icon icon="camera" size="3x" id="camera" />} placement="left" size="lg" >
                        Photo
                    </IconButton>
                   
                    </div>
                 
                    </div>
                    <div className="col-4 col-sm-4 col-xs-5">
                    <div className="button-container-toolbar">
                    <IconButton icon={<Icon icon="frame" size="3x" id="frame" />} placement="left" size="lg" >
                        Write Article
                    </IconButton>
                    </div>        
                 </div>
                    <div className="col-4 col-sm-4 col-xs-3"> 
                    <div className="button-container-toolbar">
                    <IconButton icon={<Icon icon="more" size="3x" id="more"/>} placement="left" size="lg" >
                        More
                    </IconButton>
                    </div> 
                    </div>
                </div>
             </div>
             {show&&<CreatePost show={show} setShow={setShow} />}
        </div>
    )
}


const mapStateToProps=(state)=>{
    return {
        data:state.CreatePostReducer.data
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
    }
}





export default connect(mapStateToProps,mapDispatchToProps)(NewPost)