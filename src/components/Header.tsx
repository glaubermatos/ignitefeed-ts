import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'
import SwitchTheme from './SwitchTheme'

export function Header() {
    return (
        <header className={styles.header}>
            <div>
                <img src={igniteLogo} alt="Ignite logo" />
                <strong>Ignite Feed</strong>
            </div>
            <SwitchTheme />
        </header>
    )
}