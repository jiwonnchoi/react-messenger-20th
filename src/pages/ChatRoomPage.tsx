import { ReactComponent as StatusBar } from "../assets/images/status_bar.svg";
import { ReactComponent as HomeIndicator } from "../assets/images/home_indicator.svg";
import TopBar from "../components/ChatRoom/TopBar";
import Chattings from "../components/ChatRoom/Chattings";

const ChatRoomPage = () => {
  return (
    <>
      <div className="relative h-[812px] w-[375px] bg-white">
        <StatusBar />
        <TopBar />
        <div className="max-h-[615px] overflow-y-auto">
          <Chattings />
        </div>
        <HomeIndicator className="absolute bottom-0" />
      </div>
    </>
  );
};

export default ChatRoomPage;
