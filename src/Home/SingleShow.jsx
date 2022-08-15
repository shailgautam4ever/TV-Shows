import React, { Component } from "react";
import { withRouter } from "react-router";
import Cast from "../Component/Cast/Cast";
import { Table, Tag, Space } from "antd";
import { Tabs } from "antd";
import "./SingleShow.css";
import Loading from "../Component/Cast/Loading/Loading";

const { TabPane } = Tabs;

class SingleShow extends Component {
  constructor() {
    super();
    this.state = {
      Singleshow: [],
      cast: [],
      episodes: [],
    };
  }
  componentDidMount() {
    console.log(this.props);
    const { shows, match } = this.props;
    const { showId } = match.params;
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then((res) => res.json())
      .then((show) => {
        console.log(show);

        this.setState({ Singleshow: show });
      })
      .catch((err) => console.log(err));

    fetch(`https://api.tvmaze.com/shows/${showId}/cast`)
      .then((res) => res.json())
      .then((cast) => {
        console.log("Cast Data", cast);
        this.setState({ cast });
      });

    fetch(`https://api.tvmaze.com/shows/${showId}/episodes`)
      .then((res) => res.json())
      .then((episodes) => {
        console.log("data", episodes);
        this.setState({ episodes });
      });
  }
  //   // http://api.tvmaze.com/shows/8/cast

  dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  columns = [
    // {
    //   title: "Season",
    //   dataIndex: "season",
    //   key: "id",
    // },
    {
      title: "Episode",
      dataIndex: "number",
      key: "id",
      render: (data, x) => {
        return (
          <p>
            S{x.season} E{data}
          </p>
        );
      },
    },
    {
      title: "Poster",
      dataIndex: "image",
      key: "id",
      render: (data) => {
        return <img src={data.medium} width={220} />;
      },
    },
    {
      title: "Episode Name",
      dataIndex: "name",
      key: "id",
    },
    {
      title: "Duration",
      dataIndex: "runtime",
      key: "id",
      render: (data) => {
        return <p>{data} min</p>;
      },
    },
  ];

  render() {
    const { Singleshow, cast, episodes } = this.state;
    const a = Singleshow.summary;
    if (!Singleshow.genres) return <Loading />;
    return (
      <div className="df-dc">
        <div className="single-show-container">
          {renderShowImg(Singleshow.image?.medium)}
          {/* BASIC DETAILS */}
          <div className="p-10">
            <div className="sub-container-df">
              <span className="title">{Singleshow.name}</span>
              <span>{Singleshow?.genres.join(", ")}</span>
              <div className="">
                <span>
                  <b>About the show</b>
                </span>
                <span>{a}</span>
              </div>
              <div>
                <span>
                  <b>Rating:</b>{" "}
                </span>
                <span>{Singleshow.rating?.average}</span>
              </div>
            </div>
            {/* TABS starts */}
            {/* <div></div> */}
            <div className="">
              <Tabs
                defaultActiveKey="1"
                // onChange={callback}
              >
                <TabPane tab="Cast" key="1">
                  <Cast cast={cast} />
                </TabPane>
                <TabPane tab="Episodes" key="2">
                  <Table dataSource={episodes} columns={this.columns} />;
                </TabPane>
                {/* <TabPane tab="Tab 3" key="3">
                  Content of Tab Pane 3
                </TabPane> */}
              </Tabs>
            </div>
          </div>
        </div>

        <div className="footer">Help Terms Sign in Cookies Privacy Policy</div>
      </div>
    );
  }
}

const renderShowImg = (img) => {
  return (
    <div className="single-show-sub-container">
      <img src={img}></img>
    </div>
  );
};

export default withRouter(SingleShow);
