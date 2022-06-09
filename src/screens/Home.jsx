import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { name } = useAuth();
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {name && (
        <h2 className="text-xl text-slate-700 font-bold"> Welcome {name}! </h2>
      )}
    </div>
  );
};

export { Home };
