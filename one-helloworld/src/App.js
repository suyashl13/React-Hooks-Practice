import React from 'react'
import Button from './Button'

const App = () => {
    return (
        <div>
            <h1>Hello world!</h1>
            <Button title="App Store" />
            <Button title="Play Store" />
            {/* <button className="button">Play store</button> */}
        </div>
    );
}

export default App;