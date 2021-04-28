import React from 'react';
import '../Form/form.css'

function Form(props){
   return(
  <div className="form-container">
            <form action="" onSubmit={props.submit}>
                <label htmlFor="num">Paragraphs:</label>
                <input type="number" name="num" value={props.value} onChange={props.change}></input>
                <button>Generate</button>
            </form>
        </div>  
     )
}

export default Form;