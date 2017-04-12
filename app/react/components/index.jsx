import React from 'react';
import HashForm from './hash-form.jsx'
import TweetColumn from './tweet-column.jsx'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.handleHashTagChange = this.handleHashTagChange.bind(this);
    this.handleHashTagSubmit = this.handleHashTagSubmit.bind(this);
    this.state = {
      hashTag: '',
      submitedHashTag: '',
    };
  }

  handleHashTagChange(hashTag) {
    this.setState({hashTag: hashTag})
  }

  handleHashTagSubmit(hashTag) {
    this.setState({submitedHashTag: hashTag})
    console.log(`State: ${this.state.submitedHashTag}`);
  }

  render() {
    const hashTag = this.state.hashTag;

    return(
      <div>
        <HashForm
          hashTag={hashTag}
          onHashTagChange={this.handleHashTagChange}
          onHashTagSubmit={this.handleHashTagSubmit} />
        <TweetColumn hashTag={this.state.submitedHashTag} />
      </div>
    );
  }
}

export default Index;
