// components
import EmotionBox from "./EmotionBox";
import EmotionRemained from "./EmotionRemained";

// recoil
import { useRecoilValue } from "recoil";
import { emotionBoxState } from "../../recoil/atom";

// hooks
import useHandleEmotionSelect from "../../hooks/useHandleEmotionSelect";

import "animate.css";

interface ReceivedChatProps {
  message: string;
  profileImg: string;
  isLastChat: boolean;
  /* 감정 달기 관련 */
  onMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  isSelected: boolean;
  selectedEmotion: number | null;
  emotionBoxRef: React.RefObject<HTMLDivElement>;
}

const ReceivedChat: React.FC<ReceivedChatProps> = ({
  message,
  profileImg,
  isLastChat,
  /*감정 달기 관련*/
  onMouseDown,
  isSelected,
  selectedEmotion,
  emotionBoxRef,
}) => {
  const showEmotionBox = useRecoilValue(emotionBoxState);
  const { selectEmotion } = useHandleEmotionSelect();

  return (
    <>
      <div
        onMouseDown={onMouseDown}
        className={`relative ${isSelected ? "z-20" : "z-0"} ${isLastChat ? "mb-[0.3125rem]" : ""}`}
      >
        {showEmotionBox && isSelected && (
          <div
            id="emotionBoxRef"
            ref={emotionBoxRef}
            style={{ animationDuration: "0.5s", animationIterationCount: 1 }}
            className="absolute top-[-4.1875rem] z-[9999] animate-pulse"
          >
            <EmotionBox onSelectEmotion={selectEmotion} />
          </div>
        )}
        <span
          className={`mt-[0.3125rem] flex flex-row items-end ${
            selectedEmotion ? "mb-2.5" : ""
          }`}
        >
          {isLastChat ? (
            <img
              className="h-7 w-7 rounded-full"
              src={require("../../assets/images/" + profileImg + ".svg")} //props로 넘겨온 상대경로는 깨짐
            />
          ) : (
            <div className="h-7 w-7"></div>
          )}

          <div className="relative">
            <div className="ml-2 mr-auto inline-flex max-w-[13.375rem] items-center break-all rounded-[1.25rem] bg-Chat_BG px-2.5 py-2 text-[0.9375rem] tracking-tighter text-white">
              {message}
            </div>
            {selectedEmotion && (
              <>
                <div
                  style={{
                    animationIterationCount: 1,
                  }}
                  className="absolute -bottom-2.5 left-2 z-[5] animate-bounce"
                >
                  <EmotionRemained emotionId={selectedEmotion} />
                </div>
              </>
            )}
          </div>
        </span>
      </div>
    </>
  );
};

export default ReceivedChat;
