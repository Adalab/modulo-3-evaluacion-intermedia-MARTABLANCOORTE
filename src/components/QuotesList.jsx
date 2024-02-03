import PropTypes from 'prop-types';

import QuoteItem from "./QuoteItem";

function QuotesList({ phrases }) {

  const htmlPhrases = phrases.map((phrase, idx)  => (
    <li key={idx}>
      <QuoteItem
        quote={phrase.quote}
        character={phrase.character}
      />
    </li>
  ));

  return (
    <ul>
      {htmlPhrases}
    </ul>
  );
}


QuotesList.propTypes = {
  phrases: PropTypes.array,
}

export default QuotesList;