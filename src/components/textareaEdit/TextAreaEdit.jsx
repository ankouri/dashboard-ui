import React from "react";
import "./textareaedit.css";

export default function TextAreaEdit({ column, setColumn }) {

  const handleBlurTextArea = (e) =>{
    setColumn(!column.state);
    setColumn({value: e.target.value})
    console.log(column);
  }
  
  return (
    <div>
      <textarea
        rows="1"
        cols="18"
        placeholder={ column.field }
        defaultValue={ column.value }
        className="editTextarea"
        onBlur={(e) => handleBlurTextArea(e)}
      />
    </div>
  );
}
