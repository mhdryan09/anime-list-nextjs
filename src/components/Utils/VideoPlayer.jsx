"use client";
import { useState } from "react";
import Youtube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="text-primary float-right bg-secondary px-3 mb-2"
          onClick={handleVideoPlayer}
        >
          X
        </button>
        <Youtube
          videoId={youtubeId}
          onReady={(e) => e.target.pauseVideo()}
          opts={option}
          onError={() => alert("Video not found")}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed bottom-5 right-5 w-36 bg-primary text-dark text-xl hover:bg-accent transition-all shadow-xl p-2 rounded-md"
      >
        {" "}
        Tonton Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
