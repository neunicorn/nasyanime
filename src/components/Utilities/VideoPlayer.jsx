"use client";

import Youtube from "react-youtube";
import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";

const VideoPlayer = ({ ytId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const option = {
    width: "213",
    height: "170",
  };

  const handleCloseButton = () => {
    setIsOpen((state) => !state);
  };

  const Player = () => {
    return (
      <div className="fixed bottom-1 right-1 z-10 p-2 bg-slate-300 rounded">
        <button className="text-slate-700 z-10" onClick={handleCloseButton}>
          <XCircle size={24} />
        </button>
        <Youtube
          videoId={ytId}
          onReady={(e) => e.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };
  return (
    <>
      {isOpen ? (
        <Player />
      ) : (
        <button
          className="btn-card hover:bottom-2 transition-all ease-in-out fixed bottom-1 right-1 z-10"
          onClick={handleCloseButton}
        >
          open trailer
        </button>
      )}
    </>
  );
};

export default VideoPlayer;
