import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as MessageIcon } from "../../assets/icons/message.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profile.svg";
import { ReactComponent as MoreIcon } from "../../assets/icons/more.svg";

const Footer = () => {
  return (
    <>
      <div className="relative mt-auto flex w-full flex-row items-center justify-center gap-10 p-2.5">
        <HomeIcon />
        <SearchIcon />
        <MessageIcon />
        <ProfileIcon />
        <MoreIcon />
      </div>
    </>
  );
};

export default Footer;
