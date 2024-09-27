import TopBar from "../components/ChatRoom/TopBar";
import Chattings from "../components/ChatRoom/Chattings";
import { useRecoilValue } from "recoil";
import { emotionBoxState } from "../recoil/atom";

const ChatRoomPage = () => {
  const showEmotionBox = useRecoilValue(emotionBoxState);

  return (
    <>
      <div className="relative h-[733px] w-[375px] bg-white">
        <TopBar />
        <div className="overflow-y-auto">
          <Chattings />
        </div>

        {showEmotionBox && (
          <div className="pointer-events-none absolute inset-0 z-10 bg-white bg-opacity-20 backdrop-blur-sm" />
        )}
      </div>
    </>
  );
};

export default ChatRoomPage;
