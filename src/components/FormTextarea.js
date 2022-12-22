//this FormTextarea component hold one textarea box and serval buttons for manipulate entered text,like convert text to Uppercase,lowercase,Remove Extraspace etc. 

import React,{useState} from 'react'

export default function FormTextarea(props) {
    //this handleUpClick function is for to convert text into uppercase.
    const handleUpClick= () =>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    //this handleLoClick function is use to convert text into Lowercase. 
    const handleLoClick= ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    //this handleClearClick function will Clear all text available in textarea box.
    const handleClearClick= ()=>{
        let newText='';
        setText(newText);
    }
    //this handleOnChange function use to display entered text in textarea.
    const handleOnChange= (event) =>{
        setText(event.target.value);
    }
    //this handleOnFocus function use to select all text.
    const handleOnFocus=(event)=>{
        event.target.select();
    }
    //this handleCopy function will copy all entered text to clippboard.
    const handleCopy=()=>{
        let text=document.getElementById("textbox");
        text.select();
        navigator.clipboard.writeText(text.value);
        // alert("Text Copied Successfully");
        props.showAlert("Copied to Clipboard","success");
        
    }
    //this handleExtraSpaces function will clear extra space in entered text.
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} onFocus={handleOnFocus} id="textbox" rows="7"></textarea>
                </div>
                <button className={`btn btn-${props.mode==='light'?'secondary':'outline-light'} mx-1`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={`btn btn-${props.mode==='light'?'secondary':'outline-light'} mx-1`} onClick={handleLoClick}>Convert to Lowercase</button>
                <button className={`btn btn-${props.mode==='light'?'secondary':'outline-light'} mx-1`} onClick={handleClearClick}>Clear</button>
                <button className={`btn btn-${props.mode==='light'?'secondary':'outline-light'} mx-1`} onClick={handleCopy}>Copy Text</button>
                <button className={`btn btn-${props.mode==='light'?'secondary':'outline-light'} mx-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Text Details</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter Text For Preview"}</p>

            </div>
        </>
    )
}
