import { useNavigate } from "react-router-dom";
import { ReactComponent as ProfileImg } from "../../assets/images/profile_img.svg";

const MyInfo = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-[1.31rem] flex flex-col px-[0.88rem]">
        <div className="mr-[0.3rem] flex h-[5.875rem] flex-row items-center justify-between">
          <ProfileImg className="h-[5.875rem] w-[5.875rem] rounded-full" />
          <div className="flex flex-col items-center">
            <div className="text-base font-medium">3</div>
            <div className="text-xs">Posts</div>
          </div>
          <div
            onClick={() => navigate("/followlist")}
            className="flex cursor-pointer flex-col items-center"
          >
            <div className="text-base font-medium">2.5M</div>
            <div className="text-xs">Followers</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-base font-medium">3</div>
            <div className="text-xs">Follwings</div>
          </div>
        </div>
        <div className="mt-[0.88rem] text-[0.9375rem] font-bold tracking-tighter">
          장윤정
        </div>
        <div className="mt-[0.62rem] text-xs tracking-tighter">
          안녕하세요!!
        </div>
        <div className="mt-5 flex w-full items-center justify-center rounded-[0.625rem] bg-Gray300 px-[3.81rem] py-[0.625rem] font-semibold">
          Edit Your Profile
        </div>
      </div>
    </>
  );
};

export default MyInfo;
