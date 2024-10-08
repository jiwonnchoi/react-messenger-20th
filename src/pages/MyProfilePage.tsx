import TopBar from "../components/MyProfile/TopBar";
import MyInfo from "../components/MyProfile/MyInfo";
import MyContents from "../components/MyProfile/MyContents";
import Footer from "../components/common/Footer";

const MyProfilePage = () => {
  return (
    <>
      <div className="relative flex h-full flex-col">
        <TopBar />
        <MyInfo />
        <MyContents />
        <Footer />
      </div>
    </>
  );
};

export default MyProfilePage;
