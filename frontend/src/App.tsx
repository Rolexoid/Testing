import './App.css';
import Test from './components/Test';
import Results from './components/Results.tsx';
import StartButton from './components/StartButton.tsx'
import { useSelector } from 'react-redux';
import { test } from './data/index.ts';
import type { RootState } from './slices';

function App() {
  const { progressId, testIsActive } = useSelector((state: RootState) => state.appControl);
  const { seconds } = useSelector((state: RootState) => state.timer);
  const progressQuestion = test.find(({ id }) => id === progressId);
  if (!testIsActive) {
    return <StartButton />
  }
  return (progressQuestion && seconds > 0 ? <Test /> : <Results />)
}

export default App;