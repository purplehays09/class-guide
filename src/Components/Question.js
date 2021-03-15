import React, { useEffect, useState  } from "react";

export default function Question(props){
    const {handleChange, section, question} = props

    const [expanded, setExpanded] = useState(false)

    const expandButton = (e) => {
        setExpanded(!expanded)
    }

    return(
        <form>
            <div onCLick={expandButton}>
            <p>{question.question}</p>
            </div>

            {
                // console.log('question.options',question.options)
                // expanded &&
                question.options.map((option,idx) => {
                    return (
                        <label >
                            <br></br>
                        <input 
                            type="radio" 
                            id={idx} 
                            name={question.question} 
                            value={section}
                            key={idx}
                            onChange={handleChange}
                        />
                            {option.answer}
                        </label>
                    )
                })
            }
        </form>
    )
}