
import { Moon, Sun } from 'phosphor-react'
import { useState } from 'react'

import styles from './SwitchTheme.module.css'

export default function SwitchTheme() {
    const [isLightThemeSelected, setIsLightThemeSelected] = useState(false)

    const htmlThemeData = isLightThemeSelected ? 'light' : 'dark'
    const html = document.querySelector('html')
    html?.setAttribute('data-theme', htmlThemeData)


    function handleToggleTheme() {
        setIsLightThemeSelected(!isLightThemeSelected)
    }

    return (
        <div className={styles.switchTheme}>
            <input
                className={`${styles.checkbox} ${styles.hidden}`}
                id="checkbox"
                type="checkbox"
                onChange={handleToggleTheme}
                checked={isLightThemeSelected}
            />
            <label htmlFor="checkbox" title='Mudar tema'>
                <Moon size={24} color="#00b37e" />
                <Sun size={24} color="#00b37e" />
                
                <div className={styles.ball}></div>
            </label>
        </div>
    )
}