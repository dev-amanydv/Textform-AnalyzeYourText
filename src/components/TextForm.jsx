import React, { useState } from 'react'

export default function TextForm(props) {
   
    //text="new text" //Wrong way
    //setText("new text");
    const clickUpHandler = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }
    const clickLoHandler = () => {
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")

    }
    const clickClearHandler = () => {
        console.log("Clear was clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Cleared text area", "success")

    }
    const clickCopyHandler = () => {
        console.log("Copy was clicked");

        var text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard", "success")

    }
    const onChangeHandler = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');


  return (
    <>
        <div className="container" style={{color: props.mode=== 'dark'?'white': 'black'}}>
            <h1>{ props.heading }</h1>
            <div className="mb-3">
            <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} 
    key={props.mode} placeholder='Enter text here...' value={text} onChange={onChangeHandler} id="mybox" rows="8"></textarea>
            </div>
            <div>
                <button className="btn btn-primary mx-2" onClick={clickUpHandler}>Convert to Uppercase </button>
                <button className="btn btn-primary mx-2" onClick={clickLoHandler}>Convert to Lowercase </button>
                <button className="btn btn-primary mx-2" onClick={clickClearHandler}>Clear </button>
                <button className="btn btn-primary mx-2" onClick={clickCopyHandler}>Copy Text </button>

            </div>
        </div>
        <div className="container my-4" style={{color: props.mode=== 'dark'?'white': 'black'}}>
            <h2>Your text summary</h2>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> {0.08 * text.split(" ").length} Minutes needed to read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Enter something to preview'}</p>
            

        </div>
    </>
  )
}
