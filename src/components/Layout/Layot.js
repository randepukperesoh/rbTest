import { useState } from 'react'
import styles from './Layout.module.css'
import { MobileMenu } from '../MobileMenu/MobileMenu'
import { useModal } from '../ModalProvider/ModalProvider'
import { Modal } from '../Modal/Modal'
import { DesctopHeader } from './DesctopHeader/DesctopHeader'
import { MobileHeader } from './MobileHeader/MobileHeader'
import useWindowSize from '../hooks'

export const Layout = ({children}) => {
    const [menuActive, setMenuActive] = useState(false)
    const { modal } = useModal();
    const width = useWindowSize().width;

    return(
        <>
            {width > 1200 ? <DesctopHeader/> : <MobileHeader menuActive={menuActive} setMenuActive={setMenuActive}/>}
            <main>
                {menuActive ? <MobileMenu closeMenu={setMenuActive}/> : null}
                {modal && <Modal/>}
                {children}
            </main>
            <footer>
            {width > 1200 ? <img className={styles.logoWhite} width={91} height={27} src={require('./LOGO (1).png')} alt='Логотоип'/> : null}
                <div className={styles.logoMenu}>
                {width > 1200 ? null : <img className={styles.logoWhite} width={91} height={27} src={require('./LOGO (1).png')}alt='Логотоип'/>}
                    <ul className={styles.list}>
                        <li>О клинике</li>
                        <li>Услуги</li>
                        <li>Специалисты</li>
                        <li>Цены</li>
                        <li>Контакты</li>
                    </ul> 
                </div>
                <div className={styles.socialBlock}>
                    <img width={24} src={require('./inst.png')} alt='Социальные сети'/>
                    <img width={24} src={require('./telega.png')} alt='Социальные сети'/>
                    <img width={24} src={require('./whatsapp.png')} alt='Социальные сети'/> 
                </div>
            </footer>
        </>
    )
}