import ReplyIcon from "../assets/icon-reply.svg";
import ReplyCommentComponent from "./ReplyCommentComponent";
import { useState } from "react";

const CommentComponent = ({ src, name, seen, content, count, replyName }) => {
  const [score, setScore] = useState(count);
  const [active, isActive] = useState();

  function increment() {
    setScore((score) => score + 1);
  }

  function decrement() {
    setScore((score) => score - 1);
  }

  function reply(event) {
    if (event) {
      isActive("active");
    }
  }

  return (
    <>
      <div className="bg-whiteClr w-full mb-5 p-5 rounded-xl lg:p-8">
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
                <span className="text-darkBlue font-bold">{name}</span>
                <span className="text-grayishBlue">{seen}</span>
              </div>
              <button
                onClick={reply}
                className="hidden space-x-2 lg:flex lg:items-center transition ease-in duration-200 hover:opacity-30"
              >
                <img src={ReplyIcon} alt="Reply Icon" />
                <span className="text-moderateBlue font-bold">Reply</span>
              </button>
            </div>
            <p className="text-grayishBlue font-medium">{content}</p>
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
              onClick={reply}
              className="flex items-center space-x-2 transition ease-in duration-200 lg:hidden hover:opacity-30"
            >
              <img src={ReplyIcon} alt="Reply Icon" />
              <span className="text-moderateBlue font-bold">Reply</span>
            </button>
          </div>
        </div>
      </div>

      <ReplyCommentComponent click={active} name={replyName} />
    </>
  );
};

export default CommentComponent;
