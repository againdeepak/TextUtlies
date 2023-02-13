import React, { useState } from 'react'
import copy from 'copy-to-clipboard'
// import PropTypes from 'prop-types'

// import tranlate from 'translate' 

export default function Textform(props) {
    const handleUpclick = () => {
        //upper case clicked...
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");
    }
    const dnleUpclick = () => {
        //lower case clicked...
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleClear = () => {
        //text clear ...
        let newText = '';
        setText(newText)
        props.showAlert("Clear", "success");

    }
    // const handleExtraSpace= () =>{
    //     let newText=text.split(/[]+/)
    //     setText(newText.join(" "))
    // }
    const copyToClipboard = () => {
        copy(text);
        props.showAlert("Copied", "success");
    }
    //  const tranLate=()=>{
    //     tranlate
    //  }


    const hadnleOnChange = (event) => {
        //on change
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    //text = "new text" --> wrong statement
    //setText("newText") --> correct statement

    return (
        <>
            <div className="container " style={{ color: props.mode === 'light' ? 'white' : 'black' }} >
                <div className='padding '>
                    <h2 >{props.heading} </h2>
                    <div className="input-group ">
                        <textarea className="form-control " placeholder='Enter your text here' value={text} onChange={hadnleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} rows="8" aria-label="With textarea "></textarea>
                    </div>
                    <div className=' container my-2'>
                        <button className="btn btn-success mx-2 " onClick={dnleUpclick}>Lowercase</button>
                        <button className="btn btn-primary " onClick={handleUpclick}>Uppercase</button>
                        <button className="btn btn-dark mx-2 " onClick={handleClear}>Clear</button>
                        <button className="btn btn-success mx-2 " onClick={copyToClipboard}>Copy</button>
                        {/* <button className="btn btn-success mx-2 " onClick={handleExtraSpace}>Remove Space</button> */}



                    </div>
                </div>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes for reading </p>
                <p>Preview</p>
                <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
            </div>
        </>
    )
}
