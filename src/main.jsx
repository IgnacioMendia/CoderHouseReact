import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Clothes from './components/clothes/Clothes.jsx';

window.conexionML = "https://api.mercadolibre.com/sites/MLA/search?";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path:"/clothes",
    element:<Clothes />
  }
]);

// Usa directamente createRoot
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
