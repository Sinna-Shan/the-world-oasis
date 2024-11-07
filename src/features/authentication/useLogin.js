/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { isLoading: isLoggingIn, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
        navigate('/dashboard');
        toast.success('logged in.')
    },
    onError: (err) => {
      console.error(err.message);
      toast.error("Provided email or password is incorrect.");
    },
  });

  return { isLoggingIn, login };
}
