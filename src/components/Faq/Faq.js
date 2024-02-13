import styles from './Faq.module.css'
import { Post } from '../Post/Post' 
import data from './Faq.json'

export const Faq = () => {

    return(
        <div>
            <h2>Часто задаваемые вопросы</h2>
            {data.questions.map(question => {
                return( <Post item={question} key={question.id}/> )
            })}
        </div>
    )
}