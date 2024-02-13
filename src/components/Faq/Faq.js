import styles from './Faq.module.css'
import { Post } from '../Post/Post' 
import data from './Faq.json'
import useWindowSize from '../hooks'
import { useEffect } from 'react'

export const Faq = () => {
    let width = useWindowSize().width;

    return(
        <div className={styles.Faq}> 
            <div className={styles.titleFaq}>Часто задаваемые вопросы</div>
            {data.questions.map(question => <Post mobile={false} item={question} key={question.id}/>)}
        </div>
    )
}