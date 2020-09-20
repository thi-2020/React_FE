import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Button} from "rsuite"
import IntersectionWrapper from "../../HOC/intersectionWrapper"
import Item from "./Item"
export let Followers = (props) => {
    const {followers,setElement,loading}=props
    return (
        <div>
            {followers!=null && followers.results.map((item,index)=>{
                return(
                    <Item
                    name={item.full_name}
                    image={item.thumbnail}
                    />
                )              
            })}   

            <div className="text-center" ref={setElement} >
                <Button appearance="link" loading={loading} >Load More</Button>
            </div>       
        </div>
    )
}




const mapStateToProps = (state) => ({
    followers:state.ConnectionReducer.followers,
    loading:state.ConnectionReducer.loading
})

const mapDispatchToProps = ()=>{
    return{

    }
}


Followers=connect(mapStateToProps, mapDispatchToProps)(Followers)

export default IntersectionWrapper(Followers)
