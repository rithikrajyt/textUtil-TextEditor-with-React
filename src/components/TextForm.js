import React, {useState} from 'react';


export default function TextForm(props){
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked!!");
        let newtext = text.toUpperCase();
        setText(newtext);
    }   
    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
        //console.log(text);
    }
    const clearText = (event)=>{
        //console.log("On Change");
        setText('');
        //console.log(text);
    }
    const handleDownClick = ()=>{
        let newtext2 = text.toLowerCase();
        setText(newtext2);
    }
    const [text, setText] = useState('');
    
    return(
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <form>
            <div className="form-group">
    <textarea className="form-control" value={text} onChange={handleOnChange}  id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  </form>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>

  <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lower Case</button>
  <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
        </div>
        <div className='container my-3'>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length } words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length } Minutes to read the paragraph</p>
            <h2>Preview</h2>
            <p>{text}</p> 
        </div>
        </>
    )
}