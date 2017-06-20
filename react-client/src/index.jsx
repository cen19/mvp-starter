import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/search.jsx';
import Recipes from './components/Recipes.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      recipes: []
    }
  }


  search (value) {
    console.log(`the client says "${value}" was submitted!`);
    $.ajax({
      url: '/recipes/search',
      method: 'POST',
      data: {
        ingredient: value
      },
      success: (data) => {
        console.log('post went through to the server')
        console.log(data);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  componentDidMount() {
    // initialization that requires DOM nodes shold go here. Good place to instantiate a network request to a endpoint
    $.ajax({
      url: '/recipes',
      method: 'GET',
      success: (data) => {
        console.log(data);
        this.setState({
          recipes: data
        })
      },
      error: (err) => {
        console.log(`err, ${JSON.stringify({err})}`);
      }
    });
  }


  // render the basic outline of the page, include components as necessary in the proper format! TAKE NOTE!!!
  render () {
    return (
      <div>
        <h1>Recipes!</h1>
        <Search onSearch={this.search.bind(this)} />
        <Recipes recipes={this.state.recipes} />

{/*create area for rendering the data put into recipes*/}
        
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));