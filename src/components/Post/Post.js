
export const Post = ({item}) => {

    return(
        <div>
            <h3> {item.questions}</h3>
            {item.answer.map((answer,i) => {
                return<div key={i}> {answer.response} </div>
            })}
        </div>
    )
}