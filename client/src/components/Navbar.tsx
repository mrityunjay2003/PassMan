import { Link } from "react-router-dom";
import { Button } from "./ui/button";
type Props = {
  isSideBarOpen: boolean;
  setIsSideBarOpen?(isSideBarOpen: boolean): void;
};

const Navbar = ({ isSideBarOpen, setIsSideBarOpen }: Props) => {
  return (
    <div className="h-24 flex">
      {!isSideBarOpen ? (
        <>
          <div
            className="flex items-center ml-3"
            onClick={() => setIsSideBarOpen && setIsSideBarOpen(!isSideBarOpen)}
          >
            <img src="hamburg.svg" alt="hamburg" className="w-10 h-10" />
          </div>
          <div className="w-[65%] mx-auto flex items-center justify-between">
            <p className="font-semibold text-xl mt-2 text-white">PASSMAN.</p>
            <Link to={"/login"}>
              <Button variant={"outline"}>Login</Button>
            </Link>
          </div>
        </>
      ) : (
        <div className="w-[70%] md:w-[75%] mx-auto flex items-center justify-center md:justify-around ">
          <p className="font-semibold text-xl mt-2 text-white">PASSMAN.</p>
          <Link to={"/login"}>
            <Button variant={"outline"}>Login</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
