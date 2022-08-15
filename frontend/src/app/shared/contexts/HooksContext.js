import { useContext, useState, createContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

export const Hooks = createContext()

export const HooksProvider = ({ children }) => {
    const { movie } = useContext(MovieContext)

    const [ openTopbar, setOpenTopbar ] = useState(false)
    const [ openNavbar, setOpenNavbar ] = useState(false)
    const [scrollX, setScrollX] = useState(0)

    const handleOpenNavbar = () => {
        setOpenNavbar(!openNavbar)
    }

    const handleOpen = () => {
      setOpenTopbar(!openTopbar)
    }


    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth /2);
        if(x > 0){
            x=0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth /2);
        let listw = movie.length * 150;
        if((window.innerWidth - listw) > x) {
            x = (window.innerWidth - listw) -60;
        }
        setScrollX(x);
    }
    
    return(
        <Hooks.Provider value={{ 
            openTopbar, 
            handleOpen,
            handleLeftArrow,
            handleRightArrow,
            scrollX,
            openNavbar,
            handleOpenNavbar
            }}>
            {children}
        </Hooks.Provider>
    )
}