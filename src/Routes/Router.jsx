import { createBrowserRouter } from "react-router-dom";
import Root from "../MainRoot/Root";
import Home from "../pgess/Home";
import Listebook from "../pgess/Listebook";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
               path:'/',
               element:<Home></Home>,
            },
            {
                path:'/listed Books',
                element:<Listebook></Listebook>
            }
        ]
    }
])