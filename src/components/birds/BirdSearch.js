import React from 'react';

import Bird from './Bird';

const BirdSearch = ({ birds, ...others }) => {
  // Intercept props passed to bird and replace type 'search' with type 'card'
  const birdProps = Object.assign({}, others, { type: 'card' });

  return (
    <div className="BirdSearch">
      <section>{/* Search to go here */}</section>
      <div className="row">
        {birds.map(bird => (
          <Bird bird={bird} key={bird.id} {...birdProps} />
        ))}
      </div>
    </div>
  );
};

export default BirdSearch;
