import { setIsActiveTest } from '../slices/activeQuestionSlice'
import { useDispatch} from 'react-redux'

const StartButton = () => {
  const dispatch = useDispatch();
  return (
        <div className='gray-bg'>
          <div className='container-fluid image-block d-flex justify-content-center align-items-center'>
            <button className="btn button mb-2 btn-lg border-gray" onClick={() => dispatch(setIsActiveTest(true))}>Начать тестирование</button>
          </div>
        </div>
  )
};

export default StartButton;
