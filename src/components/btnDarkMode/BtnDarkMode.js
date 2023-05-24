import React, { useEffect } from 'react'
import { useLocalStorage } from '../../utils/useLoacalStorage'
import detectDarkMode from '../../utils/detectDarkMode'
import './style.css'
import sun from './sun.svg'
import moon from './moon.svg'

export default function BtnDarkMode() {

    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }, [darkMode])

    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (event) => {
                const newColorScheme = event.matches ? "dark" : "light";
                setDarkMode(newColorScheme)
            });
    }, [])

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light'
        })
    }

    const btnNormal = 'dark-mode-btn'
    const btnActive = 'dark-mode-btn dark-mode-btn--active'


    return (
        <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    )
}
