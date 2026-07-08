import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const contactOptions = [
  {
    icon: MdOutlineEmail,
    title: "Email",
    value: "muaazazharbscs18@gmail.com",
    note: "Use the form below to send an email directly to my inbox.",
  },
  {
    icon: RiMessengerLine,
    title: "Messenger",
    value: "Muaaz Azhar",
    link: "https://m.me/Mianmuaaz.azhar",
    linkLabel: "Send A Message",
  },
  {
    icon: BsWhatsapp,
    title: "Whatsapp",
    value: "+92304-4****86",
    link: "https://wa.me/923044195086?text=Hi%20Muaaz%2C%20I%20visited%20your%20portfolio%20and%20I%27m%20interested%20in%20your%20development%20services.%20I%27d%20like%20to%20discuss%20my%20project%2C%20timeline%2C%20and%20budget.",
    linkLabel: "Send A Message",
  },
];

export { contactOptions };
