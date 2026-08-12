import {
    createContext,
    useState
} from "react";

export var ThemeContext =
    createContext();


function ThemeProvider({ children }) {

    var [theme, setTheme] =
        useState("light");


    function toggleTheme() {

        setTheme(function(currentTheme) {

            return currentTheme === "light"
                ? "dark"
                : "light";

        });

    }


    return (

        <ThemeContext.Provider
            value={{
                theme: theme,
                toggleTheme: toggleTheme
            }}
        >

            {children}

        </ThemeContext.Provider>

    );

}


export default ThemeProvider;