import { ReactComponent as ProfileImg } from "../../assets/images/profile_img.svg";
import { ReactComponent as ProfileCircle } from "../../assets/icons/ellipse.svg";
import { ReactComponent as BackIcon } from "../../assets/icons/back.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { ReactComponent as VideoIcon } from "../../assets/icons/videocam.svg";

const TopBar = () => {
  return (
    <>
      <div className="flex h-[3.5rem] flex-row items-center px-[1.25rem]">
        <BackIcon className="mr-[1.19rem] h-6 w-6" />
        <span className="flex w-[15rem] justify-between">
          <div className="flex flex-row items-center">
            <div className="relative mr-[0.63rem]">
              <ProfileImg className="border-Gray500 h-[2.5rem] w-[2.5rem] rounded-full border-[0.5px]" />
              <ProfileCircle className="absolute left-[-0.25rem] top-[-0.25rem]" />
            </div>
            <span className="mr-[0.62rem]">
              <div className="text-[1.125rem] font-[590] leading-5 tracking-tighter">
                장윤정
              </div>
              <div className="text-xs font-[274]">jngynjng</div>
            </span>
            <ArrowIcon className="h-4 w-4 self-start" />
          </div>
        </span>
        <span className="flex flex-row gap-[0.94rem]">
          <PhoneIcon />
          <VideoIcon />
        </span>
      </div>
      <hr className="my-[0.62rem] border-t border-[#b6b6b6]" />
    </>
  );
};

export default TopBar;
