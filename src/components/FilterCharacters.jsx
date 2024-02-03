function FilterCharacters({handleFilterCharacters}) {
  const handleInputCharacter = (event) => {
    handleFilterCharacters(event.currentTarget.value);
  };
  return (
    <form>
      <label htmlFor="Characters">
        {" "}
        Filtrar por personajes:
        <select name="Characters" id="Characters" onInput={handleInputCharacter} >
          <option value="Todos">Todos</option>
          <option value="Ross">Ross</option>
          <option value="Monica">Monica</option>
          <option value="Joey">Joey</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Chandler">Chandler</option>
          <option value="Rachel">Rachel</option>
        </select>
      </label>
    </form>
  );
}

export default FilterCharacters;
