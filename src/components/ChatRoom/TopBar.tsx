// icons
import { ReactComponent as ProfileCircle } from "../../assets/icons/ellipse.svg";
import { ReactComponent as BackIcon } from "../../assets/icons/back.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { ReactComponent as VideoIcon } from "../../assets/icons/videocam.svg";

// recoil
import { userState } from "../../recoil/atom";
import { useRecoilState } from "recoil";
import { userInterface } from "../../types/interface";

const TopBar = () => {
  const [users, setUsers] = useRecoilState<{
    me: userInterface;
    other: userInterface;
  }>(userState);

  // 유저 전환
  const handleChangeUser = () => {
    setUsers((prevState) => ({
      me: prevState.other,
      other: prevState.me,
    }));
  };

  return (
    <>
      <div className="flex h-14 flex-row items-center px-6">
        <BackIcon className="mr-[1.19rem] h-6 w-6" />
        <span className="flex w-60 justify-between">
          <div className="flex flex-row items-center">
            <div className="relative mr-[0.63rem]">
              <img
                src={require(
                  "../../assets/images/" + users.other.profileImg + ".svg",
                )}
                className="h-10 w-10 rounded-full border-[0.5px] border-Gray500"
              />
              <ProfileCircle className="absolute -left-1 -top-1" />
            </div>
            <span
              className="mr-[0.62rem] cursor-pointer"
              onClick={handleChangeUser}
            >
              <div className="text-[1.125rem] font-[590] leading-5 tracking-tighter">
                {users.other.userName}
              </div>
              <div className="text-xs font-[274]">{users.other.userId}</div>
            </span>
            <ArrowIcon className="h-4 w-4 self-start" />
          </div>
        </span>
        <span className="flex flex-row gap-[0.94rem]">
          <PhoneIcon />
          <VideoIcon />
        </span>
      </div>
      <hr className="mt-[0.62rem] border-t border-[#b6b6b6]" />
    </>
  );
};

export default TopBar;
