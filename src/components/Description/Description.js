import styles from './Description.module.css'
import img from './abouutImg.png'
import useWindowSize from '../hooks'

export const Description = () => {
    const widthWindow = useWindowSize().width;
    const width = widthWindow > 1200 ? 950 : widthWindow;
    
    return(
        <div className={styles.aboutBlock}>
            <img className={styles.img} src={img} alt="Изображение клиники" width={width-17}/>
            <div className={styles.aboutDescription}>
                <div className={styles.headingAbout}>Многопрофильная клиника для детей и взрослых</div>
                <div className={styles.aboutDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
            </div>
            
        </div>
    )
}