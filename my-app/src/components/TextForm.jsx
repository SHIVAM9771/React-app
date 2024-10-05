import React, { useState } from 'react'


export default function (props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState("Enter your Text here..");


  return (
    <>
      <div>
        <h1 className='my-3 mt-4 text-center'>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick} >Convert to Lowercase</button>
      </div>

      <div className="container my-4">
        <h1>Your Text Summary</h1>
        <p><strong>{text.split(" ").length}</strong> words and <strong>{text.length}</strong> characters</p>
        <p><strong>{0.008 * text.split(" ").length}</strong> Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>

    </>
  );
}
