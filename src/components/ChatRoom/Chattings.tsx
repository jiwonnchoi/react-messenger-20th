import React from "react";
import InputBox from "./InputBox";
import MyChat from "./MyChat";
import ReceivedChat from "./ReceivedChat";

import { useRecoilState, useRecoilValue } from "recoil";
import { chattingState, userAtom } from "../../recoil/atom";
import { chattingInterface } from "../../types/interface";

const Chattings = () => {
  const [users, setUsers] = useRecoilState(userAtom);

  const [chatting, setChatting] = useRecoilState(chattingState);
  const currentChatting = chatting[0]; // 기본으로 첫 번째 대화 가져오기

  const sendChat = (newMessage: string) => {
    const updatedChatting = [
      ...currentChatting.chatList,
      { message: newMessage, sender: users.me.id },
    ];

    setChatting((prevChatting: chattingInterface[]) =>
      prevChatting.map((chat, index) =>
        index === 0 ? { ...chat, chatList: updatedChatting } : chat,
      ),
    );
  };

  return (
    <>
      <div className="ml-[0.56rem] mr-[0.7rem] flex flex-col">
        {currentChatting.chatList.map((chat, index) =>
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
      <InputBox sendChat={sendChat} />
    </>
  );
};
export default Chattings;
