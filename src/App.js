import React from 'react';

function App() {
    const [showMessage, setShowMessage] = React.useState(false);
    return (
        <div className="App">
            <h1>Hello world</h1>
            <input type="button" onClick={() => setShowMessage(!showMessage)} value="Toggle message"/>
            {showMessage && <div>I am a dynamically rendered message</div>}
        </div>
    );
}

export default App;
