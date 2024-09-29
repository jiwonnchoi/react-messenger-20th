import { RecoilRoot } from "recoil";
import { BrowserView, MobileView } from "react-device-detect";
import ChatRoomPage from "./pages/ChatRoomPage";

import { ReactComponent as StatusBar } from "./assets/images/status_bar.svg";
import { ReactComponent as HomeIndicator } from "./assets/images/home_indicator.svg";

function App() {
  return (
    <>
      <RecoilRoot>
        {/*브라우저 뷰 (상하단 바 포함)*/}
        <BrowserView>
          <div className="flex min-h-screen w-dvw flex-col items-center justify-center">
            <StatusBar />
            <ChatRoomPage />
            <HomeIndicator />
          </div>
        </BrowserView>
        {/*모바일 뷰*/}
        <MobileView>
          <ChatRoomPage />
        </MobileView>
      </RecoilRoot>
    </>
  );
}

export default App;
