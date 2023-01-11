import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "pages/Landing/index";
import { Pokemon } from "pages/Pokemon";
import { Review } from "pages/Review";
import * as Styled from "./App.styled";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/pokemon",
    element: <Pokemon />,
  },
  {
    path: "/review",
    element: <Review />,
  },
]);

export function App() {
  return (
    <Styled.AppWrapper>
      <Styled.Header>
        <Styled.Heading>Who are you?</Styled.Heading>
        {/* TODO: nav bubbles for the 3 steps */}
      </Styled.Header>
      <Styled.RouteWrapper>
        <RouterProvider router={router} />
      </Styled.RouteWrapper>
      <Styled.Footer>Miko Sramek 2023</Styled.Footer>
    </Styled.AppWrapper>
  );
}
