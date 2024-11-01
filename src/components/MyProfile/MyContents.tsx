import { useState } from "react";
import { ReactComponent as GridIcon } from "../../assets/icons/grid.svg";
import { ReactComponent as GridIcon2 } from "../../assets/icons/grid2.svg";
import { ReactComponent as TaggedIcon } from "../../assets/icons/tagged.svg";
import { ReactComponent as TaggedIcon2 } from "../../assets/icons/tagged2.svg";

import content1 from "../../assets/images/content1.png";
import content2 from "../../assets/images/content2.png";
import content3 from "../../assets/images/content3.png";
import none_tagged from "../../assets/images/none_tagged.png";

const MyContents = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const tab = [
    {
      id: 1,
      icon: currentTab == 0 ? <GridIcon /> : <GridIcon2 />,
      content: (
        <div className="flex w-full flex-row justify-between">
          <img src={content1} />
          <img src={content2} />
          <img src={content3} />
        </div>
      ),
    },
    {
      id: 2,
      icon: currentTab == 1 ? <TaggedIcon /> : <TaggedIcon2 />,
      content: (
        <div className="mt-10 flex flex-col items-center">
          <img src={none_tagged} className="h-20" />
          <div className="mt-2 text-lg font-bold">
            내가 태그된 사진과 동영상
          </div>
          <div className="mt-2 text-xs">
            사람들이 회원님을 사진 및 동영상에 태그하면
            <br />
            태그된 사진 및 동영상이 여기에 표시됩니다.
          </div>
        </div>
      ),
    },
  ];
  const handleTab = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <>
      <div className="mt-[1.28rem] flex w-full flex-col">
        <div className="flex flex-row justify-center gap-[9.19rem]">
          {tab.map((tab, index) => (
            <span
              key={tab.id}
              className="cursor-pointer"
              onClick={() => handleTab(index)}
            >
              {tab.icon}
            </span>
          ))}
        </div>
        <div
          className={`mt-[0.31rem] flex h-0.5 w-[4.011rem] bg-Gray900 ${currentTab === 0 ? "ml-[4.35rem]" : "ml-[15rem]"}`}
        ></div>
        <div>{tab[currentTab].content}</div>
      </div>
    </>
  );
};

export default MyContents;
