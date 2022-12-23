import "./index.css";
import Form from "./Home.jsx";
import { createContext } from "react";
import ReactSwitch from "react-switch";


export const ThemeContext = createContext("null");

function App() {
    const [ theme, setTheme ] = useState("light")

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light" ));
    };
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
        <div className="App" id="theme">
            <Form/>
            <ReactSwitch/>
        </div>
        </ThemeContext.Provider>
    )
}

export default App;