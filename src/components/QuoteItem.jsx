import PropTypes from "prop-types";
import '../scss/App.scss';

function QuoteItem( {quote, character} ) {

  return (
    <>
      <h2 className="card">{quote}</h2>
      <h2 className="card">{character}</h2>
    </>
  );
}

QuoteItem.propTypes = {
    quote: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
};

export default QuoteItem;