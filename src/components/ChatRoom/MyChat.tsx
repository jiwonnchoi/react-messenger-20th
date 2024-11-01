import { useEffect, useState } from "react";

interface MyChatProps {
  message: string;
  isLastChat: boolean;
}

const MyChat: React.FC<MyChatProps> = ({ message, isLastChat }) => {
  //const imageUrl = file ? URL.createObjectURL(file) : null;
  const isImageMessage = message.startsWith("data:image/");

  //const [imageUrl, setImageUrl] = useState<string | null>(null);

  // useEffect(() => {
  //   if (message instanceof File) {
  //     const url = URL.createObjectURL(message); // 이미지 파일을 Blob URL로 변환하여 표시
  //     setImageUrl(url);
  //     console.log("url: " + url);

  //     // 컴포넌트 언마운트 시 URL 해제
  //     return () => {
  //       URL.revokeObjectURL(url);
  //     };
  //   }
  // }, [message]);

  return (
    <>
      {isImageMessage ? (
        <img
          src={message}
          alt="sent image"
          className={`ml-auto mr-2 mt-[0.3125rem] w-[10.0625rem] rounded-[1.25rem] ${isLastChat ? "mb-[0.3125rem]" : ""}`}
        />
      ) : (
        <div
          className={`ml-auto mr-2 mt-[0.3125rem] inline-flex max-w-[13.375rem] items-center break-all rounded-[1.25rem] bg-Gray500 px-2.5 py-2 text-[0.9375rem] tracking-tighter text-white ${isLastChat ? "mb-[0.3125rem]" : ""}`}
        >
          {message}
        </div>
      )}
    </>
  );
};

export default MyChat;
