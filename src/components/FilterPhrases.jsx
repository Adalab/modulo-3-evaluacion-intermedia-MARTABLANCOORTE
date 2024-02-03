function FilterPhrases(handleFilterPhrases) {

  const handleInput = (event) => {
    handleFilterPhrases(event.currentTarget.value);

    console.log(event.currentTarget.value);
  };

    return (
      <form>
        <label htmlFor= "phrases"> Filtrar por frase:
            <input type="search" name="phrases" id="phrases" placeholder="Busca tu frase favorita..." onInput={handleInput} />
        </label>
      </form>
    );
  }
  
  export default FilterPhrases;