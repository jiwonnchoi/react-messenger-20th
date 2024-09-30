import { useRef, useState } from "react";

// icons
import { ReactComponent as CameraIcon } from "../../assets/icons/camera.svg";
import { ReactComponent as MicIcon } from "../../assets/icons/mic.svg";
import { ReactComponent as PictureIcon } from "../../assets/icons/picture.svg";
import { ReactComponent as GIFIcon } from "../../assets/icons/gif.svg";
import { ReactComponent as SendButton } from "../../assets/icons/send_button.svg";

interface InputBoxProps {
  sendChat: (message: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ sendChat }) => {
  const [inputText, setInputText] = useState(""); // 입력한 텍스트
  const heightRef = useRef<HTMLTextAreaElement>(null); // 입력창 높이 지정

  // 입력 내용 반영
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  // 입력 내용 전송
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      sendChat(inputText);
      setInputText(""); // 입력창 내용 초기화
      if (heightRef.current) {
        heightRef.current.style.height = "auto"; // 전송 후 입력창 높이 초기화
      }
    }
  };

  // 입력 내용 엔터키로 전송 (shift + Enter로 줄바꿈 가능)
  const handleEnterSubmit = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // 입력창 높이 자동 조절
  const handleInputHeight = () => {
    if (heightRef.current) {
      heightRef.current.style.height = "auto"; // 기본 높이
      heightRef.current.style.height = heightRef.current.scrollHeight + "px"; // 줄바꿈 시 변화
    }
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 m-auto flex w-[22.25rem] flex-row items-center gap-[0.5625rem] rounded-[1.25rem] bg-Gray300 px-[0.3125rem] py-[0.25rem]">
      <CameraIcon className="h-[2rem] w-[2rem]" />
      <div
        onChange={handleInputHeight}
        className="flex w-[18.5rem] flex-row items-center justify-between gap-[0.3rem]"
      >
        <textarea
          value={inputText}
          onChange={handleChange}
          onKeyDown={handleEnterSubmit}
          ref={heightRef}
          placeholder="Send a message"
          className="w-40 flex-grow select-none resize-none bg-transparent caret-[#0584fe] outline-none"
          rows={1}
        />
        <div className="flex flex-row gap-[0.94rem]">
          {inputText.trim() === "" ? (
            <>
              <MicIcon />
              <PictureIcon />
              <GIFIcon />
            </>
          ) : (
            <SendButton
              onClick={handleSubmit}
              style={{ animationDuration: "0.3s", animationIterationCount: 1 }}
              className="animate__animated animate__slideInLeft cursor-pointer self-end"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default InputBox;
