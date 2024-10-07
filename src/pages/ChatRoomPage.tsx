// components
import TopBar from "../components/ChatRoom/TopBar";
import Chattings from "../components/ChatRoom/Chattings";

// recoil
import { useRecoilValue } from "recoil";
import { emotionBoxState } from "../recoil/atom";

const ChatRoomPage = () => {
  const showEmotionBox = useRecoilValue(emotionBoxState); // 배경 블러처리를 위한 감정 박스 표시 상태

  return (
    <>
      <div className="relative h-[100%] w-[23.4375rem] bg-white">
        <TopBar />
        <div className="overflow-y-auto">
          <Chattings />
        </div>

        {showEmotionBox && ( // 블러 배경
          <div className="pointer-events-none absolute inset-0 z-10 bg-white bg-opacity-20 backdrop-blur-sm" />
        )}
      </div>
    </>
  );
};

export default ChatRoomPage;
