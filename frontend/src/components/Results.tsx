import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { test } from '../data/index.js';
import { persistor } from '../slices/index.js';
import type { RootState } from '../slices';
import { setIsActiveTest } from '../slices/activeQuestionSlice'

const Results = () => {
  const dispatch = useDispatch();
  const answersObj = useSelector((state: RootState) => state.answers);
  const { answers } = answersObj;
  return (
    <div className='container mt-5'>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>№</th>
          <th>Твой ответ</th>
          <th>Верный ответ</th>
        </tr>
      </thead>
      <tbody>
        {test.map(({ id, rightAnswer }) => {
          const result = answers.find((item) => item.id === id);
          const answer = result ? result.answer : '';
         return (
        <tr key={id}>
          <td>{id}</td>
          <td>{Array.isArray(answer) ? answer.join(', ') : answer}</td>
          <td>{Array.isArray(rightAnswer) ? rightAnswer.join(', ') : rightAnswer}</td>
        </tr>)
        })}
      </tbody>
    </Table>
    <button
      type="submit"
      className="w-20 mt-2 btn button"
      onClick={() => {
        persistor.purge();
        dispatch(setIsActiveTest(false))
      }}
    >Пройти тест еще раз</button>
    </div>
  )
};

export default Results;