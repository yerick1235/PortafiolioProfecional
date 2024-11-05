import { useState } from "react";
import viteLogo from "/vite.svg";
import { routes } from "../routes";
import { useRoutes } from "react-router-dom";

function App() {
  const element = useRoutes(routes);

  return (
    <div>
      {element}
    </div>
  );
}

export default App;
