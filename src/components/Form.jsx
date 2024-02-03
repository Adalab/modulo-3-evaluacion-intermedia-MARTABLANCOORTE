function Form() {

    return (
      <>
        <h3>Añadir una nueva frase</h3>
        <form>
            <label htmlFor= "phraseadd"> Frase: 
                <input type= "text" name="phraseadd" id="phraseadd" placeholder="escribe tu frase favorita"/>
            </label>
            <label htmlFor= "characteradd"> Frase: 
                <input type= "text" name="characteradd" id="characteradd" placeholder="escribe el personaje"/>
            </label>
            <input type= "button" value="Añadir una nueva frase"/>
        </form>
      </>
    );
  }
  
  export default Form;