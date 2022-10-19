import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";
import Home from "../components/Home";
import Register from "../components/Register";
import Wallet from "../components/Wallet";
import Profile from "../components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/wallet", element: <Wallet></Wallet> },
      { path: "/profile", element: <Profile></Profile> },
    ],
  },
]);

export default router;
