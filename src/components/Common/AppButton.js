import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = {
  button: {
    textDecoration: 'none'
  }
};

export default ({ link }) => (
  <Link to={link} style={styles.button}>
    <Button variant="contained" color="primary">What's for lunch</Button>
  </Link>
)