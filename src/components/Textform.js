import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick =() =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLClick =() =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handle =() =>{
        let newText = "";
        setText(newText);
        props.showAlert("Cleared", "success");
    }
    const handleOnChange =(event) =>{
        setText(event.target.value)
    }
    const[text, setText]= useState("");
  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
  <div className="mb-3">
   
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}}id="Mytext" rows="8"></textarea>
  </div>
  <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert uppercase</button>
  <button className='btn btn-primary mx-2' onClick={handleLClick}>Convert lowercase</button>
  <button className='btn btn-primary mx-2' onClick={handle}>Clear Text</button>
  </div>
  <div className='container my-3'>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters </p>
    <p>{0.008*text.split(" ").length}Minutes to read </p>

    <h2>Preview</h2>
    <p>{text}</p>
  </div>
  </>
  )
}
