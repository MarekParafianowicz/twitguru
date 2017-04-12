import React from 'react';
import HashForm from './hash-form.jsx'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.handleHashTagChange = this.handleHashTagChange.bind(this);
    this.state = {hashTag: ''};
  }

  handleHashTagChange(hashTag) {
    this.setState({hashTag: hashTag})
  }

  render() {
    const hashTag = this.state.hashTag;

    return(
      <div>
        <HashForm
          hashTag={hashTag}
          onHashTagChange={this.handleHashTagChange} />
      </div>
    );
  }
}

export default Index;
