import React from 'react';
import BoilingVerdict from './boiling-verdict.jsx'


class HashForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {hashTag: ''};
  }

  handleChange(e) {
    // this.setState({hashTag: e.target.value});
    this.props.onHashTagChange(e.target.value);
  }

  handleSubmit(e) {
    this.setState({hashTag: this.props.hashTag});
    console.log(this.state.hashTag);
    e.preventDefault();
  }

  render() {
    const hashTag = this.props.hashTag;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Hashtag:
          <input type="text" value={hashTag} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default HashForm;
