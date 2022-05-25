import Content from "./Content";
import { useState } from "react";
import "./App.css";

function App() {
    const [show, setShow] = useState(false);
    return (
        <div className="App">
            <button onClick={() => setShow(!show)}> Toggle</button>
            {show && <Content />}
        </div>
    );
}

export default App;
