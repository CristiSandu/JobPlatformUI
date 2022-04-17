import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import GoogleLogo from "../Images/gLogo.svg";
import LoginImage from "../Images/login_image.svg";

export const LoginPage = (): JSX.Element => {
  return (
    <div className="flex h-screen w-screen">
      <div className="relative  m-auto space-y-0 text-center border-MainBlue border-2 pt-32 pb-44  px-72 rounded-md">
        <div className="space-y-6">
          <div className="space-y-3">
            <form className="space-y-4 align-baseline w-full">
              <div>
                <input
                  className="entry-primary w-96"
                  type="text"
                  name="name"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  className="entry-primary w-96"
                  type="password"
                  name="name"
                  placeholder="Password"
                />
              </div>
            </form>
            <div className="space-x-10">
              <button className="btn-primary">Login</button>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-black h-0.5 w-full content-center"></div>
            <div className="font-semibold">OR</div>
            <div className="bg-black h-0.5 w-full "></div>
          </div>
          <div
            className="flex items-center space-x-2 justify-center btn-primary cursor-pointer"
            onClick={() => {}}
          >
            <img src={GoogleLogo} alt="React Logo" />
            <h1>Login with Google</h1>
          </div>
        </div>
        <img
          className="absolute top-0 left-0 z-0 "
          src={LoginImage}
          height="244"
          width="410"
          alt="React Logo"
        />
      </div>
    </div>
  );
};
