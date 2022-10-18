import "./featured.scss";
import { PlayArrow, InfoOutlined } from "@material-ui/icons";
const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        // width="100%"
        src="https://cdn.pixabay.com/photo/2022/10/07/07/13/alps-7504344_960_720.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://cdn.pixabay.com/photo/2018/04/10/23/22/silhouette-3309171_960_720.png"
          alt=""
        />
        <span className="desc">
          The Hills come alive with the sounds of music
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
