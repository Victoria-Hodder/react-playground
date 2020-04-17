import React from 'react'

// refactored code from NameList.js

function Person({ person }) {
    return (
        <div>
            <h2>
                I am {person.name}, I am {person.age} and I'm awesome at {person.skill}
            </h2>
        </div>
    )
}

export default Person