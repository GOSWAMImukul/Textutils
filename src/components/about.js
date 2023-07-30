import React,{useState} from 'react'


export default function About() {

    const [myStyle,setstyle]=useState({color:'black',
    backgroundColor:'white'}
    );
    const [btntext,changetext]=useState("Enable Dark mode");

    const togglestyle = ()=>{
        if(myStyle.color==='black')
        {
             setstyle({color:'white',
                       backgroundColor:'black'})
         changetext("Enable light mode");
        }
        else{
                setstyle({
                color:'black',
                backgroundColor:'white'
            })
            changetext("Enable Dark mode");
        }
    }
    
    return (
        <div className="container" style={myStyle}>
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item"  >
                    <h2 className="accordion-header">
                        <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong>Analyse your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <p>Textutils gives you a way to analyse your words or characters in a suitable way</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           <strong>Easy to use</strong> 
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <p>Textutils is very easy to use service .It is designed in such a way that it gives the users a smooth and great experience</p> 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Our Service</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <p>You can count words, characters and change your text also to uppercase , lowercase ,clear and copy </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-3">
                 <button onClick={togglestyle} type="button" class="btn btn-primary">{btntext}</button>
            </div>
                       
        </div>

    )
}
