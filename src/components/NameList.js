import React from 'react';
import Person from './Person';


function NameList() {
        const persons = [
        { 
            id: 1,
            name: 'Diana',
            age: 30,
            skill: 'whip',
        },
        {
            id: 2,
            name: 'Natasha',
            age: 30,
            skill: 'thigh lock',
        },
        {
            id: 3,
            name: 'Carol',
            age: 30,
            skill: 'space',
        }
    ]

    const personList = persons.map(person => (<Person key={person.id} person={person}/>))
    return <div>{personList}</div>
}


export default NameList