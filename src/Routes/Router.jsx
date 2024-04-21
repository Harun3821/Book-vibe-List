import { createBrowserRouter } from "react-router-dom";
import Root from "../MainRoot/Root";
import Home from "../pgess/Home";
import Books from "../pgess/Books";
import Book from "../pgess/Book";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: () => fetch('/Book.json'),
        },
        {
          path: '/books/:bookId',
          element: <Books />,
          loader: ()=> fetch('/Book.json')
  
        },
       
      ],
    },
  ]);
