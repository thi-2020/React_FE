import {combineReducers} from "redux"
import {persistReducer} from "redux-persist"
import storage from 'redux-persist/lib/storage'
import LoadingReducer from "./LoaderReducer"
import AuthReducer from "./authReducer"
import InviteReducer from "./inviteReducer"
import RegisterReducer from "./registerReducer"
import FriendRequestReducer from "./friendRequestReducer"
import SearchReducer from "./searchReducer"
import MutualFriendReducer from "./MutualFriendReducer"
import ProfileReducer from "./profileReducer"
import CreatePostReducer from "./_createPostReducer"
import SelfTimelineReducer from "./_selfTimelineReducer"
import SettingsReducer from "./settingsReducer"
import ConnectionReducer from "./connectionReducer"
import PostReducer from "./postReducer"
import {reducer as formReducer} from "redux-form"

const persistConfig={
    key:'root',
    storage,
    whitelist:[],
    blacklist:['AuthReducer','InviteReducer']
    // whitelist:['LoadingReducer']
}

const authConfig={
    key:'AuthReducer',
    storage,
    blacklist:['loading','error']
}



const Reducers = combineReducers({
    LoadingReducer,
    AuthReducer:persistReducer(authConfig,AuthReducer),
    InviteReducer,
    RegisterReducer,
    FriendRequestReducer,
    SearchReducer,
    MutualFriendReducer,
    ProfileReducer,
    CreatePostReducer,
    SelfTimelineReducer,
    SettingsReducer,
    ConnectionReducer,
    PostReducer,
    form:formReducer
})

export default persistReducer(persistConfig,Reducers)