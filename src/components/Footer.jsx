import { FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import Logo from "../micro_components/Logo";

const Footer = () => {
  return (
    <div className="flex flex-col gap-8 pt-10">
      <div className="flex justify-between">
        <Logo />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Minima
          sapiente voluptatibus odit reiciendis sint.
        </p>
      </div>
      <hr />
      <div className="flex justify-between items-center gap-40">
        <p>Copyright &copy; 2023 Codemasters.id | All Rights Reserved</p>
        <div className="flex gap-2">
          <FacebookLogo className="text-[#8170F2]" size={32} weight="fill" />
          <TwitterLogo className="text-[#8170F2]" size={32} weight="fill" />
          <InstagramLogo className="text-[#8170F2]" size={32} weight="fill" />
          <LinkedinLogo className="text-[#8170F2]" size={32} weight="fill" />
          <YoutubeLogo className="text-[#8170F2]" size={32} weight="fill" />
        </div>
      </div>
    </div>
  )
};

export default Footer;
