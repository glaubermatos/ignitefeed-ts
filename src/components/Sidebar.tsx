import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/glaubermatos.png" alt="" />

                <strong>Glauber Matos</strong>
                <span>Frontend developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar deu perfil
                </a>
            </footer>
        </aside>
    )
}