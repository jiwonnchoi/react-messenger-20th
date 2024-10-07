interface MyChatProps {
  message: string;
  isLastChat: boolean;
}

const MyChat: React.FC<MyChatProps> = ({ message, isLastChat }) => {
  return (
    <>
      <div
        className={`ml-auto mr-2 mt-[0.3125rem] inline-flex max-w-[13.375rem] items-center break-all rounded-[1.25rem] bg-Gray500 px-2.5 py-2 text-[0.9375rem] tracking-tighter text-white ${isLastChat ? "mb-[0.3125rem]" : ""}`}
      >
        {message}
      </div>
    </>
  );
};

export default MyChat;
