import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoclick = () => {
        console.log("Lowercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handeClearClick = () => {
        console.log("Lowercase was clicked" + text)
        let newText = " ";
        setText(newText)
    }
    const handleOnChange = (event) => {

        console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState(' ')
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleLoclick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-1' onClick={handeClearClick}> Clear Text</button>

            </div>
            <div className='container my-3'>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} word and {text.length} character</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
