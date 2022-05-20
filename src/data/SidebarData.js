import * as AiIcons from "react-icons/ai"
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as ImIcons from "react-icons/im";

export const sidebarItems = [
  {
    icon: <BsIcons.BsPeopleFill style={{marginRight: '10px'}}  size={30} />,
    text: "All Team Members",
    path: '/members'
  },
  {
    icon: <AiIcons.AiOutlineLineChart style={{marginRight: '10px'}}  size={30} />,
    text: "Wellness Stats",
    path: '/charts'
  },
  {
    icon: <AiIcons.AiFillPieChart style={{marginRight: '10px'}} size={30}/>,
    text: "Commonality Charts",
    path: '/commonality'
  },
  {
    icon: <FaIcons.FaMountain style={{marginRight: '10px'}} size={30}/>,
    text: "Inspiration",
    path: '/inspiration'
  },
]