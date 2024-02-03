import {useState} from 'react';

import '../scss/App.scss'

import Header from './Header';
import FilterPhrases from './FilterPhrases';
import FilterCharacters from './FilterCharacters';
import QuotesList from './QuotesList';
import Form from './Form';

import dataPhrasesAndCharacters from '../data/phrases.json';

function App() {

  //Variable Estado del Array
  const [phrases] = useState (dataPhrasesAndCharacters);
  const [Characters] = useState (dataPhrasesAndCharacters);

  // Filtro de Frases
  const [FilterPhrase, setFilterPhrase] = useState ('');

  const handleFilterPhrases = (filterPhraseValue) => {
    setFilterPhrase(filterPhraseValue);
  };

  const filteredPhrases = phrases.filter( dataPhrase => dataPhrase.quote.toLowerCase().includes(FilterPhrase.toLowerCase()) );

  // Filtro de Personajes

  const [FilterCharacter, setFilterCharacter] = useState ('');

  const handleFilterCharacters = (filterCharacterValue) => {
    setFilterCharacter(filterCharacterValue);
  };

  const filteredCharacters = Characters.filter( dataCharacter => dataCharacter.character.toLowerCase().includes(FilterCharacter.toLowerCase()) );

 

  return (
    <div className='all'>
      <Header/>
      <main>
        <FilterPhrases handleFilterPhrases={handleFilterPhrases}/>
        <FilterCharacters handleFilterCharacters={handleFilterCharacters}/>
        <QuotesList phrases={filteredPhrases} Characters={filteredCharacters}/>
        <Form/>
    </main>
    </div>
  )
}

export default App
