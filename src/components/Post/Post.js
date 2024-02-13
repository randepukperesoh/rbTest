import { useState } from 'react';
import styles from './Post.module.css';


export const Post = ({item, mobile}) => {
    const [open, setOpen ] = useState(false);

    const switchOpen = (e) => {
        e.stopPropagation();
        setOpen(!open)
    }
    console.log(mobile ? true : false)  
    if (mobile) {
        return (
        <div>
            <h3 className={styles.postTitle}> {item.question}</h3>
            {item.answer.map((answer,i) => {
                return<p className={styles.paragraph} key={i}> {answer.response} </p>
            })}
        </div>
        )}
    else{
        return (
            <div onClick={(e) => switchOpen(e) }> 
                <h3>{item.question}</h3>
                {open ? item.answer.map((answer, i) => {<p className={styles.paragraph} key={i}> {answer.response} </p>}) : null}
            </div>
        )
    }
    
}