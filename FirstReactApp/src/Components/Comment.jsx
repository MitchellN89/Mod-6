// simpler Comment component with the user info section extracted out into its own component
import FormattedDate from "./FormattedData";
import UserInfo from "./UserInfo";

function Comment({ author, text, date }) {
  return (
    <>
      <h2>Comment!!!</h2>
      <div className="Comment componentBox">
        <UserInfo user={author} />{" "}
        {/* here we pass the author prop down to the UserInfo component */}
        <div className="Comment-text">{text}</div>
        <FormattedDate date={date}></FormattedDate>
      </div>
    </>
  );
}

export default Comment;
