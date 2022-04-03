import PropTypes from "prop-types";
import { useLocation, Navigate } from "react-router-dom";
import { useAuthContext } from "../state/context/AuthContext";

/************* COMPONENT *************/
const PrivateRoute = ({ children }) => {
  const {
    user: { isAuth },
  } = useAuthContext();

  const location = useLocation();

  return isAuth ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

/************* PROPTYPES *************/
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
