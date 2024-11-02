import { useEffect } from "react";
import { useParams } from "react-router-dom";

// components
import TopBar from "../components/ChatRoom/TopBar";
import Chattings from "../components/ChatRoom/Chattings";

import userData from "../data/UserData.json";

// recoil
import { useRecoilValue, useSetRecoilState } from "recoil";
import { emotionBoxState, userState } from "../recoil/atom";

const ChatRoomPage = () => {
  const { chatroomId } = useParams(); // 경로로부터 chatroom id
  const followerId: number = parseInt(chatroomId || "1", 10);
  const showEmotionBox = useRecoilValue(emotionBoxState); // 배경 블러처리를 위한 감정 박스 표시 상태

  const setCurrentUsers = useSetRecoilState(userState);

  useEffect(() => {
    setCurrentUsers(() => ({
      me: userData.users[0],
      other: userData.users[followerId],
    }));
  }, [followerId, setCurrentUsers]);

  return (
    <>
      <div className="relative flex h-full w-[23.4375rem] flex-col bg-white">
        <TopBar />
        <div className="flex flex-col overflow-y-auto">
          <Chattings />
        </div>
        {showEmotionBox && ( // 블러 배경
          <div className="pointer-events-none absolute inset-0 z-10 bg-white bg-opacity-20 backdrop-blur-sm" />
        )}
      </div>
    </>
  );
};

export default ChatRoomPage;
