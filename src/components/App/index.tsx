import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "pages/Landing/index";
import * as Styled from "./App.styled";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);

export function App() {
  return (
    <div className="App">
      <Styled.Header>
        <Styled.Heading>Who are you?</Styled.Heading>
      </Styled.Header>
      <Styled.RouteWrapper>
        <RouterProvider router={router} />
      </Styled.RouteWrapper>
      <Styled.Footer>Miko Sramek 2023</Styled.Footer>
    </div>
  );
}
