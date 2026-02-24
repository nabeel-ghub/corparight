import { useState, Suspense, lazy } from 'react';
const MainPage = lazy(() => import('./pageComponents/mainPage'));
const LoadingPage = lazy(() => import('./pageComponents/loadingPage'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        {isLoading ? (
          <LoadingPage setIsLoading={setIsLoading} />
        ) : (
          <MainPage />
        )}
      </Suspense>
    </div>
  );
}

export default App;
