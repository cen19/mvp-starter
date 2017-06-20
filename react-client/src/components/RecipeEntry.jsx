import React from 'react';


const RecipeEntry = (props) => (
  <div> 
    <a href={props.recipe.sourceUrl}>{props.recipe.title}</a>
    <img href={props.recipe.sourceUrl}  src={props.recipe.imageUrl} />
  </div>
  // <div> {props.recipe.sourceUrl} </div>
)

export default RecipeEntry;