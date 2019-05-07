import React from "react";
import ReactDOM from "react-dom";
import CommentsDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentsDetail author="angel" />
      <CommentsDetail author="mario" />
      <CommentsDetail author="rey" />
      <CommentsDetail author="manuela" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
