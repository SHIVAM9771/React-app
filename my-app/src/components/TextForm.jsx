import React, { useState } from 'react'


export default function (props) {
  const handleUpClick = () => {
    if (text.length === 0) {
      props.showAlert("No Text Found", "danger")
      return;
    }
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted to Uppercase", "success")
  }
  const handleDownClick = () => {
    if (!text) {
      props.showAlert("No Text Found", "danger")
      return;
    }

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted to Lowercase", "success")
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared", "success")
  }

  const handleCapital = () => {
    if (!text) {
      props.showAlert("No Text Found", "danger")
      return;
    }

    let capitalizedText = "";
    let capitalizeNext = true;

    for (let i = 0; i < text.length; i++) {
      let char = text[i];

      if (capitalizeNext && /[a-zA-Z]/.test(char)) {
        capitalizedText += char.toUpperCase();
        capitalizeNext = false;
      } else {
        capitalizedText += char.toLowerCase();
      }

      if (char === " " || char === "\n") {
        capitalizeNext = true;
      }
    }

    setText(capitalizedText);
    props.showAlert("First Word Capitalized", "success")
  };

  const removeExtraSpaces = () => {
    if (!text) {
      props.showAlert("No Text Found", "danger")
      return;
    }

    const cleanedText = text
      .split("\n") // Split the text by new lines
      .map(line => line.trim().replace(/\s+/g, " ")) // Trim and remove extra spaces in each line
      .join("\n"); // Join the lines back with new line characters

    setText(cleanedText); // Update the text state with the cleaned text
    props.showAlert("Extra Spaces Removed", "success")
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to Clipboard", "success")
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }


  const [text, setText] = useState("Enter your Text here..");


  return (
    <>
      <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }} className="container">
        <h2 className='my-2 mt-2'>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows="4" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCapital} >Captalize First Word</button>
        <button className="btn btn-primary mx-1" onClick={removeExtraSpaces} >Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy</button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick} >Clear</button>
      </div>

      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
        <h3>Your Text Summary</h3>
        <p>
          <strong>{text.trim() ? text.split(/\s+/).filter(word => word).length : 0}</strong> words and 
          <strong> {text.replace(/\s/g, "").length}</strong> characters
        </p>

        <p><strong>{0.008 * (text.trim() ? text.split(/\s+/).filter(word => word).length : 0)}</strong> Minutes read</p>
        <h2>Preview</h2>
        <div style={{
          backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
          maxHeight: "200px",
          overflowY: "auto",
          padding: "10px",
          border: "1px solid #ccc",
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          borderRadius: "5px",
          color: text.length > 0 ? 'inherit' : '#852029'
        }}>
          {text.length > 0
            ? text.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))
            : "Nothing to preview!"}
        </div>

      </div>

    </>
  );
}
