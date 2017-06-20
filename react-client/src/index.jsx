import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/search.jsx';
// import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      recipes: []
    }
  }


  search(term) {
    console.log(`${term} was submitted!`);
  }

  componentDidMount() {
    // initialization that requires DOM nodes shold go here. Good place to instantiate a network request to a endpoint
    // $.ajax({
    //   url: '/items', 
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log(`err, ${JSON.stringify({err})}`);
    //   }
    // });
  }


  // render the basic outline of the page, include components as necessary in the proper format! TAKE NOTE!!!
  render () {
    return (
      <div>
        <h1>Recipes!</h1>
        <Search onSearch={this.search.bind(this)} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));