import React from 'react';

const RecipeEntry = (props) => (
  <div src={props.recipe.sourceUrl}> {props.recipe.title} 
    <img src={props.recipe.imageUrl} />
  </div>
  // <div> {props.recipe.sourceUrl} </div>
)

export default RecipeEntry;