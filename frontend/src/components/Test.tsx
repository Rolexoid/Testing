import { useEffect } from 'react'
import { Stack } from 'react-bootstrap'
import getComponent from './answerTypes'
import { test } from '../data/index.ts'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveQuestionId } from '../slices/activeQuestionSlice.ts'
import { decrement } from '../slices/timerSlice.ts'
import { Question } from '../types/index.ts'
import type { RootState } from '../slices'
import Spinner from 'react-bootstrap/Spinner'

const renderQuestion = (activeQuestion: Question, progressId: number) => {
  const { question, options, type, id } = activeQuestion;
  const Component = getComponent(type);
  return <Component  question={question} options={options} id={id} progressId={progressId}/>;
};

const Test = () => {
  const dispatch = useDispatch();
  const { seconds } = useSelector((state: RootState) => state.timer);
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondsString = String(seconds % 60).padStart(2, '0');
  const { activeId, progressId } = useSelector((state: RootState) => state.appControl);
  const activeQuestion = test.find(({ id }) => id === activeId);
  const setClasses = (id: number) => {
    const buttonClasses = cn('p-2', 'mt-2', 'que-btn', {
      'bg-dark': id < progressId,
      'active-btn': id === progressId,
    });
    return buttonClasses;
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(decrement(seconds - 1));
    }, 1000);
  }, [dispatch, seconds]);


  return (
    <div className='bg-white flex-container test-container relative-position z-1'>
      <div className='flex-container'>
        <h1>Тестирование</h1>
        <div className='time-container'>
          {minutesString}:{secondsString}
        </div>
      </div>
      <Stack direction="horizontal" gap={3}>
        {test.map((problem) => (
          <button className={setClasses(problem.id)} key={problem.id} disabled={problem.id > progressId} onClick={() => dispatch(setActiveQuestionId(problem.id))}></button>
        ))}
      </Stack>
      <div className='question-container'>
        {activeQuestion ? renderQuestion(activeQuestion, progressId) : <Spinner animation="border" />}
      </div>
    </div>
  ); 
};

export default Test;