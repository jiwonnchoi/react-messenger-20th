import { ReactComponent as CameraIcon } from "../../assets/icons/camera.svg";
import { ReactComponent as MicIcon } from "../../assets/icons/mic.svg";
import { ReactComponent as PictureIcon } from "../../assets/icons/picture.svg";
import { ReactComponent as GIFIcon } from "../../assets/icons/gif.svg";

const InputBox = () => {
  return (
    <div className="bg-Gray300 absolute bottom-[2.125rem] left-0 right-0 m-auto flex w-[22.25rem] flex-row items-center gap-[0.5625rem] rounded-[1.25rem] px-[0.3125rem] py-[0.25rem]">
      <CameraIcon className="h-[2rem] w-[2rem]" />
      <div className="flex w-[17.9rem] flex-row items-center justify-between">
        <input placeholder="Send a message" className="w-40 caret-[#0584fe]" />
        <div className="flex flex-row gap-[0.94rem]">
          <MicIcon />
          <PictureIcon />
          <GIFIcon />
        </div>
      </div>
    </div>
  );
};

export default InputBox;
