import { useEffect, useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { emotionBoxState } from "../recoil/atom";

const useEmotion = () => {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const [showEmotionBox, setShowEmotionBox] = useRecoilState(emotionBoxState);
  const emotionBoxRef = useRef<HTMLDivElement | null>(null);

  // 길게 눌러서 감정 박스 표시
  const handleLongPress = (messageId: number, event: React.MouseEvent) => {
    event.persist();

    const timerId = setTimeout(() => {
      setSelectedMessage(messageId);
      setShowEmotionBox(true);
    }, 500);

    const handleMouseUp = () => {
      clearTimeout(timerId);
    };

    document.addEventListener("mouseup", handleMouseUp, { once: true });
  };

  // 감정 선택
  const handleSelectEmotion = (emotionId: number) => {
    console.log("선택한 감정 ID:", emotionId);
    setShowEmotionBox(false);
  };

  // 감정 박스 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emotionBoxRef.current &&
        !emotionBoxRef.current.contains(event.target as Node)
      ) {
        setShowEmotionBox(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    selectedMessage,
    showEmotionBox,
    handleLongPress,
    handleSelectEmotion,
    emotionBoxRef,
  };
};

export default useEmotion;
