import React, { useState } from 'react';
import { FaCopy, FaTrash, FaArrowUp, FaArrowDown, FaTextHeight, FaSpaceShuttle } from 'react-icons/fa';

export default function TextManipulator(props) {
  const handleUpClick = () => {
    if (text.length === 0) {
      props.showAlert("No Text Found", "danger");
      return;
    }
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted to Uppercase", "success");
  }

  const handleDownClick = () => {
    if (!text) {
      props.showAlert("No Text Found", "danger");
      return;
    }
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted to Lowercase", "success");
  }

  const handleClearClick = () => {
    if (!text) {
      props.showAlert("Nothing to clear..!", "warning");
      return;
    }
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared", "success");
  }

  const handleCapital = () => {
    if (!text) {
      props.showAlert("No Text Found", "danger");
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
    props.showAlert("First Word Capitalized", "success");
  };

  const removeExtraSpaces = () => {
    if (!text) {
      props.showAlert("No Text Found", "danger");
      return;
    }

    const cleanedText = text
      .split("\n")
      .map(line => line.trim().replace(/\s+/g, " "))
      .join("\n");

    setText(cleanedText);
    props.showAlert("Extra Spaces Removed", "success");
  };

  const handleCopy = () => {
    if (!text) {
      props.showAlert("Nothing to copy..!", "warning");
      return;
    }
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to Clipboard", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState("Enter your Text here..");

  return (
    <>
      <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }} className="container mt-4 my-4">
        <h2 className="text-center mb-4">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="6"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#2c3e50' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
              borderRadius: '10px',
              padding: '15px',
              fontSize: '1rem',
              border: '1px solid #ccc'
            }}
          />
        </div>

        <div className="d-flex justify-content-center flex-wrap">
          <button className="btn btn-outline-primary m-2" onClick={handleUpClick}>
            <FaArrowUp /> Uppercase
          </button>
          <button className="btn btn-outline-primary m-2" onClick={handleDownClick}>
            <FaArrowDown /> Lowercase
          </button>
          <button className="btn btn-outline-primary m-2" onClick={handleCapital}>
            <FaTextHeight /> Capitalize
          </button>
          <button className="btn btn-outline-primary m-2" onClick={removeExtraSpaces}>
            <FaSpaceShuttle /> Remove Spaces
          </button>
          <button className="btn btn-outline-success m-2" onClick={handleCopy}>
            <FaCopy /> Copy
          </button>
          <button className="btn btn-outline-danger m-2" onClick={handleClearClick}>
            <FaTrash /> Clear
          </button>
        </div>
      </div>

      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>Text Summary</h3>
        <p>
          <strong>{text.trim() ? text.split(/\s+/).filter(word => word).length : 0}</strong> words and
          <strong> {text.replace(/\s/g, "").length}</strong> characters
        </p>
        <p>
          <strong>{0.008 * (text.trim() ? text.split(/\s+/).filter(word => word).length : 0)}</strong> Minutes read
        </p>

        <h3>Preview</h3>
        <div style={{
          backgroundColor: props.mode === 'dark' ? '#34495e' : '#f7f7f7',
          maxHeight: "200px",
          overflowY: "auto",
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          fontSize: "1.1rem",
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
