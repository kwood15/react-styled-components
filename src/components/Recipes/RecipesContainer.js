import React from 'react';
import TilesContainer from '../TilesContainer';
import RecipeContainer from './RecipeContainer';

const RecipesContainer = ({ recipes }) => {
  return (
    <TilesContainer>
      {recipes.map(recipe => (
        <RecipeContainer key={recipe.name} {...recipe} />
      ))}
    </TilesContainer>
  );
}

export default RecipesContainer;
