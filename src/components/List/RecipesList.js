import React from 'react';

const styles = {
};

export default ({ data }) => (
  <div>
    { data.map((value, index) => {
      return <div key={index}>{value.title}</div>
    })}
  </div>
)