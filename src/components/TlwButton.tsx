import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface TLWButtonProps {
  button?: {
    label: string;
    link?: string;
  };
  icon?: any;
}

export default function TLWButton({ button, icon }: TLWButtonProps) {
  if (!button) return null;

  if (button.link) {
    return (
      <Link href={button.link} target="_blank">
        <button className="cursor-pointer bg-[#7F65CA] lg:mt-4 text-white px-8 py-3 rounded-xl hover:bg-[#5a4a9a] transition-colors duration-300">
          {button.label}
          {icon && <FontAwesomeIcon icon={icon} className="ml-3" />}
        </button>
      </Link>
    );
  } else {
    return (
      <button className="cursor-pointer bg-[#7F65CA] lg:mt-4 text-white px-8 py-3 rounded-xl hover:bg-[#5a4a9a] transition-colors duration-300">
        {button.label}
        {icon && <FontAwesomeIcon icon={icon} className="ml-3" />}
      </button>
    );
  }
}
