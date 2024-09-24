import { ReactComponent as ProfileImg } from "../../assets/images/profile_img.svg";

const ReceivedChat = () => {
  return (
    <span className="flex flex-row items-end">
      <ProfileImg className="h-[1.75rem] w-[1.75rem] rounded-full" />
      <div className="ml-[0.5rem] mr-auto inline-flex max-w-[13.375rem] items-center rounded-[1.25rem] bg-Chat_BG px-[0.625rem] py-[0.5rem] text-[0.9375rem] tracking-tighter text-white">
        저는 홍익대학교 산업디자인과 21학번 장윤정이라고 합니다!!!
      </div>
    </span>
  );
};

export default ReceivedChat;
