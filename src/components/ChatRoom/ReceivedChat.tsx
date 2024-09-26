const ReceivedChat = ({
  message,
  profileImg,
}: {
  message: string;
  profileImg: string;
}) => {
  return (
    <>
      <span className="mt-[5px] flex flex-row items-end">
        <img
          className="h-[1.75rem] w-[1.75rem] rounded-full"
          src={require("../../assets/images/" + profileImg + ".svg")} //props로 넘겨온 상대경로는 깨짐
        />
        <div className="ml-[0.5rem] mr-auto inline-flex max-w-[13.375rem] items-center break-all rounded-[1.25rem] bg-Chat_BG px-[0.625rem] py-[0.5rem] text-[0.9375rem] tracking-tighter text-white">
          {message}
        </div>
      </span>
    </>
  );
};

export default ReceivedChat;
