import { Suspense } from 'react';
// import { Outlet, ScrollRestoration } from 'react-router-dom';
import { PageLoading } from './shared';

const App: React.FC = () => {
  return (
    <Suspense fallback={<></>}>
      {/* <Outlet /> */}
      <PageLoading />
      {/* <ScrollRestoration /> */}
    </Suspense>
  );
};

export default App;
