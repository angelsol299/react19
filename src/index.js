import React from "react";
import ReactDOM from "react-dom";
import CommentsDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>warning</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentsDetail
          author="angel"
          date="Today at 20:00"
          comment="Great job"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentsDetail
          author="mario"
          date="Yesterday at 02:10"
          comment="Lets do it"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentsDetail
          author="rey"
          date="Sunday at 14:30"
          comment="Yes why not"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentsDetail
          author="manuela"
          date="Saturday at 10:32"
          comment="Doit now"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
