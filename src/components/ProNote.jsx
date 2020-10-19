import React from 'react'

export default function ProNote(props) {
    return (
        <div className="note">
            <h3>ProNote</h3>
            <div className="note-container">
                <p>{props.state.text}</p>
            </div>
        </div>
    )
}
