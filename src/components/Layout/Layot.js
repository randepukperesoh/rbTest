import styles from './Layout.module.css'

export const Layout = ({children}) => {

    return(
        <>
            <header className={styles.header}>
                <div className="mobileHeader">
                <div className="menuBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <img src="./assets/img/logo.png"/>
                <div className="number"> <span>+7(863) 000 00 00</span>
                    Ростов-на-Дону</div>
            </div>
            </header>
            {children}
            <footer>
                <div className="logoMenu">
                    <img src="./assets/img/white logo.png"/>
                    <ul>
                        <li>О клинике</li>
                        <li>Услуги</li>
                        <li>Специалисты</li>
                        <li>Цены</li>
                        <li>Контакты</li>
                    </ul> 
                </div>
                    <div className="socialBlock">
                    <img src="./assets/img/instagram 4 1.png"/>
                    <img src="./assets/img/whatsapp 1 1.png"/>
                    <img src="./assets/img/telegram 1.png"/> 
                </div>
            </footer>
        </>
    )
}