import { RecoilRoot } from "recoil";
import { BrowserView, MobileView } from "react-device-detect";
import ChatRoomPage from "./pages/ChatRoomPage";

import { ReactComponent as StatusBar } from "./assets/images/status_bar.svg";
import { ReactComponent as HomeIndicator } from "./assets/images/home_indicator.svg";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserView>
          <StatusBar />
          <ChatRoomPage />
          <HomeIndicator />
        </BrowserView>
        <MobileView>
          <ChatRoomPage />
        </MobileView>
      </RecoilRoot>
    </>
  );
}

export default App;
