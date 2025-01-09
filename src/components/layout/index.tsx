import { Outlet } from "react-router";
import Header from "./header";

import { default as Footer } from "./footer";


const Layout = () => {
 
  return (
    <>
      <Header />
      <main >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
