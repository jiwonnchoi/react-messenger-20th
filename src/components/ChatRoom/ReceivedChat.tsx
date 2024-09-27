import { useRecoilValue } from "recoil";
import EmotionBox from "./EmotionBox";
import EmotionRemained from "./EmotionRemained";
import { emotionBoxState } from "../../recoil/atom";
import useEmotionBox from "../../hooks/useEmotionBox";
import useHandleEmotionSelect from "../../hooks/useHandleEmotionSelect";

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
        className={`relative ${isSelected ? "z-20" : "z-0"} ${isLastChat ? "mb-[5px]" : ""}`}
      >
        {showEmotionBox && isSelected && (
          <div
            id="emotionBoxRef"
            ref={emotionBoxRef}
            className="absolute left-1/2 top-[-67px] z-[9999] -translate-x-1/2 transform"
          >
            <EmotionBox onSelectEmotion={selectEmotion} />
          </div>
        )}
        <span
          className={`mt-[5px] flex flex-row items-end ${
            selectedEmotion ? "mb-[10px]" : ""
          }`}
        >
          {isLastChat ? (
            <img
              className="h-[1.75rem] w-[1.75rem] rounded-full"
              src={require("../../assets/images/" + profileImg + ".svg")} //props로 넘겨온 상대경로는 깨짐
            />
          ) : (
            <div className="h-[1.75rem] w-[1.75rem]"></div>
          )}

          <div className="relative">
            <div className="ml-[0.5rem] mr-auto inline-flex max-w-[13.375rem] select-none items-center break-all rounded-[1.25rem] bg-Chat_BG px-[0.625rem] py-[0.5rem] text-[0.9375rem] tracking-tighter text-white">
              {message}
            </div>
            {/* {selectedEmotion && (
              <>
                <div className="relative bottom-[8px] left-[8px] z-[5]">
                  <EmotionRemained emotionId={selectedEmotion} />
                </div>
              </>
            )} */}
            {selectedEmotion && (
              <>
                <div className="absolute bottom-[-10px] left-[8px] z-[5]">
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
