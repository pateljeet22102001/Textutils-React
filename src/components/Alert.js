import React from 'react'

function Alert(props) {

    // const capitalize = (word)=>{
    //     const lower = word.toLowercase();
    //     return lower.charAt(0).touppercase() + lower.slice(1);
    // }

  return (
    props.alert &&<div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong>: {props.alert.msg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert