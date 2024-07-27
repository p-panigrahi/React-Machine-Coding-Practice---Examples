import React, { useState } from "react";
import CommentForm from "./components/commentForm";
import CommentList from "./components/commentList";
import "./App.css";
const App = () => {
  const [comments, setComments] = useState([]);

  const Comments = (newComments) => {
    setComments([...comments, newComments]);
  };
  const ComDelete = (comD) => {
    // console.log(comD);
    setComments(comments.filter((_, index) => index !== comD));
  };
  return (
    <div>
      <h1>Comment Feed</h1>
      <CommentForm addComment={Comments} />
      <CommentList comments={comments} fn={ComDelete} />
    </div>
  );
};

export default App;
