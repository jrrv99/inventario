import PropTypes from "prop-types";
import { useEffect } from "react";

const Page = ({ children, title }) => {
  useEffect(() => {
    if (title) document.title = `Tienda App | ${title}`;
  }, []);

  return <div>{children}</div>;
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;
