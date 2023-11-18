import { Outlet } from "react-router-dom";
import Header from "./shared/header/Header";

import "./Root.scss";

function Root() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
