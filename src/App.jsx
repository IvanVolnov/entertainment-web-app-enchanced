import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './components/RootLayout';
import HomeScreen from './pages/HomeScreen';
import MoviesScreen from './pages/MoviesScreen';
import SeriesScreen from './pages/SeriesScreen';
import BookmarkedScreen from './pages/BookmarkedScreen';
import Login from './pages/Login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorPage from './components/UI/ErrorPage';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomeScreen /> },
      { path: '/movies', element: <MoviesScreen /> },
      { path: '/series', element: <SeriesScreen /> },
      { path: '/bookmarked', element: <BookmarkedScreen /> },
      { path: '/login', element: <Login /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
export default App;
