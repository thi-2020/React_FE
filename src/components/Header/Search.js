import React from 'react'
import * as API from "../../api/index"
import history from "../../helpers/History"
export default function Search(props) {
    const {data,search,setSearch}=props

    const navigateSearch=()=>{
        history.push('/search')
        setSearch(false)
    }

    return (
        <div className="global-search-box">
            {search&&data.map((item,index)=>{return(
                <div className="global-search-item" onClick={navigateSearch} >
                    <img  src={`${API.BASE_URI}${item.thumbnail}`}  />
                    <h4>{item.full_name}</h4>
                </div>
            )})}
         
        </div>
    )
}
