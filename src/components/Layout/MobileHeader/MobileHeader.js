import styles from './MobileHeader.module.css'

export const MobileHeader = ({setMenuActive, menuActive}) => {

    return(
        <header className={styles.header}>
            <div className={styles.mobileHeader}>
            <div onClick={()=> setMenuActive(!menuActive)} className={menuActive ? styles.menuBtnActive : styles.menuBtn}>
                <span className={styles.span1}></span>
                <span className={styles.span2}></span>
                <span className={styles.span3}></span>
            </div>
            <img src={require('./LOGO.png')} alt='Логотип'/>
            <div className={styles.number}> 
                <span className={styles.phoneNumber}>+7(863) 000 00 00</span><br/>
                Ростов-на-Дону</div>
            </div>
        </header>
    )
}