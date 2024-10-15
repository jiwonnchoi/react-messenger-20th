import userData from "../../data/UserData.json";
import Follower from "./Follower";

const FollowContents = () => {
  const users = userData.users.slice(1);

  return (
    <>
      <div className="flex flex-col overflow-auto">
        <div className="ml-4 mt-[1.31rem] text-xl font-medium">
          All followers
        </div>
        {users.map((user) => (
          <Follower key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default FollowContents;
