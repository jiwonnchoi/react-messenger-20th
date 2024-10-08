import { ReactComponent as GridIcon } from "../../assets/icons/grid.svg";
import { ReactComponent as TaggedIcon } from "../../assets/icons/tagged.svg";
import content1 from "../../assets/images/content1.png";
import content2 from "../../assets/images/content2.png";
import content3 from "../../assets/images/content3.png";

const MyContents = () => {
  return (
    <>
      <div className="mt-[1.28rem] flex w-full flex-col">
        <div className="flex flex-row justify-center gap-[9.19rem]">
          <GridIcon />
          <TaggedIcon />
        </div>
        <div className="flex w-full flex-row justify-between">
          <img src={content1} />
          <img src={content2} />
          <img src={content3} />
        </div>
      </div>
    </>
  );
};

export default MyContents;
