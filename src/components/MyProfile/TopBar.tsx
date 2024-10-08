import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";

const TopBar = () => {
  return (
    <>
      <div className="flex h-14 w-full flex-row items-center justify-between py-2.5 pl-[1.125rem] pr-2.5">
        <span className="flex flex-row">
          <div className="mr-[0.19rem] text-xl font-medium">jngynjng</div>
          <ArrowIcon className="rotate-90" />
        </span>
        <span className="mr-2.5 flex gap-[0.94rem]">
          <PlusIcon />
          <MenuIcon />
        </span>
      </div>
    </>
  );
};

export default TopBar;
