export const BASE_URI="http://13.235.134.196:8006"

export const REGISTER=              '/accounts/createuser/'                      //POST
export const LOGIN=                 '/login/'                                   //POST
// export const PROFILE=               '/profile/'                                 //GET  
export const SEND_INVITATION=        '/accounts/send_invitation/'               //POST  
export const INVITATION_LEFT=         '/accounts/get_invitations_left/'         //GET
export const FRIEND_REQUEST=          "/accounts/connection/requests/"              //GET
export const HANDLE_FR=               "/accounts/connection/handle_request/"        //POST
export const SEND_FR=                 "/accounts/connection/send_request/"
export const SEARCH=                  "/accounts/search"                        //POST  
export const MUTUAL_FRIENDS=          "/accounts/connection/mutual_connections/"  
export const PROFILE=                 "/accounts/profile/get_profile_info/"             //GET
export const CREATE_POST=              "/posts/create_post/"
export const SELF_TIMELINE=             "/posts/self_time_line/"

//---------------SETTINGS-------
export const VISIBILITY_SETTING=        "/accounts/settings/visibility_options/"
export const UPDATE_VISIBILITY=         "/accounts/settings/update_visibility_settings/"
export const GET_VISIBILITY_SELECTED=   "/accounts/settings/get_visibility_settings/"

export const FOLLOWERS_LIST=            "/accounts/follow/follwers_list/"
export const FOLLOWING_LIST=            "/accounts/follow/follwing_list/"
export const CONNECTIONS=               "/accounts/connection/others_all_connections/"

export const CHANGE_PROFILE=            "/accounts/profile/update_profile_photo/"
export const CHANGE_COVER=              "/accounts/profile/update_cover_photo/"