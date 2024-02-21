import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './components/RootLayout';
import HomeScreen from './components/HomeScreen';
import MoviesScreen from './components/MoviesScreen';
import SeriesScreen from './components/SeriesScreen';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // errorElement: <ErrorPage />, // компонент, который будет выводиться при ошибке
    children: [
      { path: '/', element: <HomeScreen /> },
      { path: '/movies', element: <MoviesScreen /> },
      { path: '/series', element: <SeriesScreen /> },
      { path: '/login', element: <Login /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />; // привязываем router
}
export default App;
