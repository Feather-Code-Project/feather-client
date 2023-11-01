import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
