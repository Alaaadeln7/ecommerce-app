import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaShieldAlt } from "react-icons/fa";
const services = [
  {
    id: 1,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
    icon: <FaShippingFast />,
  },
  {
    id: 2,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    icon: <RiCustomerService2Line />,
  },
  {
    id: 3,
    title: "MONEY BACK GUARANTEE",
    description: "We reurn money within 30 days",
    icon: <FaShieldAlt />,
  },
];

export default services;
