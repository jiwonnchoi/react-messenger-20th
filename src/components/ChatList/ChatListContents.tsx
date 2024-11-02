// components
import ChatListItem from "./ChatListItem";

// icons
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

// reoil
import { useRecoilValue } from "recoil";
import { chattingState, userState } from "../../recoil/atom";
import { useEffect, useState } from "react";

import userData from "../../data/UserData.json";

const ChatListContents = () => {
  const chattings = useRecoilValue(chattingState);
  const user = useRecoilValue(userState);
  const myId = user.me.id;

  // 검색 기능
  const [searchInput, setSearchInput] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  // 상단 고정 기능
  const [pinnedChatIds, setPinnedChatIds] = useState<number[]>(() => {
    const storedPinnedChatIds = localStorage.getItem("pinnedChatIds");
    return storedPinnedChatIds ? JSON.parse(storedPinnedChatIds) : [];
  });

  useEffect(() => {
    // pinnedChatIds 변경 시 로컬 스토리지에 저장
    localStorage.setItem("pinnedChatIds", JSON.stringify(pinnedChatIds));
  }, [pinnedChatIds]);

  const handlePinToggle = (id: number | undefined) => {
    if (id !== undefined) {
      setPinnedChatIds(
        (prevIds) =>
          prevIds.includes(id)
            ? prevIds.filter((chatId) => chatId !== id) // 이미 고정된 경우 해제
            : [id, ...prevIds], // 새로운 고정 항목은 가장 상단으로 추가
      );
    }
  };

  const filteredFollowers = chattings
    .filter((chat) =>
      chat.users.some((userId) => {
        if (userId !== myId) {
          const otherUser = userData.users.find((user) => user.id === userId); // 대화가 존재하는 사용자와의 채팅 필터
          return otherUser?.userName.toLocaleLowerCase().includes(searchInput); // 검색어에 부합하는 사용자와의 채팅 필터
        }
        return false;
      }),
    )
    .sort((a, b) => {
      // 고정된 항목 상단으로 + 최신 항목이 더 위에 오도록 정렬
      const aIdx = pinnedChatIds.indexOf(a.id!);
      const bIdx = pinnedChatIds.indexOf(b.id!);
      if (aIdx === -1 && bIdx === -1) return 0; // 모두 핀 되지 않은 경우 -> 순서 변경 안함
      if (aIdx === -1) return 1; // a 핀x, b 핀o
      if (bIdx === -1) return -1; // a 핀o, b 핀x
      return aIdx - bIdx; // 둘다 핀 된 경우 -> 배열 순대로
    });

  return (
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
        {filteredFollowers.map(
          (chatting) =>
            chatting.id !== undefined && ( // id가 undefined가 아닌 항목만 렌더링
              <ChatListItem
                key={chatting.id}
                chatting={chatting}
                isPinned={pinnedChatIds.includes(chatting.id)}
                handleTogglePin={() => handlePinToggle(chatting.id)}
              />
            ),
        )}
      </div>
    </div>
  );
};

export default ChatListContents;
