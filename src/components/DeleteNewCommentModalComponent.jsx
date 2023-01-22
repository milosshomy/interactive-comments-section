const DeleteNewCommentModalComponent = ({ modal, newComment }) => {
  function cancelModal(event) {
    const modal = event.target.offsetParent;
    modal.style.display = "none";
  }

  function removeComment(event) {
    const modal = event.target.offsetParent;
    modal.style.display = "none";
    newComment.current.style.display = "none";
  }
  return (
    <div
      ref={modal}
      className="hidden fixed inset-0 justify-center items-center before:bg-gray-400 before:opacity-50 before:fixed before:inset-0 before:-z-10"
    >
      <div className="bg-whiteClr rounded-xl px-8 py-10 max-w-md space-y-6">
        <h3 className="text-darkBlue text-2xl font-medium">Delete Comment</h3>
        <p className="text-grayishBlue">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="flex justify-between items-center space-x-5">
          <button
            onClick={cancelModal}
            className="grow shrink-0 basis-0 py-4 text-whiteClr rounded-xl bg-grayishBlue uppercase"
          >
            No, Cancel
          </button>
          <button
            onClick={removeComment}
            className="grow shrink-0 basis-0 py-4 text-whiteClr rounded xl bg-softRed uppercase"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteNewCommentModalComponent;
