import Avatar from "./Avatar";

function UserInfo({ user }) {
  return (
    <>
      <Avatar user={user}></Avatar>
      <div className="UserInfo-name">{user.name}</div>
    </>
  );
}

export default UserInfo;
