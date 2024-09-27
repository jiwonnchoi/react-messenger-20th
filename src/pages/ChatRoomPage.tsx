import { useState, useEffect } from "react";
import TopBar from "../components/ChatRoom/TopBar";
import Chattings from "../components/ChatRoom/Chattings";
import { useRecoilValue } from "recoil";
import { emotionBoxState } from "../recoil/atom";
import { isMobile } from "react-device-detect";

const ChatRoomPage = () => {
  const showEmotionBox = useRecoilValue(emotionBoxState);
  const [height, setHeight] = useState(isMobile ? "100vh" : "733px");

  useEffect(() => {
    const handleHeight = () => {
      setHeight(isMobile ? `${window.innerHeight}px` : "733px");
    };
    handleHeight(); // 처음 로드 시 높이 설정
    window.addEventListener("resize", handleHeight); // 창 크기 변경 시 높이 업데이트
    return () => {
      window.removeEventListener("resize", handleHeight);
    };
  }, []);

  return (
    <>
      <div className="relative w-[375px] bg-white" style={{ height }}>
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
