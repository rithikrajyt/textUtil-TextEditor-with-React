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
    const handleDownClick = ()=>{
        let newtext2 = text.toLowerCase();
        setText(newtext2);
    }
    const [text, setText] = useState('');
    
    return(
        <div>
            <h1>{props.heading}</h1>
            <form>
            <div className="form-group">
    <textarea className="form-control" value={text} onChange={handleOnChange}  id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  </form>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
  <br></br>
  <br></br>
  <br></br>
  <button className="btn btn-primary" onClick={handleDownClick}>Convert to Lower Case</button>

        </div>
    )
}