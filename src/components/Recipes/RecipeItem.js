import React from 'react';
import { Container, Title, Ingredients, Ingredient } from './RecipeStyles';

const Recipe = ({
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

export default Recipe;
