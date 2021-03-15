import React, { useEffect, useState  } from "react";

import Question from "./Question";

export default function Section(props){
    const {section, handleChange, sectionTitle,sectionQuestions} = props
    const [expanded, setExpanded] = useState(false)

    const expandButton = (e) => {
        setExpanded(!expanded)
    }

    return(
        <form>
            <div onClick={expandButton}>
                <h3>{sectionTitle}</h3>
                {
                    !expanded ? 
                    <span>+</span>:
                    <span>^</span>

                }

            </div>
            {
                expanded &&
                sectionQuestions.map((prompt,idx) => {
                    return(
                        <Question 
                            key={idx}
                            question={prompt}
                            section={section}
                            handleChange={handleChange}
                        />
                    )
                })
            }
        </form>
    )
}