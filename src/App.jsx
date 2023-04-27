import { useState } from 'react';
import './App.css';
import FeedVideos from './components/FeedVideos/index.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <main>
          <FeedVideos/>
        </main>
      </div>
      
    </>
  )
}

export default App
