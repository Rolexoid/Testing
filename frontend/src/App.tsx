import './App.css';
import Test from './components/Test';
import Results from './components/Results.jsx';
import { useSelector } from 'react-redux';
import { test } from './data/index.js';
import type { RootState } from './slices';

function App() {
  const { progressId } = useSelector((state: RootState) => state.appControl);
  const { seconds } = useSelector((state: RootState) => state.timer);
  const progressQuestion = test.find(({ id }) => id === progressId);
  if (progressQuestion && seconds > 0) {
    return <Test />;
  }
  return (
      <Results />
  );
}

export default App;