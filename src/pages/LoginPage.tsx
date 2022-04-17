import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import GoogleLogo from "../Images/gLogo.svg";

export const LoginPage = (): JSX.Element => {
  return (
    <div className="flex h-screen">
      <div className="m-auto space-y-64 text-center ">
        <div className="space-y-8">
          <form className="space-y-4 align-baseline ">
            <div>
              <i className="fa fa-instagram icon"></i>
              <input
                className="entry-primary"
                type="text"
                name="name"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                className="entry-primary"
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
      </div>
    </div>
  );
};
