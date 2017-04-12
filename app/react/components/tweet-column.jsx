import React from 'react';

class TweetColumn extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // handleChange(e) {
  //   this.props.onHashTagChange(e.target.value);
  // }

  // handleSubmit(e) {
  //   console.log(`Props: ${this.props.hashTag}`);
  //   e.preventDefault();
  // }

  render() {
    return (
      <p>Test {this.props.hashTag}</p>
    );
  }
}
export default TweetColumn;
