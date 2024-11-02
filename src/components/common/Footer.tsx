import { useLocation, useNavigate } from "react-router-dom";

// icons
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as MessageIcon } from "../../assets/icons/message.svg";
import { ReactComponent as MessageIconActive } from "../../assets/icons/message_active.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profile.svg";
import { ReactComponent as ProfileIconActive } from "../../assets/icons/profile_active.svg";
import { ReactComponent as MoreIcon } from "../../assets/icons/more.svg";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isChatListActive = location.pathname === "/chatlist";
  return (
    <>
      <div className="relative mt-auto flex w-full flex-row items-center justify-center gap-10 p-2.5 shadow-[0_-4px_20px_0_rgba(0,0,0,0.15)]">
        <HomeIcon />
        <SearchIcon />
        {isChatListActive ? (
          <MessageIconActive
            className="cursor-pointer"
            onClick={() => navigate("/chatlist")}
          />
        ) : (
          <MessageIcon
            className="cursor-pointer"
            onClick={() => navigate("/chatlist")}
          />
        )}
        {isChatListActive ? (
          <ProfileIcon
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
        ) : (
          <ProfileIconActive
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
        )}
        <MoreIcon />
      </div>
    </>
  );
};

export default Footer;
