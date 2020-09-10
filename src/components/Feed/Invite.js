import React, { Component } from 'react'
import {MdShare} from "react-icons/all"
import {Input,Button} from "rsuite"
import {reduxForm,Field} from "redux-form"
import {connect} from "react-redux"
import InviteRow from "./InviteRow"
import * as action from "../../redux/actions/invite"


class Invite extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            field:[{index:1,email:""}],
            invitation:null           
        }
    }
    

    handleChange=(e)=>{
        if(['email'].includes(e.target.name)){
            let field=[...this.state.field]
            field[e.target.dataset.id][e.target.name]=e.target.value;
        }else {
            this.setState({[e.target.name]:e.target.value})
        }
    }

    addNewRow=(e)=>{
        let i=this.state.field.length
        const {field,invitation}=this.state
        if(invitation>0){
            this.setState((prevState)=>({
                field:[...prevState.field,{index:field[i-1].index+1,email:""}],
                invitation:this.state.invitation--
            }));
        }
      
    }

    handleSubmit=(e)=>{
        const {token,_sendInvitation}=this.props
        console.log("Data:",this.state.field)
        _sendInvitation(this.state.field,token)
        e.preventDefault();
        for(var i=0; i<this.state.field.length; i++){
            if(this.state.field[i].email===''){

            }
        }
    }

    clickOnDelete=(record)=>{
        const {field}=this.state
        console.log("Delete ID: ",record)
        console.log("Total Invitaition: ",this.state.field)
        this.setState({
            field:this.state.field.filter(r=> r.index!==record.index),
            invitation:this.state.invitation+1
        })
  

    }


    authentication=(value)=>{
        console.log("Login data: ",value)

    }

    renderInput=(props)=>{
        return(
            <div className="render-input">
            <Input {...props.input} size={props.size} placeholder={props.placeholder} name={props.name}
                     type={props.type}  value={props.value} disabled={props.disabled} />
                <p>{props.meta.touched?props.meta.error:""}</p>
            </div>
        )
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.invitation==null && this.props.NO_OF_INVITATION!=null){
            this.setState({invitation:this.props.NO_OF_INVITATION})
            console.log("Invitation Left: ",this.state.invitation)
        }
        if(prevState.invitation!==this.state.invitation){
            console.log("Invitation Left in state: ",this.state.invitation)
        }
        if(prevProps.data!=this.props.data){
            this.props._checkNoOfInvitation(this.props.token)
        }
    }
    componentDidMount(){
        const {_checkNoOfInvitation,token}=this.props
        _checkNoOfInvitation(token)
    }


    render(){
        const {handleSubmit,loading,data,NO_OF_INVITATION}=this.props
        const {field,invitation}=this.state
        return (
            <div className="row">
                <div className="col-md-12 col-sm-12">
                <div className="invite-box">
                <div className="heading-container">
                    <MdShare size={20} className="share-icon"/>
                     <h4>{invitation?`You can invite ${invitation-1} more people.`:"Invite"}</h4>
                </div>  
                <div className="invite-form">
                    <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                    <div className="pt-2 pb-2">
                            <InviteRow field={field} delete={this.clickOnDelete.bind(this)} data={data!=null?data.data:null} 
                                    noOfInvitation={invitation}
                            />
                        </div>
                        <div className="pt-2 pb-3 pt-3">
                        {invitation-1>0&&<Button appearance="ghost" onClick={this.addNewRow} block>Add One More</Button>}
                        </div>
                        <div  >
                        <Button appearance="primary" type="submit" block loading={loading} >Invite</Button>
                        </div>
                    </form>
                        
                </div>
            </div>
                </div>
                <div className="col-md-0 col-sm-12">
                    
                </div>
            </div>
    
        )
    }

}



const mapStateToProps=(state)=>{
    return{
       token:state.AuthReducer.token,
       loading:state.InviteReducer.loading,
       data:state.InviteReducer.data,
       token:state.AuthReducer.token,
       NO_OF_INVITATION:state.InviteReducer.NO_OF_INVITATION
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        _sendInvitation:(data,token)=>dispatch(action.invitationStart(data,token)),
        _checkNoOfInvitation:(token)=>dispatch(action.checkNoOfInvitationLeft(token))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Invite)