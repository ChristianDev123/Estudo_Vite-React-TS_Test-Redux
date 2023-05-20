import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/Home";
import ErrorPage from "../screens/ErrorPage";
import ContactPage from "../screens/ContactPage";

const router = createBrowserRouter([
    {
      path:"/",
      element: (<Home/>),
      errorElement:(<ErrorPage/>)
    },
    {
      path:"/contacts",
      element:(<ContactPage/>),
      errorElement:(<ErrorPage/>)
    }
]);

export default router;