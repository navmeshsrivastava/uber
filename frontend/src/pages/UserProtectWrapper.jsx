import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../userContext/UserContext';

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(UserDataContext);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;

          if (!data.user) {
            navigate('/captain-home');
            return;
          }

          setUser(data.user);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        navigate('/login');
      });
  }, [token, navigate, setUser]);

  if (!token) return null;

  return <>{children}</>;
};

export default UserProtectWrapper;
