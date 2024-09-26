import { useRef, useState } from "react";

import { ReactComponent as CameraIcon } from "../../assets/icons/camera.svg";
import { ReactComponent as MicIcon } from "../../assets/icons/mic.svg";
import { ReactComponent as PictureIcon } from "../../assets/icons/picture.svg";
import { ReactComponent as GIFIcon } from "../../assets/icons/gif.svg";
import { ReactComponent as SendButton } from "../../assets/icons/send_button.svg";

interface InputBoxProps {
  sendChat: (message: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ sendChat }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    if (inputText.trim() !== "") {
      sendChat(inputText); //입력한 메시지를 상위로 전달하기
      setInputText(""); // 입력값 초기화하기
      if (heightRef.current) {
        heightRef.current.style.height = "auto";
      }
    }
  };

  const heightRef = useRef<HTMLTextAreaElement>(null);

  const handleInputHeight = () => {
    if (heightRef.current) {
      heightRef.current.style.height = "auto";
      heightRef.current.style.height = heightRef.current.scrollHeight + "px";
    }
  };

  return (
    <div className="absolute bottom-[2.125rem] left-0 right-0 m-auto flex w-[22.25rem] flex-row items-center gap-[0.5625rem] rounded-[1.25rem] bg-Gray300 px-[0.3125rem] py-[0.25rem]">
      <CameraIcon className="h-[2rem] w-[2rem]" />
      <div
        onChange={handleInputHeight} // textarea 줄바꿈에 따른 자동 높이 조절
        className="flex w-[17.9375rem] flex-row items-center justify-between gap-[0.3rem]"
      >
        <textarea
          value={inputText}
          onChange={handleChange}
          ref={heightRef} // textarea에 ref 연결
          placeholder="Send a message"
          className="w-40 flex-grow resize-none bg-transparent caret-[#0584fe] outline-none"
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
            <SendButton onClick={handleSubmit} />
          )}
        </div>
      </div>
    </div>
  );
};

export default InputBox;
