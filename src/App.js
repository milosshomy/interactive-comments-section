import CommentComponent from "./components/CommentComponent";
import Divider from "./components/Divider";
import CreateCommentComponent from "./components/CreateCommentComponent";
import Data from "./data.json";
import Amy from "./assets/avatars/image-amyrobson.png";
import Max from "./assets/avatars/image-maxblagun.png";
import Ramsesmiron from "./assets/avatars/image-ramsesmiron.png";
import Juliusomo from "./assets/avatars/image-juliusomo.png";
import RepliedCommentComponent from "./components/RepliedCommentComponent";
import NewCommentComponent from "./components/NewCommentComponent";
import { useRef } from "react";

function App() {
  const newComment = useRef();
  const commentContent = useRef();

  return (
    <div className="flex flex-col items-center w-full px-3 py-5 sm:w-3/4 sm:mx-auto lg:py-10 xl:px-0">
      <CommentComponent
        src={Amy}
        name={Data.comments[0].user.username}
        seen={Data.comments[0].createdAt}
        content={Data.comments[0].content}
        count={Data.comments[0].score}
        replyName={Data.currentUser.username}
      />
      <CommentComponent
        src={Max}
        name={Data.comments[1].user.username}
        seen={Data.comments[1].createdAt}
        content={Data.comments[1].content}
        count={Data.comments[1].score}
        replyName={Data.currentUser.username}
      />

      <Divider>
        <RepliedCommentComponent
          src={Ramsesmiron}
          name={Data.comments[1].replies[0].user.username}
          seen={Data.comments[1].replies[0].createdAt}
          content={Data.comments[1].replies[0].content}
          count={Data.comments[1].replies[0].score}
          user={Data.currentUser.username}
        />
        <RepliedCommentComponent
          src={Juliusomo}
          name={Data.comments[1].replies[1].user.username}
          seen={Data.comments[1].replies[1].createdAt}
          content={Data.comments[1].replies[1].content}
          count={Data.comments[1].replies[1].score}
        />
      </Divider>

      <NewCommentComponent
        name={Data.currentUser.username}
        newCommentContainer={newComment}
        comment={commentContent}
      />
      <CreateCommentComponent
        commentText={commentContent}
        createdCommentContainer={newComment}
      />
    </div>
  );
}

export default App;
