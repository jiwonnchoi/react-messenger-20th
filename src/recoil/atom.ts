import { atom } from "recoil";
import userData from "../data/UserData.json";
import chattingData from "../data/ChattingData.json";
import { recoilPersist } from "recoil-persist";
import type { chattingInterface, userInterface } from "../types/interface";

const { persistAtom } = recoilPersist({
  key: "chattings",
  storage: localStorage,
});

export const userState = atom<{ me: userInterface; other: userInterface }>({
  key: "userState",
  default: {
    me: userData.users[0],
    other: userData.users[1],
  },
});

export const chattingState = atom<chattingInterface[]>({
  key: "chattingState",
  default: chattingData.chattings,
  effects_UNSTABLE: [persistAtom],
});

export const currentChattingState = atom<chattingInterface | null>({
  key: "currentChattingState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const emotionBoxState = atom<boolean>({
  // 감정 박스 보이는지 상태
  key: "emotionBoxState",
  default: false,
});

// useEmotionBox
export const selectedMessageState = atom<number | null>({
  key: "selectedMessageState",
  default: null,
});

export const selectedEmotionsState = atom<{ [key: number]: number }>({
  key: "selectedEmotionsState",
  default: {},
  effects_UNSTABLE: [persistAtom],
});
