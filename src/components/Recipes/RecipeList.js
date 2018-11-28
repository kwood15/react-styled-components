import React from 'react';
import TilesContainer from '../TilesContainer';
import RecipeItem from './RecipeItem';

const RecipesList = ({ recipes }) => {
  return (
    <TilesContainer>
      {recipes.map(recipe => (
        <RecipeItem key={recipe.name} {...recipe} />
      ))}
    </TilesContainer>
  );
}

export default RecipesList;
