import { ReactComponent as StatusBar } from "../assets/images/status_bar.svg";
import { ReactComponent as HomeIndicator } from "../assets/images/home_indicator.svg";
import TopBar from "../components/ChatRoom/TopBar";
import Chattings from "../components/ChatRoom/Chattings";
import { useRecoilValue } from "recoil";
import { emotionBoxState } from "../recoil/atom";

const ChatRoomPage = () => {
  const showEmotionBox = useRecoilValue(emotionBoxState);

  return (
    <>
      <div className="relative h-[812px] w-[375px] bg-white">
        <StatusBar />
        <TopBar />
        <div className="overflow-y-auto">
          <Chattings />
        </div>
        <HomeIndicator className="absolute bottom-0" />

        {showEmotionBox && (
          <div className="pointer-events-none absolute inset-0 z-10 bg-white bg-opacity-20 backdrop-blur-sm" />
        )}
      </div>
    </>
  );
};

export default ChatRoomPage;
