import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <header>
        <div className="header-text">XXXMuck</div>
      </header>
      <main>
        <Outlet/>
      </main>
      {/* <footer>
        <div className="footer-text">Czechitas, React course</div>
      </footer> */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h3>Tady je error...</h3>,
    children: [
      {
        path: "/",
        element: <HomePage />,   
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      }
    ]
  }
]);

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);
