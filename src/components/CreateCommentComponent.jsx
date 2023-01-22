import Juliusomo from "../assets/avatars/image-juliusomo.png";
import { useEffect, useRef } from "react";

const CreateCommentComponent = ({ createdCommentContainer, commentText }) => {
  const createCommentBtn = useRef(null);
  const textArea = useRef(null);

  useEffect(() => {
    createCommentBtn.current.addEventListener("click", () => {
      createdCommentContainer.current.style.display = "block";
      commentText.current.textContent = textArea.current.value;
    });
  });

  return (
    <div className=" bg-whiteClr w-full mb-5 p-5 rounded-xl lg:p-8">
      <div className="flex justify-between items-start space-x-5">
        <img src={Juliusomo} alt="Profile Image" className="w-14" />
        <textarea
          ref={textArea}
          rows="5"
          placeholder="Add a comment..."
          className="grow shrink-0 basis-0 rounded-xl border border-moderateBlue px-6 py-5 text-darkBlue focus:outline-none"
        ></textarea>
        <button
          ref={createCommentBtn}
          className="bg-moderateBlue rounded-xl px-7 py-3 text-whiteClr uppercase transition ease-in duration-200 hover:opacity-30"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default CreateCommentComponent;
