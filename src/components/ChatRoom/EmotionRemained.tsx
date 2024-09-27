import heart from "../../assets/icons/emotion_heart.svg";
import joy from "../../assets/icons/emotion_joy.svg";
import surprise from "../../assets/icons/emotion_surprise.svg";
import tear from "../../assets/icons/emotion_tear.svg";
import angry from "../../assets/icons/emotion_angry.svg";
import thumbup from "../../assets/icons/emotion_thumbup.svg";
import plus from "../../assets/icons/emotion_add.svg";

interface EmotionRemainedProps {
  emotionId: number;
}

const EmotionRemained: React.FC<EmotionRemainedProps> = ({ emotionId }) => {
  const emotionList = [
    { id: 1, src: heart },
    { id: 2, src: joy },
    { id: 3, src: surprise },
    { id: 4, src: tear },
    { id: 5, src: angry },
    { id: 6, src: thumbup },
    { id: 7, src: plus },
  ];

  const emotionIcon = emotionList.find((emotion) => emotion.id === emotionId);

  return (
    <div className="h-[1.125rem] w-[1.375rem] rounded-[1.625rem] border border-solid border-white bg-Chat_BG px-[0.31rem] py-[0.19rem]">
      <img className="w-[0.75rem]" src={emotionIcon?.src} alt="emotion" />
    </div>
  );
};

export default EmotionRemained;
