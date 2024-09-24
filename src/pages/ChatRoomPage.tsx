import { ReactComponent as StatusBar } from "../assets/images/status_bar.svg";
import { ReactComponent as HomeIndicator } from "../assets/images/home_indicator.svg";
import TopBar from "../components/ChatRoom/TopBar";
import InputBox from "../components/ChatRoom/InputBox";

const ChatRoomPage = () => {
  return (
    <>
      <div className="relative h-[812px] w-[375px] bg-white">
        <StatusBar />
        <TopBar />
        <InputBox />
        <HomeIndicator className="absolute bottom-0" />
      </div>
    </>
  );
};

export default ChatRoomPage;
