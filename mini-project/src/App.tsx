import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Audit from "./pages/audit/Audit";
import Companies from "./pages/companies/Companies";
import Payslips from "./pages/payslips/Payslips";
import Reports from "./pages/reports/Reports";
import Menu from "./components/menu/Menu";
import Login from "./login/Login";
import "./style/global.scss";

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
      ],
    },
    {
      // create login layout
      path: "/login",
      element: <Login />,
    },
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
