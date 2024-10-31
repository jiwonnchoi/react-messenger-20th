// components
import ChatListItem from "./ChatListItem";

// icons
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

// reoil
import { useRecoilValue } from "recoil";
import { chattingState, userState } from "../../recoil/atom";
import { useState } from "react";

import userData from "../../data/UserData.json";

const ChatListContents = () => {
  const chattings = useRecoilValue(chattingState);
  const user = useRecoilValue(userState);

  const myId = user.me.id;
  // const chattingFollowers = chattings.filter((chat) =>
  //   chat.users.some((id) => id !== myId),
  // );

  const [searchInput, setSearchInput] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const filteredFollowers = chattings.filter((chat) =>
    chat.users.some((userId) => {
      if (userId !== myId) {
        const otherUser = userData.users.find((user) => user.id === userId);
        return otherUser?.userName.toLocaleLowerCase().includes(searchInput);
      }
      return false;
    }),
  );

  return (
    <>
      <div className="px-4">
        <div className="mb-5 flex h-[2.25rem] w-full flex-row items-center gap-[0.62rem] rounded-[0.625rem] border-[1px] border-solid border-Gray600 px-2 py-[0.62rem]">
          <SearchIcon className="h-6 w-6" />
          <input
            placeholder="Search"
            className="grow"
            value={searchInput}
            onChange={handleInput}
          />
        </div>
        <div className="flex w-full flex-row items-center justify-between pb-[0.44rem]">
          <span className="text-xl font-medium">Messages</span>
          <span className="text-xs text-Gray500">Requests</span>
        </div>
        <div>
          {filteredFollowers.map((chatting) => (
            <ChatListItem key={chatting.id} chatting={chatting} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatListContents;
