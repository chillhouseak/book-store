import{
    createBrowserRouter,
    RouterProvider,
}from "react-router-dom";
import App from "../App"; 
import Home from "../home/Home.jsx";
import Shop from "../shop/Shop.jsx"
import About from "../components/About.jsx"
import Blog from "../components/Blog.jsx"
import Singlebook from "../shop/SingleBook.jsx";
import Dashboardlayout from "../dashboard/Dashboardlayout.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
import Uploadbook from "../dashboard/Uploadbook.jsx";
import Editbooks from "../dashboard/Editbooks.jsx";
import Managebooks from "../dashboard/Managebooks.jsx"
import Signup from "../components/Signup.jsx";
import Logout from "../components/Logout.jsx";
import Login from  "../components/Login.jsx"
import Privateroute from "../privareroute/Privateroute.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/shop",
                element: <Shop/>
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/book/:id",
                element: <Singlebook/>,
                loader: ({params}) => fetch(`http://localhost:3000/book/${params.id}`)
            }
        ]
    },
    {
        path: "/admin/dashboard",
        element: <Dashboardlayout/>,
        children:[
            {
                path:"/admin/dashboard",
                element: <Privateroute><Dashboard/></Privateroute>
            },
            {
                path: "/admin/dashboard/upload",
                element: <Uploadbook/>
            },
            {
                path: "/admin/dashboard/manage",
                element: <Managebooks/>
            },
            {
                 path: "/admin/dashboard/edit/:id",
                element: <Editbooks/>,
                  loader: ({params}) => fetch(`http://localhost:3000/book/${params.id}`)
            }
        ]
    },
    {
        path: "sign-up",
        element: <Signup/>
    },
    {
        path: "logout",
        element: <Logout/>
    },
    {
        path: "login",
        element: <Login/>
    },
   
]);

export default router;