export interface userInterface {
  id: number;
  userName: string;
  userId: string;
  profileImg: string;
}

export interface chatInterface {
  message: string;
  sender: number;
  timestamp: string;
}

export interface chattingInterface {
  id: number | undefined;
  users: number[];
  chatList: chatInterface[];
}
