import React from 'react';
import RecipeEntry from './RecipeEntry.jsx';

const Recipes = (props) => (
  <div>
    <h4> Recipes Component </h4>
    There are { props.recipes.length } recipes.
    { props.recipes.map(recipe => <RecipeEntry recipe={recipe}/>)}
  </div>
)

export default Recipes;