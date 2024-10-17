import { useRecoilState } from "recoil";
import { chattingState, currentChattingState, userState } from "../recoil/atom";
import { chattingInterface } from "../types/interface";

const useChatSend = () => {
  const [users, setUsers] = useRecoilState(userState);

  const [chatting, setChatting] = useRecoilState(chattingState);
  //const currentChatting = chatting[0]; // 기본으로 첫 번째 대화 가져오기
  const [currentChatting, setCurrentChatting] =
    useRecoilState(currentChattingState);

  // 메시지 전송 함수
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

  return {
    users,
    currentChatting,
    sendChat,
  };
};

export default useChatSend;
