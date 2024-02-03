import PropTypes from "prop-types";
import '../scss/App.scss'

function QuoteItem( {quote, character} ) {

  return (
    <>
      <h2 className="cards__quote">{quote}</h2>
      <h2 className="cards__character">{character}</h2>
    </>
  );
}

QuoteItem.propTypes = {
    quote: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
};

export default QuoteItem;