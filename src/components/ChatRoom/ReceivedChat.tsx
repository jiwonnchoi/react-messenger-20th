import EmotionBox from "./EmotionBox";
import EmotionRemained from "./EmotionRemained";

interface ReceivedChatProps {
  message: string;
  profileImg: string;
  onMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void; // onMouseDown prop 추가
  showEmotionBox: boolean;
  handleSelectEmotion: (emotionId: number) => void;
  emotionBoxRef: React.RefObject<HTMLDivElement>;
  isSelected: boolean;
  selectedEmotion: number | null;
}

const ReceivedChat: React.FC<ReceivedChatProps> = ({
  message,
  profileImg,
  onMouseDown,
  showEmotionBox,
  handleSelectEmotion,
  emotionBoxRef,
  isSelected,
  selectedEmotion,
}) => {
  return (
    <>
      <div className={`relative ${isSelected ? "z-20" : "z-0"}`}>
        {showEmotionBox && (
          <div ref={emotionBoxRef} className="absolute top-[-67px]">
            <EmotionBox onSelectEmotion={handleSelectEmotion} />
          </div>
        )}
        <span
          onMouseDown={onMouseDown}
          className={`mt-[5px] flex flex-row items-end`}
        >
          <img
            className="h-[1.75rem] w-[1.75rem] rounded-full"
            src={require("../../assets/images/" + profileImg + ".svg")} //props로 넘겨온 상대경로는 깨짐
          />
          <div className="ml-[0.5rem] mr-auto inline-flex max-w-[13.375rem] items-center break-all rounded-[1.25rem] bg-Chat_BG px-[0.625rem] py-[0.5rem] text-[0.9375rem] tracking-tighter text-white">
            {message}
          </div>
        </span>
        {/* {selectedEmotion && <EmotionRemained emotionId={selectedEmotion} />} */}
        {selectedEmotion && (
          <div className="ml-[35px]">
            <EmotionRemained emotionId={selectedEmotion} />
          </div>
        )}
      </div>
    </>
  );
};

export default ReceivedChat;
