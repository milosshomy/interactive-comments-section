import Juliusomo from "../assets/avatars/image-juliusomo.png";
import DeleteIcon from "../assets/icon-delete.svg";
import EditIcon from "../assets/icon-edit.svg";
import ReplyIcon from "../assets/icon-reply.svg";
import DeletePopupModalComponent from "./DeletePopupModalComponent";
import { useState, useRef, useEffect } from "react";

const Reply = ({
  name,
  repliedCommentContainerEl,
  commentContent,
  username,
  replyBtn,
  box,
  editButtonsContainer,
}) => {
  const [score, setScore] = useState(0);
  const [click, setClick] = useState();
  const updateCommentBtn = useRef(null);
  const updateArea = useRef(null);
  const popupModal = useRef(null);
  const deleteCommentBtn = useRef(null);

  useEffect(() => {
    deleteCommentBtn.current.addEventListener("click", (e) => {
      if (e) {
        popupModal.current.style.display = "flex";
      }
    });

    updateCommentBtn.current.addEventListener("click", () => {
      commentContent.current.style.display = "block";
      updateArea.current.style.display = "none";
      commentContent.current.textContent = updateArea.current.value;
      updateCommentBtn.current.style.display = "none";
    });
  });

  function increment() {
    setScore(score + 1);
  }

  function decrement() {
    setScore(score - 1);
  }

  function editComment(event) {
    if (event) {
      setClick("click");
    }
  }

  return (
    <>
      <div
        ref={repliedCommentContainerEl}
        className="hidden bg-whiteClr w-3/4 ml-auto mb-5 p-5 rounded-xl lg:p-8"
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
                <img src={Juliusomo} alt="Profile" className="w-10" />
                <span
                  ref={box}
                  style={{
                    display: name === "juliusomo" ? "inline" : "none",
                  }}
                  className="bg-moderateBlue px-2.5 py-0.5 rounded-sm text-whiteClr font-medium"
                >
                  you
                </span>

                <span ref={username} className="text-darkBlue font-bold">
                  {name}
                </span>
                <span className="text-grayishBlue">1sec ago</span>
              </div>
              <button
                ref={replyBtn}
                style={{
                  display: name === "juliusomo" ? "none" : "flex",
                }}
                className="hidden space-x-2 lg:flex lg:items-center transition ease-in duration-200 hover:opacity-30"
              >
                <img src={ReplyIcon} alt="Reply Icon" />
                <span className="text-moderateBlue font-bold">Reply</span>
              </button>

              <div
                ref={editButtonsContainer}
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
              style={{ display: click === "click" ? "none" : "block" }}
              ref={commentContent}
              className="text-grayishBlue font-medium"
            ></p>
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
                className="text-xl text-lightGrayishBlue  transition ease-in duration-200 hover:text-moderateBlue hover:font-bold"
              >
                -
              </button>
            </div>
            <button className="flex items-center space-x-2 transition ease-in duration-200 lg:hidden hover:opacity-30">
              <img src={ReplyIcon} alt="Reply Icon" />
              <span className="text-moderateBlue font-bold">Reply</span>
            </button>
          </div>
        </div>
      </div>

      <DeletePopupModalComponent
        repliedCommentContainer={repliedCommentContainerEl}
        modal={popupModal}
      />
    </>
  );
};

export default Reply;
