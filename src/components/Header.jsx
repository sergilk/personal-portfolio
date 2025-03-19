import ua from "/assets/icons/ua.svg";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";

const Header = () => {
  return (
    <header className="pt-[3.125rem]">
      <div className="item-card grid gap-0.5">
        <h2 className="text-title m-0">Serhii Liashko</h2>
        <div className="text-misc flex items-center">
          <GrLocation aria-label="Location icon" title="Location" />
          <p>Kyiv, Ukraine</p>
          <img
            className="ml-1 max-w-3 select-none"
            src={ua}
            width={12}
            height={12}
            alt="Ukrainian flag"
            title="Ukrainian flag"
            loading="lazy"
          />
        </div>
        <p className="text-normal">Front end development enjoyer</p>
        <div className="flex items-center gap-3 text-4xl">
          <a
            href="https://github.com/sergilk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            title="GitHub profile"
          >
            <FaGithub className="item-card item-hover p-1" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            title="LinkedIn profile"
          >
            <FaLinkedin className="item-card item-hover p-1" />
          </a>
          <a
            href="https://t.me/sergilko"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            title="Telegram"
          >
            <FaTelegramPlane className="item-card item-hover p-1" />
          </a>
          <a
            href="mailto:liashko.sergi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send an email"
            title="Send an email"
          >
            <HiOutlineMail className="item-card item-hover p-1" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
