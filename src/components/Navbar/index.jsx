import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";
import { authUserSession } from "@/libs/auth-libs";

const Navbar = async () => {
  const user = await authUserSession();
  return (
    <header className="bg-white top-0 left-0 w-full flex items-center z-10 border-b-[1px] border-slate-300">
      <div className="container">
        <div className="flex justify-between  items-center p-4 ">
          <Link href="/" className="lg:text-2xl font-bold text-primary">
            NasyaNime
          </Link>
          <InputSearch />
          <UserActionButton user={user} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
