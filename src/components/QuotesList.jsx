import PropTypes from 'prop-types';

import QuoteItem from "./QuoteItem";

function QuotesList({ phrases, Characters }) {

  const htmlPhrases = phrases.map((phrase, idx)  => (
    <li key={idx}>
      <QuoteItem
        quote={phrase.quote}
        character={phrase.character}
      />
    </li>
  ));

  const htmlCharacters = Characters.map((character, idx)  => (
    <li key={idx}>
      <QuoteItem
        quote={Characters.quote}
        character={Characters.character}
      />
    </li>
  ));

  return (
    <ul>
      {htmlPhrases}
      {htmlCharacters}
    </ul>
  );
}

QuotesList.propTypes = {
  phrases: PropTypes.array,
  Characters: PropTypes.array
}

export default QuotesList;