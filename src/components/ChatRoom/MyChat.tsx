import { useEffect, useState } from "react";
import EmotionRemained from "./EmotionRemained";

interface MyChatProps {
  message: string;
  isLastChat: boolean;
  /*감정 관련 */
  selectedEmotion: number | null;
}

const MyChat: React.FC<MyChatProps> = ({
  message,
  isLastChat,
  selectedEmotion,
}) => {
  //const imageUrl = file ? URL.createObjectURL(file) : null;
  const isImageMessage = message.startsWith("data:image/");

  return (
    <>
      <span
        className={`mt-[0.3125rem] flex flex-row justify-end ${
          selectedEmotion ? "mb-2.5" : ""
        }`}
      >
        <div className="relative">
          {isImageMessage ? (
            <img
              src={message}
              alt="sent image"
              className={`ml-auto mr-2 mt-[0.3125rem] w-[10.0625rem] rounded-[1.25rem] ${isLastChat ? "mb-[0.3125rem]" : ""}`}
            />
          ) : (
            <div
              className={`ml-auto mr-2 mt-[0.3125rem] inline-flex max-w-[13.375rem] items-center break-all rounded-[1.25rem] bg-Gray500 px-2.5 py-2 text-[0.9375rem] tracking-tighter text-white ${isLastChat ? "mb-[0.3125rem]" : ""}`}
            >
              {message}
            </div>
          )}
          {selectedEmotion && (
            <>
              <div
                style={{
                  animationIterationCount: 1,
                }}
                className="absolute -bottom-1.5 z-[5] animate-bounce"
              >
                <EmotionRemained emotionId={selectedEmotion} isMine={true} />
              </div>
            </>
          )}
        </div>
      </span>
    </>
  );
};

export default MyChat;
