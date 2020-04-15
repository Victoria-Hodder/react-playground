import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    // Short circuit operator
    render() {
        return this.state.isLoggedIn && <div>Welcome Victoria</div>
    }


    // // Ternary conditional operator
    // render() {

    //     return (
    //         this.state.isLoggedIn ? (
    //             <div> Welcome Victoria </div>) : (
    //                 <div> Welcome Guest </div>
    //             )
    //     )
    // }



    // // element variables
    // render() {
    //     let message
    //     if (this.state.isLoggedIn) {
    //         message = <div> Welcome Victoria </div>
    //     } else {
    //         message = <div> Welcome Guest </div>

    //     }

    //     return <div> {message} </div>
    // }

    // // if else statement
    // render() {
    //     if (this.state.isLoggedIn) {
    //         return <div> Welcome Victoria </div>
    //     } else {
    //         return <div> Welcome Guest </div>
    //     }


    // }


}

export default UserGreeting 
