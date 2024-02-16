import { useModal } from '../ModalProvider/ModalProvider'
import styles from './MobileMenu.module.css'
//import {useEffect} from 'react'

export const MobileMenu = ({closeMenu}) => {
    //document.body.style.overflow = 'hiden' 
    const onClick = () => {
        setModal(true);
        closeMenu(false)
    }
    const { setModal } = useModal();
    return(
        <div className={styles.menuWrapper}>
            <div className={styles.menu}>
                <ul>
                    <li>О клинике</li>
                    <li>Услуги</li>
                    <li>Специалисты</li>
                    <li>Цены</li>
                    <li>Контакты</li>
                </ul>
                <button onClick={onClick} className={styles.modalBtn}>Записаться на прием</button>
            </div>
        </div>
    )
}