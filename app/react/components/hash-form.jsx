import React from 'react';


class HashForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.props.onHashTagChange(e.target.value);
  }

  handleSubmit(e) {
    console.log(`Props: ${this.props.hashTag}`);
    this.props.onHashTagSubmit(this.props.hashTag);
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
