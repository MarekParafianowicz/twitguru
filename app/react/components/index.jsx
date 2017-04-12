import React from 'react';
import HashForm from './hash-form.jsx'
import TweetColumn from './tweet-column.jsx'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.handleHashTagChange = this.handleHashTagChange.bind(this);
    this.handleHashTagSubmit = this.handleHashTagSubmit.bind(this);
    this.generateHashTagColumns = this.generateHashTagColumns.bind(this);
    this.state = {
      hashTag: '',
      submitedHashTag: [],
    };
  }

  handleHashTagChange(hashTag) {
    this.setState({hashTag: hashTag})
  }

  handleHashTagSubmit(hashTag) {
    const prevState = this.state.submitedHashTag;
    prevState.push(hashTag);
    this.setState({submitedHashTag: prevState})
  }

  generateHashTagColumns() {
    const hashArray = this.state.submitedHashTag;
    return hashArray.map((hash) => <TweetColumn key={hash} hashTag={hash} />);
  }

  render() {
    const hashTag = this.state.hashTag;
    return(
      <div>
        <HashForm
          hashTag={hashTag}
          onHashTagChange={this.handleHashTagChange}
          onHashTagSubmit={this.handleHashTagSubmit} />
        <div>
          {this.generateHashTagColumns()}
        </div>
      </div>
    );
  }
}

export default Index;
