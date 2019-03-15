import React, { Component } from 'react';
import '../../App.css';
import { AppButton } from '../../components';
import styles from './styles';

export default class Home extends Component {
  render() {
    return (
      <div style={styles.container}>
        <AppButton link={'/list'} />
      </div>
    )
  }
}