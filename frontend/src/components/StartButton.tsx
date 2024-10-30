import { setIsActiveTest } from '../slices/activeQuestionSlice'
import { useDispatch} from 'react-redux'

const StartButton = () => {
  const dispatch = useDispatch();
  return (
        <div className='container-fluid gray-block d-flex justify-content-center align-items-center'>
            <button className="btn button" onClick={() => dispatch(setIsActiveTest(true))}>Начать тестирование</button>
        </div>
  )
};

export default StartButton;
