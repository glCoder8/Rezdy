import React from 'react';

const styles = {
  recipeContainer: {
    backgroundColor: '#b3cf97',
    borderWidth: 1,
    borderColor: '#bbbbbb',
    borderStyle: 'solid',
    marginBottom: 10,
    padding: 10
  },
  recipe: {
    fontWeight: 'bold',
    fontSize: 22
  },
  ingredient: {
    backgroundColor: '#aeaea9',
    marginBottom: 5,
    padding: 5
  }
};

export default ({ recipes }) => (
  <div>
    { recipes.map((recipe, index) => {
      return (
        <div style={styles.recipeContainer} key={index}>
          <div style={styles.recipe} key={index}>{recipe.title}</div>
          <p>What you will need</p>
          <ul>
            { recipe.ingredients.map((ingredient, ing_index) => {
              return <li style={styles.ingredient} key={ing_index}>{ingredient}</li>
            })}
          </ul>
        </div>
      )
    })}
  </div>
)