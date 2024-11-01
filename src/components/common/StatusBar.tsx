import { ReactComponent as Info } from "../../assets/icons/info.svg";

const StatusBar = () => {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();

  return (
    <div className="flex h-11 w-[23.4375rem] flex-row items-center justify-between bg-white">
      <span className="ml-4 mt-[0.4rem] w-[3.375rem] text-center text-[0.875rem] font-semibold">
        {hour}:{minute}
      </span>
      <Info className="w-[6.75rem]" />
    </div>
  );
};

export default StatusBar;
