import { useNavigate } from "react-router-dom";

// icons
import { ReactComponent as CameraIcon } from "../../assets/icons/camera_gray.svg";
import { ReactComponent as PinnedIcon } from "../../assets/icons/pin.svg";
import { ReactComponent as PinIcon } from "../../assets/icons/pin2.svg";

// data & recoil
import userData from "../../data/UserData.json";
import { chattingInterface } from "../../types/interface";
import useHandleTime from "../../hooks/useHandleTime";
import { useState } from "react";

interface ChatListItemProps {
  chatting: chattingInterface;
  isPinned: boolean;
  handleTogglePin: () => void;
}

const ChatListItem: React.FC<ChatListItemProps> = ({
  chatting,
  isPinned,
  handleTogglePin,
}) => {
  const followerId = chatting.users.filter((id) => id !== 0)[0];
  const follower = userData.users.filter((user) => user.id === followerId)[0];

  const lastMessageContent = chatting.chatList[chatting.chatList.length - 1];
  const lastMessage = lastMessageContent?.message.startsWith("data:image/")
    ? "이미지가 전송됨" // 이미지 파일일 경우 경로 대신 대체 텍스트
    : lastMessageContent.message;

  //
  const { lastModified } = useHandleTime(lastMessageContent);

  const navigate = useNavigate();
  const gotoChatRoom = () => {
    navigate(`/chatroom/${followerId}`);
  };

  const [isSlided, setIsSlided] = useState(false);
  const clickCamera = () => {
    setIsSlided(!isSlided);
  };

  const clickPin = () => {
    handleTogglePin();
    // console.log("Pinned!"); // 콘솔 대신 핀 기능 구현
    setIsSlided(false);
  };

  return (
    <div className="relative w-[100%+6rem] overflow-hidden">
      <div
        className="transition-transform duration-300"
        style={{
          transform: isSlided ? "translateX(-2rem)" : "translateX(0)",
        }}
      >
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
              <div className="flex flex-row items-center">
                <span className="text-[0.8125rem] font-semibold tracking-tighter">
                  {follower.userName}
                </span>
                {isPinned && <PinnedIcon className="ml-2 w-3" />}
              </div>

              <div className="flex flex-row justify-between">
                <span className="h-[1.219rem] w-[10.187rem] overflow-hidden text-ellipsis whitespace-nowrap text-[0.8125rem] tracking-tighter text-Gray500">
                  {lastMessage}
                </span>
                <span className="text-[0.8125rem] tracking-tighter text-Gray500">
                  {lastModified}
                </span>
              </div>
            </span>
            <CameraIcon
              onClick={clickCamera}
              className="h-6 w-6 flex-shrink-0 cursor-pointer"
            />
          </span>
        </div>
      </div>
      {isSlided && (
        <span
          onClick={clickPin}
          className="absolute bottom-3 right-0 flex h-6 -translate-y-1/2 transform cursor-pointer items-center justify-center"
        >
          <PinIcon className="h-8" />
        </span>
      )}
    </div>
  );
};

export default ChatListItem;
