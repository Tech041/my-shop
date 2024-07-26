"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { BsCart3 } from "react-icons/bs";
import Badge from "../badge/Badge";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
const itemStyles =
  "relative before:content-[''] before:w-[80%] before:h-1 before:absolute  before:bottom-[-4px] before:left-0 before:scale-0 before:duration-500 before:transition-all  before:origin-left hover:before:scale-100 before:bg-accent-500";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="fixed w-full py-5 z-40 text-white bg-primary-700">
      <div className="container flex justify-between items-center gap-5">
        <div className="md:hidden z-10" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <MdClose size={30} /> : <RxHamburgerMenu size={30} />}
        </div>
        <div className="text-3xl font-bold z-10">
          MIKE<span className="text-accent-500">SHOP</span>
        </div>

        <form className=" hidden md:flex ">
          <input
            type="text"
            placeholder="search"
            className=" w-full md:w-[300px] p-2 border-none"
          />
          <button
            type="submit"
            className="px-5 border-none text-white bg-accent-500 cursor-pointer"
          >
            Search
          </button>
        </form>
        <div className="flex items-center gap-5">
          <nav
            className={`w-full md:w-auto h-screen md:h-auto absolute md:static top-0  bg-secondary-500 md:bg-transparent  transition-all duration-300 ease-in ${
              showMenu ? "left-0" : "left-[-100%]"
            }`}
          >
            <ul className="mt-24 md:mt-0 px-5 md:px-0 flex   flex-col md:flex-row md:items-center gap-5 font-bold text-black md:text-white text-xl md:text-base">
              <li className={itemStyles} onClick={() => setShowMenu(false)}>
                <Link href="/">Home</Link>
              </li>
              <li className={itemStyles} onClick={() => setShowMenu(false)}>
                <Link href="/register">Register</Link>
              </li>
              <li className={itemStyles} onClick={() => setShowMenu(false)}>
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </nav>
          <Badge content={7}>
            <Link href="/cart">
              <BsCart3 size={30} color="white" />
            </Link>
          </Badge>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
