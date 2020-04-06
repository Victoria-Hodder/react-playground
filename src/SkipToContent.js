import React from 'react';

function SkipToContent(props) {  
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <SkipToContent name="Sara" />      
            <SkipToContent name="Cahal" />      
            <SkipToContent name="Edite" />    
        </div>
    );
  }

export default App;