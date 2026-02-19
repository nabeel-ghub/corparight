import { useState } from 'react';
import MainPage from './pageComponents/mainPage';
import LoadingPage from './pageComponents/loadingPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="App">
      {isLoading?
      <LoadingPage setIsLoading={setIsLoading}></LoadingPage>
      :
      <MainPage></MainPage>
      }
    </div>
  );
}

export default App;
