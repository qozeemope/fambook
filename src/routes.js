import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree.jsx";
import ErrorPage from "./components/ErrorPage";
import Users from "./components/Users";

const RoutesObjects = [
  {
    id: 1,
    path: "/",
    element: <PageOne />,
  },
  {
    id: 2,
    path: "/page-two",
    element: <PageTwo />,
  },
  {
    id: 3,
    path: "/page-three",
    element: <PageThree />,
  },
  {
    id: 4,
    path: "/error",
    element: <ErrorPage />,
  },
  {
    id: 5,
    path: "/users",
    element: <Users />,
  },
];

export default RoutesObjects;
