import PropTypes from "prop-types";
import { useLocation, Navigate } from "react-router-dom";
import { useAuthContext } from "../state/context/AuthContext";

/************* COMPONENT *************/
const PublicRoute = ({ children }) => {
  const {
    user: { isAuth },
  } = useAuthContext();

  const location = useLocation();

  return !isAuth ? (
    children
  ) : (
    <Navigate to="/Dashboard" state={{ from: location }} replace />
  );
};

/************* PROPTYPES *************/
PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
