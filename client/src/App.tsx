import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Button } from "./components/ui/button";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: (
        <div className="h-screen bg-black/90 flex items-center justify-center relative">
          <Link to={"/"}>
            <Button
              variant="default"
              className="absolute top-10 left-40 text-white text-xl"
            >
              {"<Back"}
            </Button>
          </Link>
          <Register />
        </div>
      ),
    },
    {
      path: "/login",
      element: (
        <div className="h-screen flex bg-black/90 items-center justify-center">
          <Link to={"/"}>
            <Button
              variant="default"
              className="absolute top-10 left-40 text-white text-xl"
            >
              {"<Back"}
            </Button>
          </Link>
          <Login />
        </div>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
