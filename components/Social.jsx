import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/CodePnut?tab=repositories" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/vl1296/" },
  { icon: <FaTwitter />, path: "https://x.com/markadrianvel" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
