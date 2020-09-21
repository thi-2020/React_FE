import React,{useState,useEffect} from 'react'
import Info from "./Info"
import {images} from "../../../constant"
import {Avatar,Modal,Button,Uploader,Icon} from "rsuite"
import {connect} from "react-redux"
import * as action from "../../../redux/actions/profile"
import * as API from "../../../api"
const {photos}=images
function Banner(props) {
    const [show,setShow]=useState(false)
    const [cover,setCover]=useState(false)
    const [fileInfo,setFile]=useState(null)
    const [fileObject,setFileObject]=useState(null)
    const [load,setLoad]=useState(0)
    const {loading,_changeProfile,profile,photo,_deletePhoto}=props
    const previewFile=(file,callback)=>{
        const reader= new FileReader()
        reader.onloadend=()=>{
            callback(reader.result)
            console.log("File Result: ",reader)
        };
        reader.readAsDataURL(file)
        setFileObject(file)

    }

    useEffect(()=>{
        if(photo){
            setCover(false);
            setShow(false)
            setFileObject(null)
        }
    },photo)


    const deletePhoto=(option,load)=>{
        _deletePhoto(option)
        setLoad(load)
    }

    const changeProfile=(option,load)=>{
        _changeProfile(fileObject,option)
        setLoad(load)
    }

    return (
        <div className="banner-desktop">
                <div className="banner-photo-box">
                <img src={`${API.BASE_URI}${profile!=null&&profile.cover_photo}`}  />
                <div className="coverBorder"></div>
                </div>
                <div className="avatar-box">
                <div className="profile-pic-box">

                <Avatar src={`${API.BASE_URI}${profile!=null&&profile.profile_photo}`}  circle />
                </div>
                <Info/>
                </div>
                <img src={photos.camera} className="camera-profile" onClick={()=>setShow(true)} />
                <img src={photos.camera} className="camera-cover" onClick={()=>setCover(true)} />

                <Modal show={show} onHide={()=>setShow(false)} >
                    <Modal.Header>
                        <Modal.Title>Change Profile Photo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Uploader listType="picture" fileListVisible={false}
                        onUpload={(file)=>{
                            previewFile(file.blobFile,value=>{
                                setFile(value)
                            })}}
                            block
                            style={{display:"flex",justifyContent:"center"}}
                        >
                        <button style={{height:150,width:150}}>
                       {fileInfo?
                       <img src={fileInfo} style={{height:150,width:150}} />:
                       <Icon icon="avatar" size="5x" />}
                        </button>
                        </Uploader>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button appearance="subtle" onClick={()=>setShow(false)} >Cancel</Button>
                        <Button appearance="ghost" color="red" onClick={()=>deletePhoto(1,1)} loading={loading && load==1} >Delete Photo</Button>
                        <Button appearance="primary" onClick={()=>changeProfile(1,2)}  loading={loading && load==2} >Upload</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={cover} onHide={()=>setCover(false)} >
                    <Modal.Header>
                        <Modal.Title>Change Cover Photo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Uploader listType="picture" fileListVisible={false}
                        onUpload={(file)=>{
                            previewFile(file.blobFile,value=>{
                                setFile(value)
                            })}}
                            block
                            style={{display:"flex",justifyContent:"center",width:"100%"}}
                        >
                        <button style={{height:150,width:"500px"}}>
                       {fileInfo?
                       <img src={fileInfo} style={{height:150,width:"500px"}} />:
                       <Icon icon="avatar" size="5x" />}
                        </button>
                        </Uploader>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button appearance="subtle" onClick={()=>setCover(false)} >Cancel</Button>
                        <Button appearance="ghost" color="red" onClick={()=>deletePhoto(2,1)} loading={loading && load==1} >Delete Photo</Button>
                        <Button appearance="primary" onClick={()=>changeProfile(2,2)}  loading={loading && load==2} >Upload</Button>
                    </Modal.Footer>
                </Modal>
        </div>
    )
}




const mapStateToProps=(state)=>{
    return{
        loading:state.ProfileReducer.loading,
        photo:state.ProfileReducer.photo
    }
}

const mapDisptachToProps=dispatch=>{
    return{
        _changeProfile:(data,option)=>dispatch(action.changeProfile(data,option)),
        _deletePhoto:(data)=>dispatch(action.deletePhoto(data))
    }
}


export default connect(mapStateToProps,mapDisptachToProps)(Banner)