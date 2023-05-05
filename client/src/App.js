import React from "react";

import CreatePost from "./components/CreatePost";
import ListPost from "./components/ListPost";

const App = () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <CreatePost />
      <hr />
      <h1>Posts</h1>
      <ListPost />
    </div>
  );
};

export default App;
