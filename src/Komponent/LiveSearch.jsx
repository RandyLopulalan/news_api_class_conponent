import React from "react";

export default class LiveSeacrh extends React.Component {
  render() {
    return (
      <div className="live_search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="search news..."
            className="live_search_input"
            onChange={(e) => this.props.searchNews(e.target.value.toLowerCase())}
          />{" "}
          <button type="submit" className="live_search_btn">
            Search
          </button>
        </form>
      </div>
    );
  }
}
