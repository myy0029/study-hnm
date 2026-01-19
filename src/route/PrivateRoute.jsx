import { Navigate, useLocation } from 'react-router-dom';
import ProductDetail from '../page/ProductDetail';

function PrivateRoute({ authenticate }) {
  const location = useLocation();

  if (!authenticate) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return <ProductDetail />;
}

export default PrivateRoute;
