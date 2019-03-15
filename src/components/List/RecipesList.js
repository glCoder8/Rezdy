import React from 'react';

const styles = {
  recipeContainer: {
    backgroundColor: '#bbcfa7',
    borderWidth: 1,
    borderColor: '#bbbbbb',
    borderStyle: 'solid',
    marginBottom: 10,
    padding: 10
  },
  recipe: {
    fontWeight: 'bold'
  },
  ingredient: {

  }
};

export default ({ data }) => (
  <div>
    { data.map((value, index) => {
      return (
        <div style={styles.recipeContainer} key={index}>
          <div style={styles.recipe} key={index}>{value.title}</div>
          <p>What you will need</p>
          <ul>
            { value.ingredients.map((ingredient, ing_index) => {
              return <li style={styles.ingredient} key={ing_index}>{ingredient}</li>
            })}
          </ul>
        </div>
      )
    })}
  </div>
)