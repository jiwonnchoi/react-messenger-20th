import { useRecoilValue } from "recoil";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

import ChatListItem from "./ChatListItem";
import { chattingState, userState } from "../../recoil/atom";

const ChatListContents = () => {
  const chattings = useRecoilValue(chattingState);
  const user = useRecoilValue(userState);

  const myId = user.me.id;
  const chattingFollowers = chattings.filter((chat) =>
    chat.users.some((id) => id !== myId),
  );

  return (
    <>
      <div className="px-4">
        <div className="mb-5 flex h-[2.25rem] w-full flex-row items-center gap-[0.62rem] rounded-[0.625rem] border-[1px] border-solid border-Gray600 px-2 py-[0.62rem]">
          <SearchIcon className="h-6 w-6" />
          <input placeholder="Search" className="grow" />
        </div>
        <div className="flex w-full flex-row items-center justify-between pb-[0.44rem]">
          <span className="text-xl font-medium">Messages</span>
          <span className="text-xs text-Gray500">Requests</span>
        </div>
        <div>
          {chattingFollowers.map((chatting) => (
            <ChatListItem key={chatting.id} chatting={chatting} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatListContents;
