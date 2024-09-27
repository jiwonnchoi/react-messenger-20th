// components
import InputBox from "./InputBox";
import MyChat from "./MyChat";
import ReceivedChat from "./ReceivedChat";

// recoil
import { useRecoilValue } from "recoil";
import { selectedEmotionsState, selectedMessageState } from "../../recoil/atom";

// hook
import useAutoScroll from "../../hooks/useAutoScroll";
import useChatSend from "../../hooks/useChatSend";
import useEmotion from "../../hooks/useEmotion";

const Chattings = () => {
  const { users, currentChatting, sendChat } = useChatSend();

  // 하단으로 자동 스크롤
  const scrollRef = useAutoScroll([currentChatting.chatList]);

  // 감정 남기기
  const { handleLongPress, emotionBoxRef } = useEmotion();

  const selectedMessage = useRecoilValue(selectedMessageState);
  const selectedEmotions = useRecoilValue(selectedEmotionsState);

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
                index === currentChatting.chatList.length - 1 ||
                (index < currentChatting.chatList.length - 1 &&
                  chat.sender !== currentChatting.chatList[index + 1].sender)
              }
            />
          ) : (
            <ReceivedChat
              key={index}
              message={chat.message}
              profileImg={users.other.profileImg}
              isLastChat={
                index === currentChatting.chatList.length - 1 ||
                (index < currentChatting.chatList.length - 1 &&
                  chat.sender !== currentChatting.chatList[index + 1].sender)
              }
              /* 감정 달기 관련 */
              onMouseDown={(e) => handleLongPress(index, e)}
              isSelected={selectedMessage === index}
              selectedEmotion={selectedEmotions[index] || null}
              emotionBoxRef={emotionBoxRef}
            />
          ),
        )}
      </div>
      <InputBox sendChat={sendChat} />
    </>
  );
};
export default Chattings;
