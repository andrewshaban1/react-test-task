import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { GooglePayload } from '../types/googlePayload.type';
import { jwtDecode } from 'jwt-decode';
import { registerUser } from '../services/api-client';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { login } from '../redux/auth-slice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const responseMessage = (response: CredentialResponse) => {
    if (response.credential) {
      const decodedData = jwtDecode<GooglePayload>(response.credential);
      registerUser({
        email: decodedData.email,
        firstName: decodedData.given_name,
        lastName: decodedData.family_name,
        picture: decodedData.picture,
      })
        .then((response) => {
          dispatch(login({ ...response.data }));
          navigate('/');
        })
        .catch((error) => console.error(error));
    }
  };

  const errorMessage = () => {
    console.error('An error happened during authorization!');
  };

  return <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />;
};

export default Login;
