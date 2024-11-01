import { useEffect, useRef } from "react";

const useAutoScroll = (dependency: any[]) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight, // ref로 전달받은 높이값만큼 top 부여
        behavior: "smooth",
      });
      console.log("useAutoScroll");
      console.log(scrollRef.current.scrollHeight);
    }
  }, dependency);

  return scrollRef;
};

export default useAutoScroll;
