import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {
  name?: string;
  setIsSideBarOpen?(isSideBarOpen: boolean): void;
};

const SideBarCard = ({ name }: Props) => {
  return (
    <div className="w-[95%] mx-auto bg-zinc-100 bg-opacity-70 shadow-md rounded-lg py-3 text-center text-md font-normal cursor-pointer transition-all duration-300 hover:bg-opacity-80 hover:scale-105">
      {name}
    </div>
  );
};

const SideBar = ({ setIsSideBarOpen }: Props) => {
  return (
    <div className="w-[18rem] h-screen bg-black/55 rounded-sm">
      <div className="p-4 flex justify-between items-center">
        <img
          src="back.svg"
          alt="cross"
          className="w-11 h-11 p-1 cursor-pointer"
          onClick={() => setIsSideBarOpen && setIsSideBarOpen(false)}
        />
        <Avatar>
          <AvatarImage src="image.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <p className="text-white font-semibold px-4 text-xl my-4">
        Your Collections
      </p>
      <div className="flex flex-col gap-1 px-2 mt-3">
        <SideBarCard name="Social" />
        <SideBarCard name="Important" />
        <SideBarCard name="Gaming" />
        <SideBarCard name="Payments" />
      </div>
    </div>
  );
};

export default SideBar;
