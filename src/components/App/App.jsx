import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import Layout from '../../components/Layout/Layout';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const TweetPage = lazy(() => import('../../pages/TweetPage/TweetPage'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

const App = () => {
  return (
    <BrowserRouter basename="/tweet-cards">
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/tweets" element={<TweetPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
