import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Button} from "rsuite"
import IntersectionWrapper from "../../HOC/intersectionWrapper"
import Item from "./Item"
export let Following = (props) => {
    const {connections,setElement,loading}=props
    return (
        <div>
            {connections!=null && connections.results.map((item,index)=>{
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
    connections:state.ConnectionReducer.connections,
    loading:state.ConnectionReducer.loading
})

const mapDispatchToProps = ()=>{
    return{

    }
}


Following=connect(mapStateToProps, mapDispatchToProps)(Following)

export default IntersectionWrapper(Following)
