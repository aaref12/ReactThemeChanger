// import {createContext,useContext} from 'react';


// export const Themecontext=createContext({
//     themeMode:'light',
//     lightMode:()=>{},
//     darkMode:()=>{},
// })

// export const ThemeProvider=Themecontext.Provider;


// export default function useTheme(){
//     return useContext(Themecontext)
// }



import {createContext,useContext} from 'react'



 
export const  ThemeContext=createContext({
    themeMode:'light',
    lightMode:()=>{},
    darkMode:()=>{},
}) 


export const ThemeProvider=ThemeContext.Provider;


export default function useTheme(){
    return useContext(ThemeContext)
}
