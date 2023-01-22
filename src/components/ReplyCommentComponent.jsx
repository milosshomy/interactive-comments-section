import Juliusomo from "../assets/avatars/image-juliusomo.png";
import Reply from "./Reply";
import { useRef, useEffect } from "react";

const ReplyCommentComponent = ({ click, name }) => {
  const repliedCommentContainer = useRef(null);
  const replyCommentContainer = useRef(null);
  const textArea = useRef(null);
  const comment = useRef(null);
  const replyCommentBtn = useRef(null);

  useEffect(() => {
    replyCommentBtn.current.addEventListener("click", () => {
      repliedCommentContainer.current.style.display = "block";
      replyCommentContainer.current.style.display = "none";
      comment.current.textContent = textArea.current.value;
    });
  });

  return (
    <>
      <div
        ref={replyCommentContainer}
        style={{ display: click ? "block" : "none" }}
        className="bg-whiteClr w-full mb-5 p-5 rounded-xl lg:p-8"
      >
        <div className="flex justify-between items-start space-x-5">
          <img src={Juliusomo} alt="Profile" className="w-14" />
          <textarea
            ref={textArea}
            rows="5"
            className="grow shrink-0 basis-0 rounded-xl border border-moderateBlue px-6 py-5 text-darkBlue focus:outline-none"
          ></textarea>
          <button
            ref={replyCommentBtn}
            className="bg-moderateBlue rounded-xl px-7 py-3 text-whiteClr uppercase transition ease-in duration-200 hover:opacity-30"
          >
            Reply
          </button>
        </div>
      </div>
      <Reply
        name={name}
        repliedCommentContainerEl={repliedCommentContainer}
        textarea={textArea}
        commentContent={comment}
      />
    </>
  );
};
export default ReplyCommentComponent;
