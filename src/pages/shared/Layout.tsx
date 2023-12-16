import CurrencyDropdown from "@/components/Currency/CurrencyDropdown";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "@/assets/logo.png";

const Layout = () => {
  const linkStyles =
    "transition-all hover:text-primary h-20 flex items-center justify-center";

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

      <header className="flex h-20 items-center justify-between border-2 border-purple-500 px-32">
        <NavLink to="/">
          {/* update logo later */}
          <img src={Logo} alt="logo" className=" h-12" />
        </NavLink>
        {/* <div>Logo</div> */}
        <nav className="flex gap-6 text-base font-semibold uppercase opacity-75">
          <div className={linkStyles}>
            <NavLink to="#">Home</NavLink>
          </div>
          <div className={linkStyles}>
            <NavLink to="#">Electronics</NavLink>
          </div>
          <div className={linkStyles}>
            <NavLink to="#">Blog</NavLink>
          </div>
          <div className={linkStyles}>
            <NavLink to="#">About</NavLink>
          </div>
          <div className={linkStyles}>
            <NavLink to="#">Contact</NavLink>
          </div>
        </nav>

        <div className="flex gap-6 text-2xl">
          <div className={linkStyles}>
            <NavLink to="#">
              <FiSearch />
            </NavLink>
          </div>
          <div className={linkStyles}>
            <NavLink to="#">
              <FaRegHeart />
            </NavLink>
          </div>
          <div className={linkStyles}>
            <NavLink to="#" className={`relative`}>
              <HiOutlineShoppingBag />

              <span className="absolute left-3 top-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-center text-xs text-white">
                2
              </span>
            </NavLink>
          </div>

          <NavLink to="#"></NavLink>
        </div>
      </header>

      {/* main section */}

      <main className="">
        <Outlet />
      </main>
    </section>
  );
};

export default Layout;
