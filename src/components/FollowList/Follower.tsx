import { useNavigate } from "react-router-dom";
import { userInterface } from "../../types/interface";

// recoil
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  chattingState,
  currentChattingState,
  userState,
} from "../../recoil/atom";

import userData from "../../data/UserData.json";

interface FollowerProps {
  user: userInterface;
}

const Follower: React.FC<FollowerProps> = ({ user }) => {
  const navigate = useNavigate();

  const [chattings] = useRecoilState(chattingState);
  const setCurrentChatting = useSetRecoilState(currentChattingState);
  const setCurrentUsers = useSetRecoilState(userState);

  const gotoChatRoom = () => {
    const selectedChatting = chattings.find(
      (chat) => chat.users.includes(0) && chat.users.includes(user.id),
    );

    if (selectedChatting) {
      setCurrentChatting(selectedChatting); // 현재 채팅을 지정하고
    } else {
      setCurrentChatting(null);
    }
    setCurrentUsers(() => ({
      me: userData.users[0],
      other: userData.users[user.id],
    }));

    navigate(`/chatroom/${user.id}`); // 상대방(other)의 id에 따라 동적 라우팅
  };

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
          onClick={() => gotoChatRoom()}
          className="h-6 w-[4.4375rem] cursor-pointer rounded-[0.3125rem] bg-Gray200 px-[0.625rem] py-[0.3125rem] text-xs"
        >
          Message
        </span>
      </span>
    </>
  );
};

export default Follower;
