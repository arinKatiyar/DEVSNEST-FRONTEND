import {createContext} from "react";
interface ThemeContext{
    theme:boolean,
    setTheme:(theme:boolean)=>void  
}
const intialState={
    theme:false,
    setTheme:(theme:boolean)=>{}
}
const ThemeContext = createContext<ThemeContextType>(initialState);
export default ThemeContext;

