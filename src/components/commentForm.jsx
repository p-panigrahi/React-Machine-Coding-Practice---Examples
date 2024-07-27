import React, { useState } from "react";

const commentForm = ({ addComment }) => {
  const [comment, setComment] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(comment);
      setComment("");
    }
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <textarea
          value={comment}
          placeholder="Write Your Comment...."
          rows="3"
          cols="40"
          onChange={(e) => setComment(e.target.value)}
        />
        <br />
        <button id="btn-1">Submit</button>
      </form>
    </div>
  );
};

export default commentForm;
