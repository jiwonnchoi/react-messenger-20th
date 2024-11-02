import { useEffect, useRef } from "react";

const useAutoScroll = (dependency: any[]) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollHeight, // ref로 전달받은 높이값만큼 top 부여
          behavior: "smooth",
        });
        console.log(scrollRef.current.scrollHeight);
      }
    }, 100);
  }, dependency);

  return scrollRef;
};

export default useAutoScroll;
