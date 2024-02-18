import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './components/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // errorElement: <ErrorPage />, // компонент, который будет выводиться при ошибке
    // children: [
    //   { path: "/", element: <HomeScreen /> },
    //   { path: "/movies", element: <MoviesScreen /> },
    // ],
  },
]);

function App() {
  return <RouterProvider router={router} />; // привязываем router
}
export default App;
