import React,{useState,useEffect} from 'react'
import {Input,Button,HelpBlock,Message,IconButton,Icon} from "rsuite"
const InviteRow=(props)=> {

    const {field,data,noOfInvitation}=props
    const [invitationNumber,setInvitation]=useState(null)


    // useEffect(()=>{
    //    setInvitation(noOfInvitation) 
    // },noOfInvitation)

    const deleteRow=(val)=>{

        // if(invitationNumber>0){
        //     let number=invitationNumber
        //     number--
        //     setInvitation(number)
        // }
        var index = field.findIndex(item => item.index ===val);

        props.delete(val)
    }


    console.log("Invite Data: ",field)
    return (
        field.map((val,idx)=>{
            let email=`Email-${idx}`
            return(
                <div className={field[idx].index>1?"invite-row":""} >
                <div key={val.idx} className="input-container" >
                    <Input placeholder="Email" name="email" data-id={idx} id={email} block type="email" 
                     className={data!=null&&data[idx]!=undefined&&data[idx].is_error?"input-error":
                                data!=null&&data[idx]!=undefined&&data[idx].is_error==false?"input-success":""}
                                size="lg"
                                />

                      {data!=null&&data[idx]!=undefined&&data[idx].is_error&&<div><Message type="error" description={data[idx].error.email} /></div> }         
                      {data!=null&&data[idx]!=undefined&&!data[idx].is_error&&<div><Message type="success" description="Invitation Sent Successfully!" /></div>  }        
                </div> 
                <div className="delete-box">
                {field[idx].index>1&&
              <IconButton onClick={()=>deleteRow(val)} appearance="ghost"  icon={<Icon icon="trash2" />} color="red" circle />
              
            //   <Button appearance="ghost" size="sm" block onClick={()=>props.delete(val)} color="red" >Remove</Button>
              }
                </div>
          
            </div>
            )
        })
       
    )
}



export default InviteRow
