import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Button clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

// No brackets with clickHandler otherwise it becomes a function call (this is not what we want!)

export default FunctionClick