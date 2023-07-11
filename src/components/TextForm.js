import React, { useState } from 'react'
export default function TextForm(props) {
  const handleOnChange = (event) => {
    console.log('On Change');
    setText(event.target.value);
  }
  const handleOnClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase", "success");

  }
  const handlecopyClick = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
        props.showAlert('Text copied to clipboard','success');
      })
      .catch((error) => {
        console.error('Failed to copy text to clipboard:', error);
      });

  }
  // another way of copying text
  //   const handlecopyClick = ()=>{
  //     let text = document.getElementById('mybox');
  //     text.select();
  //     navigator.clipboard.writeText(text.value);

  // }
  const handleclearClick = () => {
    let newtext = '';
    setText(newtext);
    props.showAlert("Text cleared", "success");

  }
  const handlecapClick = () => {
    let newtext = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newtext);
    props.showAlert("Capitalized!", "success");
  }
  const handleOnClickl = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase", "success");
  }
  const handleremoveClick = () => {
    let ntext = text.split(/[ ]+/);
    setText(ntext.join(" "));
  }
  const handleinverseClick = () => {
    const invertedText = text.split('').map((char) => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
      .join('');
    setText(invertedText);

  }
  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'light' }}>
        <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="mybox" style={{ color: props.mode === 'light' ? 'black' : 'white' }} className="form-label">Example textarea</label>
          <textarea className="form-control" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white', border: '1px solid black', boxShadow: '3px 5px' }} value={text} id="mybox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleOnClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleOnClickl}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleclearClick}>Clear Text</button>
        <button className='btn btn-primary mx-2' onClick={handleremoveClick}>Remove extraspace</button>
        <button className='btn btn-primary mx-2' onClick={handlecopyClick}>Copy text to clipboard</button>
        <button className='btn btn-primary mx-2' onClick={handlecapClick}>Capitalize Text</button>
        <button className='btn btn-primary my-2 mx-2' onClick={handleinverseClick}>Inverse Text</button>

      </div>
      <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes</p>
        <h1>Preview</h1>
        <p>Your entered text: {text.length > 0 ? text : 'Enter something'}</p>

      </div>
    </>
  )
}
