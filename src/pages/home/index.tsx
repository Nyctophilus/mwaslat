import Main from "@/components/MainWrapper";
import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <Main>
      <Navbar />
      <main className="min-h-[calc(100svh-225px)]">
        <Outlet />
      </main>
    </Main>
  );
}

export default HomeLayout;
