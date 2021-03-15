import './App.css';
import {useEffect, useState} from 'react'

import {prompts} from './Components/data/questions'
import Section from "./Components/Section";

// build this  to look like the google form here: https://docs.google.com/forms/d/1d5aDqzXIyccD5NrxcJnr2rpHsszFCkWUGOcTKCyDBfI/edit

// create an intro section that gets players to think about their character they want to create
// show the 

const blankForm = {
  champion:0,
  brute:0,
  ranger:0,
  assassin:0,
  druid:0,
  sorcerer:0,
  arcanist:0,
}

function App() {
  const [choices,setChoices] = useState({champion:0,brute:0,ranger:0,assassin:0,druid:0,sorcerer:0,arcanist:0})
  const [questions,setQuestions] = useState(prompts)

  useEffect(() => {
    const baseObj = {...blankForm}
    if(questions !== undefined){
      for(const section in questions){
        // console.log('questions',questions)
        questions[section].forEach(inst => {
          inst.options.forEach(option => {
            // console.log('option.selected',option.selected)
            if (option.selected === true){
              // console.log('we made it')
              for(const property in option.points){
                // console.log("property",property)
                baseObj[property] += option.points[property]
              }
            }

          })
        })
      }
  
      setChoices(baseObj)

    }
  },[questions])

  const handleChange = (e) => {
    // debugger
    const {name, value, id} = e.target
    // console.log('name',name || 'fail')
    // console.log('value',value)
    // console.log('id',id)
    // console.log('questions[value][name].options[id].answer',questions[value][name].options[id].answer)
    // console.log('name', name)

    // console.log('questions[value]',questions[value])
    const index = questions[value].findIndex((inst) => {
      // console.log('inst',inst)
      return inst.question === name
    })

    // console.log('index',index)
    // console.log('questions prechange', questions)
    // console.log('questions[value][index].options[id]',questions[value][index].options[id])

    const replacement = {...questions}
    for(const answer in replacement[value][index].options){
      replacement[value][index].options[answer].selected = false
    }

    // replacement[value][index].options[id].selected = !questions[value][index].options[id].selected
    // console.log(replacement[value][index].options)
    // console.log(replacement[value][index].options[id])
    replacement[value][index].options[id].selected = true
    // console.log('replacement', replacement)

    setQuestions(replacement)

    // setQuestions({
    //   ...questions,
    //   ...questions[value],
    //   ...questions[value][index],
    //   ...questions[value][index].options,
    //   ...questions[value][index].options[id],
    //   selected:!questions[value][index].options[id].selected
    // })
  }


  return (
    <div className="App">
      <header className="App-header">
      <h1>Class Guide</h1>

      
      <Section 
        section='your_character'
        sectionTitle='Your Character'
        sectionQuestions={questions.your_character}
        handleChange={handleChange}
        />
      <Section 
        section='problem_solving'
        sectionTitle='Problem Solving'
        sectionQuestions={questions.problem_solving}
        handleChange={handleChange}
        />
      <Section 
        section='tactics'
        sectionTitle='Tactics'
        sectionQuestions={questions.tactics}
        handleChange={handleChange}
        />
      </header>
    </div>
  );
}

export default App;
