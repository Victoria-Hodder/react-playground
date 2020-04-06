import React from 'react';

function SkipToContent(props) {  
    return <h1>Hello, {props.name}</h1>;
}

function Loop() {
    return (
        <div>
            <SkipToContent name="Sara" />      
            <SkipToContent name="Cahal" />      
            <SkipToContent name="Edite" />    
        </div>
    );
  }

export default Loop;