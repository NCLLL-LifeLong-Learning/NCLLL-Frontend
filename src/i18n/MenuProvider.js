import { createContext, useEffect, useState } from "react";

export const MenuContext = createContext();

// TODO Use global Menu Config
export const MenuProvider = ({ children }) => {
    const [focusArea, setFocusArea] = useState();

    useEffect(() => {
        // localStorage.setItem("lang", lang);

    }, [focusArea]);

    return (
        <MenuContext.Provider value={{ focusArea, setFocusArea }}>
            {children}
        </MenuContext.Provider>
    );
};