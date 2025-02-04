import { Button, Card, Progress } from '@/components/ui'
import React, { useEffect, useRef, useState } from 'react' 
import { QuizData } from './QuizData'
import QuizResult from './QuizResult'
import AnswerForm, { IQuizQue } from '../QuizList/components/AnswerForm'
import { useLocation } from 'react-router-dom'
import { getValidParsedJsonData } from '@/utils/helper'
const initialTime = 50
const StartQuiz = () => {
  const { state } = useLocation();
  const formRef = useRef() 
  const [quizData, setQuizData] = useState<IQuizQue[]>([])
  const [quizName, setQuizName] = useState<string>('')
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [score, setScore] = useState({})
  const [seconds, setSeconds] = useState(initialTime)
  const [testSubmitted, setTestSubmitted] = useState<boolean>(false)
  const [quizStarted, setQuizStarted] = useState<boolean>(false)

  // @ts-ignore 
  const { values, setValues, setFieldValue, setTouched, setErrors } = formRef?.current ?? {}
  const handleNext = () => {
    console.log(currentQuestion, quizData.length)

    if (currentQuestion < quizData.length - 1) {

      // setCurrentQuestion(currentQuestion + 1)

      setScore({ ...score, [currentQuestion]: values['answer'] })
      setFieldValue('isSubmited', true)
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
        setValues({ answer: "", isSubmited: false })
        setTouched({})
        setErrors({})
        setSeconds(initialTime)
      }, 5000);
    } else {
      console.log(score, values)
      setScore({ ...score, [currentQuestion]: values['answer'] })
      setTestSubmitted(true)
    }
  }
  const handlePrev = () => {
    if (currentQuestion > 0) {
      // @ts-ignore
      setCurrentQuestion(currentQuestion - 1)
      console.log('next')
    } else {
      alert("At 0 index")
    }

  }
  const handleSubmit = () => {
    // @ts-ignore
    formRef && formRef.current && formRef.current.handleSubmit()
  }


  const test = () => {
    console.log(quizData)
    // console.log(formRef.current.values)
  }


  useEffect(() => { 
      let intervalId;
      intervalId = setInterval(() => setSeconds(seconds - 1), 1000);
      return () => clearInterval(intervalId);
   
  }, [seconds]);
  useEffect(() => {
    if (seconds == 0 && !testSubmitted && quizStarted) {
      if (currentQuestion < quizData.length - 1) {
        setScore({ ...score, [currentQuestion]: values['answer'] })
        setCurrentQuestion(currentQuestion + 1)
        setSeconds(initialTime)
      } else {
        setScore({ ...score, [currentQuestion]: values['answer'] })
        setTestSubmitted(true)
      }
    }
  }, [seconds]);

  useEffect(() => {
    if (state && state.questions && state.name) {
      setQuizData(state.questions)
      setQuizName(state.name)
      console.log('first 1')
    } else {
      console.log('first 2')
      // const validData = (state && state.questions) ? state.questions : getValidParsedJsonData(`${localStorage.getItem('curentQuiz')}`)['questions'] ?? []
      const validData = getValidParsedJsonData(`${localStorage.getItem('curentQuiz')}`)
      if (validData) {
        console.log('first 4',localStorage.getItem('curentQuiz'))
        setQuizData(validData.questions)
        setQuizName(validData.name)
      }
    }

  }, [])
  return (
    <div>
      <Card>
        <div className='flex justify-between items-center mb-5'>
          <h5 onClick={test}>{quizName} Quiz </h5>
          <div>
            {(currentQuestion <= quizData.length) && !testSubmitted && seconds > 0 && quizStarted &&
              <Progress variant="circle" percent={(seconds * 100) / initialTime} width={80} customInfo={seconds} />}

          </div>
        </div>

        {/* <p>
          Some quick example text to build on the card title and make
          up the bulk of the card&apos;s content.
        </p> */}
        {
          quizStarted ?
            ((currentQuestion <= quizData.length) && !testSubmitted && seconds > 0) ? (
              <>
                <AnswerForm
                  ref={formRef}
                  handleNext={handleNext}
                  quizData={quizData[currentQuestion]}
                />
                <div className='flex justify-between'>
                  <Button block variant="solid" onClick={handleSubmit} style={{ width: "fit-content" }}>
                    {currentQuestion >= quizData.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                </div>
              </>
            ) : (
              <QuizResult
                quizData={quizData}
                score={score}
              />
            ) : (
              <Button block variant="solid" onClick={() => { setQuizStarted(true); setSeconds(initialTime) }}>
                Start Quiz
              </Button>
            )
        }

      </Card>
    </div>
  )
}

export default StartQuiz