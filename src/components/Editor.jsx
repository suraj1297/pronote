import React from 'react'

export default function Editor(props) {

    return (

        <div className="editor">
            <h3>Input</h3>
            <textarea autoFocus placeholder="Start typing here...." cols="60" rows="22" onChange={props.handleChange}>
            </textarea>
        </div>
    )
}
