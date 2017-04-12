import React from 'react';

class TweetColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweets: '' }
  }

  componentDidMount() {
    $.getJSON('/tweets', (response) => {
      this.setState({ tweets: response })
    });
  }

  render() {
    return (
      <div>
        <p>Test {this.props.hashTag}</p>
        <p>JSON: {this.state.tweets.test}</p>
      </div>
    );
  }
}
export default TweetColumn;
