import React, {useState} from 'react'


export default function TextForm(props) {
  const handleupClick = ()=>{
    console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    console.log("Lowercase was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleonchange = (event)=>{
    console.log("on change")
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here');

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleonchange} style={{background: props.mode==='light'?'grey':'white', color: props.mode==='dark'?'black':'white'}} id="mybox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>your text summar</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutus read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
      </div>
    </>
  )
}
