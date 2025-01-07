import { Outlet } from "react-router";
import Header from "./header";
import Footer from "./footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
