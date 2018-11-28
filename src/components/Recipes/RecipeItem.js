import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Ingredients, Ingredient } from './RecipeStyles';

const RecipesItem = ({
  name,
  ingredients
}) => (
  <Container>
    <Title>{name}</Title>
    <Ingredients>
      {ingredients.map((ingredient, i) => (
        <Ingredient key={i}>
          <span className="name">{ingredient.ingredient}</span>
          {' '}
          <span className="amount">{ingredient.amount}</span>
          {' '}
          <span className="unit">{ingredient.unit}</span>
        </Ingredient>
      ))}
    </Ingredients>
  </Container>
);

RecipesItem.propTypes = {
  name: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    ingredient: PropTypes.shape.isRequired
  })).isRequired
}

export default RecipesItem;
