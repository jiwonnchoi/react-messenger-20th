import TopBar from "../components/FollowList/TopBar";
import FollowContents from "../components/FollowList/FollowContents";
import Footer from "../components/common/Footer";

const FollowListPage = () => {
  return (
    <>
      <div className="relative flex h-full flex-col">
        <TopBar />
        <FollowContents />
        <Footer />
      </div>
    </>
  );
};

export default FollowListPage;
