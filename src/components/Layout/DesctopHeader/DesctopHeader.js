import styles from './DesctopHeader.module.css'
import { useModal } from '../../ModalProvider/ModalProvider'

export const DesctopHeader = () => {

    const { setModal } = useModal();

    return(
        <header>
            <div className={styles.firstRow}>
                <div className={styles.logoMenu}>
                    <img src={require('./LOGO.png')} alt='Логотип'/>
                    <div className={styles.location}>
                    <img width={20} height={20} src={require('./placeholder.png')} alt='Логотип'/> Ростов-на-дону <br/> <span>ул. Ленина, 2Б </span>
                    </div>
                </div>
                <div className={styles.numberBtn}>
                    <img width={28} src={require('./whatsapp.png')} alt='Логотип'/>
                    <div className={styles.number}> +7(863) 000 00 00 </div>
                    <button onClick={()=> setModal(true)} className={styles.modalBtn}> Записаться на прием</button>
                </div>
            </div>
            <div className={styles.secondRow}>
                <nav className={styles.Menu}>
                    <ul>
                        <li>О клинике</li>
                        <li>Услуги</li>
                        <li>Специалисты</li>
                        <li>Цены</li>
                        <li>Контакты</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}