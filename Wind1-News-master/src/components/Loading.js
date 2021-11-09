import React, { Component } from 'react'
// import "../ajax-loader.gif"
import spin from "./ajax-loader.gif"

export class Loading extends Component {
    render() {
        return (
            <div className="text-center my-4">
                <img src={spin} alt={spin} />
            </div>
        )
    }
}

export default Loading
