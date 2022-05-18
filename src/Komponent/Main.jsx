import React from "react";
import Api from "./Api";
import Footer from "./Footer";
import Header from "./Header";
import "./Main.css";

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      search: "",
    };

    this.getApi = this.getApi.bind(this);
    this.searchNews = this.searchNews.bind(this);
  }

  getApi = (e) => {
    this.setState({ news: e });
  };

  searchNews = (value) => {
    console.log(value);
    this.setState({ search: value });
  };

  render() {
    return (
      <div>
        <Header searchNews={this.searchNews} />
        <Api
          getApi={this.getApi}
          news={this.state.news}
          search={this.state.search}
          category={this.state.category}
          country={this.state.country}
        />
        <Footer />
      </div>
    );
  }
}
