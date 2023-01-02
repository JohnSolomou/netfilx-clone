import { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import "./home.scss";

const Home = ({ type }) => {
  // eslint-disable-next-line
  const [lists, setLists] = useState([]);
  // eslint-disable-next-line
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              "Content-Type": "text/json",
              accept: "text/json",
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTA1ZjliZTRiZmEzYTBhOWMxYTQ5ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjYyMTE3OCwiZXhwIjoxNjczMDUzMTc4fQ.QcM-LpBXyuYLIUi004CIP99aYqVDua2WNaiIspCawKY",
            },
          }
        );
        // console.log(res.data);
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list, i) => (
        <List
          list={list}
          key={i}
          // name="Access-Control-Allow-Origin"
          // value="http://localhost:3000"
        />
      ))}
    </div>
  );
};

export default Home;
