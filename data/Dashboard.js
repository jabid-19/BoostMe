import { AiOutlineBarChart, AiOutlineFileSync, AiOutlineTeam } from 'react-icons/ai'
import { BiCalendar, BiSearchAlt } from 'react-icons/bi'
import { BsChat, BsKanban } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { RiAccountPinBoxLine } from 'react-icons/ri'
export const tabsMenu = [
    {
      id: 1,
      title: 'Publishing',
      icons: false,
    },
    {
      id: 2,
      title: 'Analytics',
      icons: false,
    },
    {
      id: 3,
      title: 'Engagements',
      icons: false,
    },
    {
      id: 4,
      title: 'Start Page',
      icons: false,
    },
    {
      id: 5,
      title: 'Invite Your Team',
      icons: true,
      iconName: <AiOutlineTeam />,
    },
    {
      id: 6,
      title: 'Apps',
      icons: false,
    },
    {
      id: 7,
      title: 'Help',
      icons: false,
    },
    {
      id: 8,
      title: 'Email',
      icons: false,
    },
  ]
 export const Menus = [
    { title: 'Dashboard', icon: <AiOutlineBarChart size={20} /> },
    { title: 'Inbox', icon: <BsChat size={20} /> },
    { title: 'Accounts', gap: true, icon: <RiAccountPinBoxLine size={20} /> },
    { title: 'Schedule', icon: <BiCalendar size={20} /> },
    { title: 'Search', icon: <BiSearchAlt size={20} /> },
    { title: 'Analytics', icon: <BsKanban size={20} /> },
    { title: 'Files', gap: true, icon: <AiOutlineFileSync size={20} /> },
    { title: 'Settings', icon: <FiSettings size={20} /> },
  ]