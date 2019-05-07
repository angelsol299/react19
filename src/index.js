import React from "react";
import ReactDOM from "react-dom";
import CommentsDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentsDetail
        author="angel"
        date="Today at 20:00"
        comment="Great job"
        avatar={faker.image.avatar()}
      />
      <CommentsDetail
        author="mario"
        date="Yesterday at 02:10"
        comment="Lets do it"
        avatar={faker.image.avatar()}
      />
      <CommentsDetail
        author="rey"
        date="Sunday at 14:30"
        comment="Yes why not"
        avatar={faker.image.avatar()}
      />
      <CommentsDetail
        author="manuela"
        date="Saturday at 10:32"
        comment="Doit now"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
