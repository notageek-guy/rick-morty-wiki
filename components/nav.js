
import DarkModeToggle from "./theme";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <span className="text-2xl sm:text-3xl font-semibold ">Rick & Morty</span>{" "}
        <span className="px-2 text-2xl sm:text-3xl font-bold text-green-500 ">Wiki</span>
      </div>
      <div className="navbar-end">
        <DarkModeToggle />
      </div>
    </div>
  );
}
