import { useNavigate } from "react-router-dom";

// icons
import { ReactComponent as CameraIcon } from "../../assets/icons/camera_gray.svg";

// data & recoil
import userData from "../../data/UserData.json";
import { chattingInterface } from "../../types/interface";

interface ChatListItemProps {
  chatting: chattingInterface;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ chatting }) => {
  const followerId = chatting.users.filter((id) => id !== 0)[0];
  const follower = userData.users.filter((user) => user.id === followerId)[0];

  const lastMessageContent = chatting.chatList[chatting.chatList.length - 1];
  const lastMessage = lastMessageContent?.message.startsWith("data:image/")
    ? "이미지가 전송됨" // 이미지 파일일 경우 대체 텍스트
    : lastMessageContent.message;

  const navigate = useNavigate();

  // const setCurrentChatting = useSetRecoilState(currentChattingState);
  const gotoChatRoom = () => {
    navigate(`/chatroom/${followerId}`);
  };

  return (
    <>
      <div className="flex w-full flex-row gap-2 py-2">
        <img
          className="h-14 w-14 flex-shrink-0 rounded-full"
          src={require("../../assets/images/" + follower.profileImg + ".svg")}
        />
        <span className="flex w-full flex-row items-center justify-between gap-[1.88rem]">
          <span
            onClick={() => gotoChatRoom()}
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
