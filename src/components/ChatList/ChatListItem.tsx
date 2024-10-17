import { chattingInterface } from "../../types/interface";
import userData from "../../data/UserData.json";
import { ReactComponent as CameraIcon } from "../../assets/icons/camera_gray.svg";
import { useNavigate } from "react-router-dom";

interface ChatListItemProps {
  chatting: chattingInterface;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ chatting }) => {
  const followerId = chatting.users.filter((id) => id !== 0)[0];
  const follower = userData.users.filter((user) => user.id === followerId)[0];

  const lastMessage =
    chatting.chatList[chatting.chatList.length - 1]?.message ||
    "이전 대화가 없습니다";

  const navigate = useNavigate();

  return (
    <>
      <div className="flex w-full flex-row gap-2 py-2">
        <img
          className="h-14 w-14 flex-shrink-0 rounded-full"
          src={require("../../assets/images/" + follower.profileImg + ".svg")}
        />
        <span className="flex w-full flex-row items-center justify-between gap-[1.88rem]">
          <span
            onClick={() => navigate("/chatroom")}
            className="flex flex-grow cursor-pointer flex-col"
          >
            <div className="text-[0.8125rem] font-semibold tracking-tighter">
              {follower.userName}
            </div>
            <div className="text-[0.8125rem] tracking-tighter text-Gray500">
              {lastMessage}
            </div>
          </span>
          <CameraIcon className="h-6 w-6 flex-shrink-0" />
        </span>
      </div>
    </>
  );
};

export default ChatListItem;
