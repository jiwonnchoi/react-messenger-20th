import { useEffect, useRef } from "react";

// recoil
import { useRecoilState } from "recoil";
import {
  emotionBoxState,
  selectedEmotionsState,
  selectedMessageState,
} from "../recoil/atom";

const useEmotionBox = (scrollRef: React.RefObject<HTMLDivElement>) => {
  const [selectedMessage, setSelectedMessage] =
    useRecoilState(selectedMessageState); // 감정을 달 메시지
  const [showEmotionBox, setShowEmotionBox] = useRecoilState(emotionBoxState); // 감정 박스 표시 상태
  const [selectedEmotions, setSelectedEmotions] = useRecoilState(
    selectedEmotionsState,
  ); // 메시지별 선택된 감정들
  const emotionBoxRef = useRef<HTMLDivElement | null>(null); // 감정 박스 ref

  // 길게 눌러서 감정 박스 표시
  const handleLongPress = (messageId: number, event: React.MouseEvent) => {
    event.persist(); // 선택한 객체의 비동기 이벤트 처리 (null값 방지)

    const timerId = setTimeout(() => {
      setSelectedMessage(messageId);
      setShowEmotionBox(true);

      // 감정 박스가 TopBar에 가려지지 않도록 자동 스크롤
      setTimeout(() => {
        if (emotionBoxRef.current && scrollRef.current) {
          const emotionBoxLocation =
            emotionBoxRef.current.getBoundingClientRect();
          const topBarHeight = 200;

          if (emotionBoxLocation.top < topBarHeight) {
            const offset = topBarHeight - emotionBoxLocation.top;
            scrollRef.current.scrollBy({ top: -offset, behavior: "smooth" });
          }
        }
      }, 0);
    }, 500);

    const handleMouseUp = () => {
      clearTimeout(timerId);
    };

    document.addEventListener("mouseup", handleMouseUp, { once: true });
  };

  return {
    handleLongPress,
    emotionBoxRef,
  };
};

export default useEmotionBox;
