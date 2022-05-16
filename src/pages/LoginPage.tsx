import { useEffect, useState } from "react";
import GoogleLogo from "../Images/gLogo.svg";
import { useNavigate } from "react-router-dom";
import LoginImage from "../Images/login_image.svg";
import { auth, signIn, signUpWithGoogle } from "../provider/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const LoginPage = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoginWithGoogle, setIsLoginWithGoogle] = useState<boolean>(false);

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && isLoginWithGoogle) {
      navigate("/profileForm");
      const fetchData = async () => {
        localStorage.setItem("JWT", await user.getIdToken());
      };
      fetchData().catch(console.error);
    }
    if (user && !isLoginWithGoogle) {
      navigate("/editUsers");
      const fetchData = async () => {
        localStorage.setItem("JWT", await user.getIdToken());
      };
      fetchData().catch(console.error);
    }
  }, [user, loading, error, navigate, isLoginWithGoogle]);

  return (
    <div className="flex h-screen w-screen">
      <div className="relative m-auto space-y-0 text-center border-LightBlue border-2 pt-32 pb-44 h-2/3 w-2/4 px-72 rounded-md">
        <img
          className="absolute top-24 left-24 z-0 "
          src={LoginImage}
          height="244"
          width="410"
          alt="React Logo"
        />

        <div className="space-y-6  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="space-y-3">
            <form className="space-y-4 align-baseline w-full">
              <div>
                <input
                  className="entry-primary w-96"
                  type="text"
                  name="name"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  className="entry-primary w-96"
                  type="password"
                  name="name"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
            </form>
            <div className="grid grid-cols-2 gap-24 px-12 ">
              <button
                className="btn-primary"
                onClick={() => {
                  signIn(email, password);
                  setIsLoginWithGoogle(false);
                  navigate("/profileForm");
                }}
              >
                Login
              </button>
              <button
                className="btn-primary"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-black h-0.5 w-full content-center"></div>
            <div className="font-semibold">OR</div>
            <div className="bg-black h-0.5 w-full "></div>
          </div>
          <div className="grid grid-cols-1 px-8">
            <div
              className="flex items-center space-x-2 justify-center btn-primary cursor-pointer"
              onClick={() => {
                console.log(signUpWithGoogle());
                setIsLoginWithGoogle(true);
                navigate("/profileForm");
              }}
            >
              <img src={GoogleLogo} alt="React Logo" />
              <h1>Login with Google</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
