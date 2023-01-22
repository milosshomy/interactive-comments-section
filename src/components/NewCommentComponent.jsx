import Juliusomo from "../assets/avatars/image-juliusomo.png";
import DeleteIcon from "../assets/icon-delete.svg";
import EditIcon from "../assets/icon-edit.svg";
import { useState, useEffect, useRef } from "react";
import DeleteNewCommentModalComponent from "./DeleteNewCommentModalComponent";

const NewCommentComponent = ({ name, comment, newCommentContainer }) => {
  const [score, setScore] = useState(0);
  const deleteCommentBtn = useRef();
  const editComment = useRef();
  const textArea = useRef();
  const modal = useRef();
  const updateCommentBtn = useRef();

  function increment() {
    setScore(score + 1);
  }

  function decrement() {
    setScore(score - 1);
  }

  useEffect(() => {
    deleteCommentBtn.current.addEventListener("click", () => {
      modal.current.style.display = "flex";
    });

    editComment.current.addEventListener("click", () => {
      comment.current.style.display = "none";
      textArea.current.style.display = "block";
      updateCommentBtn.current.style.display = "inline-block";
    });

    updateCommentBtn.current.addEventListener("click", () => {
      textArea.current.style.display = "none";
      comment.current.style.display = "block";
      comment.current.textContent = textArea.current.value;
      updateCommentBtn.current.style.display = "none";
    });
  });

  return (
    <>
      <div
        ref={newCommentContainer}
        className="hidden bg-whiteClr w-full mb-5 p-5 rounded-xl lg:p-8"
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
                <span className="bg-moderateBlue px-2.5 py-0.5 rounded-sm text-whiteClr font-medium">
                  you
                </span>
                <span className="text-darkBlue font-bold">{name}</span>
                <span className="text-grayishBlue">1sec ago</span>
              </div>

              <div className="flex items-center space-x-5">
                <button
                  ref={deleteCommentBtn}
                  className="flex items-center space-x-2 transition duration-200 ease-in hover:opacity-30"
                >
                  <img src={DeleteIcon} alt="Delete Icon" />
                  <span className="text-softRed font-medium">Delete</span>
                </button>
                <button
                  ref={editComment}
                  className="flex items-center space-x-2 transition duration-200 ease-in hover:opacity-30"
                >
                  <img src={EditIcon} alt="Edit Icon" />
                  <span className="text-moderateBlue font-medium">Edit</span>
                </button>
              </div>
            </div>
            <p ref={comment} className="text-grayishBlue font-medium"></p>
            <textarea
              ref={textArea}
              rows="5"
              className="hidden w-full rounded-xl border border-moderateBlue px-6 py-5 text-darkBlue focus:outline-none"
            ></textarea>
            <button
              ref={updateCommentBtn}
              className="hidden float-right bg-moderateBlue rounded-xl px-7 py-3 text-whiteClr uppercase transition ease-in duration-200 hover:opacity-30"
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
          </div>
        </div>
      </div>

      <DeleteNewCommentModalComponent
        modal={modal}
        newComment={newCommentContainer}
      />
    </>
  );
};

export default NewCommentComponent;
