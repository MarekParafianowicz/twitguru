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
      submitedHashTag: [],
    };
  }

  handleHashTagChange(hashTag) {
    this.setState({hashTag})
  }

  handleHashTagSubmit(hashTag) {
    const prevState = this.state.submitedHashTag;
    prevState.push(hashTag);
    this.setState({submitedHashTag: prevState})
  }

  render() {
    const { hashTag, submitedHashTag } = this.state;
    return(
      <div>
        <HashForm
          hashTag={hashTag}
          onHashTagChange={this.handleHashTagChange}
          onHashTagSubmit={this.handleHashTagSubmit} />
        <div>
          {submitedHashTag.map((hash) => <TweetColumn key={hash} hashTag={hash} />)}
        </div>
      </div>
    );
  }
}

export default Index;
