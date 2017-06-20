import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    // alert(`Hello, you submitted ${this.state.value}`);
    // need this line to below to pass the value from the input to the index file so that it can be used there
    this.props.onSearch(this.state.value);
    event.preventDefault(); 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Ingredient:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Search;