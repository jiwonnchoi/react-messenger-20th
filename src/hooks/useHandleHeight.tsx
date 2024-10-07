import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

const useHandleHeight = () => {
  const [height, setHeight] = useState(isMobile ? "100vh" : "733px");

  useEffect(() => {
    const handleHeight = () => {
      if (isMobile) {
        setHeight(`${window.innerHeight}px`);
      } else {
        setHeight(
          window.innerHeight > 813 ? "733px" : `${window.innerHeight - 80}px`,
        );
      }
    };

    handleHeight(); // 처음 로드 시 높이 설정
    window.addEventListener("resize", handleHeight); // 창 크기 변경 시 높이 업데이트

    return () => {
      window.removeEventListener("resize", handleHeight);
    };
  }, []);

  return height;
};

export default useHandleHeight;
