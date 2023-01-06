import React from 'react'
import {useState} from 'react';

function Alert(props) {
  return (
   props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="false">&times;</span>
    </button>
  </div>
  )
}

export default Alert