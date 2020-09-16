import React from 'react'
import {Modal} from 'rsuite'
import {IconButton,Icon,Input,Button,Uploader,InputGroup} from "rsuite"
import {connect} from "react-redux"
import * as action from "../../redux/actions/createPost"

 function CreatePost(props) {
    const {show,setShows,_createPost,loading}=props
    const [fileInfo, setFileInfo] = React.useState(null);
    const [fileObject,setFileObject]=React.useState(null)
    const [content,setContent]=React.useState('')

    const previewFile=(file,callback)=>{
        const reader= new FileReader()
        reader.onloadend=()=>{
            callback(reader.result)
            console.log("File Result: ",reader)
        };
        reader.readAsDataURL(file)
        setFileObject(file)

    }

    const onCreatePost=()=>{
        let data={
            content:content,
            image:fileObject
        }
        _createPost(data)
    }

    const onClose=()=>{
        setShows(false)
        console.log("Show: ",show)
    }
    return (
        <div className="create-post-page" >
            <Modal show={show} onHide={setShows} size="sm"  dialogClassName="cp-modal" onExit={setShows} >
                <Modal.Header onHide={onClose}>
                    <Modal.Title>Create Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="start-post">
                <div className="button-container">
                    <InputGroup>
                    {fileInfo&&<InputGroup.Addon>
                    <img src={fileInfo} className="upload-photo" />
                    </InputGroup.Addon>}
                    <Input
                  placeholder="What's on your mind?"
                  componentClass="textarea"
                  rows={2}
                  block
                  onChange={(value)=>setContent(value)}
                  />
                    </InputGroup>
                 
                </div>
                
            </div>
            <div className="post-button-toolbar">
                <div className="row no-gutters">
                    <div className="col-6 col-sm-6 col-xs-12"> 
                    <div className="button-container-toolbar">
                    <Uploader block onUpload={(file)=>{
                        previewFile(file.blobFile,value=>{
                            setFileInfo(value)
                        })
                    }} >
                        <IconButton icon={<Icon icon="camera" size="3x" id="camera" />} placement="left" block size="lg" >
                        Photo
                    </IconButton>
                    </Uploader>
                    </div>
                 
                    </div>
                    <div className="col-6 col-sm-6 col-xs-12">
                    <div className="button-container-toolbar">
                    <IconButton icon={<Icon icon="frame" size="3x" id="frame" />} placement="left" block size="lg" >
                        Video
                    </IconButton>
                    </div>        
                 </div>
             
                </div>
                   {/* <img src={fileInfo} width="100%" height="100%" />  */}
             </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button appearance="primary" block size="lg" loading={loading} onClick={onCreatePost} >Create Post</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


const mapStateToProps=(state)=>{
    return{
       data:state.CreatePostReducer.data,
       loading:state.CreatePostReducer.loading
    }
  }
  
  const mapDispatchToProps=(dispatch)=>{
    return{
      _createPost:(data)=>dispatch(action.handleCreatePost(data))
    }
  }
  
  // export default connect(mapStateToProps,mapDispatchToProps)(Header)
  export default connect(mapStateToProps,mapDispatchToProps)(CreatePost)