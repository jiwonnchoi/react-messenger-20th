import { useNavigate } from "react-router-dom";
import { userInterface } from "../../types/interface";

interface FollowerProps {
  user: userInterface;
}
const Follower: React.FC<FollowerProps> = ({ user }) => {
  const navigate = useNavigate();

  return (
    <>
      <span className="flex w-full flex-row items-center justify-between px-4 py-[0.625rem]">
        <span className="flex flex-row gap-[1.2rem]">
          <img
            className="h-14 w-14 rounded-full"
            src={require("../../assets/images/" + user.profileImg + ".svg")}
          />
          <span className="flex flex-col justify-center">
            <div className="text-[0.8125rem] font-semibold">
              {user.userName}
            </div>
            <div className="text-[0.8125rem] text-Gray500">{user.userId}</div>
          </span>
        </span>
        <span
          onClick={() => navigate("/chatroom")}
          className="h-6 w-[4.4375rem] cursor-pointer rounded-[0.3125rem] bg-Gray200 px-[0.625rem] py-[0.3125rem] text-xs"
        >
          Message
        </span>
      </span>
    </>
  );
};

export default Follower;
