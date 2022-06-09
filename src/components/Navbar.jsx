import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  let { handleLogout, token } = useAuth();
  if (!token) {
    if (localStorage.getItem("gtfc__token")) {
      token = localStorage.getItem("gtfc__token");
    }
  }

  return (
    <div className="py-8 px-2 transition-all duration-300  bg-slate-800 flex flex-col justify-between sm:flex-row items-center sm:justify-between">
      <h1 className="text-white ml-4 text-lg">Get Up For Change</h1>
      {token && (
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-400 text-white font-bold py-3 px-10 border-b-4 my-4 border-red-700 hover:border-red-500 rounded uppercase sm:mr-4"
        >
          log out
        </button>
      )}
    </div>
  );
};

export { Navbar };
