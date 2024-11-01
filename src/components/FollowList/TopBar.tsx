const TopBar = () => {
  return (
    <>
      <div className="flex h-14 items-center justify-center text-[0.9375rem] font-semibold">
        jngynjng
      </div>
      <span className="flex items-center">
        <div className="flex w-[7.75rem] items-center justify-center text-[0.8125rem] font-semibold text-Gray900">
          2.5M follower
        </div>
        <div className="flex w-[7.75rem] items-center justify-center text-[0.8125rem] font-semibold text-Gray500">
          3 following
        </div>
        <div className="flex w-[7.75rem] items-center justify-center text-[0.8125rem] font-semibold text-Gray500">
          subscription
        </div>
      </span>
      <div className="mt-[0.31rem] flex h-0.5 w-[7.75rem] items-start bg-Gray900"></div>
    </>
  );
};

export default TopBar;
