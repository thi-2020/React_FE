import React,{useState,useEffect} from 'react'
import {connect} from "react-redux"
import {images} from "../../constant"
import {GoHome,BsBell,FaUserFriends,AiOutlineMessage} from "react-icons/all"
import {Icon,InputGroup,Input,Avatar,Badge} from 'rsuite'
import * as action from "../../redux/actions/auth"
import * as frndReq from "../../redux/actions/friendRequest"
import * as search from "../../redux/actions/search"
import history from "../../helpers/History"
import Search from './Search'
import HeaderWrapper from "../HOC/headerWrapper"

const {logo}=images
function Header(props) {
// const location=useLocation()
    // const {pages,isAuthenticated,_Logout,fR,_fetchFriendRequest,_globalSearch,search}=props
    const {pages,_Logout,fR,_fetchFriendRequest,_globalSearch,search,searchFriend,setSearch,searchInput}=props
    const [active,setActive]=React.useState([true,false,false,false,false])
    // const [searchInput,setSearch]=useState(false)
    const activeClass=active.slice()



    const activeClassIndex=(index)=>{
      if(active[index]!=true){
       const activeClass= active.map((item,index)=>active[index]=false)
       activeClass[index]=true
          setActive(activeClass)
          
      }         
  }

  // useEffect(()=>{
  //   if(isAuthenticated){
  //     _fetchFriendRequest()
  //   }
  // },fR)


  // const searchFriend=(value)=>{
  //   setSearch(true)
  //   if(value.length>0){
  //     _globalSearch(value)
  //   }
  // }

const navigateSearch=()=>{
    history.push('/search')
    setSearch(false)
  }

    return (
      <div className="custom-navbar-page">
 <div className="custom-navbar">
          <div></div>

          <div className="logo-container">
            <img src={logo.LogoFull} className="logo" onClick={()=>history.push('/feed')} />
          </div>
          <div className="search-box">
          <InputGroup inside>
                <InputGroup.Button>
                <Icon icon="search" />
            </InputGroup.Button>
              <Input placeholder="Search Someone" onChange={(value)=>searchFriend(value)} onBlur={()=>setSearch(false)} onPressEnter={navigateSearch} block/>
            </InputGroup>
            {search!=null&&searchInput&&search.count>0&&<Search data={search.results} setSearch={setSearch} search={searchInput} />}
          </div>

          <div></div>

            <div className="nav-item-container">
                <div className={activeClass[0]?"nav-item-box-active":"nav-item-box"}
                onClick={()=>activeClassIndex(0)}
                >
                    <Badge className="badge" content={false} >
                    <GoHome size={25} className="nav-item-icon" onClick={()=>history.push('/feed')} />
                    </Badge>
                    <span className="nav-item-title">Home</span>
                </div>


                <div className={activeClass[1]?"nav-item-box-active":"nav-item-box"}
                onClick={()=>activeClassIndex(1)}  >
                  <Badge className="badge" content={fR!=null&&fR.count>0?fR.count:false} onClick={()=>history.push('/friend-request')} >
                  <FaUserFriends size={25} className="nav-item-icon" />
                  </Badge>
                    <span className="nav-item-title">My Network</span>
                </div>

                <div className={activeClass[2]?"nav-item-box-active":"nav-item-box"}
                onClick={()=>activeClassIndex(2)}>
                    <Badge className="badge" content={false} >
                    <AiOutlineMessage size={25} className="nav-item-icon" />
                    </Badge>

                    <span className="nav-item-title">Messages</span>
                </div>
                <div className={activeClass[3]?"nav-item-box-active":"nav-item-box"}
                onClick={()=>activeClassIndex(3)}>
                  <Badge className="badge" content={false}>
                    <BsBell size={25} className="nav-item-icon" />
                    </Badge>
                    <span className="nav-item-title">Notifications</span>
                </div>
                <div className="nav-item-box">
                   <Avatar size="md" className="avatar" onClick={()=>history.push('/profile')} circle>HB</Avatar>
                </div>
            </div>
        </div>
      </div>
       
    )
}





const mapStateToProps=(state)=>{
  return{
     isAuthenticated:state.AuthReducer.isAuthenticated,
     fR:state.FriendRequestReducer.data,
     search:state.SearchReducer.data
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    _Logout:()=>dispatch(action.authTokenRemoveStart()),
    _fetchFriendRequest:()=>dispatch(frndReq.fetchFriendRequest()),
    _globalSearch:(value)=>dispatch(search.globalSearch(value))
  }
}
Header=connect(mapStateToProps,mapDispatchToProps)(Header)

// export default connect(mapStateToProps,mapDispatchToProps)(Header)
export default HeaderWrapper(Header)