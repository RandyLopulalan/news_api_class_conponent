import axios from "axios";
import React from "react";

export default class Api extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
    };
  }

  //`https://newsapi.org/v2/everything?q=${this.props.search}&pageSize=5&apiKey=55bfc216f16a4f40bce62049a80c1140`
  //`https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=55bfc216f16a4f40bce62049a80c1140`

componentDidMount(){
  axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=55bfc216f16a4f40bce62049a80c1140`)
    .then((res) => {
      const getNews = res.data.articles;
      this.setState({ news: getNews });
    });
}

componentDidUpdate(prevProps){
  console.log(prevProps);
  if(this.props.search !== prevProps.search)
  axios.get(`https://newsapi.org/v2/${!this.props.search?'top-headlines?country=us': `everything?q=${this.props.search}`}&pageSize=5&apiKey=55bfc216f16a4f40bce62049a80c1140`)
  .then((res) => {
      const getNews = res.data.articles;
      this.setState({ news: getNews });
    });
}


  render() {
    return (
      <div className="list_news">
        {this.state.news.map(
          ({ urlToImage, title, author, publishedAt, description, url }) => {
            return (
              <div key={title} className={`list_news_data`}>
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
