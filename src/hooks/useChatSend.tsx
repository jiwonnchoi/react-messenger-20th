import { useRecoilState } from "recoil";
import { chattingState, userState } from "../recoil/atom";
import { chattingInterface } from "../types/interface";
import { useParams } from "react-router-dom";

const useChatSend = () => {
  const [users, setUsers] = useRecoilState(userState);

  const [chatting, setChatting] = useRecoilState(chattingState);

  const { chatroomId } = useParams();
  const followerId: number = parseInt(chatroomId || "1", 10);

  const currentChatting =
    chatting.find((chat) => chat.users.includes(followerId)) ||
    ({
      id: chatroomId,
      users: [0, followerId],
      chatList: [],
    } as chattingInterface);

  // 메시지 전송 함수
  const sendChat = (newMessage: string) => {
    const updatedChatting = [
      ...currentChatting.chatList,
      { message: newMessage, sender: users.me.id },
    ];

    // setChatting((prevChatting: chattingInterface[]) =>
    //   prevChatting.map((chat) =>
    //     chat.id === currentChatting.id
    //       ? { ...chat, chatList: updatedChatting }
    //       : chat,
    //   ),
    // );
    setChatting((prevChatting: chattingInterface[]) =>
      prevChatting.find((chat) => chat.id === currentChatting.id)
        ? // 기존 대화 업데이트
          prevChatting.map((chat) =>
            chat.id === currentChatting.id
              ? { ...chat, chatList: updatedChatting }
              : chat,
          )
        : // 새 대화 추가 (새로운 대화를 chattingState에 추가)
          [...prevChatting, { ...currentChatting, chatList: updatedChatting }],
    );
  };

  return {
    users,
    currentChatting,
    sendChat,
  };
};

export default useChatSend;
