import { useEffect, useRef } from "react";

// components
import InputBox from "./InputBox";
import MyChat from "./MyChat";
import ReceivedChat from "./ReceivedChat";

// recoil
import { useRecoilState } from "recoil";
import { chattingState, userState } from "../../recoil/atom";
import { chattingInterface } from "../../types/interface";

// hook
import useEmotion from "../../hooks/useEmotion";

const Chattings = () => {
  const [users, setUsers] = useRecoilState(userState); // 채팅 중인 유저 (me, other)

  const [chatting, setChatting] = useRecoilState(chattingState);
  const currentChatting = chatting[0]; // 기본으로 첫 번째 대화 가져오기

  const scrollRef = useRef<HTMLDivElement | null>(null); // 스크롤 영역 요소

  // 하단으로 자동 스크롤
  useEffect(() => {
    scrollToBottom();
  }, [currentChatting.chatList]); // 채팅 메시지 수가 늘어났을 때 반영

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  // 메시지 전송 함수 (InputBox로 전달해서 handleSubmit에 포함)
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

  // 반응 남기기
  const {
    showEmotionBox,
    handleLongPress,
    selectedMessage,
    handleSelectEmotion,
    emotionBoxRef,
    selectedEmotions,
  } = useEmotion();

  return (
    <>
      <div
        ref={scrollRef}
        className="ml-[0.56rem] flex max-h-[623px] flex-col overflow-y-auto"
      >
        {currentChatting.chatList.map((chat, index) =>
          chat.sender === users.me.id ? (
            <MyChat
              key={index}
              message={chat.message}
              isLastChat={
                index == currentChatting.chatList.length - 1 ||
                (index < currentChatting.chatList.length - 1 &&
                  chat.sender !== currentChatting.chatList[index + 1].sender)
              }
            />
          ) : (
            <ReceivedChat
              onMouseDown={(e) => handleLongPress(index, e)}
              key={index}
              message={chat.message}
              profileImg={users.other.profileImg}
              showEmotionBox={showEmotionBox && selectedMessage === index}
              handleSelectEmotion={handleSelectEmotion}
              emotionBoxRef={emotionBoxRef}
              isSelected={selectedMessage === index}
              selectedEmotion={selectedEmotions[index] || null}
              isLastChat={
                index === currentChatting.chatList.length - 1 ||
                (index < currentChatting.chatList.length - 1 &&
                  chat.sender !== currentChatting.chatList[index + 1].sender)
              }
            />
          ),
        )}
      </div>
      <InputBox sendChat={sendChat} />
    </>
  );
};
export default Chattings;
