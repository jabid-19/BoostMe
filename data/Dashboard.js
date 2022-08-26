import {
  AiOutlineBarChart, AiOutlineCalendar, AiOutlineDollarCircle,
  AiOutlineFileAdd,
  AiOutlineFileSync,
  AiOutlineHome,
  AiOutlinePieChart, AiOutlineUnorderedList
} from 'react-icons/ai'
import { BiBuildings, BiCalendar, BiSearchAlt } from 'react-icons/bi'
import { BsChat, BsGraphUp, BsGrid, BsKanban } from 'react-icons/bs'
import { FaShopify } from 'react-icons/fa'
import { FiFacebook, FiInstagram, FiLinkedin, FiSettings, FiTwitter } from 'react-icons/fi'
import { RiAccountBoxLine, RiAccountPinBoxLine } from 'react-icons/ri'
export const tabsMenu = [
  {
    id: 1,
    title: 'Publishing',
    key: 'publishing',
    icons: false,
  },
  // {
  //   id: 2,
  //   title: 'Analytics',
  //   key: 'analytics',
  //   icons: false,
  // },
  // {
  //   id: 3,
  //   title: 'Engagements',
  //   key: 'engagements',
  //   icons: false,
  // },
  // {
  //   id: 4,
  //   title: 'Start Page',
  //   key: 'startPage',
  //   icons: false,
  // },
  // {
  //   id: 5,
  //   title: 'Invite Your Team',
  //   icons: true,
  //   key: 'inviteYourTeam',
  //   iconName: <AiOutlineTeam />,
  // },
  // {
  //   id: 6,
  //   title: 'Apps',
  //   key: 'apps',
  //   icons: false,
  // },
  // {
  //   id: 7,
  //   title: 'Help',
  //   key: 'help',
  //   icons: false,
  // },
  // {
  //   id: 8,
  //   title: 'Email',
  //   key: 'email',
  //   icons: false,
  // },
  {
    id: 9,
    title: 'Logout',
    key: 'logout',
    icons: false,
  }
]

export const Menus = {
  startPage: [
    { title: 'Dashboard', icon: <AiOutlineBarChart size={20} />, route: '/dashboard/startPage/' },
    { title: 'Inbox', icon: <BsChat size={20} />, route: '/dashboard/startPage/inbox' },
    {
      title: 'Accounts',
      gap: true,
      icon: <RiAccountPinBoxLine size={20} />,
      route: '/dashboard/startPage/accounts',
    },
    { title: 'Schedule', icon: <BiCalendar size={20} />, route: '/dashboard/startPage/schedule' },
    { title: 'Search', icon: <BiSearchAlt size={20} />, route: '/dashboard/startPage/search' },
    { title: 'Analytics', icon: <BsKanban size={20} />, route: '/dashboard/startPage/analytics' },
    {
      title: 'Files',
      gap: true,
      icon: <AiOutlineFileSync size={20} />,
      route: '/dashboard/startPage/files',
    },
    { title: 'Settings', icon: <FiSettings size={20} />, route: '/dashboard/startPage/settings' },
  ],
  analytics: [
    {
      title: 'Home',
      gap: true,
      icon: <AiOutlineHome size={20} />,
      route: '/dashboard/analytics/home',
    },
    { title: 'Facebook', icon: <FiFacebook size={20} />, route: '/dashboard/analytics/facebook' },
    {
      title: 'Instagram',
      icon: <FiInstagram size={20} />,
      route: '/dashboard/analytics/instagram',
    },
    { title: 'Twitter', icon: <FiTwitter size={20} />, route: '/dashboard/analytics/twitter' },
    { title: 'LinkedIn', icon: <FiLinkedin size={20} />, route: '/dashboard/analytics/linkedin' },
    { title: 'Shopify', icon: <FaShopify size={20} />, route: '/dashboard/analytics/shopify' },
    {
      title: 'Campaigns',
      gap: true,
      icon: <BsGraphUp size={20} />,
      route: '/dashboard/analytics/campaigns',
    },
    {
      title: 'Reports',
      icon: <AiOutlinePieChart size={20} />,
      route: '/dashboard/analytics/reports',
    },
  ],
  inviteYourTeam: [
    {
      title: 'Calender',
      icon: <BiCalendar size={20} />,
      route: '/dashboard/inviteYourTeam/calender',
    },
    {
      title: 'Campaign',
      icon: <BsGraphUp size={20} />,
      route: '/dashboard/inviteYourTeam/campaign',
    },
    {
      title: 'Queues',
      gap: true,
      icon: <AiOutlineUnorderedList size={20} />,
      route: '/dashboard/inviteYourTeam/queues',
    },
  ],
  email: [
    { title: 'Accounts', icon: <RiAccountBoxLine size={20} />, route: '/dashboard/email/accounts' },
    {
      title: 'Billing',
      icon: <AiOutlineDollarCircle size={20} />,
      route: '/dashboard/email/billing',
    },
    { title: 'Channels', icon: <BsGrid size={20} />, route: '/dashboard/email/channels' },
    {
      title: 'Organization',
      icon: <BiBuildings size={20} />,
      route: '/dashboard/email/organization',
    },
  ],
  publishing: [
    {
      title: 'Create Post',
      icon: <AiOutlineFileAdd size={20} />,
      route: '/dashboard/publishing/create-post',
      subSection: [
        {
          title: 'Create Now',
          icon: <BiBuildings size={20} />,
          route: '/dashboard/publishing/create-post/create',
        },
        // {
        //   title: 'Schedule Later',
        //   icon: <AiOutlineSchedule size={20} />,
        //   route: '/dashboard/publishing/create-post/schedule',
        // },
      ],
    },
    {
      title: 'Calendar',
      icon: <AiOutlineCalendar size={20} />,
      route: '/dashboard/publishing/calendar',
    },
  ],
}
