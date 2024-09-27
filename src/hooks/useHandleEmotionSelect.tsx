import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  emotionBoxState,
  selectedEmotionsState,
  selectedMessageState,
} from "../recoil/atom";

const useHandleEmotionSelect = () => {
  const [selectedMessage, setSelectedMessage] =
    useRecoilState(selectedMessageState);
  const [selectedEmotions, setSelectedEmotions] = useRecoilState(
    selectedEmotionsState,
  );
  const [showEmotionBox, setShowEmotionBox] = useRecoilState(emotionBoxState);

  // 감정 선택
  const selectEmotion = (emotionId: number) => {
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
      const emotionBoxRef =
        document.querySelector<HTMLDivElement>("#emotionBoxRef");

      if (emotionBoxRef && !emotionBoxRef.contains(event.target as Node)) {
        setShowEmotionBox(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowEmotionBox]);

  return {
    selectEmotion,
  };
};

export default useHandleEmotionSelect;
