import React, { Component } from 'react'
import Editor from './components/Editor'
import ProNote from './components/ProNote'

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            text: "The text from Editor will apper here!"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState(
            { text: e.target.value ? e.target.value : "The text from Editor will apper here!" }
        )
    }

    render() {
        return (
            <React.Fragment>
                <Editor handleChange={this.handleChange} />
                <ProNote state={this.state} />
            </React.Fragment>
        )
    }
}
