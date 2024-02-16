import { useState } from 'react';
import styles from './Post.module.css';


export const Post = ({item, mobile}) => {
    const [open, setOpen ] = useState();

    const switchOpen = (e) => {
        e.stopPropagation();
        setOpen(!open)
    }

    if (mobile) {
        return (
        <div className={styles.post}>
            <h3 className={styles.postTitle}> {item.question}</h3>
            {item.answer.map((answer,i) => {
                return<p className={styles.paragraph} key={i}> {answer.response} </p>
            })}
        </div>
        )}
    else{
        return (
            <div className={styles.accordion} onClick={(e) => switchOpen(e) }>
                <h3>{item.question}</h3>
                {open ? item.answer.map((answer, i) => { return <p className={styles.paragraphDesctop} key={i}> {answer.response} </p>}) : null}
                <div className={styles.openBtn}>
                    <span className={styles.minus}></span>
                    {!open && <span className={styles.plus}></span>}
                </div>
            </div>
        )
    }
    
}