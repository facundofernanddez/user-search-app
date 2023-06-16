import { SunIcon } from "./icons/SunIcon";

export const Navbar = () => {
  return (
    <header className="flex items-center space-x-2 mb-10">
      <h1 className="text-white text-4xl font-bold flex-grow">devfinder</h1>
      <span className="uppercase text-white">Light</span>
      <button>
        <SunIcon className="fill-white" />
      </button>
    </header>
  );
};
