import TopBar from "../components/ChatList/TopBar";
import ChatListContents from "../components/ChatList/ChatListContents";
import Footer from "../components/common/Footer";

const ChatListPage = () => {
  return (
    <>
      <div className="relative flex h-full flex-col">
        <TopBar />
        <ChatListContents />
        <Footer />
      </div>
    </>
  );
};

export default ChatListPage;
