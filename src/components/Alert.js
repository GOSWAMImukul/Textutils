import React from 'react'

const Alert = (props) => {
  return (
             // props.alert && becaues initially alert is null so if alert exists only then execute
        <div style={{height:'30px'}}>
       { props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">   
           <strong>{props.alert.msg}</strong>
           <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
        </div>
  )
}

export default Alert
//above is the bootstrap in return 