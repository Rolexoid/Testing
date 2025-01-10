import { setIsActiveTest } from '../slices/activeQuestionSlice'
import { useDispatch} from 'react-redux'
import main from '../assets/main-cropped.png'

const StartButton = () => {
  const dispatch = useDispatch();
  return (
    <div className='root-container'>
      <div className='flex-item bg-blue relative-position'>
        <img src={main} className='img-size absolute-position'/>
      </div>
      <div className='flex-item bg-white relative-position'>
        <div className='absolute-position'>
          <h1 className='title'>Онлайн-<br/>тестирование <br/><span className='bold-cursive'>по физике</span></h1>
          <button className='start-button' onClick={() => dispatch(setIsActiveTest(true))}>НАЧАТЬ ТЕСТИРОВАНИЕ</button>
        </div>
      </div>
    </div>

  )
};

export default StartButton;
