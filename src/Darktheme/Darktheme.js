import React, { useState, useEffect } from 'react';
import './Darkmode.css';



function Darktheme() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <div className={`App ${theme}`}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <h1>Hello, world!</h1>
        </div>
    );
}
export default Darktheme;