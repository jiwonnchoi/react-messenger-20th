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

      setTimeout(() => {
        if (emotionBoxRef.current && scrollRef.current) {
          const emotionBoxRect = emotionBoxRef.current.getBoundingClientRect();
          const topBarHeight = 100;
          const emotionBoxHeight = 64;

          // 감정 박스 상단이 TopBar보다 위에 있으면 스크롤을 조정
          if (emotionBoxRect.top < topBarHeight) {
            const offset = topBarHeight - emotionBoxRect.top;
            scrollRef.current.scrollBy({ top: -offset, behavior: "smooth" });
          }

          // 가장 상단이라 더 스크롤되지 않는 경우
          if (emotionBoxRect.top - emotionBoxHeight < topBarHeight) {
            emotionBoxRef.current.style.top = `${50}px`;
            //emotionBoxRef.current.style.top = `${topBarHeight}px`;
            //emotionBoxRef.current.style.position = "fixed";
          } else {
            // 원래 위치 복귀
            emotionBoxRef.current.style.top = "-67px";
            emotionBoxRef.current.style.position = "absolute";
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
