import React from 'react';


const RecipeEntry = (props) => (
  <div> 
    <a href={props.recipe.sourceUrl}>{props.recipe.title}</a>
    <img src={props.recipe.imageUrl} />
  </div>
)

export default RecipeEntry;