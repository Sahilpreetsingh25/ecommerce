import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Layout from "./components/layout";  
import Home from "./pages/home";           
import NotFound from "./components/pages-errors/not-found";

const router = createBrowserRouter([
  {

    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Navigate to="/home" />,  
      },
      {
        path: "*",  
        element: <NotFound />,  
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
