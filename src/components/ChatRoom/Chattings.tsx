// components
import InputBox from "./InputBox";
import MyChat from "./MyChat";
import ReceivedChat from "./ReceivedChat";

// recoil
import { useRecoilValue } from "recoil";
import { selectedEmotionsState, selectedMessageState } from "../../recoil/atom";

// hooks
import useAutoScroll from "../../hooks/useAutoScroll";
import useChatSend from "../../hooks/useChatSend";
import useEmotionBox from "../../hooks/useEmotionBox";

const Chattings = () => {
  const { users, currentChatting, sendChat } = useChatSend();

  // 하단으로 자동 스크롤
  const scrollRef = useAutoScroll([currentChatting.chatList]);

  // 감정 남기기
  const { handleLongPress, emotionBoxRef } = useEmotionBox(scrollRef);
  const selectedMessage = useRecoilValue(selectedMessageState);
  const selectedEmotions = useRecoilValue(selectedEmotionsState);

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div
        ref={scrollRef}
        className="mb-12 ml-[0.56rem] flex flex-1 flex-col overflow-y-auto"
      >
        {currentChatting.chatList.length > 0 ? (
          // 이전 대화내역이 있을 때
          currentChatting.chatList.map((chat, index) =>
            chat.sender === users.me.id ? (
              <MyChat
                key={index}
                message={chat.message}
                isLastChat={
                  index === currentChatting.chatList.length - 1 ||
                  (index < currentChatting.chatList.length - 1 &&
                    chat.sender !== currentChatting.chatList[index + 1].sender)
                }
                /*감정 관련 */
                selectedEmotion={selectedEmotions[index] || null}
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
          )
        ) : (
          // 이전 대화내역이 없을 때
          <div className="mt-[3.69rem] flex w-full flex-col items-center gap-[0.44rem]">
            <img
              className="h-[5.875rem] w-[5.875rem] rounded-full"
              src={require(
                "../../assets/images/" + users.other.profileImg + ".svg",
              )}
            />

            <div className="text-lg font-semibold text-Gray900">
              {users.other.userName}
            </div>
            <div className="text-xs text-Gray900">{users.other.userId}</div>
            <div className="text-xs text-Gray500">735 followers 174 posts</div>
            <div className="text-xs text-Gray500">
              hongik_university also follows
            </div>
            <span className="mt-[1.06rem] flex flex-row justify-center gap-[0.31rem]">
              <span className="flex w-[10.625rem] justify-center rounded-[0.625rem] bg-Gray300 text-[0.9375rem]">
                Inquire
              </span>
              <span className="flex w-[10.625rem] justify-center rounded-[0.625rem] bg-Gray300 text-[0.9375rem]">
                View profile
              </span>
            </span>
          </div>
        )}
      </div>
      <InputBox sendChat={sendChat} />
    </div>
  );
};
export default Chattings;
