import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as MessageIcon } from "../../assets/icons/message.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profile.svg";
import { ReactComponent as MoreIcon } from "../../assets/icons/more.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative mt-auto flex w-full flex-row items-center justify-center gap-10 p-2.5 shadow-[0_-4px_20px_0_rgba(0,0,0,0.15)]">
        <HomeIcon />
        <SearchIcon />
        <MessageIcon
          className="cursor-pointer"
          onClick={() => navigate("/chatlist")}
        />
        <ProfileIcon className="cursor-pointer" onClick={() => navigate("/")} />
        <MoreIcon />
      </div>
    </>
  );
};

export default Footer;
