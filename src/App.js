import './App.css';
import MainPage from './pages/MainPage/MainPage'
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Cartpage from './pages/CartPage/Cartpage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/Cart",
      element: <Cartpage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <div className="App font-body box-border">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;