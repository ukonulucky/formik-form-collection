import React, { Component } from 'react'

export class ClassComponents extends Component {
    state = {
        count: 0
    }
    handleCount = () => {
        this.setState(
            {
                count: this.state.count + 1 
            }
        )
    }
    render() {
        return (
            <div>
                <button onClick={() => { this.handleCount()}}> Count { this.state.count}</button>
            </div>
        )
    }
}

export default ClassComponents
