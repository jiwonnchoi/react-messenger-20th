interface LastMessageContent {
  timestamp: string;
}

const useHandleTime = (lastMessageContent: LastMessageContent) => {
  const today = new Date();
  const date = new Date(lastMessageContent.timestamp);

  const month = date.getMonth() + 1;
  const day = date.getDate();

  // 현재와 비교하여 lastModified 값 설정
  const isToday =
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  let lastModified;

  if (isToday) {
    // 현재 시각과의 차이 계산
    const milliDiff = today.getTime() - date.getTime();
    const minuteDiff = Math.floor(milliDiff / (1000 * 60));
    const hourDiff = Math.floor(minuteDiff / 60);

    if (minuteDiff === 0) {
      lastModified = "now";
    } else if (minuteDiff < 60) {
      lastModified = `${minuteDiff}분 전`;
    } else {
      lastModified = `${hourDiff}시간 전`;
    }
  } else {
    lastModified = `${month}/${day}`;
  }

  return { lastModified };
};

export default useHandleTime;
