import React from "react";

const commentList = ({ comments, fn }) => {
  return (
    <div>
      <h1>Comments</h1>
      {comments.length === 0 ? (
        <p>Comments is not Found</p>
      ) : (
        <ul>
          {comments?.map((items, index) => (
            <li key={index}>
              <div id="item">{items}{" "}</div>
              <div>
                <button onClick={() => fn(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default commentList;
