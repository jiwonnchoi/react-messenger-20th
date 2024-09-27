import { atom } from "recoil";
import userData from "../data/UserData.json";
import chattingData from "../data/ChattingData.json";

import type { chattingInterface, userInterface } from "../types/interface";

export const userAtom = atom<{ me: userInterface; other: userInterface }>({
  key: "userAtom",
  default: {
    me: userData.users[0],
    other: userData.users[1],
  },
});

export const chattingState = atom<chattingInterface[]>({
  key: "chattingState",
  default: chattingData.chattings,
});

export const emotionBoxState = atom<boolean>({
  key: "emotionBoxState",
  default: false,
});
