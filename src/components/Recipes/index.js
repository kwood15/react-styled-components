import React, { Component } from 'react';
import RecipeList from './RecipeList';
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
      <RecipeList recipes={recipes} />
    );
  }
}

export default Recipes;
