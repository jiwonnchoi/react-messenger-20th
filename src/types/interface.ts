export interface userInterface {
  id: number;
  userName: string;
  userId: string;
  profileImg: string;
}

export interface chatInterface {
  message: string;
  sender: number;
}

export interface chattingInterface {
  id: number;
  users: number[];
  chatList: chatInterface[];
}
