import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        //console.log("clicked");
        let newText=text.toUpperCase()
        setText(newText)
        props.showt("converted to uppercase","success")
    }
    const handleLoClick=()=>{
        //console.log("clicked");
        let newText=text.toLowerCase()
        setText(newText)
        props.showt("converted to lowercase","success")
    }
    const handleClearClick=()=>{
      //console.log("clicked");
      let newText=""
      setText(newText)
      props.showt("cleared","success")
  }
   const handleSelectClick=()=>{
     var we=document.getElementById("mybox");
    we.select();
     navigator.clipboard.writeText(we.value);
     props.showt("copied","success")
   }
   
    const handleOnChange=(event)=>{
       // console.log("kio");
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter your text");
    

    return (
        <>
          <div className="container">
            <h1>{props.heading}</h1>
             <div className="mb-3">
                <label htmlFor="mybox" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div >
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleUpClick}>convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSelectClick}>copy text</button>
            
          </div>
        
          <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words  {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
          </div>
        </>
    )
}
