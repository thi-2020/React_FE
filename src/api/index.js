export const BASE_URI="http://13.235.134.196:8006"

export const REGISTER=              '/accounts/createuser/'                      //POST
export const LOGIN=                 '/login/'                                   //POST
// export const PROFILE=               '/profile/'                                 //GET  
export const SEND_INVITATION=        '/accounts/send_invitation/'               //POST  
export const INVITATION_LEFT=         '/accounts/get_invitations_left/'         //GET
export const FRIEND_REQUEST=          "/accounts/friend/requests/"              //GET
export const HANDLE_FR=               "/accounts/friend/handle_request/"        //POST
export const SEND_FR=                 "/accounts/friend/send_request/"
export const SEARCH=                  "/accounts/search"                        //POST  
export const MUTUAL_FRIENDS=          "/accounts/friend/mutual_connections/"  
export const PROFILE=                 "/accounts/get_profile_info/"             //GET
export const CREATE_POST=              "/posts/create_post/"
export const SELF_TIMELINE=             "/posts/self_time_line/"