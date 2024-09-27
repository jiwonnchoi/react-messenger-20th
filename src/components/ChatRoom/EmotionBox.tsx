import heart from "../../assets/icons/emotion_heart.svg";
import joy from "../../assets/icons/emotion_joy.svg";
import surprise from "../../assets/icons/emotion_surprise.svg";
import tear from "../../assets/icons/emotion_tear.svg";
import angry from "../../assets/icons/emotion_angry.svg";
import thumbup from "../../assets/icons/emotion_thumbup.svg";
import plus from "../../assets/icons/emotion_add.svg";

interface EmotionBoxProps {
  onSelectEmotion: (emotionId: number) => void; // 선택된 감정을 처리하는 함수 prop
}

const EmotionBox: React.FC<EmotionBoxProps> = ({ onSelectEmotion }) => {
  const emotionList = [
    { id: 1, src: heart },
    { id: 2, src: joy },
    { id: 3, src: surprise },
    { id: 4, src: tear },
    { id: 5, src: angry },
    { id: 6, src: thumbup },
    { id: 7, src: plus },
  ];
  return (
    <>
      <div className="flex h-[4rem] w-[21rem] flex-col items-center rounded-[3.1875rem] bg-white px-[0.625rem] py-[0.3125rem] shadow-xl">
        <div className="text-[0.75rem] text-[#898A8D]">
          Tap and hold to super react
        </div>
        <span className="flex flex-row items-center gap-[0.8125rem]">
          {emotionList.map((item) => (
            <img
              key={item.id}
              src={item.src}
              onClick={() => onSelectEmotion(item.id)}
              className="cursor-pointer"
            />
          ))}
        </span>
      </div>
    </>
  );
};

export default EmotionBox;
