import CurrencyDropdown from "../../components/Currency/CurrencyDropdown";
const Layout = () => {
  return (
    <section className="">
      <div className="flex  items-center justify-between border-b px-32 py-2.5 text-sm font-semibold">
        <div className="flex gap-4 opacity-70">
          <h3>(254)12 456 789</h3>
          <a href="#" className="border-l-2 px-4">
            Store location
          </a>
        </div>
        <div className="font-extralight opacity-60">
          Tell a friend about WireCart & get 20% off*
        </div>
        <div className="flex gap-2">
          <CurrencyDropdown />

          <a href="#" className="border-l-2 px-4">
            Log In / Sign Up
          </a>
        </div>
      </div>
    </section>
  );
};

export default Layout;
