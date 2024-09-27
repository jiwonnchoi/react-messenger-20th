interface MyChatProps {
  message: string;
}

const MyChat: React.FC<MyChatProps> = ({ message }) => {
  return (
    <>
      <div className="ml-auto mr-[0.5rem] mt-[5px] inline-flex max-w-[13.375rem] items-center break-all rounded-[1.25rem] bg-Gray500 px-[0.625rem] py-[0.5rem] text-[0.9375rem] tracking-tighter text-white">
        {message}
      </div>
    </>
  );
};

export default MyChat;
