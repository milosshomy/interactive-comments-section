import ReplyIcon from "../assets/icon-reply.svg";
import DeleteIcon from "../assets/icon-delete.svg";
import EditIcon from "../assets/icon-edit.svg";
import DeletePopupModalComponent from "./DeletePopupModalComponent";
import RepCommentContainer from "./RepCommentContainer";
import { useState, useRef, useEffect } from "react";

const RepliedCommentComponent = ({ src, name, seen, content, count }) => {
  const [score, setScore] = useState(count);
  const [click, setClick] = useState();
  const [active, setActive] = useState();
  const popupModal = useRef(null);
  const deleteCommentBtn = useRef(null);
  const repliedCommentContainer = useRef(null);
  const updateCommentBtn = useRef(null);
  const updateComment = useRef(null);
  const updateArea = useRef(null);
  const replyBtnDesktop = useRef(null);
  const replyBtnMobile = useRef(null);

  useEffect(() => {
    deleteCommentBtn.current.addEventListener("click", (e) => {
      if (e) {
        popupModal.current.style.display = "flex";
      }
    });
    updateCommentBtn.current.addEventListener("click", () => {
      updateComment.current.style.display = "block";
      updateArea.current.style.display = "none";
      updateCommentBtn.current.style.display = "none";
      updateComment.current.textContent = updateArea.current.value;
    });

    replyBtnDesktop.current.addEventListener("click", () => {
      setActive("active");
    });

    replyBtnMobile.current.addEventListener("click", () => {
      setActive("active");
    });
  });

  function increment() {
    setScore((score) => score + 1);
  }

  function decrement() {
    setScore((score) => score - 1);
  }

  function editComment(event) {
    if (event) {
      setClick("click");
    }
  }

  return (
    <>
      <div
        ref={repliedCommentContainer}
        className="bg-whiteClr w-3/4 ml-auto mb-5 p-5 rounded-xl lg:p-8"
      >
        <div className="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-5">
          <div className="hidden space-y-3 p-3  bg-veryLightGray rounded-xl h-fit lg:flex lg:flex-col lg:items-center">
            <button
              onClick={increment}
              className="text-xl text-lightGrayishBlue transition ease-in duration-200 hover:text-moderateBlue hover:font-bold"
            >
              +
            </button>
            <span className="text-2xl text-moderateBlue font-bold">
              {score}
            </span>
            <button
              onClick={decrement}
              className="text-xl text-lightGrayishBlue  transition ease-in duration-200 hover:text-moderateBlue hover:font-bold"
            >
              -
            </button>
          </div>
          <div className="grow shrink-0 basis-0 lg:space-y-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 mb-5 lg:mb-0">
                <img src={src} alt="Profile" className="w-10" />
                <span
                  style={{
                    display: name === "juliusomo" ? "inline" : "none",
                  }}
                  className="bg-moderateBlue px-2.5 py-0.5 rounded-sm text-whiteClr font-medium"
                >
                  you
                </span>
                <span className="text-darkBlue font-bold">{name}</span>
                <span className="text-grayishBlue">{seen}</span>
              </div>
              <button
                ref={replyBtnDesktop}
                style={{
                  display: name === "juliusomo" ? "none" : "flex",
                }}
                className="hidden space-x-2 lg:flex lg:items-center transition ease-in duration-200 hover:opacity-30"
              >
                <img src={ReplyIcon} alt="Reply Icon" />
                <span className="text-moderateBlue font-bold">Reply</span>
              </button>

              <div
                style={{ display: name === "juliusomo" ? "flex" : "none" }}
                className="flex items-center space-x-5"
              >
                <button
                  ref={deleteCommentBtn}
                  className="flex items-center space-x-2 transition duration-200 ease-in hover:opacity-30"
                >
                  <img src={DeleteIcon} alt="Delete Icon" />
                  <span className="text-softRed font-medium">Delete</span>
                </button>
                <button
                  onClick={editComment}
                  className="flex items-center space-x-2 transition duration-200 ease-in hover:opacity-30"
                >
                  <img src={EditIcon} alt="Edit Icon" />
                  <span className="text-moderateBlue font-medium">Edit</span>
                </button>
              </div>
            </div>
            <p
              ref={updateComment}
              style={{ display: click === "click" ? "none" : "block" }}
              className="text-grayishBlue font-medium"
            >
              {content}
            </p>
            <textarea
              ref={updateArea}
              style={{ display: click === "click" ? "block" : "none" }}
              rows="5"
              className="hidden w-full rounded-xl border border-moderateBlue px-6 py-5 text-darkBlue focus:outline-none"
            ></textarea>

            <button
              ref={updateCommentBtn}
              style={{ display: click === "click" ? "inline-block" : "none" }}
              className="float-right bg-moderateBlue rounded-xl px-7 py-3 text-whiteClr uppercase transition ease-in duration-200 hover:opacity-30"
            >
              Update
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex space-x-5 px-4 py-2 bg-veryLightGray rounded-xl lg:hidden">
              <button
                onClick={increment}
                className="text-xl text-lightGrayishBlue transition ease-in duration-200 hover:text-moderateBlue hover:font-bold"
              >
                +
              </button>
              <span className="text-2xl text-moderateBlue font-bold">
                {score}
              </span>
              <button
                onClick={decrement}
                className="text-xl text-lightGrayishBlue transition ease-in duration-200 hover:text-moderateBlue hover:font-bold"
              >
                -
              </button>
            </div>
            <button
              ref={replyBtnMobile}
              className="flex items-center space-x-2 transition ease-in duration-200 lg:hidden hover:opacity-30"
            >
              <img src={ReplyIcon} alt="Reply Icon" />
              <span className="text-moderateBlue font-bold">Reply</span>
            </button>
          </div>
        </div>
      </div>

      <RepCommentContainer active={active} />

      <DeletePopupModalComponent
        modal={popupModal}
        repliedCommentContainer={repliedCommentContainer}
      />
    </>
  );
};

export default RepliedCommentComponent;
