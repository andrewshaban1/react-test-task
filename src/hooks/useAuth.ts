import { useAppSelector } from './reduxHooks';

const useAuth = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  return isAuthenticated;
};

export default useAuth;
