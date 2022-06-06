import { useRouter } from "next/router";

const Auth = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== 'undefined') {
      const router = useRouter();

      const accessToken = sessionStorage.getItem("accessToken");

    if (!accessToken) {
      router.replace("/");
      return null;
    }

      return <WrappedComponent {...props} />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default Auth;