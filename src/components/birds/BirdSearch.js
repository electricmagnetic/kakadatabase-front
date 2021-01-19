import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

import 'react-bootstrap-typeahead/css/Typeahead.css';
import { processBirds, getCriteria, filterBirds } from './search/helpers';
import {
  generateTypeaheadOptions,
  generateTypeaheadToken,
  generateTypeaheadMenuItemChildren,
} from './search/typeahead';

import Bird from './Bird';

import './BirdSearch.scss';

const BirdSearch = ({ birds, ...others }) => {
  const [selected, setSelected] = useState([]);

  const processedBirds = processBirds(birds);
  const criteria = getCriteria(processedBirds);
  const options = generateTypeaheadOptions(criteria);
  const filteredBirds =
    selected.length > 0 ? filterBirds(processedBirds, selected) : processedBirds;

  // Intercept props passed to bird and replace type 'search' with type 'card'
  const birdProps = Object.assign({}, others, { type: 'card' });

  return (
    <div className="BirdSearch">
      <section>
        <Typeahead
          className="BirdTypeahead mb-3"
          options={options}
          shouldSelectHint={(shouldSelect, e) => e.keyCode === 13 || shouldSelect}
          highlightOnlyResult
          name="bird"
          placeholder="Type band symbol, colour, name or primary (metal) band"
          id="bird"
          ignoreDiacritics={false}
          maxResults={100}
          paginationText="Display more…"
          multiple
          selected={selected}
          onChange={selected => {
            setSelected(selected);
          }}
          labelKey={option => option.label}
          renderToken={(...props) => generateTypeaheadToken(...props)}
          renderMenuItemChildren={(...props) => generateTypeaheadMenuItemChildren(...props)}
        />
      </section>
      <div className="row">
        {filteredBirds.map(bird => (
          <Bird bird={bird} key={bird.id} {...birdProps} />
        ))}
      </div>
    </div>
  );
};

export default BirdSearch;
