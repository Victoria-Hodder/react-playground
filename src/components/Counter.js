import React, { Component } from 'react'

class Counter extends Component {

    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment() {
        // this.setState(
        //     {
        //     count: this.state.count + 1
        //     }, 
        //     () => {
        //         console.log('Callback value', this.state.count)
        //     }
        // )

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }

    // never modify the state directly, use setState instead
    // calls to setState are asynchronous 
    // Whenever you need to execute code after the state has been changed, place that code within the call back function which is passed as a second parameter
    // When you need to update state based on previous state, pass in function as arg (not regular object)
    

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return(
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}> Increment </button>
            </div>
        ) 
    }
}

export default Counter