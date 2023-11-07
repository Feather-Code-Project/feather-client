import PropTypes from "prop-types";
import FeatherNavBar from "./FeatherNavBar";
import FeatherFooter from "./FeatherFooter";

const Layout = ({ children }) => {
  return (
    <>
      <FeatherNavBar />
      <main className="mx-auto flex flex-col overflow-auto">{children}</main>
      <FeatherFooter />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
