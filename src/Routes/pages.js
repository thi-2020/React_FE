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
  NewPost,
  MainLayoutDesktop,
  Settings,
  Connection
} from "../components/index"
import {NormalLayout} from "../components/Layout"



const _AuthenticatedPages = [
    {
      pageLink: '/feed',
      view: NewPost,
      displayName: 'Feed',
      isMobile:false,
      layout:MainLayoutDesktop,
    },
    {
      pageLink: '/invite',
      view: Invite,
      displayName: 'Invite',
      isMobile:false,
      layout:MainLayoutDesktop,

    },
    {
      pageLink: '/friend-request',
      view: FriendRequestMobile,
      displayName: 'Friend Request',
      isMobile:true,
      layout:MainLayoutDesktop,

    },
    {
      pageLink: '/friend-request',
      view: FriendRequestDesktop,
      displayName: 'Friend Request',
      isMobile:false,
      layout:MainLayoutDesktop,

    },
    {
      pageLink: '/mobile-search',
      view: MobileSearch,
      displayName: 'Mobile Search',
      isMobile:true,
      layout:MainLayoutDesktop,

    },
    {
      pageLink: '/search',
      view: SearchDesktop,
      displayName: 'Search Desktop',
      isMobile:false,
      layout:MainLayoutDesktop,

    },
    {
      pageLink: '/profile',
      view: Profile,
      displayName: 'Profile',
      isMobile:true,
      layout:NormalLayout,

    },
    {
      pageLink: '/profile',
      view: ProfileDesktop,
      displayName: 'Profile',
      isMobile:false,
      layout:NormalLayout,

    },
    {
      pageLink: '/settings',
      view: Settings,
      displayName: 'Settings',
      isMobile:false,
      layout:NormalLayout,

    },
    {
      pageLink: '/connection',
      view: Connection,
      displayName: 'Connection',
      isMobile:false,
      layout:NormalLayout,

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