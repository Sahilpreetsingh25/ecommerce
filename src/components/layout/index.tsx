import { Outlet } from "react-router";
import Header from "./header";

import AppFooter from "./footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>
      <AppFooter />
    </>
  );
};

export default Layout;
