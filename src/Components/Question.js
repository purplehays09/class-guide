import React, { useEffect, useState  } from "react";

export default function Question(props){
    const {handleChange, section, question} = props


    return(
        <form>
            <p>{question.question}</p>
            {
                // console.log('question.options',question.options)
                question.options.map((option,idx) => {
                    return (
                        <label >
                            <br></br>
                        <input 
                            type="radio" 
                            id={idx} 
                            name={option.answer} 
                            value={section}
                            key={idx}
                            onClick={handleChange}
                            question={question.question}
                        />
                            {option.answer}
                        </label>
                    )
                })
            }
        </form>
    )
}