import React, { useState } from 'react'

export default function TextForm(props) {
    //text="new text" //Wrong way
    //setText("new text");
    const clickUpHandler = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const clickLoHandler = () => {
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clickClearHandler = () => {
        console.log("Clear was clicked");
        let newText = '';
        setText(newText);
    }
    const clickCopyHandler = () => {
        console.log("Copy was clicked");

        var text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const onChangeHandler = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');


  return (
    <>
        <div className="container">
            <h1>{ props.heading }</h1>
            <div className="mb-3">
            <textarea className="form-control" placeholder='Enter text here...' value={text} onChange={onChangeHandler} id="mybox" rows="8"></textarea>
            </div>
            <div>
                <button className="btn btn-primary mx-2" onClick={clickUpHandler}>Convert to Uppercase </button>
                <button className="btn btn-primary mx-2" onClick={clickLoHandler}>Convert to Lowercase </button>
                <button className="btn btn-primary mx-2" onClick={clickClearHandler}>Clear </button>
                <button className="btn btn-primary mx-2" onClick={clickCopyHandler}>Copy Text </button>

            </div>
        </div>
        <div className="container my-4">
            <h2>Your text summary</h2>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> {0.08 * text.split(" ").length} Minutes needed to read</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
    </>
  )
}
