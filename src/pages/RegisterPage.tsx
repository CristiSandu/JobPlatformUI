import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import RegisterImage from "../Images/register_image.svg";
import { auth, signUp } from "../provider/firebase";

export const RegisterPage = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) {
      alert("Please enter name");
      return;
    }
    signUp(name, email, password);
  };

  useEffect(() => {
    if (user) {
      navigate("/profileForm");
    }
  }, [user, loading, error, navigate]);

  return (
    <div className="flex h-screen w-screen">
      <div className="relative m-auto space-y-0 text-center border-LightBlue border-2 pt-32 pb-44 h-2/3 w-2/4 px-72 rounded-md">
        <img
          className="absolute top-24 left-24 z-0 "
          src={RegisterImage}
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
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  className="entry-primary w-96"
                  type="text"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  className="entry-primary w-96"
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
            </form>
            <div className="grid grid-cols-2 gap-2 px-12 pt-8">
              <button className="btn-primary" onClick={register}>
                Register
              </button>
              <button className="btn-primary">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
