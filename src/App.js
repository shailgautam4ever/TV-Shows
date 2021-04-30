import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import Loading from "./Component/Cast/Loading/Loading";

const { Search } = Input;

class App extends React.Component {
  suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

  render() {
    const { shows, searchShows, searchedShows } = this.props;
    if (!shows) return <Loading />;
    return (
      <>
        <p className="alignment c-1">List of your Favourite shows</p>
        <div>
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            suffix={this.suffix}
            onSearch={searchShows}
            onChange={(e) => searchShows(e.target.value)}
          />
        </div>
        <div className="list-container body">
          {searchedShows
            ? searchedShows.map((show, i) => (
                <div className="content">
                  <Link to={`/shows/${show.id}`}>
                    <img src={show.image?.medium}></img>
                  </Link>
                  <span className="list ">{show.name}</span>
                  <span className="list ">{show.genres.join(", ")}</span>
                  <span className="list ">{show.language}</span>
                  <span className="list ">{show.type}</span>
                </div>
              ))
            : shows.map((show, i) => (
                <div className="content">
                  <Link to={`/shows/${show.id}`}>
                    <img src={show.image?.medium}></img>
                  </Link>
                  <span className="list ">{show.name}</span>
                  <span className="list ">{show.genres.join(", ")}</span>
                  <span className="list ">{show.language}</span>
                  <span className="list ">{show.type}</span>
                </div>
              ))}
        </div>
      </>
    );
  }
}

export default App;
