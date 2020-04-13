import React, { Component } from 'react'

class EventBind extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Hello' // This is a property
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }


    // 
    //This third way of binding is recommended: binding in the constructor

    // clickHandler() {
    //     this.setState ({
    //         message: 'Goodbye!'
    //     })
    //     console.log(this)
    // } 

    //
    // the fourth way (arrow function as class property) is still experimental

    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }


    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* The first way is not recommended as it will render every time */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                
                {/* this second way is probably the easiest way to pass parameters*/}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind