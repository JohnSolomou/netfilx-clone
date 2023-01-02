import { Add, PlayArrow, ThumbUpAltOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import "./listItem.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      try {
        let res = await axios.get("/movies/find/" + item, {
          method: "get",
          headers: {
            // ContentType: "text/json",
            // accept: "text/json",
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTA1ZjliZTRiZmEzYTBhOWMxYTQ5ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjYyMTE3OCwiZXhwIjoxNjczMDUzMTc4fQ.QcM-LpBXyuYLIUi004CIP99aYqVDua2WNaiIspCawKY",
          },
        });
        setMovie(res.data);
        // console.log(res.data.trailer);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="" />
        {isHovered && (
          <div>
            <video
              src={movie.video}
              autoPlay={true}
              loop
              // name="Access-Control-Allow-Origin"
              // value="http://localhost:3000"
            />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow />
                <Add />
                <ThumbUpAltOutlined />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
