import React from "react";
import LiveSeacrh from "./LiveSearch";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        Header
        <LiveSeacrh searchNews={this.props.searchNews} />
      </header>
    );
  }
}
