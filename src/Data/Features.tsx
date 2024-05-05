import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

export const features = [
  {
    id: "1",
    icon: <MdOutlineDashboardCustomize color="white" size={26} />,
    image: "url(/features/customizable.png)",
    title: "Customizable:",
    desc: "Customize your content, layout, and design to reflect your brand or personal style.",
  },
  {
    id: "2",
    icon: <BsFillCreditCardFill color="white" size={26} />,
    image: "url(/features/card.png)",
    title: "Easy Pay & Refund:",
    desc: "We make payments and refunds hassle-free and convenient for our users.",
  },
  {
    id: "3",
    icon: <AiFillStar color="white" size={26} />,
    image: "url(/features/star.png)",
    title: "Ease of Use:",
    desc: "Find what you need quickly and effortlessly, making your online journey enjoyable.",
  },
  {
    id: "4",
    icon: <FiUsers color="white" size={26} />,
    image: "url(/features/user.png)",
    title: "Simple User Interface:",
    desc: "Experience an engaging and visually appealing design that keeps you captivated.",
  },
];
