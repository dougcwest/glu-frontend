import * as FaIcons from "react-icons/fa";
import * as ImIcons from "react-icons/im";

export const categoryItems = [
  {
    icon: <FaIcons.FaThumbsUp style={{marginRight: '10px'}}  size={30} />,
    text: "Leaders",
    path: '/categories/leaders'
  },
  {
    icon: <FaIcons.FaSmile style={{marginRight: '10px'}}  size={30} />,
    text: "Optimists",
    path: '/categories/optimists'
  },
  {
    icon: <FaIcons.FaHandHoldingHeart style={{marginRight: '10px'}}  size={30} />,
    text: "Encouragers",
    path: '/categories/encouragers'
  },
  {
    icon: <FaIcons.FaExclamationTriangle style={{marginRight: '10px'}}  size={30} />,
    text: "Needs Attention",
    path: '/categories/attention'
  },
  {
    icon: <ImIcons.ImFire style={{marginRight: '10px'}}  size={30} />,
    text: "Burnout Risk",
    path: '/categories/burnout'
  },
]