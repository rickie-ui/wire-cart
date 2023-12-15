import CurrencyDropdown from "@/components/Currency/CurrencyDropdown";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Layout = () => {
  const linkStyles = "transition-all hover:text-primary";

  return (
    <section className="">
      {/* top section */}
      <div className="flex  items-center justify-between border-b px-32 py-2.5 text-sm font-semibold">
        <div className="flex gap-4 opacity-70">
          <h3>(254)12 456 789</h3>
          <a href="#" className="border-l-2 px-4">
            Store location
          </a>
        </div>
        <div className="font-extralight opacity-75">
          Tell a friend about WireCart & get 20% off*
        </div>
        <div className="flex gap-2 opacity-75">
          <CurrencyDropdown />

          <a href="#" className="border-l-2 px-4">
            Log In / Sign Up
          </a>
        </div>
      </div>

      {/* header section */}

      <header className="flex items-center justify-between border-2 border-purple-500 px-32 py-6">
        <div>Logo</div>
        <nav className="flex gap-6 text-base font-semibold uppercase opacity-75">
          <NavLink to="#" className={linkStyles}>
            Home
          </NavLink>
          <NavLink to="#" className={linkStyles}>
            Electronics
          </NavLink>
          <NavLink to="#" className={linkStyles}>
            Blog
          </NavLink>
          <NavLink to="#" className={linkStyles}>
            About
          </NavLink>
          <NavLink to="#" className={linkStyles}>
            Contact
          </NavLink>
        </nav>

        <div className="flex gap-6 text-2xl">
          <NavLink to="#" className={linkStyles}>
            <FiSearch />
          </NavLink>
          <NavLink to="#" className={linkStyles}>
            <FaRegHeart />
          </NavLink>

          <NavLink
            to="#"
            className="relative transition-all hover:text-primary"
          >
            <HiOutlineShoppingBag />

            <span className="absolute left-3 top-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-center text-xs text-white">
              0
            </span>
          </NavLink>
        </div>
      </header>
    </section>
  );
};

export default Layout;
