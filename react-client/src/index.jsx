import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import search from './components/search.jsx';
// import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      recipes: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log(`err, ${JSON.stringify({err})}`);
      }
    });
  }

    // search(thing) {
    //   console.log(`This thing was searched for: ${thing}`);
    // }

  render () {
    return (<div>
      <h1>Recipes!</h1>
      {/*<Recipes recipes={this.state.recipes}/>*/}
      <div> Input your ingredient here: 
        <input type="text"></input>
        <button> Search </button>
        </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));