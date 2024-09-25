import React from "react";
import InputBox from "./InputBox";
import MyChat from "./MyChat";
import ReceivedChat from "./ReceivedChat";

import { useRecoilState, useRecoilValue } from "recoil";
import { chattingState, userAtom } from "../../recoil/atom";

const Chattings = () => {
  const [users, setUsers] = useRecoilState(userAtom);

  const chatting = useRecoilValue(chattingState);
  const currentChat = chatting[0]; // 기본으로 첫 번째 대화 가져오기

  return (
    <>
      <div className="ml-[0.56rem] mr-[0.75rem] flex flex-col">
        {currentChat.chatList.map((chat, index) =>
          chat.sender === users.me.id ? (
            <MyChat key={index} message={chat.message} />
          ) : (
            <ReceivedChat
              key={index}
              message={chat.message}
              profileImg={users.other.profileImg}
            />
          ),
        )}
      </div>
      <InputBox />
    </>
  );
};
export default Chattings;
