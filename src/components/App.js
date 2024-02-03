import React from "react";
import video from "../data/video.js";
import VidView from "./VidView";
import Header from "./Header";
import Filter from "./Filter";


function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VidView 
      video = { video }
      />
      <Header
      title = { video.title }
      />
      <Filter
      views = { video.views }
      dateUploaded = { video.createdAt }
      upvotes = { video.upvotes }
      downvotes = { video.downvotes }
      comments = { video.comments }
      />
      {/* <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      /> */}
    </div>
  );
}

export default App;
