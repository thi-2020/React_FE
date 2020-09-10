import {Login, 
  Register, 
  Feed, 
  Invite,
  FriendRequestMobile,
  FriendRequestDesktop,
  MobileSearch,
  SearchDesktop,
  Profile,
  ProfileDesktop,
  NewPost
} from "../components/index"



const _AuthenticatedPages = [
    {
      pageLink: '/feed',
      view: NewPost,
      displayName: 'Feed',
      showInNavbar: true,
      isMobile:false
    },
    {
      pageLink: '/invite',
      view: Invite,
      displayName: 'Invite',
      showInNavbar: true,
      isMobile:false
    },
    {
      pageLink: '/friend-request',
      view: FriendRequestMobile,
      displayName: 'Friend Request',
      showInNavbar: true,
      isMobile:true
    },
    {
      pageLink: '/friend-request',
      view: FriendRequestDesktop,
      displayName: 'Friend Request',
      showInNavbar: true,
      isMobile:false
    },
    {
      pageLink: '/mobile-search',
      view: MobileSearch,
      displayName: 'Mobile Search',
      showInNavbar: true,
      isMobile:true
    },
    {
      pageLink: '/search',
      view: SearchDesktop,
      displayName: 'Search Desktop',
      showInNavbar: true,
      isMobile:false
    },
    {
      pageLink: '/profile',
      view: Profile,
      displayName: 'Profile',
      showInNavbar: true,
      isMobile:true
    },
    {
      pageLink: '/profile',
      view: ProfileDesktop,
      displayName: 'Profile',
      showInNavbar: true,
      isMobile:false
    },
  ]


 const _PublicPages=[
      {
        pageLink: '/login',
        view: Login,
        displayName: 'Login',
        showInNavbar: true,
        isMobile:false,
      },
      {
        pageLink: '/signup',
        view: Register,
        displayName: 'Register',
        showInNavbar: true,
        isMobile:false
      },
  ]



  



  export {
      _AuthenticatedPages,
      _PublicPages
  }