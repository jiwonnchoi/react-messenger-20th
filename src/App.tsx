import { RecoilRoot } from "recoil";
import ChatRoomPage from "./pages/ChatRoomPage";

function App() {
  return (
    <>
      <RecoilRoot>
        <ChatRoomPage />
      </RecoilRoot>
    </>
  );
}

export default App;
