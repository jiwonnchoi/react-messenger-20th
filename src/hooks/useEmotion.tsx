import { useEffect, useRef } from "react";

// recoil
import { useRecoilState } from "recoil";
import {
  emotionBoxState,
  selectedEmotionsState,
  selectedMessageState,
} from "../recoil/atom";

const useEmotion = () => {
  const [selectedMessage, setSelectedMessage] =
    useRecoilState(selectedMessageState); // 감정을 달 메시지
  const [showEmotionBox, setShowEmotionBox] = useRecoilState(emotionBoxState); // 감정 박스 표시 상태
  const [selectedEmotions, setSelectedEmotions] = useRecoilState(
    selectedEmotionsState,
  ); // 메시지별 선택된 감정들
  const emotionBoxRef = useRef<HTMLDivElement | null>(null);
  // 감정 박스 ref

  // 길게 눌러서 감정 박스 표시
  const handleLongPress = (messageId: number, event: React.MouseEvent) => {
    event.persist(); // 선택한 객체의 비동기 이벤트 처리 (null값 방지)

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
  }, [setShowEmotionBox]);

  return {
    handleLongPress,
    handleSelectEmotion,
    emotionBoxRef,
  };
};

export default useEmotion;
