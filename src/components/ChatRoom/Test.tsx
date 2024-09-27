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

const Test: React.FC<ReceivedChatProps> = ({
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
        className={`relative ${isSelected ? "z-20" : "z-0"} ${isLastChat ? "mb-[5px]" : ""}`}
      >
        {showEmotionBox && isSelected && (
          <div
            id="emotionBoxRef"
            ref={emotionBoxRef}
            className="absolute top-[-67px]"
          >
            <EmotionBox onSelectEmotion={selectEmotion} />
          </div>
        )}
        <span
          onMouseDown={onMouseDown}
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

          <div className="ml-[0.5rem] mr-auto inline-flex max-w-[13.375rem] items-center break-all rounded-[1.25rem] bg-Chat_BG px-[0.625rem] py-[0.5rem] text-[0.9375rem] tracking-tighter text-white">
            {message}
          </div>
          {/* {selectedEmotion && (
            <>
              <div className="bottom-[2px]">
                <EmotionRemained emotionId={selectedEmotion} />
              </div>
            </>
          )} */}
        </span>
        {selectedEmotion && (
          <>
            <div className="relative bottom-[18px] left-[35px]">
              <EmotionRemained emotionId={selectedEmotion} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Test;
