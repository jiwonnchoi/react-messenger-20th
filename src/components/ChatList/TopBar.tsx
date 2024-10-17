import { ReactComponent as BackIcon } from "../../assets/icons/back.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";

const TopBar = () => {
  return (
    <>
      <span className="mb-[1.19rem] flex h-14 items-center justify-between px-5">
        <span className="flex h-[1.875rem] flex-row">
          <span className="flex items-center gap-[0.94rem]">
            <BackIcon />
            <span className="text-[1.5625rem] font-medium">jngynjng</span>
          </span>
          <ArrowIcon className="rotate-90 items-start" />
        </span>
        <EditIcon />
      </span>
    </>
  );
};

export default TopBar;
