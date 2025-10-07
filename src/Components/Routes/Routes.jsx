import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import About from "../About/About";
import BookDetails from "../BookDetails/BookDetails";
import ReadList from "../ReadList/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/Books.json"),
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "bookDetails/:id",
        loader: () => fetch("/Books.json"),
        Component: BookDetails,
      },
      {
        path: "readList",
        loader: () => fetch("/Books.json"),
        Component: ReadList,
      },
    ],
  },
]);
