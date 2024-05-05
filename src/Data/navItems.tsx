import {
  MdOutlineDashboardCustomize,
  MdOutlinePhonelinkRing,
} from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import {
  BsFacebook,
  BsFillQuestionSquareFill,
  BsInstagram,
} from "react-icons/bs";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";

export const navItems = [
  {
    icon: <MdOutlineDashboardCustomize color="#2f834f" />,
    link: "#features",
    name: "Features",
  },
  {
    icon: <FaMoneyCheckDollar color="#2f834f" />,
    link: "#pricing",
    name: "Pricing",
  },
  {
    icon: <BsFillQuestionSquareFill color="#2f834f" />,
    link: "#howtostart",
    name: "How To Start",
  },
  {
    icon: <FaRegHandshake color="#2f834f" />,
    link: "#whyus",
    name: "Why QBite",
  },
  {
    icon: <AiFillPhone color="#2f834f" />,
    link: "#contactus",
    name: "Contact Us",
  },
];

export const contactItems = [
  {
    icon: <MdOutlinePhonelinkRing />,
    link: "tel:00905388977939",
    name: "+90 538 897 79 39",
  },
  {
    icon: <AiOutlineMail />,
    link: "mailto:qbite.it@gmail.com",
    name: "qbite.it@gmail.com",
  },
  {
    icon: <BsFacebook />,
    // facebook link
    link: "facebooklink",
    name: "QBite",
  },
  {
    icon: <BsInstagram />,
    // instagram link
    link: "instagramlink",
    name: "@qbite01",
  },
];

export const sponsersItems = [
  {
    link: "burger-king",
    image: "/restaurants/burger-king.png",
    name: "Burger King",
  },
  {
    link: "kfc",
    image: "/restaurants/kfc.png",
    name: "KFC",
  },
  {
    link: "mac",
    image: "/restaurants/mac.png",
    name: "MAC",
  },
  {
    link: "starbucks",
    image: "/restaurants/starbucks.png",
    name: "Starbucks",
  },
  {
    link: "popeyes",
    image: "/restaurants/popeyes.png",
    name: "Popeyes",
  },
  {
    link: "pizza-hut",
    image: "/restaurants/pizza-hut.png",
    name: "Pizza Hut",
  },
];
