import { createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import FilterableListPage from './components/FilterableListPage';
import PrivateRoutes from './components/PrivateRoutes';

const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  {
    element: <PrivateRoutes />,
    children: [{ path: '/', element: <FilterableListPage /> }],
  },
]);

export default router;
