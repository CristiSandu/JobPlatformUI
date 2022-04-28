import RegisterImage from "../Images/register_image.svg";

export const RegisterPage = (): JSX.Element => {
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
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  className="entry-primary w-96"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  className="entry-primary w-96"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
            </form>
            <div className="space-x-5">
              <button className="btn-primary">Register</button>
              <button className="btn-primary">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
