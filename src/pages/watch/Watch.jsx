import { ArrowBackOutlined } from "@material-ui/icons";
import React from "react";

import "./watch.scss";
function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress="true"
        controls
        src="https://player.vimeo.com/external/571167536.sd.mp4?s=c2aeceb1acd0a699367805b8528c2e1bbca9cb1f&profile_id=164&oauth2_token_id=57447761"
        type="video/mp4"
      />
    </div>
  );
}

export default Watch;
