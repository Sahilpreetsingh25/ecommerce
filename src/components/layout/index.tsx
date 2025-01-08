import { Outlet } from "react-router";
import Header from "./header";

import AppFooter from "./footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main >
        <Outlet />
      </main>
      <AppFooter />
    </>
  );
};

export default Layout;
