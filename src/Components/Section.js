import React, { useEffect, useState  } from "react";

import Question from "./Question";

export default function Section(props){
    const {section, handleChange, sectionTitle,sectionQuestions} = props
    return(
        <form>
            <h3>{sectionTitle}</h3>
            {
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