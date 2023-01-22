import Juliusomo from "../assets/avatars/image-juliusomo.png";
import Reply from "./Reply";
import { useState, useRef, useEffect } from "react";

const RepCommentContainer = ({ active }) => {
  const textArea = useRef(null);
  const replyCommentBtn = useRef(null);
  const repliedContainer = useRef(null);
  const replyContainer = useRef(null);
  const content = useRef(null);
  const name = useRef(null);
  const replyBtn = useRef(null);
  const box = useRef(null);
  const editButtonsContainer = useRef(null);

  useEffect(() => {
    replyCommentBtn.current.addEventListener("click", () => {
      replyContainer.current.style.display = "none";
      repliedContainer.current.style.display = "block";
      content.current.textContent = textArea.current.value;
      replyBtn.current.style.display = "none";
      name.current.textContent = "juliusomo";
      box.current.style.display = "block";
      editButtonsContainer.current.style.display = "flex";
    });
  });

  return (
    <>
      <div
        ref={replyContainer}
        style={{ display: active === "active" ? "block" : "none" }}
        className="bg-whiteClr flex  w-3/4 ml-auto mb-5 p-5 rounded-xl lg:p-8"
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
        repliedCommentContainerEl={repliedContainer}
        commentContent={content}
        username={name}
        replyBtn={replyBtn}
        box={box}
        editButtonsContainer={editButtonsContainer}
      />
    </>
  );
};

export default RepCommentContainer;
