import Header from "./components/header";
import Footer from "./components/footer";

const Layout = ({ children, headerProps, footerProps, centered }) => (
  <div className="border border-light card-content col-4 d-flex flex-column mt-5 mx-auto shadow p-0">
    <Header {...headerProps} />
    <main className={`d-flex flex-grow-1${centered ? " justify-content-center" : ""} flex-column`}>{children}</main>
    <Footer {...footerProps} />
  </div>
);

export default Layout;
