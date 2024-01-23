import React from "react";
import ReactPlayer from "react-player";
import "./Video.css";
import MyVideo from "../videos/video1.mp4";
// import Control from "./Control";
// import { Container } from "@mui/material";
// import { Container } from "@material-ui/core";
// import { Player } from 'video-react';

const Video = () => {
  return (
    <div>
      {/* <ReactPlayer
        url={MyVideo}
        controls
        width="60%"
        height="auto"
        preload="auto"
           playing={true}
           muted={true}
        loop
        autoPlay={"autoplay"}
      /> */}
      <video
        width="60%"
        height="auto"
        preLoad="auto"
        loop
        autoPlay={"autoplay"}
        controls
        muted
        className="imgFrame"
      >
        <source src={MyVideo} typeof="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
     
    </div>
  );
};

export default Video;
