import React, { Component } from 'react';
import '../../App.css';
import { RecipesList } from '../../components';
import {getIngredients, getRecipes} from '../../lib/api';
import styles from './styles';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      ingredients: []
    }
  }
  async componentDidMount() {
    let recipesRet = await getRecipes();
    if (!recipesRet.error) {
      this.setState({recipes: recipesRet.recipes});
    }

    let ingRet = await getIngredients();
    if (!ingRet.error) {
      this.setState({ingredients: ingRet.ingredients});
    }
  }
  render() {
    const { recipes, ingredients } = this.state;
    return (
      <div style={styles.container}>
        <RecipesList recipes={recipes} ingredients={ingredients}/>
      </div>
    )
  }
}