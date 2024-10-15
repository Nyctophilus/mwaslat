import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MenuComponent = ({ navLinks }: any) => {
  const { pathname } = useLocation();
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="size-10" />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 pt-[10dvh] bg-main border-main text-main-foreground">
        <img
          src="/assets/images/logo.png"
          alt="logo"
          className="size-24 mx-auto"
        />

        <div className="flex flex-col gap-4 mt-8">
          {navLinks.map((link: any) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "px-8 py-5",
                pathname === link.href && "bg-white text-main rounded-full"
              )}
            >
              <SheetTrigger className="flex gap-2 items-center">
                {link.icon && <link.icon />}
                <SheetTitle
                  className={
                    pathname === link.href
                      ? "text-main"
                      : "text-main-foreground"
                  }
                >
                  {link.name}
                </SheetTitle>
              </SheetTrigger>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MenuComponent;
