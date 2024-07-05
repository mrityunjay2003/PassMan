import Hero from "@/components/Hero";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const Home = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <div className="bg-black/90 h-screen flex relative">
      {isSideBarOpen && (
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ duration: 0.3 }}
          className="fixed left-0 top-0 z-10 h-screen bg-gray-800 w-72"
        >
          <SideBar setIsSideBarOpen={setIsSideBarOpen} />
        </motion.div>
      )}

      <div
        className={`flex flex-col w-full ${
          isSideBarOpen ? "ml-72" : ""
        } transition-all duration-300`}
      >
        <Navbar
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
        <Separator />
        <div className="flex items-center justify-center h-full">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Home;
