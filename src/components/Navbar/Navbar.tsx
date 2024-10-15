import MenuComponent from "../MenuComponent/MenuComponent";
import { navLinks } from "@/data/links";
import ButtonShapeTabs from "../ui/NavTabs";

const Navbar = () => {
  return (
    <header className="relative py-5 px-4 flex justify-between bg-gradient-to-b from-main via-main to-main/10">
      <div className="container flex justify-between">
        <img
          src="/assets/images/logo.png"
          alt="logo"
          className="size-20 absolute top-0"
        />

        <div className="hidden lg:block">
          <ButtonShapeTabs />
        </div>
      </div>

      <nav className="lg:hidden text-main-foreground">
        <MenuComponent navLinks={navLinks} />
      </nav>
    </header>
  );
};
export default Navbar;
