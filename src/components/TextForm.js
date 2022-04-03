import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleClearClick=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [text,setText]=useState("");
  return (
      <>
    <div className='conatiner' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1 className='mb-2'>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button onClick={handleUpClick} disabled={text.length===0} className="btn btn-primary mx-2">Convert to Uppercase</button>
      <button onClick={handleLoClick} disabled={text.length===0} className="btn btn-primary mx-2">Convert to Lowercase</button>
      <button onClick={handleClearClick} disabled={text.length===0} className="btn btn-primary mx-2">Clear Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{
            return element.length!==0;
        }).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{
            return element.length!==0;
        }).length} minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  )
}
