import { BsWhatsapp } from "react-icons/bs";
import { FaSkype } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer
      className="flex items-center justify-center
      md:justify-between bg-slate-50/15
      min-w-full flex-col md:flex-row p-4"
    >
      <div className="flex flex-col items-center gap-2">
        <p className="text-muted-foreground text-[13px]">
          Thanks for visiting my site!
        </p>
        <p className="uppercase tracking-wider text-[14px]">
          &copy; 2024 Ajibade Adam
        </p>
      </div>

      <div className="flex flex-col items-center md:flex-row md:gap-1">
        <p className="text-[13px]">Connect with me:</p>
        <div className="flex items-center gap-3 text-[20px]">
          <a href="https://github.com/Adamson123">
            <GrGithub className="inline -translate-y-[1px]" />
          </a>
          <a href="https://wa.me/23407070677277">
            <BsWhatsapp />
          </a>
          <a href="https://join.skype.com/invite/AAa2nAIvdXpL">
            <FaSkype />
          </a>
          <a href="mailto:dapoajibade66@gmail.com">
            <SiGmail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
