import styles from './Faq.module.css'
import { Post } from '../Post/Post' 
import data from './Faq.json'
import useWindowSize from '../hooks'
import { useEffect, useState } from 'react'

export const Faq = () => {
    const [ mobile, setMobile ] = useState()
    let width = useWindowSize().width;

    useEffect(() => {
        if (width < 1000) setMobile(true)
        else setMobile(false)
    },[width])

    return(
        <div className={styles.Faq}> 
            <div className={styles.titleFaq}><p>Часто задаваемые вопросы</p></div>
            {data.questions.map(question => <Post mobile={mobile} item={question} key={question.id}/>)}
        </div>
    )
}