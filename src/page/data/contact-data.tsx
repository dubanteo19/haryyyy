import { InstagramIcon } from "@/components/icons/instagram";
import { ZaloIcon } from "@/components/icons/zalo";
import type { ContactItem } from "@/type/contact-item";
import { Mail, PhoneIcon } from "lucide-react";

export const contactItems: ContactItem[] = [
  {
    id: 1,
    label: "@_bthaodiary",
    icon: <InstagramIcon className="text-pink-500 text-2xl" />,
    href: "https://instagram.com/_bthaodiary",
    borderColor: "border-pink-200",
  },
  {
    id: 2,
    label: "0372565697",
    icon: <ZaloIcon />,
    href: "https://zalo.me/0372565697",
    borderColor: "border-blue-200",
  },
  {
    id: 3,
    label: "bachthithao519",
    icon: <Mail className="text-yellow-500 text-2xl" />,
    href: "mailto:bachthithao519@gmail.com",
    borderColor: "border-yellow-200",
  },
  {
    id: 4,
    label: "+84 372 565 697",
    icon: <PhoneIcon className="text-green-500 text-2xl" />,
    href: "tel:+84372565697",
    borderColor: "border-green-200",
  },
];
