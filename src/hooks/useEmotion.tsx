import { useEffect, useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { emotionBoxState } from "../recoil/atom";

const useEmotion = () => {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const [showEmotionBox, setShowEmotionBox] = useRecoilState(emotionBoxState);
  const emotionBoxRef = useRef<HTMLDivElement | null>(null);

  // 선택된 감정 저장
  // const [selectedEmotion, setSelectedEmotion] = useState<{
  //   messageId: number;
  //   emotionId: number;
  // } | null>(null);
  const [selectedEmotions, setSelectedEmotions] = useState<{
    [key: number]: number;
  }>({});

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
    if (selectedMessage !== null) {
      setSelectedEmotions((prevEmotions) => {
        // 이미 선택된 감정이 동일한 경우 해제
        if (prevEmotions[selectedMessage] === emotionId) {
          const updatedEmotions = { ...prevEmotions };
          delete updatedEmotions[selectedMessage];
          return updatedEmotions;
        }

        return {
          ...prevEmotions,
          [selectedMessage]: emotionId,
        };
      });
      setShowEmotionBox(false);
    }
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
    selectedEmotions,
  };
};

export default useEmotion;
