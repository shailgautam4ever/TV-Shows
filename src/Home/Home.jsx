import React, { Component } from "react";
import App from "../App";
import { Route, Switch } from "react-router";
import SingleShow from "./SingleShow";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      shows: null,
      searchedShows: null,
    };
  }

  componentDidMount() {
    fetch("http://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((result) => {
        console.log("result ", result[0]);
        this.setState({ shows: result });
        console.log(this.state.shows);
      })
      .catch((err) => console.log("Error message", err));
  }
  searchShows = (value) => {
    if (!value) {
      this.setState({ searchedShows: null });
    } else {
      fetch(`http://api.tvmaze.com/search/shows?q=${value}`)
        .then((res) => res.json())
        .then((data) => {
          // const searchedShow = [];
          // data.forEach((v) => {
          //   searchedShow.push(v.show);
          // });
          const searchedShows = data.map((v) => v.show);
          this.setState({ searchedShows });
        });
    }
  };
  render() {
    const { shows, searchedShows } = this.state;
    return (
      <>
        <Switch>
          <Route path="/shows/:showId">
            <SingleShow shows={shows} />
          </Route>
          <Route path="/">
            <App
              shows={shows}
              searchShows={this.searchShows}
              searchedShows={searchedShows}
            />
          </Route>
          <Route></Route>
        </Switch>
      </>
    );
  }
}
