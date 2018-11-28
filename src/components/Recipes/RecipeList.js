import React from 'react';
import PropTypes from 'prop-types';

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

RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape).isRequired
}

export default RecipesList;
