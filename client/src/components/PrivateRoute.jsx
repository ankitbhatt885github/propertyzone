import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  //Outlet is used to render child routes within a parent route
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
}
