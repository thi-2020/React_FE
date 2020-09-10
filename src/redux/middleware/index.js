import {api} from "./_api"
import {postApi} from "./_postApi"
import {registerMdl} from "./_Register"
import {authMdl} from "./_Auth"
import {authApi} from "./_authApi"
import {invitationMdl} from "./_Invitation"
import {frndReqMdl} from "./_FriendRequest"
import {searchMdl} from "./_Search"
import {mututalMdl} from "./_MutualFriends"
import {profileMdl} from "./_Profile"
import {createPostMdl} from "./_CreatePost"
import {selfTimelineMdl} from "./_SelfTimeline"
export const Middleware=[
    authApi,
    postApi,
    api,
    ...registerMdl,
    ...authMdl,
    ...invitationMdl,
    ...frndReqMdl,
    ...searchMdl,
    ...mututalMdl,
    ...profileMdl,
    ...createPostMdl,
    ...selfTimelineMdl
]