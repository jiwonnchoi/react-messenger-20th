import MyChat from "./MyChat";
import ReceivedChat from "./ReceivedChat";
import InputBox from "./InputBox";

const Chattings = () => {
  return (
    <>
      <div className="ml-[0.56rem] mr-[0.75rem] flex flex-col">
        <MyChat />
        <ReceivedChat />
      </div>
      <InputBox />
    </>
  );
};
export default Chattings;
