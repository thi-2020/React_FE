import React, { useEffect,useState} from 'react'
import { connect } from 'react-redux'
import {SelectPicker,Button} from "rsuite"
import * as action from "../../redux/actions/settings"
export const Settings = (props) => {
    const {_settings,_visibility,_changeVisbility,loading,selected}=props
    const [visibility,setVisibility]=useState([])
    const [changedOption,setOption]=useState(null)
    useEffect(()=>{
    _settings()
    },[])

    useEffect(()=>{
        if(_visibility){
            let arr=[];
            for(let data in _visibility.types){
                let datas={
                    label:_visibility.types[data],
                    value:data
                }
                console.log("Datas: ",datas)
                arr.push(datas)
            }
            setVisibility(arr)
        }
        // if(selected){
        //     let ar=[]
        //     let data={
        //         label:selected.who_can_see_your_connection_list,
        //         value:6
        //     }
        //     ar.push(data)
        //     setOption(ar)
        // }
    },_visibility,selected)



    const changeVisibility=(a,b,c)=>{
        setOption(b)

    }

    const saveOption=()=>{
        let data={
            who_can_see_your_likes_and_comments:"everyone",
            who_can_see_your_connection_list:changedOption.label
        }

        _changeVisbility(data)
    }

    return (
        <div className="settings-page">
            <div className="container">
                <h4>Settings</h4>
                <div className="py-3">
                <p>Visibility Status</p>
                {visibility&&selected&&<SelectPicker data={visibility} searchable={false} style={{width:350}} cleanable={false} 
                placeholder={selected.who_can_see_your_connection_list}
                onSelect={(a,b,c)=>changeVisibility(a,b,c)} />}
            </div>
            <div>
                <Button appearance={changedOption!=null?"primary":"subtle"} loading={loading}
                onClick={saveOption} >Save</Button>
            </div>
            </div> 
          
        </div>
    )
}

const mapStateToProps = (state) => ({
    _visibility:state.SettingsReducer.visibility,
    loading:state.SettingsReducer.loading,
    selected:state.SettingsReducer.selected
})

const mapDispatchToProps = dispatch=>{
        return{
            _settings:()=>dispatch(action.handleVisibility()),
            _changeVisbility:()=>dispatch(action.changeVisibility()),
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
