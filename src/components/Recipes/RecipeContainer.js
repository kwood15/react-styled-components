import React from 'react';
import { Recipe, Title, Ingredients, Ingredient } from './RecipeStyles';

const RecipeContainer = ({
  name,
  ingredients,
  amount
}) => (
  <Recipe>
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
  </Recipe>
);

export default RecipeContainer;
