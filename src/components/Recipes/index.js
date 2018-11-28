import React, { Component } from 'react';
import RecipesContainer from './RecipesContainer';
import cocktails from '../../data/cocktails';

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: cocktails
    };
  }

  render() {
    const { recipes } = this.state;
    return (
      <RecipesContainer recipes={recipes} />
    );
  }
}

export default Recipes;
