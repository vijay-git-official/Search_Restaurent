import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Body from './components/Body'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Body />,
        },

      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
