import React,{useState}from 'react'


export default function Texta(props) {
    const handleUpClick = ()=>{
       // console.log("upper case was clicked");
        let x = text.toUpperCase();
        setText(x);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleOnChange = (event)=>{
        //console.log("text changed");
        //to update when entered text
        setText(event.target.value);
    }
    const  handleLoClick = ()=>{
        let xy = text.toLocaleLowerCase();
        setText(xy);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClear = ()=>{
        setText("");
        props.showAlert("Text Cleared","success");
    }
    const speak = ()=> {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
      const replacecasefunc = ()=> {
        let existing_text = prompt("Enter which word to replace : ");
        let replaced_text = prompt("Enter New Text");
        setText(text.replaceAll(existing_text, replaced_text))
      }
      const handleCopy = ()=>{
        var t = document.getElementById("myBox");
        t.select();
        navigator.clipboard.writeText(t.value);
        props.showAlert("copied to clipboard","success");
      }
      const handleEspace = ()=>{
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "));
        props.showAlert("Spacing Corrected","success");
      }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'black'}}>
<div className="form-group" >
    <h1 >{props.heading}</h1>
    
    <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox"  rows="8" ></textarea>
  </div>
  <button className="btn btn-primary my-3" onClick={handleUpClick} >convert to uppercase</button>
  <div className="btn btn-primary mx-1" onClick={handleLoClick}>convert to lower case</div>
  <div className="btn btn-primary" onClick={handleClear}>clear text</div>
  <div className="btn btn-primary my-1 mx-1" onClick={handleCopy}>Copy Text</div>
  <div className="btn btn-primary my-1 mx-1" onClick={handleEspace} >Remove Extra spaces</div>
  <div className="btn btn-warning mx-1" onClick={replacecasefunc}>Replace words</div>
  
  <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>summary</h2>
        <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </b>words and <b> {text.length} </b> characters</p>
        <p>This sentence can be read within <b>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length}  </b>minutes</p>
        <h2>preview</h2>
        <p>{text.length>0?text:'Enter the text to preview'}</p>
    </div>
    </>
  )
}
