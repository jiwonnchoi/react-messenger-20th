const MyChat = ({ message }: { message: string }) => {
  return (
    <>
      <div className="mb-[5px] ml-auto inline-flex min-h-[2.125rem] max-w-[13.375rem] items-center break-all rounded-[1.25rem] bg-Gray500 px-[0.625rem] py-[0.5rem] text-[0.9375rem] tracking-tighter text-white">
        {message}
      </div>
    </>
  );
};

export default MyChat;
