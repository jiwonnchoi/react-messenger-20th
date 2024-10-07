import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { BrowserView, MobileView } from "react-device-detect";

import { ReactComponent as StatusBar } from "./assets/images/status_bar.svg";
import { ReactComponent as HomeIndicator } from "./assets/images/home_indicator.svg";

import MyProfilePage from "./pages/MyProfilePage";
import FollowListPage from "./pages/FollowListPage";
import ChatListPage from "./pages/ChatListPage";
import ChatRoomPage from "./pages/ChatRoomPage";

//hooks
import useHandleHeight from "./hooks/useHandleHeight";

function App() {
  const height = useHandleHeight();

  return (
    <>
      <RecoilRoot>
        {/*브라우저 뷰 (상하단 바 포함)*/}
        <BrowserView>
          <div className="flex min-h-screen w-dvw flex-col items-center justify-center">
            <StatusBar />
            <div className="relative w-[375px] bg-white" style={{ height }}>
              <Router>
                <Routes>
                  <Route path={"/"} element={<MyProfilePage />}></Route>
                  <Route
                    path={"/followlist"}
                    element={<FollowListPage />}
                  ></Route>
                  <Route path={"/chatlist"} element={<ChatListPage />}></Route>
                  <Route path={"/chatroom"} element={<ChatRoomPage />}></Route>
                </Routes>
              </Router>
            </div>
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
