import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "pages/Landing/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);

export function App() {
  return (
    <div className="App">
      <header>
        <h1>header</h1>
      </header>
      <RouterProvider router={router} />
      <footer>Miko Sramek 2023</footer>
    </div>
  );
}
