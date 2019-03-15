import React, { Component } from 'react';
import '../../App.css';
import { RecipesList } from '../../components';
import { getRecipes } from '../../lib/api';
import styles from './styles';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    }
  }
  async componentDidMount() {
    let ret = await getRecipes();
    if (!ret.error) {
      this.setState({recipes: ret.recipes});
    }
  }
  render() {
    const { recipes } = this.state;
    return (
      <div style={styles.container}>
        <RecipesList data={recipes}/>
      </div>
    )
  }
}