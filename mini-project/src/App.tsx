import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Audit from "./pages/audit/Audit";
import Companies from "./pages/companies/Companies";
import Payslips from "./pages/payslips/Payslips";
import Reports from "./pages/reports/Reports";
import Menu from "./components/menu/Menu";
import Login from "./login/Login";
import "./style/global.scss";
import { useState } from "react";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentConainter">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  //using the useState Hook to store the token in memory
  const [token, setToken] = useState();
  //import the Login component. Add a conditional statement to display Login.
  //if token is falsy. pass the setToken function to the Login component:

  if (!token) {
    return <Login setToken={setToken} />;
  }

  // Menu on main page of react router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/audit",
          element: <Audit />,
        },
        {
          path: "/companies",
          element: <Companies />,
        },
        {
          path: "/payslips",
          element: <Payslips />,
        },
        {
          path: "/reports",
          element: <Reports />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    // {
    //   // create login layout
    //   path: "/login",
    //   element: <Login />,
    // },
  ]);

  return <RouterProvider router={router} />;
}

//   return <>
//   <Home />
//   <Audit />
//   <Companies />
//   <Payslips />
//   <Reports />

//   </>
// }

export default App;
