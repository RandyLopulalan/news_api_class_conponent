import axios from "axios";
import React from "react";

export default class Api extends React.Component {

  componentDidMount() {
    //api call
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=55bfc216f16a4f40bce62049a80c1140`
      )
      .then((res) => {
        const news = res.data.articles;
        this.props.getApi(news);
      });
  }

  render() {
    return (
      <div className="list_news">
        {this.props.news.map(
          ({ urlToImage, title, author, publishedAt, description, url }) => {
              const isVisible = title?.toLowerCase().includes(this.props.search) || author?.toLowerCase().includes(this.props.search);
              const display = !isVisible? "hide":""
            return (
              <div key={title} className={`list_news_data ${display}`}>
                <img src={urlToImage} alt="" className="list_news_data_image" />
                <article>
                <h3 className="list_news_data_title">{title}</h3>
                <p className="list_news_data_author_date">{`${author} - ${publishedAt}`}</p>
                <p className="list_news_data_description">{description}</p>
                <p className="list_news_data_more_details">
                  <a href={url} target="_blank" rel="noreferrer">
                    More details
                  </a>
                </p>
                </article>
              </div>
            );
          }
        )}
      </div>
    );
  }
}
