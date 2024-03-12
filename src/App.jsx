import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './components/RootLayout';
import HomeScreen from './pages/HomeScreen';
import MoviesScreen from './pages/MoviesScreen';
import SeriesScreen from './pages/SeriesScreen';
import BookmarkedScreen from './pages/BookmarkedScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomeScreen /> },
      { path: '/movies', element: <MoviesScreen /> },
      { path: '/series', element: <SeriesScreen /> },
      { path: '/bookmarked', element: <BookmarkedScreen /> },
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
