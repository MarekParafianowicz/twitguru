import React from 'react';

class TweetColumn extends React.Component {
  constructor(props) {
    super(props);
    this.getTweets = this.getTweets.bind(this);
    this.state = { tweets: '' };
  }

  componentDidMount() {
    this.getTweets();
  }

  getTweets() {
    fetch('/tweets.json').then((response) => {
      return response.json();
    }).then((json) => {
      this.setState({ tweets: json.test })
    });
  }

  render() {
    return (
      <div>
        <p>Test {this.props.hashTag}</p>
        <p>JSON: {this.state.tweets}</p>
      </div>
    );
  }
}
export default TweetColumn;
