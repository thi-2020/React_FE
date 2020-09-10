import React from 'react'
import * as action  from "../../../redux/actions/profile"
import {connect} from "react-redux"
import {Placeholder} from 'rsuite'

function Info(props) {
    const {profile}=props
    const {Paragraph}=Placeholder
    return (
        <>
       <div className="info-box">
    { profile!=null?<h3>{profile.full_name}</h3> :
        <Paragraph rows={3} active  className="placeholder" />
    }
        </div>
        </>
    )
}



const mapStateToProps=(state)=>{
    return{
       profile:state.ProfileReducer.data
    }
  }
  
  const mapDispatchToProps=(dispatch)=>{
    return{
     
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Info)