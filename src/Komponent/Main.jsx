import React from "react";
import Api from "./Api";
import Footer from "./Footer";
import Header from "./Header";
import "./Main.css";

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };

    this.searchNews = this.searchNews.bind(this);
  }

  searchNews = (value) => {
    this.setState({ search: value });
  };

  render() {
    return (
      <div>
        <Header searchNews={this.searchNews} />
        <Api
          search={this.state.search}
        />
        <Footer />
      </div>
    );
  }
}
