import { Car, HomeIcon, Hotel, InfoIcon, MapPin } from "lucide-react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsSnapchat,
  BsTiktok,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";

export const navLinks = [
  {
    name: "الرئيسية",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "الفنادق",
    href: "/hotels",
    icon: Hotel,
  },
  {
    name: "الوجهات",
    href: "/destinations",
    icon: MapPin,
  },
  {
    name: "استأجر سيارة",
    href: "/car-rent",
    icon: Car,
  },
  {
    name: "معلومات",
    href: "/info",
    icon: InfoIcon,
  },
];

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/mwasalat.sa",
    icon: BsFacebook,
  },
  {
    name: "Twitter X",
    href: "https://twitter.com/mwasalat",
    icon: BsTwitterX,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/mwasalat",
    icon: BsInstagram,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/mwasalat.sa",
    icon: BsYoutube,
  },
  {
    name: "snapchat",
    href: "https://www.snapchat.com/mwasalat.sa",
    icon: BsSnapchat,
  },
  {
    name: "tiktok",
    href: "https://tiktok.com/mwasalat",
    icon: BsTiktok,
  },
  {
    name: "linkedin",
    href: "https://linkedin.com/mwasalat",
    icon: BsLinkedin,
  },
];
