import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

// components
import TopBar from "../components/ChatRoom/TopBar";
import Chattings from "../components/ChatRoom/Chattings";

// recoil
import { useRecoilValue } from "recoil";
import { emotionBoxState } from "../recoil/atom";

const ChatRoomPage = () => {
  const showEmotionBox = useRecoilValue(emotionBoxState); // 배경 블러처리를 위한 감정 박스 표시 상태
  const [height, setHeight] = useState(isMobile ? "100vh" : "733px"); // 모바일 뷰: 높이 맞춰서, 데스크탑 뷰: 전체 높이 812px 고정

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

        {showEmotionBox && ( // 블러 배경
          <div className="pointer-events-none absolute inset-0 z-10 bg-white bg-opacity-20 backdrop-blur-sm" />
        )}
      </div>
    </>
  );
};

export default ChatRoomPage;
