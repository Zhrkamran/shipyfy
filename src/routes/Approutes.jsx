import { Route, Routes } from "react-router";
import { routes } from "./routes.constant";

function Approutes() {
  return (
    <Routes>
      {routes.map((item) => (
        <Route key={item.path} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
}

export default Approutes;
