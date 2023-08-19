import React from 'react';

const SingleComponent = ({data}) => {

  return (
    <div className="single-component">
      <h2>{data.title}</h2> 
      <p>{data.description}</p>
    </div>
  );

}

export default SingleComponent;