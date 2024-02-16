import styles from './Card.module.css'
import { useModal } from '../ModalProvider/ModalProvider';
export const Card = ({item}) => {

    const {head, headsmall, list, cost, img, id} = item;
    const { setModal } = useModal();

    return(
        <div className={styles.sliderItem}>
            <img className={styles.imgCard} src={require('' + img)} alt='Изображение карточки'/>
            <div className={styles.sliderItemDescription}>
                <div className={styles.headingCard}>
                    {head}<br/><span>{headsmall}</span>
                </div>
                <ul className={styles.cardList}>{list.map((list, i) => {
                    return <li key={id+'li'+i}> {list.item}</li>
                })}
                </ul>
                <div className={styles.price}>Всего {cost.real}₽ <span>{cost.fake}₽</span></div>
                <div className={styles.ItemBtnBlock}> 
                    <button onClick={()=> setModal(true)} className={styles.signUp}>Записаться</button>
                    <button className={styles.more}>Подробнее</button>
                </div>
            </div>
        </div>
    )
}