import { useRecoilState } from "recoil";
import { chattingState, userState } from "../recoil/atom";
import { chattingInterface, chatInterface } from "../types/interface";
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

  // 파일 객체를 Base64로 변환하는 함수
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        resolve(base64String);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  // 메시지 전송 함수
  const sendChat = async (content: string | File, type: "text" | "image") => {
    let messageContent: string;

    if (type === "image" && content instanceof File) {
      // 이미지 파일을 Base64로 변환하여 저장
      messageContent = await fileToBase64(content);
    } else {
      messageContent = content as string;
    }

    const newMessage: chatInterface = {
      message: messageContent,
      sender: users.me.id,
      timestamp: new Date().toISOString(),
    };

    const updatedChatting = [...currentChatting.chatList, newMessage];

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
