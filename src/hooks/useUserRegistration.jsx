import { useState } from "react";
import axios from "axios";

const useUserRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const registerUser = async (user) => {
    setIsLoading(true);
    setError(null);
    setIsRegistered(false);

    try {
      const response = await axios.post(
        "https://eventapp-backend-production.up.railway.app/register",
        user
      );

      if (response.status === 201) {
        setIsRegistered(true);
      } else {
        setError("Error al registrar usuario");
      }
    } catch (error) {
      setError("Hubo un error al procesar la solicitud");
    }

    setIsLoading(false);
  };

  return {
    registerUser,
    isLoading,
    error,
    isRegistered,
  };
};

export default useUserRegistration;